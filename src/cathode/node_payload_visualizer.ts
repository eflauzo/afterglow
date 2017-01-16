import { CxRenderingContext,
         CxRenderingMode
       } from './rendering_context'
import { CxObject } from './renderable'
import { CxNodePayload } from './node_payload'
import { CxRenderingProgram } from './rendering_program'

export class CxNodePayloadVisualizer implements CxNodePayload {

    obj: CxObject;
    rendering_program: any;

    constructor(rendering_program: any, obj: CxObject) {
        this.obj = obj
        this.rendering_program = rendering_program
    }

    enter(context: CxRenderingContext): void {
        if (context.mode != CxRenderingMode.CxSelection) {
          let prog = context.rendering_program_manager.get_program(context, this.rendering_program);
          prog.activate(context)
        }

        this.obj.preorder(context)

        // two sided rendering
        context.gl.enable(context.gl.CULL_FACE);
        context.gl.cullFace(context.gl.FRONT);
        context.rendering_program.visualize(context, this.obj)
        context.gl.cullFace(context.gl.BACK);
        context.rendering_program.visualize(context, this.obj)
    }

    exit(context: CxRenderingContext): void {
    }
}
