import { CxRenderingContext,
    CxRenderingMode} from './rendering_context'
import { CxObject } from './renderable'
import { CxNodePayload } from './node_payload'
import { CxRenderingProgramSelection } from './rendering_program_selection'
import { CxXYWH,
    CxRGBA
} from './basic_types'

// Node that sets context into selection mode and captures pixels colors
// after pass
export class CxNodePayloadInteractive implements CxNodePayload {

    _stored_mode: CxRenderingMode;
    selection_rendering_program: CxRenderingProgramSelection;
    _pixels: any;
    _pixels_w: number;
    _pixels_h: number;

    constructor() {
        this.selection_rendering_program = new CxRenderingProgramSelection()
        this._pixels = null;
    }

    enter(context: CxRenderingContext): void {
        context.gl.clearColor(0.0, 0.0, 0.0, 1.0)
        context.gl.clear(context.gl.COLOR_BUFFER_BIT)

        this._stored_mode = context.mode;
        this.selection_rendering_program.enter(context)
        context.mode = CxRenderingMode.CxSelection
    }

    exit(context: CxRenderingContext): void {

        this.selection_rendering_program.exit(context)
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
}
