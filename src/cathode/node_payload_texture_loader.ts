import { CxRenderingContext } from './rendering_context'
import { CxObject } from './renderable'
import { CxNodePayload } from './node_payload'

export class CxNodePayloadTexture implements CxNodePayload {

    url: string;
    loading_started:boolean;
    texture:WebGLTexture; // TODO fix this

    constructor(url: string) {
        this.url = url;
        this.loading_started = false;
        this.texture = null;
    }

    load (context: CxRenderingContext):void {
      let texture = context.gl.createTexture()
      let image = new Image();
      image.onload = () => {
        this.handleTextureLoaded(context.gl, image, texture);
      }
      console.log("loading:", this.url)
      image.src = this.url;

    }

    handleTextureLoaded(gl:any, image:HTMLImageElement, texture:any) {
        console.log("loading:", this.url)
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.bindTexture(gl.TEXTURE_2D, null);
        this.texture = texture;
        console.log("texture is ready")
    }

    enter(context: CxRenderingContext):void {
        //context.rendering_program.visualize(context, this.obj)
        if (!this.loading_started) {
          this.loading_started = true;
          this.load(context)
        }

        if (this.texture != null) {
          context.gl.bindTexture(context.gl.TEXTURE_2D, this.texture);
        }

    }

    exit(context: CxRenderingContext): void {
      context.gl.bindTexture(context.gl.TEXTURE_2D, null);
    }
}
