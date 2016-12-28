import { CxRenderingContext } from './rendering_context'
import { CxObject } from './renderable'
import { CxNodePayload } from './node_payload'

export class CxNodePayloadVisualizer implements CxNodePayload {

    obj: CxObject;

    constructor(obj: CxObject) {
        this.obj = obj
    }

    enter(context: CxRenderingContext): void {
        context.rendering_program.visualize(context, this.obj)
    }

    exit(context: CxRenderingContext): void {
    }
}
