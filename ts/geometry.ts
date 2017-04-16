import { CxRenderingContext } from './rendering_context'

export interface CxGeometry {
    preorder(context: CxRenderingContext): void;
    vertices(context: CxRenderingContext): Float32Array;
    colors(context: CxRenderingContext): Float32Array;
    texture(context: CxRenderingContext): Float32Array;
    normals(context: CxRenderingContext): Float32Array;
}
