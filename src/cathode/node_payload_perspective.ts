import { CxRenderingContext } from './rendering_context'
import { CxGeometry } from './geometry'
import { CxNodePayload } from './node_payload'
import * as glmatrix from "gl-matrix";

export class CxNodePayloadPerspective implements CxNodePayload {

    angle:number = 45.0;
    znear:number = 0.1;
    zfar:number = 100.0;

    constructor() {
    }

    enter(context: CxRenderingContext): void {
        let width = context.current_relative_viewport[2]
        let height = context.current_relative_viewport[3]

        glmatrix.mat4.identity(context.pMatrix)
        glmatrix.mat4.perspective(context.pMatrix,
                                  this.angle,
                                  width / height,
                                  this.znear,
                                  this.zfar);

    }

    exit(context: CxRenderingContext): void {
    }
}
