import { CxRenderingContext } from './rendering_context'
import { CxObject } from './renderable'
import { CxNodePayload } from './node_payload'
import { CxXYZ } from './basic_types'
import { CxNodePayloadTextureFont, CxTexChar } from './node_payload_texture_font'
import { CxNodePayloadVisualizer } from './node_payload_visualizer'
import * as glmatrix from "gl-matrix";

export class CxNodePayloadLabel extends CxObject implements CxNodePayload {
    text: string;
    font: CxNodePayloadTextureFont;
    visualizer: CxNodePayloadVisualizer;

    constructor() {
        super(false);
        this.text = "Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit"
        this.font = new CxNodePayloadTextureFont("Helvetica", 30)
        this.visualizer = new CxNodePayloadVisualizer(this)
    }

    vertices(context: CxRenderingContext): Float32Array {
        let result = new Array<number>()
        let carret: number = 0.0;
        for (var char of this.text) {
            var tex_char: CxTexChar = this.font.font_tex_coords.get(char)
            // TODO: this is not correct it must be canvas_height * current_relative_viewport[3]
            var ch_height: number = this.font.size / context.canvas_height;
            var ch_width: number = (ch_height * tex_char.w) / (context.canvas_width / context.canvas_height);

            // TODO: fix concatenation in TS
            let a = [carret, 0.0, 0.0,
                carret + ch_width, 0.0, 0.0,
                carret + ch_width, ch_height, 0.0,
                carret + ch_width, ch_height, 0.0,
                carret, ch_height, 0.0,
                carret, 0.0, 0.0]
            for (let e of a) {
                result.push(e);
            }

            carret += ch_width;
        }
        return new Float32Array(result)
    }

    colors(context: CxRenderingContext): Float32Array {
        return new Float32Array([])
    }

    texture(context: CxRenderingContext): Float32Array {
        let result = new Array<number>()
        let carret: number = 0.0;
        for (var char of this.text) {
            var tex_char: CxTexChar = this.font.font_tex_coords.get(char)

            // TODO: fix TypeScript concatenation
            let a = [tex_char.tex_x0, tex_char.tex_y0,
                tex_char.tex_x1, tex_char.tex_y0,
                tex_char.tex_x1, tex_char.tex_y1,
                tex_char.tex_x1, tex_char.tex_y1,
                tex_char.tex_x0, tex_char.tex_y1,
                tex_char.tex_x0, tex_char.tex_y0]

            for (let e of a) {
                result.push(e);
            }
        }
        return new Float32Array(result)
    }

    enter(context: CxRenderingContext): void {
        this.font.enter(context)
        this.visualizer.enter(context)
    }

    exit(context: CxRenderingContext): void {
        this.visualizer.exit(context)
        this.font.exit(context)
    }
}
