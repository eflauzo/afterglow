import { CxGeometry } from './geometry'
import { CxRenderingContext } from './rendering_context'
import { CxRenderingProgram } from './rendering_program'


export class CxRenderingProgramAngularAlpha extends CxRenderingProgram {

    vertexPositionAttribute: any;
    vertexNormalAttribute: any;

    colorUniform: any;

    pMatrixUniform: any;
    mvMatrixUniform: any;
    normalMatrixUniform: any;

    configure(context: CxRenderingContext): void {
        context.gl.useProgram(this.shaderProgram)
        this.vertexPositionAttribute = context.gl.getAttribLocation(this.shaderProgram, "aVertexPosition");
        this.vertexNormalAttribute = context.gl.getAttribLocation(this.shaderProgram, "aVertexNormal");

        this.colorUniform = context.gl.getUniformLocation(this.shaderProgram, "vColor");

        this.pMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uPMatrix");
        this.mvMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uMVMatrix");
        this.normalMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uNormalMatrix");
    }

    getFragmentShaderSource(): string {
        return `precision mediump float;

                uniform vec4 vColor;
                varying float alpha;

                void main(void) {
                      gl_FragColor = vec4(vColor.rgb, alpha);
                    }
                `
    }

    getVertexShaderSource(): string {
        return `attribute vec3 aVertexPosition;
                attribute vec3 aVertexNormal;

                  uniform mat4 uNormalMatrix;
                  uniform mat4 uMVMatrix;
                  uniform mat4 uPMatrix;

                  varying float alpha;

                  void main(void) {
                      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);

                      highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);
                      highp vec3 directionalVector = vec3(0, 0, 1.0);

                      vec3 normalized_normal = normalize(vec3(transformedNormal));

                      highp float angle = abs(dot(normalized_normal.xyz, directionalVector));

                      highp float opacity = 1.0 - abs(angle);

                      alpha = opacity * opacity * opacity;
                  }
                `
    }

}
