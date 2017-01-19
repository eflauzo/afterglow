import { CxGeometry } from './geometry'
import { CxRenderingContext } from './rendering_context'
import { CxRenderingProgram } from './rendering_program'


export class CxRenderingProgramColorArray extends CxRenderingProgram {

    vertexPositionAttribute: any;
    vertexColorAttribute: any;
    pMatrixUniform: any;
    mvMatrixUniform: any;

    configure(context: CxRenderingContext): void {
        context.gl.useProgram(this.shaderProgram)
        this.vertexPositionAttribute = context.gl.getAttribLocation(this.shaderProgram, "aVertexPosition");
        this.vertexColorAttribute = context.gl.getAttribLocation(this.shaderProgram, "aVertexColor");
        this.pMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uPMatrix");
        this.mvMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uMVMatrix");
    }

    getFragmentShaderSource(): string {
        return `precision mediump float;

                varying vec4 vColor;

                void main(void) {
                      gl_FragColor = vColor;
                    }
                `
    }

    getVertexShaderSource(): string {
        return `attribute vec3 aVertexPosition;
                attribute vec4 aVertexColor;

                  uniform mat4 uMVMatrix;
                  uniform mat4 uPMatrix;

                  varying vec4 vColor;

                  void main(void) {
                      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
                      vColor = aVertexColor;
                  }
                `
    }

}
