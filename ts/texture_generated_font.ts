import { CxRenderingContext } from './rendering_context'
import { CxTexture } from './texture'

export class CxTexChar {
    tex_x0: number
    tex_y0: number
    tex_x1: number
    tex_y1: number
    w: number

    constructor(tex_x0: number,
        tex_y0: number,
        tex_x1: number,
        tex_y1: number,
        w: number) {

        this.tex_x0 = tex_x0;
        this.tex_y0 = tex_y0;
        this.tex_x1 = tex_x1;
        this.tex_y1 = tex_y1;
        this.w = w;
    }
}


export class CxTextureFont extends CxTexture {
    font: string;
    size: number;
    start_char: any;
    end_char: any;

    fillStyle: string;

    font_canvas_width: number;
    font_canvas_height: number;
    font_tex_coords: Map<string, CxTexChar> = new Map<string, CxTexChar>();

    constructor(font: string, size: number) {
        super()
        //this.url = url;
        this.font = font;
        this.size = size;
        this.start_char = ' ';
        this.end_char = '~'
        this.fillStyle = 'white';

        this.font_canvas_width = 0;
        this.font_canvas_height = 0;
    }

    load(context: CxRenderingContext): void {

        var chr_code_start = this.start_char.charCodeAt(0);
        var chr_code_end = this.end_char.charCodeAt(0);
        var char_count = chr_code_end - chr_code_start;
        var sqare_count = Math.sqrt(char_count)
        var size1d = sqare_count * this.size
        let size_power: number = Math.round(Math.ceil(Math.log2(size1d)))
        let canvas_width: number = Math.round(Math.pow(2, size_power));
        let canvas_height: number = Math.round(Math.pow(2, size_power));

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.createElement("canvas");
        canvas.width = canvas_width;
        canvas.height = canvas_height;

        this.font_canvas_width = canvas_width;
        this.font_canvas_height = canvas_height;

        let ctx = canvas.getContext("2d");
        ctx.font = this.size + "px " + this.font;
        let current_y: number = 0;
        let current_x: number = 0;

        for (var i = chr_code_start; i <= chr_code_end; i++) {
            var character: string = String.fromCharCode(i);
            var text_dim = ctx.measureText(character);
            var char_w: number = text_dim.width;
            var char_h: number = this.size;
            if ((current_x + char_w) > canvas_width) {
                current_y += char_h;
                current_x = 0;
            }
            var pos_x: number = current_x;
            var pos_y: number = current_y + char_h;

            let k = char_h * 0.2;

            let tex_y1 = canvas_height - current_y - k;
            let tex_y0 = canvas_height - current_y - char_h - k;
            this.font_tex_coords.set(character, new CxTexChar(pos_x / canvas_width,
                tex_y0 / canvas_height,
                (pos_x + char_w) / canvas_width,
                tex_y1 / canvas_height,
                char_w / char_h));

            ctx.fillStyle = this.fillStyle;
            ctx.fillText(character, pos_x, pos_y);
            //ctx.fillText(character, pos_x, pos_y);
            //ctx.fillText(character, pos_x, pos_y);
            //ctx.fillText(character, pos_x, pos_y);
            current_x += char_w;
        }

        context.gl.pixelStorei(context.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
        this.handleTextureLoaded(context.gl, canvas);
        context.gl.pixelStorei(context.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
    }

}
