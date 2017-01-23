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

    /*
    visualize(context: CxRenderingContext, obj: CxGeometry): void {
        context.gl.useProgram(this.shaderProgram)

        context.gl.uniformMatrix4fv(this.pMatrixUniform, false, context.pMatrix);
        context.gl.uniformMatrix4fv(this.mvMatrixUniform, false, context.mvMatrix);

        var vertex_buf: [WebGLBuffer, number] = obj.getVertexBuffer(context)
        context.gl.enableVertexAttribArray(this.vertexPositionAttribute);
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, vertex_buf[0]);
        context.gl.vertexAttribPointer(this.vertexPositionAttribute,
            3, // 3 values per axis
            context.gl.FLOAT,
            false,
            0,
            0);

        var color_buf: [WebGLBuffer, number] = obj.getColorBuffer(context)
        context.gl.enableVertexAttribArray(this.vertexColorAttribute);
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, color_buf[0]);
        context.gl.vertexAttribPointer(this.vertexColorAttribute,
            4, // 4 values per color
            context.gl.FLOAT,
            false,
            0,
            0);
        context.gl.drawArrays(context.gl.TRIANGLES, 0, vertex_buf[1]);
    }
    */



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
