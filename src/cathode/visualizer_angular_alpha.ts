import { CxRenderingContext,
         CxRenderingMode
       } from './rendering_context'
import { CxGeometry } from './geometry'
import { CxRGBA } from './basic_types'
import { CxVisualizer } from './visualizer'
import { CxRenderingProgram } from './rendering_program'
import { CxRenderingProgramAngularAlpha } from './rendering_program_angular_alpha'

export class CxVisualizerAngularAlpha extends CxVisualizer {
    color = [1.0, 0.0, 0.0, 1.0];

    vertex_buf: WebGLBuffer = null;
    normal_buf: WebGLBuffer = null;

    constructor(obj: CxGeometry, color: CxRGBA) {
        super(CxRenderingProgramAngularAlpha, obj);
        this.color = color
    }
    visualize(context: CxRenderingContext, program_param:CxRenderingProgram): void {

          this.obj.preorder(context);

          let program = <CxRenderingProgramAngularAlpha>program_param;

          program.activate(context)

          context.gl.uniformMatrix4fv(program.pMatrixUniform, false, context.pMatrix);
          context.gl.uniformMatrix4fv(program.mvMatrixUniform, false, context.mvMatrix);
          context.gl.uniformMatrix4fv(program.normalMatrixUniform, false, context.normalMatrix);
          context.gl.uniform4fv(program.colorUniform, this.color);

          context.gl.enableVertexAttribArray(program.vertexPositionAttribute);
          if (this.vertex_buf == null) {
            this.vertex_buf = context.gl.createBuffer();
          }
          context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.vertex_buf);
          //TODO: optimize
          var triangle_vertices = this.obj.vertices(context);
          var triangle_count = triangle_vertices.length / 3;
          context.gl.bufferData(context.gl.ARRAY_BUFFER, triangle_vertices, context.gl.STATIC_DRAW);
          context.gl.vertexAttribPointer(program.vertexPositionAttribute,
              3, // 3 values per axis
              context.gl.FLOAT,
              false,
              0,
              0);

          //var normal_buf: [WebGLBuffer, number] = obj.getNormalBuffer(context)
          context.gl.enableVertexAttribArray(program.vertexNormalAttribute);
          if (this.normal_buf == null) {
            this.normal_buf = context.gl.createBuffer();
          }
          context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.normal_buf);
          //TODO optimize
          context.gl.bufferData(context.gl.ARRAY_BUFFER, this.obj.normals(context), context.gl.STATIC_DRAW);
          context.gl.vertexAttribPointer(program.vertexNormalAttribute,
              3, // 3 coord per normal
              context.gl.FLOAT,
              false,
              0,
              0);
          context.gl.drawArrays(context.gl.TRIANGLES, 0, triangle_count);
}

}
