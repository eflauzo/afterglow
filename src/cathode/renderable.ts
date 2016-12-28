import { CxRenderingContext } from './rendering_context'


export abstract class CxObject {

    is_static: boolean
    _vertex_buffer: WebGLBuffer
    _vertex_count: number

    _color_buffer: WebGLBuffer
    _color_count: number

    constructor(is_static: boolean) {
        this.is_static = is_static;
        this._vertex_buffer = null;
        this._color_buffer = null;
    }

    getVertexBuffer(context: CxRenderingContext): [WebGLBuffer, number] {
        if ((this._vertex_buffer == null) || (!this.is_static)) {
            this._vertex_buffer = context.gl.createBuffer();
            context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this._vertex_buffer);
            var vertex_array: Float32Array = this.vertices(context);
            context.gl.bufferData(context.gl.ARRAY_BUFFER,
                vertex_array,
                context.gl.STATIC_DRAW);
            this._vertex_count = vertex_array.length / 3;
        }
        return [this._vertex_buffer, this._vertex_count];
    }

    getColorBuffer(context: CxRenderingContext): [WebGLBuffer, number] {
        if ((this._color_buffer == null) || (!this.is_static)) {
            this._color_buffer = context.gl.createBuffer();
            context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this._color_buffer);
            var color_array: Float32Array = this.colors(context);
            context.gl.bufferData(context.gl.ARRAY_BUFFER,
                color_array,
                context.gl.STATIC_DRAW);
            this._color_count = color_array.length / 4;
        }
        return [this._color_buffer, this._color_count];
    }


    abstract vertices(context: CxRenderingContext): Float32Array;
    abstract colors(context: CxRenderingContext): Float32Array;
}
