import { CxRenderingContext,
    CxRenderingMode } from './rendering_context'
import { CxGeometry } from './geometry'
import { CxNodePayload } from './node_payload'
import { CxNodePayloadViewport } from './node_payload_viewport'
import { CxXYWH,
    CxRGBA
} from './basic_types'
import { CxNodePayloadOrtho } from './node_payload_ortho'

export enum CxSplitDirection {
    // None?
    CxNoSplit = 1,
    CxVerticalSplit,
    CxHorizontalSplit
}



export class CxSplit {
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
        ]
    }

    //update_viewport(viewport: CxXYWH): void {
    //}

    enter(context: CxRenderingContext): void {
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
            this.subsplitA.enter(context);
            this.subsplitA.exit(context);
          }

          this.viewportA.exit(context);

          this.viewportB.enter(context);
          if (this.sceneB != null){
            this.sceneB.enter(context);
            this.sceneB.exit(context);
          }



          if (this.subsplitB != null) {
            this.subsplitB.enter(context);
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
          this.subsplitA.enter(context);
          this.subsplitA.exit(context);
        }

        this.viewportA.exit(context);

        this.viewportB.enter(context);

        if (this.sceneB != null){
          this.sceneB.enter(context);
          this.sceneB.exit(context);
        }


        if (this.subsplitB != null) {
          this.subsplitB.enter(context);
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



export class CxGrid implements CxNodePayload {

    split: CxSplit;
    proj: CxNodePayloadOrtho;

    constructor() {
      //console.log("Creating")
      // window coordinates start at top left
      this.proj = new CxNodePayloadOrtho();
      this.proj.left = 0.0;
      this.proj.bottom = 1.0;
      this.proj.top = 0.0;
      this.proj.right = 1.0;
      //this.proj.near: number = -10.0;
      //this.proj.far: number = 10.0;
      //console.log("YeY")
      this.split = new CxSplit()
      //console.log(".")
    }

    enter(context: CxRenderingContext): void {
      console.log("***")
      this.proj.enter(context);
      this.split.enter(context);
    }

    exit(context: CxRenderingContext): void {
      this.split.exit(context);
      this.proj.exit(context);
    }

}
