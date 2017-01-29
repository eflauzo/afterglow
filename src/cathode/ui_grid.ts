import {
  CxRenderingContext,
  CxRenderingMode
} from './rendering_context'
import { CxGeometry } from './geometry'
import { CxNodePayload } from './node_payload'
import { CxNodePayloadViewport } from './node_payload_viewport'
import {
  CxXYWH,
  CxRGBA
} from './basic_types'
import { CxNodePayloadOrtho } from './node_payload_ortho'
import { CxNodePayloadPerspective } from './node_payload_perspective'
import { CxScene } from './scene'
import { CxUIElement } from './ui_element'
import { CxNodePayloadTransform } from './node_payload_transform'
import { CxArrow } from './ui_arrow'
import { CxNodePayloadName } from './node_payload_name'
import {
  CxPointerEventsProcessor,
  CxNodePayloadInteractive
} from './node_payload_interactive'


export enum CxSplitDirection {
    // None?
    CxNoSplit = 1,
    CxVerticalSplit,
    CxHorizontalSplit
}


export enum CxMarkerOrientation {
    // None?
    CxLeft = 1,
    CxRight,
    CxTop,
    CxBottom
}

class InteractiveMarker {
   orientation: CxMarkerOrientation;
   split: CxSplit;
}

export class CxSplit implements CxPointerEventsProcessor {
    direction: CxSplitDirection = CxSplitDirection.CxNoSplit;
    volume: number = 0.5; // 0..1 how much space it take
    margin: number = 0.000;
    //viewportA: CxXYWH = [0.0, 0.0, 1.0, 1.0]
    viewportA: CxNodePayloadViewport;
    viewportB: CxNodePayloadViewport;

    subsplitA: CxSplit;
    subsplitB: CxSplit;

    sceneA: CxNodePayload;
    sceneB: CxNodePayload;

    //marker1: InteractiveMarker;
    //marker2: InteractiveMarker;

    name: CxNodePayloadName;
    _drag: boolean;
    _drag_start_x: number;
    _drag_start_y: number;
    _drag_start_split: number;

    //coord1: number;
    //coord2: number;

    //scene_a: None
    //parent:
    //name
    //percent_w: number
    //percent_h: number
    constructor() {
        this.subsplitA = null;
        this.subsplitB = null;

        this.viewportA = new CxNodePayloadViewport();
        this.viewportB = new CxNodePayloadViewport();

        this.viewportA.clear_color = [
          Math.random(),
          Math.random(),
          Math.random(),
          1.0
        ]

        this.viewportB.clear_color = [
          Math.random(),
          Math.random(),
          Math.random(),
          1.0
        ],

        this._drag = false;
    }

    pressed(source:CxNodePayloadInteractive, object:number, screen_x:number, screen_y:number):void {
      //console.log("+++")
      this._drag = true;

      this._drag_start_x=  screen_x;
      this._drag_start_y=  screen_y;
      this._drag_start_split =  this.volume;

      source.addPointerEventsProcessor(this);
    }

    moved(source:CxNodePayloadInteractive, object:number, screen_x:number, screen_y:number):void {
      if (this._drag) {
        //console.log("xxx");
        let dx = screen_x - this._drag_start_x;
        let dy = screen_y - this._drag_start_y;

        let _w = this.viewportA.viewport[2] + this.viewportB.viewport[2];
        let _h = this.viewportA.viewport[3] + this.viewportB.viewport[3];

        if (this.direction == CxSplitDirection.CxVerticalSplit)
        {
          //this._drag_start_split =  this.volume;
          this.volume = this._drag_start_split + (dy / _h);
          //console.log("dy:", dy, " h:", _h, ' screeny', screen_y);
          if (this.volume < 0.1) {
            this.volume = 0.1;
          }
        }
        else if (this.direction == CxSplitDirection.CxHorizontalSplit){
          //this._drag_start_split =  this.volume;
          this.volume = this._drag_start_split + (dx / _w);
          if (this.volume > 0.9) {
            this.volume = 0.9;
          }
        }
      }
    }

    released(source:CxNodePayloadInteractive, object:number, screen_x:number, screen_y:number):void {
      //console.log("---")
      this._drag = false;
      source.removePointerEventsProcessor(this);
    }

    //update_viewport(viewport: CxXYWH): void {
    //}

    enter(grid:CxGrid, context: CxRenderingContext): void {
      grid._splits.push(this);

      let viewport = context.current_relative_viewport.slice();

      if (this.direction == CxSplitDirection.CxNoSplit) {
          this.viewportA.viewport = [
            viewport[0],
            viewport[1],
            viewport[2],
            viewport[3],
          ]


          this.viewportA.enter(context);
          if (this.sceneA != null){
            this.sceneA.enter(context);
            this.sceneA.exit(context);
          }

          this.viewportA.exit(context);
      }
      else if (this.direction == CxSplitDirection.CxVerticalSplit) {
          this.viewportA.viewport[0] = viewport[0] + this.margin
          this.viewportA.viewport[1] = ((viewport[1]) + this.margin)
          this.viewportA.viewport[2] = viewport[2] - (this.margin * 2.0)
          this.viewportA.viewport[3] = (viewport[3] * this.volume) - (this.margin * 2.0)

          //this.viewportA.viewport[3] = 0.2;
          this.viewportB.viewport[0] = viewport[0] + this.margin
          this.viewportB.viewport[1] = ((viewport[1] + (viewport[3] * this.volume)) + this.margin)
          this.viewportB.viewport[2] = viewport[2] - (this.margin * 2.0)
          this.viewportB.viewport[3] = (viewport[3] * (1.0 - this.volume)) - (this.margin * 2.0)

          this.viewportA.enter(context);
          if (this.sceneA != null){
            this.sceneA.enter(context);
            this.sceneA.exit(context);
          }

          if (this.subsplitA != null) {
            this.subsplitA.enter(grid, context);
            this.subsplitA.exit(context);
          }

          this.viewportA.exit(context);

          this.viewportB.enter(context);
          if (this.sceneB != null){
            this.sceneB.enter(context);
            this.sceneB.exit(context);
          }



          if (this.subsplitB != null) {
            this.subsplitB.enter(grid, context);
            this.subsplitB.exit(context);
          }

          this.viewportB.exit(context);
      }
      else if (this.direction == CxSplitDirection.CxHorizontalSplit) {
        this.viewportA.viewport[0] = viewport[0] + this.margin
        this.viewportA.viewport[1] = viewport[1] + this.margin
        this.viewportA.viewport[2] = (viewport[2] * this.volume) - (this.margin * 2.0)
        this.viewportA.viewport[3] = viewport[3] - (this.margin * 2.0)

        this.viewportB.viewport[0] = viewport[0] + (viewport[2] * this.volume) + this.margin
        this.viewportB.viewport[1] = viewport[1] + this.margin
        this.viewportB.viewport[2] = (viewport[2] * (1.0 - this.volume)) - (this.margin * 2.0)
        this.viewportB.viewport[3] = viewport[3] - (this.margin * 2.0)

        this.viewportA.enter(context);
        if (this.sceneA != null){
          this.sceneA.enter(context);
          this.sceneA.exit(context);
        }

        if (this.subsplitA != null) {
          this.subsplitA.enter(grid, context);
          this.subsplitA.exit(context);
        }

        this.viewportA.exit(context);

        this.viewportB.enter(context);

        if (this.sceneB != null){
          this.sceneB.enter(context);
          this.sceneB.exit(context);
        }


        if (this.subsplitB != null) {
          this.subsplitB.enter(grid, context);
          this.subsplitB.exit(context);
        }

        this.viewportB.exit(context);

      }
      else {
          throw new Error("Internal Error occured ivalid state");
      }

    }

    exit(context: CxRenderingContext): void {

    }

}



export class CxGrid extends CxUIElement {

    split: CxSplit;
    proj: CxNodePayloadOrtho;
    //proj: CxNodePayloadPerspective;
    _stored_viewport: CxXYWH;
    _splits: Array<CxSplit>
    _arrow: CxArrow;

    constructor(scene:CxScene) {
      super(scene)
      //console.log("Creating")
      // window coordinates start at top left
      this.proj = new CxNodePayloadOrtho();
      /*
      this.proj.left = 0.0;
      this.proj.bottom = 1.0;
      this.proj.top = 0.0;
      this.proj.right = 1.0;
      */

      //this.proj.near: number = -10.0;
      //this.proj.far: number = 10.0;
      //console.log("YeY")
      this.split = new CxSplit()
      this._splits = new Array<CxSplit>()
      this._arrow = new CxArrow(this._scene)
      //console.log(".")
    }

    draw_arrow(context:CxRenderingContext,
              x:number,
              y:number,
              angle:number,
              split:CxSplit):void {
      let transform = new CxNodePayloadTransform();

      //let x = split.viewportA.viewport[0];
      //let y = split.viewportA.viewport[1];

      //let rx = x;
      //let ry = y;
      //let rx = x/w;
      //let ry = y/h;

      transform.translate = [x, y, 0.0]

      //transform.translate = [ 0,0, -5.0]

      let desired_size = 12;
      let scale_x = desired_size / context.canvas_width;
      let scale_y = desired_size / context.canvas_height;

      transform.scale = [scale_x, scale_y, 1.0]
      transform.rotate = [0.00, 0.00, angle]
      transform.enter(context);

      //context.gl.disable(context.gl.DEPTH_TEST);
      //console.log(">>>>", transform.translate)

      if (split.name == null) {
        let name = this._scene.name_manager.genName(split)
        split.name = new CxNodePayloadName(name)

        //split.name = new CxNodePayloadName(100)
      }

      split.name.enter(context);

      this._arrow.enter(context);
      this._arrow.exit(context);
      //context.gl.enable(context.gl.DEPTH_TEST);

      split.name.exit(context);

      transform.exit(context);

    }

    enter(context: CxRenderingContext): void {
      //console.log("***")
      this._stored_viewport = [
          context.current_relative_viewport[0],
          context.current_relative_viewport[1],
          context.current_relative_viewport[2],
          context.current_relative_viewport[3]
        ]


      this._splits = [];

      this.split.enter(this, context);
      this.proj.enter(context);


            let w = this._stored_viewport[2];
            let h = this._stored_viewport[3];

            //context.gl.viewport()
            //this.proj.enter(context);




            for (let split of this._splits){
              //console.log("...")

              if (split.direction == CxSplitDirection.CxHorizontalSplit){
                let x = split.viewportB.viewport[0];
                let y = split.viewportB.viewport[1];
                this.draw_arrow(context, x, y, 0.0, split);
                y = split.viewportB.viewport[1] + split.viewportB.viewport[3];
                this.draw_arrow(context, x, y, 3.14, split);
              }
              else if (split.direction == CxSplitDirection.CxVerticalSplit) {
                let x = split.viewportB.viewport[0];
                let y = split.viewportB.viewport[1];
                this.draw_arrow(context, x, y, (3.14 / 2.0) + 3.14, split);
                x = split.viewportB.viewport[0] + split.viewportB.viewport[2];
                this.draw_arrow(context, x, y, (3.14 / 2.0), split);
              }


            }

            //this.proj.exit(context);











    }

    exit(context: CxRenderingContext): void {
      //console.log("6^^^")
      this.split.exit(context);
      this.proj.exit(context);



    }

}
