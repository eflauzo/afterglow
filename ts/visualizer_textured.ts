import { CxRenderingContext,
         CxRenderingMode
       } from './rendering_context'
import { CxGeometry } from './geometry'
import { CxVisualizer } from './visualizer'
import { CxRenderingProgram } from './rendering_program'
import { CxRenderingProgramTextured } from './rendering_program_textured'
import { CxTexture } from './texture'
import { CxRGBA } from './basic_types'

//export class CxNodePayloadVisualizer implements CxNodePayload {

export class CxVisualizerTextured extends CxVisualizer {

    //obj: CxGeometry;
    //rendering_program: any;
    //color = [1.0, 0.0, 0.0, 1.0];

    color: CxRGBA;
    vertex_buf: WebGLBuffer = null;
    tex_buf: WebGLBuffer = null;
    texture: CxTexture;

    constructor(obj: CxGeometry, texture: CxTexture) {
        super(CxRenderingProgramTextured, obj);
        this.texture = texture;
        this.color = [1.0, 1.0, 1.0, 1.0]
        //this.obj = obj
        //this.rendering_program = rendering_program
    }

    //visualize(context: CxRenderingContext, obj: CxGeometry): void {

    visualize(context: CxRenderingContext, program_param:CxRenderingProgram): void {
        if (!this.texture.activate(context)){
          return
        }
        //console.log("******")
        this.obj.preorder(context);

        let program = <CxRenderingProgramTextured>program_param;

        //context.gl.useProgram(this.shaderProgram)

        program.activate(context)

        context.gl.uniformMatrix4fv(program.pMatrixUniform, false, context.pMatrix);
        context.gl.uniformMatrix4fv(program.mvMatrixUniform, false, context.mvMatrix);
        context.gl.uniform4fv(program.colorUniform, this.color);

        //var vertex_buf: [WebGLBuffer, number] = obj.getVertexBuffer(context)
        context.gl.enableVertexAttribArray(program.vertexPositionAttribute);
        if (this.vertex_buf == null) {
          this.vertex_buf = context.gl.createBuffer();
        }

        var triangle_vertices = this.obj.vertices(context);
        var triangle_count = triangle_vertices.length / 3;

        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.vertex_buf);
        //TODO: optimize
        context.gl.bufferData(context.gl.ARRAY_BUFFER, triangle_vertices, context.gl.STATIC_DRAW);
        context.gl.vertexAttribPointer(program.vertexPositionAttribute,
            3, // 3 values per axis
            context.gl.FLOAT,
            false,
            0,
            0);

        //var tex_buf: [WebGLBuffer, number] = this.obj.getTexBuffer(context)
        context.gl.enableVertexAttribArray(program.vertexTexAttribute);
        if (this.tex_buf == null) {
          this.tex_buf = context.gl.createBuffer();
        }
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.tex_buf);
        //TODO: optimize
        context.gl.bufferData(context.gl.ARRAY_BUFFER, this.obj.texture(context), context.gl.STATIC_DRAW);
        context.gl.vertexAttribPointer(program.vertexTexAttribute,
            2, // 4 values per color
            context.gl.FLOAT,
            false,
            0,
            0);
        context.gl.drawArrays(context.gl.TRIANGLES, 0, triangle_count);
        this.texture.deactivate(context)

        //console.log("444")
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
