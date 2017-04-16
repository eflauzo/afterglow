import { CxGeometry } from './geometry'
import { CxRenderingContext } from './rendering_context'
import { CxRenderingProgram } from './rendering_program'
import { CxNameManager } from './name_manager'

export class CxRenderingProgramLines extends CxRenderingProgram {

    vertexPositionAttribute: any;
    pMatrixUniform: any;
    mvMatrixUniform: any;
    colorUniform: any

    configure(context: CxRenderingContext): void {
        context.gl.useProgram(this.shaderProgram)
        this.vertexPositionAttribute = context.gl.getAttribLocation(this.shaderProgram, "aVertexPosition");
        this.pMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uPMatrix");
        this.mvMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uMVMatrix");
        this.colorUniform = context.gl.getUniformLocation(this.shaderProgram, "vColor");
    }

    getFragmentShaderSource(): string {
        return `precision mediump float;

                uniform vec4 vColor;

                void main(void) {
                      gl_FragColor = vColor;
                    }
                `
    }

    getVertexShaderSource(): string {
        return `attribute vec3 aVertexPosition;

                  uniform mat4 uMVMatrix;
                  uniform mat4 uPMatrix;

                  void main(void) {
                      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
                      //vColor = aVertexColor;
                  }
                `
    }

}
