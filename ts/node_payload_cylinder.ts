import { CxRenderingContext } from './rendering_context'
import { CxGeometry } from './geometry'
//import { CxNodePayload } from './node_payload'
//import * as glmatrix from "gl-matrix";
import { CxXYZ,
    CxRGBA
} from './basic_types'
//import { CxNodePayloadVisualizer } from './node_payload_visualizer'
//import { CxRenderingProgramAngularAlpha } from './rendering_program_angular_alpha'

export class CxCylinder implements CxGeometry {

    pos: CxXYZ;
    h: number;
    r: number
    sections: number = 3;
    segments: number = 24;

    points_array: Array<number>
    color_array: Array<number>
    normals_array: Array<number>
    tex_array: Array<number>

    constructor(pos: CxXYZ,
        r: number,
        h: number
    ) {
        this.pos = pos;
        this.r = r;
        this.h = h;
    }

    preorder(context: CxRenderingContext): void {
        //pre-order allways called first

        this.points_array = new Array<number>()
        this.color_array = new Array<number>()
        this.normals_array = new Array<number>()
        this.tex_array = new Array<number>()

        let pi = Math.PI

        for (let vertical_section = 0; vertical_section < this.sections; vertical_section++) {
            for (let angle_segment = 0; angle_segment < this.segments; angle_segment++) {

                let angle_0 = (angle_segment / this.segments) * (pi * 2.0)
                let angle_1 = ((angle_segment + 1) / this.segments) * (pi * 2.0)

                let layer_0 = (vertical_section / this.sections)
                let layer_1 = ((vertical_section + 1) / this.sections)

                layer_0 = (layer_0 * this.h)
                layer_1 = (layer_1 * this.h)

                //    p2 ---- p3
                //     |     / |
                // z   |   /   |
                //     | /     |
                //    p0 ----- p1
                //       xy

                //TODO: multiply by size
                let p0_x = Math.sin(angle_0)
                let p0_y = Math.cos(angle_0)
                let p0_z = layer_0

                let p1_x = Math.sin(angle_1)
                let p1_y = Math.cos(angle_1)
                let p1_z = layer_0

                let p2_x = Math.sin(angle_0)
                let p2_y = Math.cos(angle_0)
                let p2_z = layer_1

                let p3_x = Math.sin(angle_1)
                let p3_y = Math.cos(angle_1)
                let p3_z = layer_1


                let n0_x = Math.sin(angle_0)
                let n0_y = Math.cos(angle_0)
                let n0_z = 0.0

                let n1_x = Math.sin(angle_1)
                let n1_y = Math.cos(angle_1)
                let n1_z = 0.0

                let n2_x = Math.sin(angle_0)
                let n2_y = Math.cos(angle_0)
                let n2_z = 0.0

                let n3_x = Math.sin(angle_1)
                let n3_y = Math.cos(angle_1)
                let n3_z = 0.0

                let t0_x = angle_segment / this.segments
                let t1_x = (angle_segment+1) / this.segments

                let t0_y = vertical_section / this.sections
                let t1_y = (vertical_section+1) / this.sections


                //p0
                this.points_array.push(p0_x);
                this.points_array.push(p0_y);
                this.points_array.push(p0_z);

                this.normals_array.push(n0_x);
                this.normals_array.push(n0_y);
                this.normals_array.push(n0_z);

                // this.color_array.push(this.color[0])
                // this.color_array.push(this.color[1])
                // this.color_array.push(this.color[2])
                // this.color_array.push(this.color[3])

                this.tex_array.push(t0_x);
                this.tex_array.push(t0_y);


                //p1
                this.points_array.push(p1_x);
                this.points_array.push(p1_y);
                this.points_array.push(p1_z);

                this.normals_array.push(n1_x);
                this.normals_array.push(n1_y);
                this.normals_array.push(n1_z);

                // this.color_array.push(this.color[0])
                // this.color_array.push(this.color[1])
                // this.color_array.push(this.color[2])
                // this.color_array.push(this.color[3])

                this.tex_array.push(t1_x);
                this.tex_array.push(t0_y);


                //p3
                this.points_array.push(p3_x);
                this.points_array.push(p3_y);
                this.points_array.push(p3_z);

                this.normals_array.push(n3_x);
                this.normals_array.push(n3_y);
                this.normals_array.push(n3_z);

                // this.color_array.push(this.color[0])
                // this.color_array.push(this.color[1])
                // this.color_array.push(this.color[2])
                // this.color_array.push(this.color[3])

                this.tex_array.push(t1_x);
                this.tex_array.push(t1_y);


                //triangle 2
                //p0
                this.points_array.push(p0_x);
                this.points_array.push(p0_y);
                this.points_array.push(p0_z);

                this.normals_array.push(n0_x);
                this.normals_array.push(n0_y);
                this.normals_array.push(n0_z);

                // this.color_array.push(this.color[0])
                // this.color_array.push(this.color[1])
                // this.color_array.push(this.color[2])
                // this.color_array.push(this.color[3])

                this.tex_array.push(t0_x);
                this.tex_array.push(t0_y);


                //p3
                this.points_array.push(p3_x);
                this.points_array.push(p3_y);
                this.points_array.push(p3_z);

                this.normals_array.push(n3_x);
                this.normals_array.push(n3_y);
                this.normals_array.push(n3_z);

                // this.color_array.push(this.color[0])
                // this.color_array.push(this.color[1])
                // this.color_array.push(this.color[2])
                // this.color_array.push(this.color[3])

                this.tex_array.push(t1_x);
                this.tex_array.push(t1_y);


                //p2
                this.points_array.push(p2_x);
                this.points_array.push(p2_y);
                this.points_array.push(p2_z);

                this.normals_array.push(n2_x);
                this.normals_array.push(n2_y);
                this.normals_array.push(n2_z);

                // this.color_array.push(this.color[0])
                // this.color_array.push(this.color[1])
                // this.color_array.push(this.color[2])
                // this.color_array.push(this.color[3])

                this.tex_array.push(t0_x);
                this.tex_array.push(t1_y);


            }
        }

        //return new Float32Array(this.points_array)
    }



    vertices(context: CxRenderingContext): Float32Array {
        return new Float32Array(this.points_array)
    }

    colors(context: CxRenderingContext): Float32Array {
        //return new Float32Array(this.color_array)
        return new Float32Array([]);
    }

    texture(context: CxRenderingContext): Float32Array {
        return new Float32Array(this.tex_array)
    }

    normals(context: CxRenderingContext): Float32Array {
        return new Float32Array(this.normals_array)
    }

    /*
    enter(context: CxRenderingContext): void {
        this.visualizer.enter(context)
    }

    exit(context: CxRenderingContext): void {
        this.visualizer.exit(context)
    }
    */
}
