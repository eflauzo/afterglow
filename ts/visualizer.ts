import { CxRenderingContext,
         CxRenderingMode
       } from './rendering_context'
import { CxGeometry } from './geometry'
import { CxNodePayload } from './node_payload'
import { CxRenderingProgram } from './rendering_program'
import { CxRenderingProgramSelection } from './rendering_program_selection'
import { CxNameManager } from './name_manager'
//export class CxNodePayloadVisualizer implements CxNodePayload {

export abstract class CxVisualizer implements CxNodePayload {

    obj: CxGeometry;
    rendering_program: any;
    selection_vertex_buf: WebGLBuffer = null;

    constructor(rendering_program: any, obj: CxGeometry) {
        this.obj = obj
        this.rendering_program = rendering_program
    }

    enter(context: CxRenderingContext): void {
        if (context.mode == CxRenderingMode.CxSelection) {
          let prog = context.rendering_program_manager.get_program(context, this.rendering_program);
          prog.activate(context)

          context.gl.disable(context.gl.DITHER)
          context.gl.disable(context.gl.BLEND)


          this.obj.preorder(context)

          // two sided rendering
          context.gl.disable(context.gl.CULL_FACE);
          //context.gl.cullFace(context.gl.FRONT);
          //context.rendering_program.visualize(context, this.obj)
          //this.visualize(context, prog);
          //context.gl.cullFace(context.gl.BACK);
          //context.rendering_program.visualize(context, this.obj)
          this.visualize_selection(context);
        }
        else
        {
          context.gl.enable(context.gl.BLEND)
          context.gl.enable(context.gl.DITHER)

          let prog = context.rendering_program_manager.get_program(context, this.rendering_program);
          prog.activate(context)
          this.obj.preorder(context)

          // two sided rendering
          context.gl.enable(context.gl.CULL_FACE);
          context.gl.cullFace(context.gl.FRONT);
          //context.rendering_program.visualize(context, this.obj)
          this.visualize(context, prog);
          context.gl.cullFace(context.gl.BACK);
          //context.rendering_program.visualize(context, this.obj)
          this.visualize(context, prog);
        }
    }

    exit(context: CxRenderingContext): void {
    }

    /*
    array_to_buffer(array:Float32Array):WebGLBuffer {

      var result = context.gl.createBuffer();
      context.gl.bindBuffer(context.gl.ARRAY_BUFFER, result);
      //var vertex_array: Float32Array = this.vertices(context);
      context.gl.bufferData(context.gl.ARRAY_BUFFER, array, context.gl.STATIC_DRAW);

    }
    */

    abstract visualize(context: CxRenderingContext, program:CxRenderingProgram): void;

    visualize_selection(context: CxRenderingContext):void {
      //context.gl.useProgram(this.shaderProgram)
      let selection_program = <CxRenderingProgramSelection>context.rendering_program_manager.get_program(context, CxRenderingProgramSelection);
      //selection_program.begin()
      selection_program.activate(context)
      context.gl.uniformMatrix4fv(selection_program.pMatrixUniform, false, context.pMatrix);
      context.gl.uniformMatrix4fv(selection_program.mvMatrixUniform, false, context.mvMatrix);
      context.gl.uniform4fv(selection_program.colorUniform, CxNameManager.toColor(context.name));
      if (this.selection_vertex_buf == null) {
        this.selection_vertex_buf = context.gl.createBuffer();
      }
      //var vertex_buf: [WebGLBuffer, number] = obj.getVertexBuffer(context)
      context.gl.enableVertexAttribArray(selection_program.vertexPositionAttribute);
      context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.selection_vertex_buf);

      let triangle_vertices = this.obj.vertices(context);
      let triangle_count = triangle_vertices.length / 3;
      context.gl.bufferData(context.gl.ARRAY_BUFFER, triangle_vertices, context.gl.STATIC_DRAW);

      context.gl.vertexAttribPointer(selection_program.vertexPositionAttribute,
          3, // 3 values per axis
          context.gl.FLOAT,
          false,
          0,
          0);
      context.gl.drawArrays(context.gl.TRIANGLES, 0, triangle_count);


    }
}
