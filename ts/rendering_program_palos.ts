import { CxGeometry } from './geometry'
import { CxRenderingContext } from './rendering_context'
import { CxRenderingProgram } from './rendering_program'
import { CxNameManager } from './name_manager'

export class CxRenderingProgramPalos extends CxRenderingProgram {

    vertexPositionAttribute: any;
    pMatrixUniform: any;
    mvMatrixUniform: any;

    colorActiveUniform: any;
    colorPassiveUniform: any;
    intervalUniform: any;


    configure(context: CxRenderingContext): void {
        context.gl.useProgram(this.shaderProgram)
        this.vertexPositionAttribute = context.gl.getAttribLocation(this.shaderProgram, "aVertexPosition");
        this.pMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uPMatrix");
        this.mvMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uMVMatrix");
        this.colorActiveUniform = context.gl.getUniformLocation(this.shaderProgram, "uColorActive");
        this.colorPassiveUniform = context.gl.getUniformLocation(this.shaderProgram, "uColorPassive");
        this.intervalUniform = context.gl.getUniformLocation(this.shaderProgram, "uInterval");
    }

    getFragmentShaderSource(): string {
        return `precision mediump float;

                uniform vec4 uColorActive;
                uniform vec4 uColorPassive;
                uniform float uInterval;

                void main(void) {
                    float window = uInterval;
                    float snapped = floor(gl_FragCoord.x / window) * window;
                    float usage = (gl_FragCoord.x - snapped) / window;
                    bool use = usage > 0.5;
                    float c = 1.0;
                    if (use) {
                     gl_FragColor = uColorActive;
                    }else
                    {
                     gl_FragColor = uColorPassive;
                    }
                }
                `
    }

    getVertexShaderSource(): string {
        return `attribute vec3 aVertexPosition;

                  uniform mat4 uMVMatrix;
                  uniform mat4 uPMatrix;

                  void main(void) {
                      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
                  }
                `
    }

}
