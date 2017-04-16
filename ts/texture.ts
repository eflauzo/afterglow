import { CxRenderingContext } from './rendering_context'

export abstract class CxTexture {

  abstract load(context: CxRenderingContext): void;

  loading_started: boolean;
  texture: WebGLTexture; // TODO fix this

  constructor() {
      this.loading_started = false;
      this.texture = null;
  }

  handleTextureLoaded(gl: any, image: HTMLElement) {
      let texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.generateMipmap(gl.TEXTURE_2D);
      gl.bindTexture(gl.TEXTURE_2D, null);
      this.texture = texture;
  }



  activate(context: CxRenderingContext): boolean {
      if (!this.loading_started) {
          this.loading_started = true;
          this.load(context)
      }

      if (this.texture != null) {
          context.gl.bindTexture(context.gl.TEXTURE_2D, this.texture);
          return true;
      }
      return false;
  }

  deactivate(context: CxRenderingContext): void {
      context.gl.bindTexture(context.gl.TEXTURE_2D, null);
  }
}
