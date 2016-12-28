import { CxRenderingContext,
    CxRenderingMode } from './rendering_context'
import { CxObject } from './renderable'
import { CxNodePayload } from './node_payload'
import { CxXYZ } from './basic_types'
import * as glmatrix from "gl-matrix";

export class CxNodePayloadTransform implements CxNodePayload {

    translate: CxXYZ = [0.0, 0.0, 0.0]
    _stored: glmatrix.mat4;

    constructor() {
        this._stored = glmatrix.mat4.create();
    }

    enter(context: CxRenderingContext): void {
        glmatrix.mat4.copy(this._stored, context.mvMatrix)
        glmatrix.mat4.translate(context.mvMatrix, context.mvMatrix, this.translate)
    }

    exit(context: CxRenderingContext): void {
        glmatrix.mat4.copy(context.mvMatrix, this._stored)
    }
}
