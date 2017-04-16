import { CxRenderingContext } from './rendering_context'
import { CxGeometry } from './geometry'
import { CxNodePayload } from './node_payload'
import * as glmatrix from "gl-matrix";

export class CxNodePayloadOrtho implements CxNodePayload {

    left: number = 0.0;
    bottom: number = 0.0;
    top: number = 1.0;
    right: number = 1.0;
    near: number = -10.0;
    far: number = 10.0;

    constructor() {
    }

    enter(context: CxRenderingContext): void {
        glmatrix.mat4.identity(context.pMatrix)
        glmatrix.mat4.ortho(context.pMatrix,
            this.left,
            this.right,
            this.bottom,
            this.top,
            this.near,
            this.far);

    }

    exit(context: CxRenderingContext): void {
    }
}
