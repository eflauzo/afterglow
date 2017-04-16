import { CxUIWidget } from './ui_widget'
import {
  CxRGBA,
  CxXYWH
} from './basic_types'
import { CxRenderingContext } from './rendering_context'
import { CxScene } from './scene'
import { CxNodePayloadViewport } from './node_payload_viewport'
import { CxGeometry } from './geometry'
import { CxVisualizerLines } from './visualizer_lines'
import { CxNodePayloadOrtho } from './node_payload_ortho'
import { CxSelectableBackground } from './selectable_background'
import { CxNodePayloadName } from './node_payload_name'
import {
  CxPointerEventsProcessor,
  CxNodePayloadInteractive
} from './node_payload_interactive'
import {
  CxNodePayloadLabel,
  CxProjectionCompensation
} from './node_payload_label'
import { CxTextureFont } from './texture_generated_font'
import { CxNodePayloadTransform } from './node_payload_transform'


export type CxCurveData = [[number], [number]];


export interface CxLogDataProvider {
  subscribe_to_channel(channel_uri:string): void;
  unsubscribe_from_channel(channel_uri: string): void
  set_range(start:number, end:number, max_points:number): void
  get_data(channel_uri: string, start:number, end:number, max_points:number): CxCurveData;
}

//dataset should have offset

export class CxCurve {
  name: string;
  //color: CxRGBA;
  left: number;
  right: number;
  channel_uri: string; // something like <dataset>:<channel>
  visualizer: CxVisualizerLines;
  track:CxTrack;

  //Pattern
  //Thinkness

  constructor(track:CxTrack , name:string) {
    this.track = track;
    this.name = name;
    this.visualizer = new CxVisualizerLines(new CurveGeometry(this.track, this.name), [1.0, 0.0, 0.0, 1.0])
    this.visualizer.strip = true;
  }

}


class GeoTest implements CxGeometry{

  preorder(context: CxRenderingContext): void {}

  vertices(context: CxRenderingContext): Float32Array {
    let result:Array<number> = []

      result.push(0.0);
      result.push(0.0);
      result.push(0.0);

      result.push(1.0);
      result.push(1.0);
      result.push(0.0);


    //console.log("result ", result, result.length / 3.0)
    return new Float32Array(result);
  }
  colors(context: CxRenderingContext): Float32Array {return null;}
  texture(context: CxRenderingContext): Float32Array {return null;}
  normals(context: CxRenderingContext): Float32Array {return null;}

  constructor() {

  }
}


class MajorGridGeometry implements CxGeometry{
  track:CxTrack;

  preorder(context: CxRenderingContext): void {}

  vertices(context: CxRenderingContext): Float32Array {
    let result:Array<number> = []
    for (let i=1; i<this.track.major_divisions; i++) {
      let relative_offset:number = i / this.track.major_divisions;
      result.push(0.0);
      result.push(relative_offset);
      result.push(0.0);

      result.push(1.0);
      result.push(relative_offset);
      result.push(0.0);
    }

    //console.log("result ", result, result.length / 3.0)
    return new Float32Array(result);
  }
  colors(context: CxRenderingContext): Float32Array {return null;}
  texture(context: CxRenderingContext): Float32Array {return null;}
  normals(context: CxRenderingContext): Float32Array {return null;}

  constructor(track:CxTrack) {
    this.track = track;
  }
}

export class MinorGridGeometry implements CxGeometry {
  track:CxTrack;

  preorder(context: CxRenderingContext): void {}

  vertices(context: CxRenderingContext): Float32Array {
    let result:Array<number> = []
    for (let i=0; i<this.track.major_divisions; i++) {
      let major_relative_offset:number = i / this.track.major_divisions;
      for (let j=0; j<this.track.minor_divisions; j++) {
        let minor_relative_offset:number = major_relative_offset + (j / this.track.minor_divisions / this.track.major_divisions);
        result.push(0.0);
        result.push(minor_relative_offset);
        result.push(0.0);

        result.push(1.0);
        result.push(minor_relative_offset);
        result.push(0.0);
      }
    }

    //console.log("result ", result, result.length / 3.0)
    return new Float32Array(result);
  }
  colors(context: CxRenderingContext): Float32Array {return null;}
  texture(context: CxRenderingContext): Float32Array {return null;}
  normals(context: CxRenderingContext): Float32Array {return null;}

  constructor(track:CxTrack) {
    this.track = track;
  }
}

export class IndexGridGeometry implements CxGeometry {
  track:CxTrack;

  preorder(context: CxRenderingContext): void {}

  vertices(context: CxRenderingContext): Float32Array {
    //let number_of_divisions = this.plot.start_index +
    let result:Array<number> = []
    let number_of_divisions = Math.floor(this.track._template.index_resolution / this.track._template.index_divisions);

    for (let division=0; division<=number_of_divisions; division++) {
      let index_pos = Math.floor(this.track._template._logplot.start_index / this.track._template.index_divisions) + division;
      let index_actual = index_pos * this.track._template.index_divisions - this.track._template._logplot.start_index;
      result.push(index_actual);
      result.push(0.0);
      result.push(0.0);


      result.push(index_actual);
      result.push(1.0);
      result.push(0.0);
    }

    return new Float32Array(result);
  }
  colors(context: CxRenderingContext): Float32Array {return null;}
  texture(context: CxRenderingContext): Float32Array {return null;}
  normals(context: CxRenderingContext): Float32Array {return null;}

  constructor(track:CxTrack) {
    this.track = track;
  }
}

export class CurveGeometry implements CxGeometry {
  track:CxTrack;
  channel:string;

  preorder(context: CxRenderingContext): void {}

  vertices(context: CxRenderingContext): Float32Array {
    //let number_of_divisions = this.plot.start_index +
    /*
    let result:Array<number> = []
    let number_of_divisions = Math.floor(this.track._template.index_resolution / this.track._template.index_divisions);

    for (let division=0; division<=number_of_divisions; division++) {
      let index_pos = Math.floor(this.track._template._logplot.start_index / this.track._template.index_divisions) + division;
      let index_actual = index_pos * this.track._template.index_divisions;
      result.push(index_actual);
      result.push(0.0);
      result.push(0.0);


      result.push(index_actual);
      result.push(1.0);
      result.push(0.0);
    }
    */

    let curve_data:CxCurveData = this.track._template._logplot._provider.get_data(
          this.channel,
          this.track._template._logplot.start_index,
          this.track._template._logplot.start_index + this.track._template.index_resolution,
          context.current_relative_viewport[2] * context.canvas_width
    );

    let index = curve_data[0];
    let values = curve_data[1];

    let result:Array<number> = [];

    for (let i=0; i<index.length; i++) {
      result.push(index[i] - this.track._template._logplot.start_index); //lets make plot zero base by subtracting start
      result.push(values[i]);
      result.push(0.0);
    }

    return new Float32Array(result);
  }
  colors(context: CxRenderingContext): Float32Array {return null;}
  texture(context: CxRenderingContext): Float32Array {return null;}
  normals(context: CxRenderingContext): Float32Array {return null;}

  constructor(track:CxTrack, channel:string) {
    this.track = track;
    this.channel = channel;
  }
}

export class CxTrack implements CxPointerEventsProcessor{
  name: string;
  width: number; // 0..1 percent ?
  curves: Array<CxCurve>
  // fills
  major_divisions = 2; // by how many sections divide plot
  minor_divisions = 5; // by how many sections divide
  border = 2;
  _viewport: CxNodePayloadViewport;


  visualizer_major_grid: CxVisualizerLines;
  visualizer_minor_grid: CxVisualizerLines;
  visualizer_index_grid: CxVisualizerLines;

  proj_tmp: CxNodePayloadOrtho;
  _selectable_background: CxSelectableBackground;
  _index_grid_geometry: IndexGridGeometry;
  _track_name: CxNodePayloadName;
  _template:CxLogTemplate

  _drag: boolean;
  _drag_start_x: number;
  _drag_start_y: number;
  _drag_index: number;



  constructor(template:CxLogTemplate, name:string) {
    this._template = template
    this.name = name;
    this.width = 1.0;
    this._viewport = new CxNodePayloadViewport()
    //console.log("track color:", this._viewport.clear_color)
    /*
    [
      Math.random(),
      Math.random(),
      Math.random(),
      1.0
    ]
    */

    this.visualizer_major_grid = new CxVisualizerLines(new MajorGridGeometry(this), [0.5, 0.5, 0.5, 0.050])
    this.visualizer_minor_grid = new CxVisualizerLines(new MinorGridGeometry(this), [0.5, 0.5, 0.5, 0.025])

    this._index_grid_geometry = new IndexGridGeometry(this);
    this.visualizer_index_grid = new CxVisualizerLines(this._index_grid_geometry, [0.3, 0.3, 0.0, 0.025])
    this.proj_tmp = new CxNodePayloadOrtho()
    this._selectable_background = new CxSelectableBackground()
    this._track_name = new CxNodePayloadName(this._template._logplot._scene.name_manager.genName(this))
    this._drag = false;
  }

  /////////////////////////////

  pressed(source: CxNodePayloadInteractive, object:number, screen_x:number, screen_y:number):void {
    console.log("track", this.name)
    this._drag = true;
    this._drag_start_x=  screen_x;
    this._drag_start_y=  screen_y;
    this._drag_index = this._template._logplot.start_index;
    source.addPointerEventsProcessor(this);
  }

  moved(source: CxNodePayloadInteractive, object:number, screen_x:number, screen_y:number):void {
    console.log("dragging")
    if (this._drag) {
      //console.log("xxx");
      let dx = screen_x - this._drag_start_x;
      let dy = screen_y - this._drag_start_y;

      let _w = this._viewport.viewport[2] //+ this._viewport.viewport[2];
      let _h = this._viewport.viewport[3] //+ this._viewport.viewport[3];

      let relative_dx = -dx / _w;
      //let step = this._template.index_resolution / _w


      this._template._logplot.start_index = this._drag_index + (relative_dx * this._template.index_resolution)
      this._template._logplot._provider.set_range(
          this._template._logplot.start_index,
          this._template._logplot.start_index + this._template.index_resolution,
          _w
      );
      //console.log(" >>> ", this._template._logplot.start_index)
    }


  }

  released(source: CxNodePayloadInteractive, object:number, screen_x:number, screen_y:number):void {
    this._drag = true;
    source.removePointerEventsProcessor(this);
  }


  /////////////////////////////


  plot(
       context:CxRenderingContext,
       vp:CxXYWH
       ):void
  {
    let one_px_v = context.current_relative_viewport[3] / context.canvas_height
    this._viewport.viewport = [
      vp[0],
      vp[1] + 0.0,//(one_px_v * this.border),
      vp[2],
      vp[3] - (one_px_v * this.border),
    ]
    this._viewport.clear_color = this._template._logplot._scene.style.background
    this._viewport.enable_depth_test = false;
    this._viewport.enter(context);
    this._track_name.enter(context);
    this._selectable_background.enter(context);

      // making full relative projection
      this.proj_tmp.left = 0.0;
      this.proj_tmp.right = 1.0;
      this.proj_tmp.bottom = 0.0;
      this.proj_tmp.top = 1.0;

      this.proj_tmp.enter(context);
        this.visualizer_major_grid.enter(context);
        this.visualizer_minor_grid.enter(context);


        this.visualizer_minor_grid.enter(context);
        this.visualizer_major_grid.exit(context);
      this.proj_tmp.exit(context);

      // making real index projection
      this.proj_tmp.left =  0.0;//this._template._logplot.start_index;
      this.proj_tmp.right = this._template.index_resolution;// - this._template._logplot.start_index;//this._template._logplot.start_index + this._template.index_resolution;

      this.proj_tmp.enter(context);
        this.visualizer_index_grid.enter(context);
        this.visualizer_index_grid.exit(context);
      this.proj_tmp.exit(context);

    //context.gl.enable(context.gl.LINE_SMOOTH)
    for (let crv of this.curves) {
    //actual curve
      this.proj_tmp.top = crv.right;
      this.proj_tmp.bottom = crv.left;
      this.proj_tmp.enter(context);
      crv.visualizer.enter(context);
      crv.visualizer.exit(context);
      this.proj_tmp.exit(context);
    }
    //context.gl.disable(context.gl.LINE_SMOOTH)

    this._selectable_background.exit(context);
    this._track_name.exit(context);

    this._viewport.exit(context);
  }

}

export class CxLogTemplate {
    index_resolution: number;
    index_divisions: number;
    //is_vertical: boolean;
    tracks: Array<CxTrack>;

    //end_index: number; should i be able to tell ?

    _logplot: CxLogPlot;

    constructor(logplot: CxLogPlot) {
      this._logplot = logplot
      this.index_resolution = 100.0;
      this.index_divisions = 25.0;
      let t1 = new CxTrack(this, "track #1");
      let t2 = new CxTrack(this, "track #2");
      let t3 = new CxTrack(this, "track #3");
      this.tracks = [t1, t2, t3]

      let curve1 = new CxCurve(t1,"A");
      curve1.left = -2.0;
      curve1.right = 2.0;
      curve1.visualizer.color = [1.0, 0.0, 0.0, 1.0]

      let curve2 = new CxCurve(t1, "B");
      curve2.left = -2.0;
      curve2.right = 2.0;
      curve2.visualizer.color = [0.0, 1.0, 0.0, 1.0]

      let curve3 = new CxCurve(t2, "C");
      curve3.left = -2.0;
      curve3.right = 2.0;
      curve3.visualizer.color = [0.0, 0.0, 1.0, 1.0]

      t1.curves = [curve1, curve2];
      t2.curves = [curve3];
      t3.curves = [];


      t2.major_divisions = 3; // by how many sections divide plot
      t2.minor_divisions = 2; // by how many sections divide

      t3.major_divisions = 4; // by how many sections divide plot
      t3.minor_divisions = 5; // by how many sections divide

    }
}

export class CxLogPlot extends CxUIWidget{
  //class represents log plot
  template: CxLogTemplate;
  vp: CxXYWH;
  start_index: number;
  //let label = new CxNodePayloadLabel()
  font: CxTextureFont;
  label: CxNodePayloadLabel;
  transform: CxNodePayloadTransform;
  _provider: CxLogDataProvider;
  _viewport: CxNodePayloadViewport;

  constructor(scene:CxScene, provider:CxLogDataProvider) {
      super(scene)
      this._provider = provider;
      this.template = new CxLogTemplate(this);
      this.vp = [0.0, 0.0, 1.0, 1.0];
      this.start_index = 1000.0;
      this._viewport = new CxNodePayloadViewport()
      this.font = new CxTextureFont("OCR-A",12.0)
      this.label = new CxNodePayloadLabel(this.font, "123.3")
      this.label.compensation = CxProjectionCompensation.CxNoCompensation;
      this.label.text = "SPP: 341.057 (psi)"
      this.label.visualizer.color = [1.0, 1.0, 1.0, 0.9]
      this.transform = new CxNodePayloadTransform()
  }

  /*
  width(): number {
    return 1.0;
  }

  height(): number {
    return 1.0;
  }
  */

  enter(context: CxRenderingContext): void {

     let total_tracks_width:number = 0;
     for (let track of this.template.tracks) {
       //console.log("track", track)
       total_tracks_width += track.width;
     }



     //console.log("total_tracks_width", total_tracks_width)
     let client_x = this.vp[0] + context.current_relative_viewport[0]
     let client_y = this.vp[1] + context.current_relative_viewport[1]

     let client_w = this.vp[2] * context.current_relative_viewport[2]
     let client_h = this.vp[3] * context.current_relative_viewport[3]

     this._viewport.viewport = [client_x, client_y, client_w, client_h];
     this._viewport.clear_color = [0.0, 0.0, 0.0, 1.0]
     this._viewport.enter(context)

     //let client_rect: CxXYWH = [client_x, client_y, client_w, client_h]

     let track_offset = 0;
     for (let track of this.template.tracks) {
        let track_width = (track.width / total_tracks_width) * client_h;
        let track_vp:CxXYWH = [
            client_x,
            client_y + track_offset,
            client_w,
            track_width
          ]
        track.plot(context, track_vp)
        track_offset += track_width;
     }


     context.gl.clear(context.gl.DEPTH_BUFFER_BIT)

     let ortho = new CxNodePayloadOrtho();
     let reshape = new CxNodePayloadTransform();

     ortho.left = 0.0;//this.vp[0];
     ortho.bottom = 0.0;//this.vp[1];
     ortho.right = 1.0;
     ortho.top = (client_h * context.canvas_height) / (client_w * context.canvas_width);



     ortho.enter(context)
     this.transform.translate = [1.0, 0.0, 0.0]
     this.transform.rotate = [0.0, 0.0, 3.14 / 2.0]
     this.transform.enter(context);
     //reshape.scale = [1.0, client_w/client_h, 1.0];
     //reshape.enter(context);


     //this.font.enter(context);
     //this.font.exit(context);

     this.label.text = this.start_index.toString()//String(parseFloat(Math.round(this.start_index * 100) / 100).toFixed(2));
     this.label.enter(context);
     this.label.exit(context);

    //  let gt = new GeoTest()
    //  let ll = new CxVisualizerLines(gt, [1.0, 0.0, 0.0, 1.0]);
     //
    //  ll.enter(context);
    //  ll.exit(context);

     //this.label.text = String(parseFloat(Math.round(this.start_index * 100) / 100).toFixed(2));



     //reshape.exit(context);
     this.transform.exit(context);
     ortho.exit(context)


     this._viewport.exit(context)

  }

  exit(context: CxRenderingContext): void {
  }



};
