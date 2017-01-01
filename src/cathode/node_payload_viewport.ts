import { CxRenderingContext,
    CxRenderingMode } from './rendering_context'
import { CxObject } from './renderable'
import { CxNodePayload } from './node_payload'
import { CxXYWH,
    CxRGBA
} from './basic_types'

export class CxNodePayloadViewport implements CxNodePayload {

    viewport: CxXYWH = [0.0, 0.0, 1.0, 1.0]
    clear_color: CxRGBA = [1.0, 1.0, 1.0, 1.0]

    clear_depth_buffer: boolean = true
    clear_color_buffer: boolean = true

    enable_depth_test: boolean = true

    constructor() {
    }

    enter(context: CxRenderingContext): void {
        context.current_relative_viewport = [this.viewport[0],
            this.viewport[1],
            this.viewport[2],
            this.viewport[3]]

        let viewport_x = Math.floor(this.viewport[0] * context.canvas_width)
        let viewport_y = Math.floor(this.viewport[1] * context.canvas_height)
        let viewport_w = Math.floor(this.viewport[2] * context.canvas_width)
        let viewport_h = Math.floor(this.viewport[3] * context.canvas_height)

        context.gl.viewport(viewport_x,
            viewport_y,
            viewport_w,
            viewport_h);

        if (context.mode != CxRenderingMode.CxSelection) {
            context.gl.clearColor(this.clear_color[0],
                this.clear_color[1],
                this.clear_color[2],
                this.clear_color[3]);
        }

        let buffers_to_clear = 0x00;
        if (this.clear_color_buffer) {
            buffers_to_clear = buffers_to_clear | context.gl.COLOR_BUFFER_BIT;
        }

        if (this.clear_depth_buffer) {
            buffers_to_clear = buffers_to_clear | context.gl.DEPTH_BUFFER_BIT;
        }

        context.gl.clear(buffers_to_clear);

        if (this.enable_depth_test) {
            context.gl.enable(context.gl.DEPTH_TEST);
        }
        else {
            context.gl.disable(context.gl.DEPTH_TEST);
        }

    }

    exit(context: CxRenderingContext): void {
    }
}
