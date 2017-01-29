import { CxRenderingContext,
    CxRenderingMode} from './rendering_context'
import { CxGeometry } from './geometry'
import { CxNodePayload } from './node_payload'
import { CxRenderingProgramSelection } from './rendering_program_selection'
import { CxNameManager } from './name_manager'
import { CxScene } from './scene'
import { CxXYWH,
    CxRGBA
} from './basic_types'

export interface CxPointerEventsProcessor {

  pressed(source: CxNodePayloadInteractive, object:number, screen_x:number, screen_y:number):void;
  moved(source: CxNodePayloadInteractive, object:number, screen_x:number, screen_y:number):void;
  released(source: CxNodePayloadInteractive, object:number, screen_x:number, screen_y:number):void;

}

// Node that sets context into selection mode and captures pixels colors
// after pass
export class CxNodePayloadInteractive implements CxNodePayload {

    _stored_mode: CxRenderingMode;
    selection_rendering_program: CxRenderingProgramSelection;
    _pixels: any;
    _pixels_w: number;
    _pixels_h: number;

    pointer_processors: Set<CxPointerEventsProcessor>;
    _canvas: HTMLCanvasElement;
    _scene: CxScene;

    constructor(canvas: HTMLCanvasElement, scene:CxScene) {
        this._canvas = canvas;
        this._scene = scene;
        this.selection_rendering_program = new CxRenderingProgramSelection()
        this._pixels = null;
        this.pointer_processors = new Set<CxPointerEventsProcessor>()
        this._canvas.onmousemove = this.process_onmousemove;
        this._canvas.onmouseup = this.process_onmouseup;
        this._canvas.onmousedown = this.process_onmousedown;
    }

    addPointerEventsProcessor(processor:CxPointerEventsProcessor): void {
      if (!this.pointer_processors.has(processor)) {
        this.pointer_processors.add(processor);
      }
    }

    removePointerEventsProcessor(processor:CxPointerEventsProcessor): void{
      if (this.pointer_processors.has(processor)) {
        this.pointer_processors.delete(processor);
      }
    }

    enter(context: CxRenderingContext): void {
        context.gl.clearColor(0.0, 0.0, 0.0, 1.0)
        context.gl.clear(context.gl.COLOR_BUFFER_BIT)

        this._stored_mode = context.mode;
        context.mode = CxRenderingMode.CxSelection
    }

    exit(context: CxRenderingContext): void {

        //this.selection_rendering_program.exit(context)
        context.mode = this._stored_mode;

        let tmp_pixels = new Uint8Array(context.canvas_width * context.canvas_height * 4);
        this._pixels_w = context.canvas_width;
        this._pixels_h = context.canvas_height;

        context.gl.readPixels(0,
            0,
            context.canvas_width,
            context.canvas_height,
            context.gl.RGBA,
            context.gl.UNSIGNED_BYTE,
            tmp_pixels);
        this._pixels = tmp_pixels
    }

    name_color_at(x: number, y: number): CxRGBA {
        let inv_y = this._pixels_h - y
        let pos_in_array = ((inv_y * this._pixels_w) + x) * 4;
        let tmp_pixels = this._pixels;
        let index = Math.round(pos_in_array)
        return [tmp_pixels[index] / 255.0,
            tmp_pixels[index + 1] / 255.0,
            tmp_pixels[index + 2] / 255.0,
            tmp_pixels[index + 3] / 255.0]

    }

    relative_xy(e:MouseEvent):[number, number, number, number] {
      let rect = this._canvas.getBoundingClientRect();
      let rx = (e.clientX - rect.left) / (rect.right - rect.left)
      let ry = (e.clientY - rect.top) / (rect.bottom - rect.top)
      let x = Math.round(rx * this._canvas.clientWidth);
      let y = Math.round(ry * this._canvas.clientHeight);
      return [x, y, rx, 1.0-ry]
    }

    process_onmousemove = (e:MouseEvent) => {
      let xyrxry:[number, number, number, number] = this.relative_xy(e);
      let x = xyrxry[0];
      let y = xyrxry[1];
      let rx = xyrxry[2];
      let ry = xyrxry[3];


      let name_color = this.name_color_at(x, y);
      let name = CxNameManager.fromColor(name_color);
      let obj = this._scene.name_manager.getObject(name);
      //console.log("@ x:",x," y:",y,' selected:', obj);

      for (let proc of this.pointer_processors) {
        proc.moved(this, obj, rx, ry);
      }

    }

    process_onmousedown = (e:MouseEvent) => {
      let xyrxry:[number, number, number, number] = this.relative_xy(e);
      let x = xyrxry[0];
      let y = xyrxry[1];
      let rx = xyrxry[2];
      let ry = xyrxry[3];

      let name_color = this.name_color_at(x, y);
      let name = CxNameManager.fromColor(name_color);
      let obj = this._scene.name_manager.getObject(name);
      //console.log("@ x:",x," y:",y,' selected:', obj);



      for (let proc of this.pointer_processors) {

        proc.pressed(this, obj, rx, ry);


      }

      if (obj != null) {
        obj.pressed(this, obj, rx, ry)
      }
    }

    process_onmouseup = (e:MouseEvent) => {
      let xyrxry:[number, number, number, number] = this.relative_xy(e);
      let x = xyrxry[0];
      let y = xyrxry[1];
      let rx = xyrxry[2];
      let ry = xyrxry[3];

      let name_color = this.name_color_at(x, y);
      let name = CxNameManager.fromColor(name_color);
      let obj = this._scene.name_manager.getObject(name);
      //console.log("@ x:",x," y:",y,' selected:', obj);

      for (let proc of this.pointer_processors) {

        proc.released(this, obj, rx, ry);


      }
    }

}
