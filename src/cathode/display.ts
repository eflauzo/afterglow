import { CxNode } from './node'
import { CxRenderingContext }  from './rendering_context'

export class CxDisplay {

  context: CxRenderingContext;
  root: CxNode

  constructor(canvas_id: string) {
    var canvas = <HTMLCanvasElement> document.getElementById(canvas_id);

    var gl: WebGLRenderingContext = canvas.getContext("webgl",
      {
        preserveDrawingBuffer: true,
        antialias: false
      });
    this.context = new CxRenderingContext(gl, canvas.width, canvas.height);
  }

  start(root: CxNode){
    this.root = root
    this.render()
  }

  render = () => {
    this.context.reset();
    //TODO: update canvas width, height from canvas element
    this.root.render(this.context);
    window.setTimeout(this.render, 1000);
  }

}
