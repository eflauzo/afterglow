import { CxRenderingContext,
    CxRenderingMode } from './rendering_context'
import { CxGeometry } from './geometry'
import { CxNodePayload } from './node_payload'
import { CxXYZ } from './basic_types'
import * as glmatrix from "gl-matrix";

export class CxNodePayloadTransform implements CxNodePayload {

    translate: CxXYZ = [0.0, 0.0, 0.0]
    rotate: CxXYZ = [0.0, 0.0, 0.0]
    scale: CxXYZ = [1.0, 1.0, 1.0]
    _stored: glmatrix.mat4;


    constructor() {
        this._stored = glmatrix.mat4.create();
    }

    enter(context: CxRenderingContext): void {
        glmatrix.mat4.copy(this._stored, context.mvMatrix)
        glmatrix.mat4.translate(context.mvMatrix, context.mvMatrix, this.translate)

         glmatrix.mat4.rotate(context.mvMatrix, context.mvMatrix, this.rotate[0], [1.0, 0.0, 0.0])
         glmatrix.mat4.rotate(context.mvMatrix, context.mvMatrix, this.rotate[1], [0.0, 1.0, 0.0])
         glmatrix.mat4.rotate(context.mvMatrix, context.mvMatrix, this.rotate[2], [0.0, 0.0, 1.0])
         glmatrix.mat4.scale(context.mvMatrix, context.mvMatrix, this.scale)

         context.updateNormalMatrix()
    }

    exit(context: CxRenderingContext): void {
        glmatrix.mat4.copy(context.mvMatrix, this._stored)
    }
}
