import { CxRenderingContext } from './rendering_context'
import { CxObject } from './renderable'
import { CxNodePayload } from './node_payload'
import * as glmatrix from "gl-matrix";
import { CxXYZ,
         CxRGBA
       } from './basic_types'
import { CxNodePayloadVisualizer } from './node_payload_visualizer'
import { CxRenderingProgramGeneric } from './rendering_program_generic'

export class CxRadialShape extends CxObject implements CxNodePayload {

    //angle:number = 45.0;
    //znear:number = 0.1;
    //zfar:number = 100.0;
    pos: CxXYZ;
    start_color: CxRGBA;
    end_color: CxRGBA;
    xy_points: Array<Array<number>>;
    start_mult: number;
    width:number;
    size_mult: number = 1.0;

    visualizer: CxNodePayloadVisualizer;


    constructor(pos:CxXYZ,
                start_color:CxRGBA,
                end_color:CxRGBA,
                xy_points:Array<Array<number>>,
                start_mult: number,
                width:number,
                static_draw:boolean) {
      super(static_draw);
      this.pos = pos;
      this.start_color = start_color;
      this.end_color = end_color;
      this.xy_points = xy_points;
      this.start_mult = start_mult;
      this.width = width;
      this.visualizer = new CxNodePayloadVisualizer(CxRenderingProgramGeneric, this)
    }

    vertices(context: CxRenderingContext): Float32Array {
      let result = new Array<number>()


      let prew_point:Array<number> = null;
      //console.log("-")

      for (let point of this.xy_points) {
        // iterate_clock_wise as quads
        // generate triangels
        //console.log("1")

        if (prew_point == null) {
          prew_point = point;
          continue;
        }

        //
        //    p2 ---- p3
        //     |     / |   |
        //     |   /   |   | width
        //     | /     |   |
        //    p0 ----- p1
        //
        //
        //        (0,0)

        let p0_x = prew_point[0]
        let p0_y = prew_point[1]

        let p1_x = point[0]
        let p1_y = point[1]

        // calculating p2, p3
        // converting to unar vector then multiplying it
        // on length of verctor + witdth

        let len_p0 = Math.sqrt( (p0_x * p0_x) + (p0_y * p0_y) )
        let len_p1 = Math.sqrt( (p1_x * p1_x) + (p1_y * p1_y) )

        let p2_x = (p0_x / len_p0) * (len_p0 + this.width)
        let p2_y = (p0_y / len_p0) * (len_p0 + this.width)

        let p3_x = (p1_x / len_p1) * (len_p1 + this.width)
        let p3_y = (p1_y / len_p1) * (len_p1 + this.width)

        prew_point = point;

        //triangle 1

        p0_x = (p0_x * this.start_mult * this.size_mult) + this.pos[0]
        p0_y = (p0_y * this.start_mult * this.size_mult) + this.pos[1]
        p1_x = (p1_x * this.start_mult * this.size_mult) + this.pos[0]
        p1_y = (p1_y * this.start_mult * this.size_mult) + this.pos[1]

        p2_x = (p2_x * this.size_mult) + this.pos[0]
        p2_y = (p2_y * this.size_mult) + this.pos[1]
        p3_x = (p3_x * this.size_mult) + this.pos[0]
        p3_y = (p3_y * this.size_mult) + this.pos[1]

        //p0
        result.push(p0_x);
        result.push(p0_y);
        result.push(this.pos[2]);

        //p1
        result.push(p1_x);
        result.push(p1_y);
        result.push(this.pos[2]);

        //p3
        result.push(p3_x);
        result.push(p3_y);
        result.push(this.pos[2]);

        //triangle 2

        //p0
        result.push(p0_x);
        result.push(p0_y);
        result.push(this.pos[2]);

        //p3
        result.push(p3_x);
        result.push(p3_y);
        result.push(this.pos[2]);

        //p2
        result.push(p2_x);
        result.push(p2_y);
        result.push(this.pos[2]);
      }

      return new Float32Array(result)
    }

    colors(context: CxRenderingContext): Float32Array {

      // result = [
      //   this.color[0], this.color[0], this.color[0]
      // ]

      let result = new Array<number>()

      for (var i = 0; i < this.xy_points.length-1; i++) {

        //triangle 1
        result.push( this.start_color[0] );
        result.push( this.start_color[1] );
        result.push( this.start_color[2] );
        result.push( this.start_color[3] );

        result.push( this.start_color[0] );
        result.push( this.start_color[1] );
        result.push( this.start_color[2] );
        result.push( this.start_color[3] );

        result.push( this.end_color[0] );
        result.push( this.end_color[1] );
        result.push( this.end_color[2] );
        result.push( this.end_color[3] );

        //triangle 2
        result.push( this.start_color[0] );
        result.push( this.start_color[1] );
        result.push( this.start_color[2] );
        result.push( this.start_color[3] );

        result.push( this.end_color[0] );
        result.push( this.end_color[1] );
        result.push( this.end_color[2] );
        result.push( this.end_color[3] );

        result.push( this.end_color[0] );
        result.push( this.end_color[1] );
        result.push( this.end_color[2] );
        result.push( this.end_color[3] );
      }


      //console.log(result)
      return new Float32Array(result)
    }

    texture(context: CxRenderingContext): Float32Array {
        return new Float32Array([])
    }

    enter(context: CxRenderingContext): void {

        //TODO fix static mode
        //for

        //for

        /*
        let width = context.current_relative_viewport[2]
        let height = context.current_relative_viewport[3]

        glmatrix.mat4.identity(context.pMatrix)
        glmatrix.mat4.perspective(context.pMatrix,
                                  this.angle,
                                  width / height,
                                  this.znear,
                                  this.zfar);
        */
        this.visualizer.enter(context)
    }

    exit(context: CxRenderingContext): void {
      this.visualizer.exit(context)
    }
}
