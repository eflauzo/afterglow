import { CxObject } from './renderable'
import { CxRenderingContext } from './rendering_context'
import { CxRenderingProgram } from './rendering_program'


export class CxRenderingProgramTextured extends CxRenderingProgram {

    vertexPositionAttribute: any;
    vertexTexAttribute: any;
    pMatrixUniform: any;
    mvMatrixUniform: any;

    configure(context: CxRenderingContext): void {
        context.gl.useProgram(this.shaderProgram)
        this.vertexPositionAttribute = context.gl.getAttribLocation(this.shaderProgram, "aVertexPosition");
        this.vertexTexAttribute = context.gl.getAttribLocation(this.shaderProgram, "aTexCoords");
        this.pMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uPMatrix");
        this.mvMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uMVMatrix");
    }

    visualize(context: CxRenderingContext, obj: CxObject): void {
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

        var tex_buf: [WebGLBuffer, number] = obj.getTexBuffer(context)
        context.gl.enableVertexAttribArray(this.vertexTexAttribute);
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, tex_buf[0]);
        context.gl.vertexAttribPointer(this.vertexTexAttribute,
            2, // 4 values per color
            context.gl.FLOAT,
            false,
            0,
            0);
        context.gl.drawArrays(context.gl.TRIANGLES, 0, vertex_buf[1]);
    }



    getFragmentShaderSource(): string {
        return `precision mediump float;

                varying vec2 vTexCoords;

                uniform sampler2D uTexture;

                void main(void) {
                      gl_FragColor = texture2D(uTexture, vTexCoords);
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
