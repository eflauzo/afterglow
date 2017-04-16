import { CxRenderingContext,
    CxRenderingMode } from './rendering_context'
import { CxGeometry } from './geometry'
import { CxNodePayload } from './node_payload'
import { CxVisualizerPalos } from './visualizer_palos'
import { CxVisualizerColorArray } from './visualizer_color_array'
import { CxXYWH,
    CxRGBA
} from './basic_types'
import { CxNodePayloadOrtho } from './node_payload_ortho'
import { CxScene } from './scene'
import { CxUIElement } from './ui_element'

/*
 this is 2d arrow pointing up. allong Y-axis


*/


export class CxArrow extends CxUIElement {


  arrow_geometry: ArrowGeometry;
  visualizer: CxVisualizerColorArray;

    constructor(scene:CxScene) {
      super(scene)
      this.arrow_geometry = new ArrowGeometry();
      this.visualizer = new CxVisualizerColorArray(this.arrow_geometry);
    }


    enter(context: CxRenderingContext): void {
      //console.log('{{')
      this.visualizer.enter(context);
    }

    exit(context: CxRenderingContext): void {
      //console.log('}}')
      this.visualizer.exit(context);
    }

}


export class ArrowGeometry implements CxGeometry {
    preorder(context: CxRenderingContext): void {

    }
    vertices(context: CxRenderingContext): Float32Array {
      //console.log('(((())))')
      return new Float32Array([
         0.0,  1.0, 0.0,
         0.4,  0.0, 0.0,
        -0.4,  0.0, 0.0,
      ]);
    }
    colors(context: CxRenderingContext): Float32Array {
      return new Float32Array([
         1.0, 0.0, 0.0, 1.0,
         1.0, 0.0, 0.0, 1.0,
         1.0, 0.0, 0.0, 1.0,
      ])
    }
    texture(context: CxRenderingContext): Float32Array {
      return null;
    }
    normals(context: CxRenderingContext): Float32Array {
      return null;
    }
}
