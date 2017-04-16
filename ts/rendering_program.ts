
import { CxRenderingContext } from './rendering_context'
import { CxGeometry } from './geometry'
import { CxNodePayload } from './node_payload'
import { CxRenderingMode } from './rendering_context'

export abstract class CxRenderingProgram {
    initialized: boolean;
    fragment_shader: WebGLShader;
    vertex_shader: WebGLShader;
    shaderProgram: WebGLProgram;

    constructor() {
        this.initialized = false;
    }

    init(context: CxRenderingContext): void {
        this.fragment_shader = context.gl.createShader(context.gl.FRAGMENT_SHADER);

        context.gl.shaderSource(this.fragment_shader, this.getFragmentShaderSource());
        context.gl.compileShader(this.fragment_shader);

        if (!context.gl.getShaderParameter(this.fragment_shader, context.gl.COMPILE_STATUS)) {
            throw new Error("Can not compile fragment shader");
        }

        this.vertex_shader = context.gl.createShader(context.gl.VERTEX_SHADER);

        context.gl.shaderSource(this.vertex_shader, this.getVertexShaderSource());
        context.gl.compileShader(this.vertex_shader);

        if (!context.gl.getShaderParameter(this.vertex_shader, context.gl.COMPILE_STATUS)) {
            throw new Error("Can not compile vertex shader");
        }

        this.shaderProgram = context.gl.createProgram();
        context.gl.attachShader(this.shaderProgram, this.vertex_shader);
        context.gl.attachShader(this.shaderProgram, this.fragment_shader);
        context.gl.linkProgram(this.shaderProgram);

        if (!context.gl.getProgramParameter(this.shaderProgram, context.gl.LINK_STATUS)) {
            alert("Could not initialise shaders");
        }

        this.configure(context)
    }

    activate(context: CxRenderingContext): void {
        if (!this.initialized) {
            this.init(context);
            this.initialized = true;
        }

        context.gl.useProgram(this.shaderProgram);
    }

    abstract configure(context: CxRenderingContext): void;
    abstract getFragmentShaderSource(): string;
    abstract getVertexShaderSource(): string;
}
