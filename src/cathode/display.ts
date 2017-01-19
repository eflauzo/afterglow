import { CxNode } from './node'
import { CxRenderingContext }  from './rendering_context'

export class CxDisplay {

    context: CxRenderingContext;
    canvas: HTMLCanvasElement;
    root: CxNode

    constructor(canvas_id: string) {
        this.canvas = <HTMLCanvasElement>document.getElementById(canvas_id);

        var gl: WebGLRenderingContext = this.canvas.getContext("webgl",
            {
                preserveDrawingBuffer: true,
                antialias: false
            });
        this.context = new CxRenderingContext(gl, this.canvas.width, this.canvas.height);
        this.context.gl.enable(this.context.gl.BLEND);
        this.context.gl.blendFunc(this.context.gl.SRC_ALPHA, this.context.gl.ONE_MINUS_SRC_ALPHA);
    }

    start(root: CxNode) {
        this.root = root
        this.render()
    }

    render = () => {
        var displayWidth = this.canvas.clientWidth;
        var displayHeight = this.canvas.clientHeight;

        // Check if the canvas is not the same size.
        if (this.canvas.width != displayWidth ||
            this.canvas.height != displayHeight) {

            // Make the canvas the same size
            this.canvas.width = displayWidth;
            this.canvas.height = displayHeight;
        }

        this.context.reset(this.canvas.width, this.canvas.height);
        this.root.render(this.context);
        window.setTimeout(this.render, 250);
    }

}
