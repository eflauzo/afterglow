import { CxRenderingContext } from './rendering_context'
import { CxGeometry } from './geometry'
import { CxNodePayload } from './node_payload'
import {
  CxXYZ,
  CxRGBA
} from './basic_types'
import { CxTextureFont, CxTexChar } from './texture_generated_font'
//import { CxNodePayloadVisualizer } from './node_payload_visualizer'
import * as glmatrix from "gl-matrix";
import { CxVisualizerTextured } from './visualizer_textured'

export enum CxProjectionCompensation {
    CxNoCompensation = 1,
    CxVCompensation,
    CxHCompensation,
}

export class CxNodePayloadLabel implements CxNodePayload, CxGeometry {
    text: string;
    font: CxTextureFont;
    visualizer: CxVisualizerTextured;
    compensation: CxProjectionCompensation;

    constructor(font:CxTextureFont, text:string) {
        //super(false);
        this.text = text; //"Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit"
        this.font = font;//new CxNodePayloadTextureFont("Helvetica", 30)
        this.compensation = CxProjectionCompensation.CxHCompensation;
        this.visualizer = new CxVisualizerTextured(this, font)
    }

    vertices(context: CxRenderingContext): Float32Array {
        let result = new Array<number>()
        let carret: number = 0.0;
        for (var char of this.text) {
            var tex_char: CxTexChar = this.font.font_tex_coords.get(char)
            // TODO: this is not correct it must be canvas_height * current_relative_viewport[3]

            //var ch_height: number = this.font.size / (context.canvas_width * context.current_relative_viewport[2]);

            /*
            let smallest_axe = Math.max((context.canvas_height * context.current_relative_viewport[3]),
                                        (context.canvas_width * context.current_relative_viewport[2]))
            */

            let true_w = context.canvas_width * context.current_relative_viewport[2];
            let true_h = context.canvas_height * context.current_relative_viewport[3];

            //let sz_w = Math.sqrt( (true_w * true_w) + (true_h * true_h) )
            //let sz_w = (true_w + true_h) / 2.0
            //let sz_f = Math.Sqrt( (this.font.size * this.font.size) )
            let sz_w = Math.max(true_w , true_h)

            /*
            let sz_w = 0.0;
            if (true_w > true_h) {
              sz_w = true_h;
            }
            else {
              sz_w = true_w;
            }
            */
            //Math.pow(smallest_axe, 2.0)
            var ch_height: number = this.font.size / sz_w;

            //var ch_width: number = (ch_height * tex_char.w)
            var ch_width: number = (ch_height * tex_char.w);
            // if (this.compensation == CxProjectionCompensation.CxHCompensation) {
            //   ch_width = ch_width / ( (context.current_relative_viewport[2] * context.canvas_width)  /  (context.current_relative_viewport[3] * context.canvas_height));
            // }
            // else if (this.compensation == CxProjectionCompensation.CxVCompensation) {
            //   ch_width = ch_width * ( (context.current_relative_viewport[2] * context.canvas_width)  /  (context.current_relative_viewport[3] * context.canvas_height));
            // }
            //var ch_width: number = (ch_height * tex_char.w) / ( (context.current_relative_viewport[2] * context.canvas_width)  /  (context.current_relative_viewport[3] * context.canvas_height));

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

    normals(context: CxRenderingContext): Float32Array {
        return new Float32Array([])
    }

    preorder(context: CxRenderingContext): void {
        //return new Float32Array([])
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
        //this.font.enter(context)
        this.font.activate(context)
        context.gl.blendFunc(context.gl.ONE, context.gl.ONE_MINUS_SRC_ALPHA);
        this.visualizer.enter(context)
        context.gl.blendFunc(context.gl.SRC_ALPHA, context.gl.ONE_MINUS_SRC_ALPHA);
    }

    exit(context: CxRenderingContext): void {
        this.visualizer.exit(context)
        this.font.deactivate(context)
        //this.font.exit(context)
    }


}
