import { CxObject } from './renderable'
import { CxRenderingContext } from './rendering_context'
import { CxRenderingProgram } from './rendering_program'
import { CxNameManager } from './name_manager'

export class CxRenderingProgramSelection extends CxRenderingProgram {

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

    visualize(context: CxRenderingContext, obj: CxObject): void {

        context.gl.disable(context.gl.DITHER)
        context.gl.disable(context.gl.BLEND)
        context.gl.useProgram(this.shaderProgram)

        context.gl.uniformMatrix4fv(this.pMatrixUniform, false, context.pMatrix);
        context.gl.uniformMatrix4fv(this.mvMatrixUniform, false, context.mvMatrix);
        context.gl.uniform4fv(this.colorUniform, CxNameManager.toColor(context.name));

        var vertex_buf: [WebGLBuffer, number] = obj.getVertexBuffer(context)
        context.gl.enableVertexAttribArray(this.vertexPositionAttribute);
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, vertex_buf[0]);
        context.gl.vertexAttribPointer(this.vertexPositionAttribute,
            3, // 3 values per axis
            context.gl.FLOAT,
            false,
            0,
            0);
        context.gl.drawArrays(context.gl.TRIANGLES, 0, vertex_buf[1]);
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
                //attribute vec4 aVertexColor;

                  uniform mat4 uMVMatrix;
                  uniform mat4 uPMatrix;

                  //varying vec4 vColor;

                  void main(void) {
                      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
                      //vColor = aVertexColor;
                  }
                `
    }

}
