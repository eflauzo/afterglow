import { CxGeometry } from './geometry'
import { CxRenderingContext } from './rendering_context'
import { CxRenderingProgram } from './rendering_program'


export class CxRenderingProgramTextured extends CxRenderingProgram {

    vertexPositionAttribute: any;
    vertexTexAttribute: any;
    pMatrixUniform: any;
    mvMatrixUniform: any;
    colorUniform: any;

    configure(context: CxRenderingContext): void {
        context.gl.useProgram(this.shaderProgram)
        this.vertexPositionAttribute = context.gl.getAttribLocation(this.shaderProgram, "aVertexPosition");
        this.vertexTexAttribute = context.gl.getAttribLocation(this.shaderProgram, "aTexCoords");
        this.pMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uPMatrix");
        this.mvMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uMVMatrix");
        this.colorUniform = context.gl.getUniformLocation(this.shaderProgram, "uColor");
    }

    getFragmentShaderSource(): string {
        return `precision mediump float;

                varying vec2 vTexCoords;

                uniform sampler2D uTexture;
                uniform vec4 uColor;

                void main(void) {
                      gl_FragColor = texture2D(uTexture, vTexCoords) * uColor;
                    }
                `
    }

    getVertexShaderSource(): string {
        return `attribute vec3 aVertexPosition;
                attribute vec2 aTexCoords;

                  uniform mat4 uMVMatrix;
                  uniform mat4 uPMatrix;

                  varying vec2 vTexCoords;

                  void main(void) {
                      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
                      vTexCoords = aTexCoords;
                  }
                `
    }

}
