import { CxRenderingContext } from './rendering_context'
import { CxGeometry } from './geometry'
import { CxNodePayload } from './node_payload'
import { CxXYZ } from './basic_types'
import * as glmatrix from "gl-matrix";

// Performs name loading
export class CxNodePayloadName implements CxNodePayload {

    _stored_name: number;
    myname: number; //TODO - should be a string or maybe even any?

    constructor(myname: number) {
      this.myname = myname;
    }

    enter(context: CxRenderingContext): void {
      this._stored_name = context.name;
      context.name = this.myname
    }

    exit(context: CxRenderingContext): void {
      context.name = this._stored_name;
    }
}
