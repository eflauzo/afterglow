import { CxRenderingContext,
         CxRenderingMode
       } from './rendering_context'
import { CxGeometry } from './geometry'
import { CxNodePayload } from './node_payload'
import { CxRenderingProgram } from './rendering_program'
import { CxRenderingProgramLines } from './rendering_program_lines'
import { CxVisualizer} from './visualizer'
import { CxRGBA } from './basic_types'

//export class CxNodePayloadVisualizer implements CxNodePayload {

export class CxVisualizerLines extends CxVisualizer {

    //obj: CxGeometry;
    //rendering_program: any;
    //color = [1.0, 0.0, 0.0, 1.0];

    vertex_buf: WebGLBuffer = null;
    color: CxRGBA;
    strip: boolean;
    //color_buf: WebGLBuffer = null;

    constructor(obj: CxGeometry, color: CxRGBA) {
        super(CxRenderingProgramLines, obj);
        this.color = color;
        this.strip = false;
        //this.obj = obj
        //this.rendering_program = rendering_program
    }

    //visualize(context: CxRenderingContext, obj: CxGeometry): void {

    visualize(context: CxRenderingContext, program_param:CxRenderingProgram): void {
        var program:CxRenderingProgramLines = <CxRenderingProgramLines>program_param

        this.obj.preorder(context);

        //context.gl.useProgram(this.shaderProgram)
        var vertices = this.obj.vertices(context);
        if (vertices.length == 0)
        {
          return;
        }
        program.activate(context)


                context.gl.uniformMatrix4fv(program.pMatrixUniform, false, context.pMatrix);
                context.gl.uniformMatrix4fv(program.mvMatrixUniform, false, context.mvMatrix);
                context.gl.uniform4fv(program.colorUniform, this.color);

                //var vertex_buf: [WebGLBuffer, number] = obj.getVertexBuffer(context)
                if (this.vertex_buf == null) {
                  this.vertex_buf = context.gl.createBuffer();
                }

                context.gl.enableVertexAttribArray(program.vertexPositionAttribute);
                context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.vertex_buf);
                //TODO: optimize

                var line_count = vertices.length / 3;
                context.gl.bufferData(context.gl.ARRAY_BUFFER, vertices, context.gl.STATIC_DRAW);

                context.gl.vertexAttribPointer(program.vertexPositionAttribute,
                    3, // 3 values per axis
                    context.gl.FLOAT,
                    false,
                    0,
                    0);

                /*
                //var color_buf: [WebGLBuffer, number] = obj.getColorBuffer(context)
                if (this.color_buf == null) {
                  this.color_buf = context.gl.createBuffer();
                }
                context.gl.enableVertexAttribArray(program.vertexColorAttribute);
                context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.color_buf);
                //TODO: optimize
                context.gl.bufferData(context.gl.ARRAY_BUFFER, this.obj.colors(context), context.gl.STATIC_DRAW);

                context.gl.vertexAttribPointer(program.vertexColorAttribute,
                    4, // 4 values per color
                    context.gl.FLOAT,
                    false,
                    0,
                    0);
                */

                if (this.strip){
                    context.gl.drawArrays(context.gl.LINE_STRIP, 0, line_count-1);
                }else
                {
                  context.gl.drawArrays(context.gl.LINES, 0, line_count);
                }
    }



    /*
    visualize(context: CxRenderingContext, program:WebGLProgram): void {

          this.preorder(context);


          //context.gl.useProgram(this.shaderProgram)
          context.gl.useProgram(program)

          context.gl.uniformMatrix4fv(program.pMatrixUniform, false, context.pMatrix);
          context.gl.uniformMatrix4fv(program.mvMatrixUniform, false, context.mvMatrix);
          context.gl.uniformMatrix4fv(program.normalMatrixUniform, false, context.normalMatrix);
          context.gl.uniform4fv(program.colorUniform, this.color);

          //var vertex_buf: [WebGLBuffer, number] = obj.getVertexBuffer(context)
          context.gl.enableVertexAttribArray(program.vertexPositionAttribute);
          if (this.vertex_buf == null) {
            this.vertex_buf = context.gl.createBuffer();
          }
          context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.vertex_buf);
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
          context.gl.bindBuffer(context.gl.ARRAY_BUFFER, normal_buf);
          context.gl.vertexAttribPointer(program.vertexNormalAttribute,
              3, // 3 coord per normal
              context.gl.FLOAT,
              false,
              0,
              0);
          context.gl.drawArrays(context.gl.TRIANGLES, 0, this.vertex_buf);
}
*/
























    /*
    enter(context: CxRenderingContext): void {
        if (context.mode != CxRenderingMode.CxSelection) {
          let prog = context.rendering_program_manager.get_program(context, this.rendering_program);
          prog.activate(context)
        }

        this.obj.preorder(context)

        // two sided rendering
        context.gl.enable(context.gl.CULL_FACE);
        context.gl.cullFace(context.gl.FRONT);
        context.rendering_program.visualize(context, this.obj)
        context.gl.cullFace(context.gl.BACK);
        context.rendering_program.visualize(context, this.obj)
    }

    exit(context: CxRenderingContext): void {
    }
    */
}
