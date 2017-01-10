import { CxRenderingContext } from './rendering_context'
import { CxObject } from './renderable'
import { CxNodePayload } from './node_payload'
import * as glmatrix from "gl-matrix";
import { CxXYZ,
         CxRGBA
       } from './basic_types'
import { CxNodePayloadVisualizer } from './node_payload_visualizer'
import { CxRadialShape } from "./node_payload_radial_shape"


export class CxStation implements CxNodePayload {

    segments: number = 16;
    expantion: number = 2.0;
    period_duration: number = 3.0;

    size: number;
    position: CxXYZ;

    point_shape: CxRadialShape;
    contour_shape: CxRadialShape;
    glow_shape: CxRadialShape;

    points_point_shape: Array<Array<number>>
    //points_contour_shape: Array<Array<number>>
    //points_glow_shape: Array<Array<number>>


    constructor(position:CxXYZ,
                size:number,
                ) {
      //super(static_draw);

      this.points_point_shape = new Array<Array<number>>()
      //this.points_contour_shape = new Array<Array<number>>()
      //this.points_glow_shape = new Array<Array<number>>()
      this.position = position;
      this.size = size;

    }

    get_style(context: CxRenderingContext) {
      return context.style;
    }

    enter(context: CxRenderingContext): void {

        this.size = (1.0/context.canvas_width) * 3.0


        for (let i=0; i<this.segments; i++) {
          let angle = i/this.segments * 2.0 * 3.14;
          let pos_x = Math.cos(angle) * this.size;
          let pos_y = Math.sin(angle) * this.size;
          //new Array<number>
          //console.log(["QATIC", pos_x, pos_y])
          this.points_point_shape.push([pos_x, pos_y])
        }
        //console.log("***")
        if (this.point_shape == null) {
              this.point_shape = new CxRadialShape(
                  this.position,
                  this.get_style(context).fill_primary,
                  this.get_style(context).fill_secondary,
                  this.points_point_shape,
                  0.0, //start multiplying
                  0.0,
                  false
              )
        }

        if (this.contour_shape == null) {
              this.contour_shape = new CxRadialShape(
                  this.position,
                  this.get_style(context).contour,
                  this.get_style(context).contour,
                  this.points_point_shape,
                  1.0, //start multiplying
                  this.get_style(context).contour_size,
                  false
              )
        }

        if (this.glow_shape == null) {
              this.glow_shape = new CxRadialShape(
                  this.position,
                  this.get_style(context).glow_start,
                  this.get_style(context).glow_end,
                  this.points_point_shape,
                  1.0, //* this.get_style(context).contour_size, //start multiplying
                  this.get_style(context).glow_size,
                  false
              )
        }

        this.glow_shape.size_mult = 1.0 + (this.get_style(context).contour_size / this.size)


        //this.contour_shape = new CxRadialShape()
        //this.glow_shape = new CxRadialShape()

        this.point_shape.enter(context);
        this.contour_shape.enter(context);
        this.glow_shape.enter(context);
    }

    exit(context: CxRenderingContext): void {
      //this.visualizer.exit(context)

      this.glow_shape.exit(context);
      this.contour_shape.exit(context);
      this.point_shape.exit(context);
    }
}
