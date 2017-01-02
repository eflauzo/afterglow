import * as glmatrix from "gl-matrix";
import { CxRenderingProgram }  from './rendering_program'
import { CxXYWH } from './basic_types'
import { CxNameManager } from './name_manager'

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

    // webgl opengl rendering context
    gl: WebGLRenderingContext;

    // currently loaded rendering program
    rendering_program: CxRenderingProgram;

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

    constructor(gl: WebGLRenderingContext,
        canvas_width: number,
        canvas_height: number) {
        this.mvMatrix = glmatrix.mat4.create();
        this.pMatrix = glmatrix.mat4.create();
        this.current_relative_viewport = [0.0, 0.0, 1.0, 1.0]
        this.gl = gl;
        this.rendering_program = null;
        this.canvas_width = canvas_width;
        this.canvas_height = canvas_height;
        this.name_manager = new CxNameManager()
    }

    reset(canvas_width: number,
        canvas_height: number) {
        glmatrix.mat4.identity(this.mvMatrix)
        glmatrix.mat4.identity(this.pMatrix)
        this.mode = CxRenderingMode.CxVisualize;
        this.name = 0
        this.canvas_width = canvas_width;
        this.canvas_height = canvas_height;
    }

}
