import * as glmatrix from "gl-matrix";
//import * as glmatrix_invert from "gl-matrix-invert";
import { CxRenderingProgram }  from './rendering_program'
import { CxXYWH } from './basic_types'
import { CxNameManager } from './name_manager'
import { CxRenderingProgramManager } from './rendering_program_manager'
import { CxStyle } from './style'

// Enum identifies rendering mode
export enum CxRenderingMode {
    CxSelection = 1,
    CxVisualize
}


export class CxRenderingContext {

    // modelview matrix
    mvMatrix: glmatrix.mat4;

    // projection matrix
    pMatrix: glmatrix.mat4;

    normalMatrix: glmatrix.mat4;

    // webgl opengl rendering context
    gl: WebGLRenderingContext;

    // currently loaded rendering program
    //rendering_program: CxRenderingProgram;

    // current x, y, w, h
    current_relative_viewport: CxXYWH;

    // total drawable dimenstions
    canvas_width: number;
    canvas_height: number;

    // rendering mode (Visualize or Selection)
    mode: CxRenderingMode;

    // last name (used by selection rendering program)
    name: number;
    name_manager: CxNameManager;
    rendering_program_manager: CxRenderingProgramManager;
    style: CxStyle;

    constructor(gl: WebGLRenderingContext,
        canvas_width: number,
        canvas_height: number) {
        this.mvMatrix = glmatrix.mat4.create();
        this.pMatrix = glmatrix.mat4.create();
        this.normalMatrix = glmatrix.mat4.create();
        //this.normalMatrix = null
        this.current_relative_viewport = [0.0, 0.0, 1.0, 1.0]
        this.gl = gl;
        //this.rendering_program = null;
        this.canvas_width = canvas_width;
        this.canvas_height = canvas_height;
        this.name_manager = new CxNameManager()
        this.rendering_program_manager = new CxRenderingProgramManager()
        this.style = new CxStyle()
    }

    reset(canvas_width: number,
        canvas_height: number) {
        glmatrix.mat4.identity(this.mvMatrix)
        glmatrix.mat4.identity(this.pMatrix)
        this.mode = CxRenderingMode.CxVisualize;
        this.name = 0
        this.canvas_width = canvas_width;
        this.canvas_height = canvas_height;
        this.style.contour_size = 1.0/this.canvas_width
        this.style.glow_size = (1.0/this.canvas_width) * 3.0
        this.updateNormalMatrix()

        // We want to ignore previous scrissor and clear all screen.
        this.gl.disable(this.gl.SCISSOR_TEST)
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)

        // but we want scissor test enabled for rest of the rendeting process
        // to have scoped view operations.
        this.gl.enable(this.gl.SCISSOR_TEST)
    }

    updateNormalMatrix() {
      //this.normalMatrix =
      glmatrix.mat4.invert(this.normalMatrix, this.mvMatrix );
      //this.normalMatrix = this.normalMatrix.transpose();

      glmatrix.mat4.transpose(this.normalMatrix, this.normalMatrix)
    }

}
