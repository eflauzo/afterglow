import { CxRenderingContext } from './rendering_context'
import { CxTexture } from './texture'


export class CxTextureImage extends CxTexture {
    url: string;

    constructor(url: string) {
        super();
        this.url = url;
    }

    load(context: CxRenderingContext): void {
        let image = new Image();
        image.onload = () => {
            this.handleTextureLoaded(context.gl, image);
        }
        console.log("loading:", this.url)
        image.src = this.url;
    }
}
