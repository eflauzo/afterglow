import {
  CxRenderingContext,
  CxRenderingMode
} from './rendering_context'
//import { CxGeometry } from './geometry'
import { CxNodePayload } from './node_payload'
import {
  CxXYZ,
  CxRGBA
} from './basic_types'
import { CxNameManager } from './name_manager'
//import * as glmatrix from "gl-matrix";

// Performs name loading
export class CxSelectableBackground implements CxNodePayload {

    //_stored_name: number;
    //myname: number; //TODO - should be a string or maybe even any?

    constructor() {
      //this.myname = myname;
    }

    enter(context: CxRenderingContext): void {
      //this._stored_name = context.name;
      //context.name = this.myname
      if (context.mode == CxRenderingMode.CxSelection) {
        let name_color = CxNameManager.toColor(context.name);
        context.gl.clearColor(name_color[0], name_color[1], name_color[2], 1.0);
        context.gl.clear(context.gl.COLOR_BUFFER_BIT);
      }
    }

    exit(context: CxRenderingContext): void {
      //context.name = this._stored_name;
    }
}
