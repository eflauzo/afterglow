import { CxObject } from './renderable'
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

    visualize(context: CxRenderingContext, obj: CxObject): void {

        context.gl.useProgram(this.shaderProgram)

        context.gl.uniformMatrix4fv(this.pMatrixUniform, false, context.pMatrix);
        context.gl.uniformMatrix4fv(this.mvMatrixUniform, false, context.mvMatrix);
        context.gl.uniformMatrix4fv(this.normalMatrixUniform, false, context.normalMatrix);
        context.gl.uniform4fv(this.colorUniform, [0.2, 1.0, 0.2, 1.0]);

        var vertex_buf: [WebGLBuffer, number] = obj.getVertexBuffer(context)
        context.gl.enableVertexAttribArray(this.vertexPositionAttribute);
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, vertex_buf[0]);
        context.gl.vertexAttribPointer(this.vertexPositionAttribute,
            3, // 3 values per axis
            context.gl.FLOAT,
            false,
            0,
            0);

        var normal_buf: [WebGLBuffer, number] = obj.getNormalBuffer(context)
        context.gl.enableVertexAttribArray(this.vertexNormalAttribute);
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, normal_buf[0]);
        context.gl.vertexAttribPointer(this.vertexNormalAttribute,
            3, // 3 coord per normal
            context.gl.FLOAT,
            false,
            0,
            0);
        context.gl.drawArrays(context.gl.TRIANGLES, 0, vertex_buf[1]);


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
