/// <reference types="gl-matrix" />
declare module "geometry" {
    import { CxRenderingContext } from "rendering_context";
    export interface CxGeometry {
        preorder(context: CxRenderingContext): void;
        vertices(context: CxRenderingContext): Float32Array;
        colors(context: CxRenderingContext): Float32Array;
        texture(context: CxRenderingContext): Float32Array;
        normals(context: CxRenderingContext): Float32Array;
    }
}
declare module "node_payload" {
    import { CxRenderingContext } from "rendering_context";
    export interface CxNodePayload {
        enter(context: CxRenderingContext): void;
        exit(context: CxRenderingContext): void;
    }
}
declare module "rendering_program" {
    import { CxRenderingContext } from "rendering_context";
    export abstract class CxRenderingProgram {
        initialized: boolean;
        fragment_shader: WebGLShader;
        vertex_shader: WebGLShader;
        shaderProgram: WebGLProgram;
        constructor();
        init(context: CxRenderingContext): void;
        activate(context: CxRenderingContext): void;
        abstract configure(context: CxRenderingContext): void;
        abstract getFragmentShaderSource(): string;
        abstract getVertexShaderSource(): string;
    }
}
declare module "rendering_program_manager" {
    import { CxRenderingContext } from "rendering_context";
    import { CxRenderingProgram } from "rendering_program";
    export class CxRenderingProgramManager {
        programs: Map<any, CxRenderingProgram>;
        get_program(context: CxRenderingContext, program: any): CxRenderingProgram;
    }
}
declare module "basic_types" {
    export type CxRGBA = [number, number, number, number];
    export type CxXYWH = [number, number, number, number];
    export type CxXYZ = [number, number, number];
    export enum CxUnitOfMeasure {
        px = 1,
        x_percent = 2,
        y_percent = 3,
        z_percent = 4,
        meter = 5,
    }
    export type CxValue = [number, CxUnitOfMeasure];
}
declare module "style" {
    import { CxRGBA } from "basic_types";
    export class CxStyle {
        background: CxRGBA;
        fill_primary: CxRGBA;
        fill_secondary: CxRGBA;
        contour: CxRGBA;
        contour_size: number;
        glow_start: CxRGBA;
        glow_end: CxRGBA;
        glow_size: number;
        constructor();
    }
}
declare module "name_manager" {
    import { CxRGBA } from "basic_types";
    export class CxNameManager {
        name_counter: number;
        _objects: Map<number, any>;
        constructor();
        genName(object: any): number;
        getObject(name: number): any;
        static toColor(name_value: number): CxRGBA;
        static fromColor(color: CxRGBA): number;
    }
}
declare module "scene" {
    import { CxNode } from "node";
    import { CxStyle } from "style";
    import { CxNameManager } from "name_manager";
    /**
     * Scene keeps persistent information about scene, scene can be
     * accessed from context during rendering of every node.
     * NameManager, RootNode, Style is encapsulated in Scene
     *
     * @class CxScene
     */
    export class CxScene {
        name_manager: CxNameManager;
        root: CxNode;
        style: CxStyle;
        constructor();
    }
}
declare module "rendering_context" {
    import * as glmatrix from "gl-matrix";
    import { CxRenderingProgramManager } from "rendering_program_manager";
    import { CxScene } from "scene";
    import { CxXYWH } from "basic_types";
    export enum CxRenderingMode {
        CxSelection = 1,
        CxVisualize = 2,
    }
    export class CxRenderingContext {
        mvMatrix: glmatrix.mat4;
        pMatrix: glmatrix.mat4;
        normalMatrix: glmatrix.mat4;
        gl: WebGLRenderingContext;
        current_relative_viewport: CxXYWH;
        canvas_width: number;
        canvas_height: number;
        mode: CxRenderingMode;
        name: number;
        rendering_program_manager: CxRenderingProgramManager;
        scene: CxScene;
        constructor(gl: WebGLRenderingContext, canvas_width: number, canvas_height: number);
        reset(canvas_width: number, canvas_height: number): void;
        updateNormalMatrix(): void;
    }
}
declare module "node" {
    import { CxRenderingContext } from "rendering_context";
    import { CxNodePayload } from "node_payload";
    /**
     * Node acts as hub. It has payload array items that need to be redered
     * and it maintains list of children
     * @class CxNode
     */
    export class CxNode implements CxNodePayload {
        payload: Array<CxNodePayload>;
        items: Array<CxNode>;
        constructor(payload: Array<CxNodePayload>);
        render(context: CxRenderingContext): void;
        enter(context: CxRenderingContext): void;
        exit(context: CxRenderingContext): void;
    }
}
declare module "display" {
    import { CxRenderingContext } from "rendering_context";
    import { CxScene } from "scene";
    export class CxDisplay {
        context: CxRenderingContext;
        canvas: HTMLCanvasElement;
        scene: CxScene;
        constructor(canvas_id: string);
        start(scene: CxScene): void;
        render: () => void;
    }
}
declare module "rendering_program_color_array" {
    import { CxRenderingContext } from "rendering_context";
    import { CxRenderingProgram } from "rendering_program";
    export class CxRenderingProgramColorArray extends CxRenderingProgram {
        vertexPositionAttribute: any;
        vertexColorAttribute: any;
        pMatrixUniform: any;
        mvMatrixUniform: any;
        configure(context: CxRenderingContext): void;
        getFragmentShaderSource(): string;
        getVertexShaderSource(): string;
    }
}
declare module "rendering_program_selection" {
    import { CxRenderingContext } from "rendering_context";
    import { CxRenderingProgram } from "rendering_program";
    export class CxRenderingProgramSelection extends CxRenderingProgram {
        vertexPositionAttribute: any;
        pMatrixUniform: any;
        mvMatrixUniform: any;
        colorUniform: any;
        configure(context: CxRenderingContext): void;
        getFragmentShaderSource(): string;
        getVertexShaderSource(): string;
    }
}
declare module "visualizer" {
    import { CxRenderingContext } from "rendering_context";
    import { CxGeometry } from "geometry";
    import { CxNodePayload } from "node_payload";
    import { CxRenderingProgram } from "rendering_program";
    export abstract class CxVisualizer implements CxNodePayload {
        obj: CxGeometry;
        rendering_program: any;
        selection_vertex_buf: WebGLBuffer;
        constructor(rendering_program: any, obj: CxGeometry);
        enter(context: CxRenderingContext): void;
        exit(context: CxRenderingContext): void;
        abstract visualize(context: CxRenderingContext, program: CxRenderingProgram): void;
        visualize_selection(context: CxRenderingContext): void;
    }
}
declare module "visualizer_color_array" {
    import { CxRenderingContext } from "rendering_context";
    import { CxGeometry } from "geometry";
    import { CxRenderingProgram } from "rendering_program";
    import { CxVisualizer } from "visualizer";
    export class CxVisualizerColorArray extends CxVisualizer {
        vertex_buf: WebGLBuffer;
        color_buf: WebGLBuffer;
        constructor(obj: CxGeometry);
        visualize(context: CxRenderingContext, program_param: CxRenderingProgram): void;
    }
}
declare module "rendering_program_palos" {
    import { CxRenderingContext } from "rendering_context";
    import { CxRenderingProgram } from "rendering_program";
    export class CxRenderingProgramPalos extends CxRenderingProgram {
        vertexPositionAttribute: any;
        pMatrixUniform: any;
        mvMatrixUniform: any;
        colorActiveUniform: any;
        colorPassiveUniform: any;
        intervalUniform: any;
        configure(context: CxRenderingContext): void;
        getFragmentShaderSource(): string;
        getVertexShaderSource(): string;
    }
}
declare module "visualizer_palos" {
    import { CxRenderingContext } from "rendering_context";
    import { CxGeometry } from "geometry";
    import { CxRenderingProgram } from "rendering_program";
    import { CxVisualizer } from "visualizer";
    export class CxVisualizerPalos extends CxVisualizer {
        vertex_buf: WebGLBuffer;
        color_active: number[];
        color_passive: number[];
        interval: number;
        constructor(obj: CxGeometry);
        visualize(context: CxRenderingContext, program_param: CxRenderingProgram): void;
    }
}
declare module "rendering_program_textured" {
    import { CxRenderingContext } from "rendering_context";
    import { CxRenderingProgram } from "rendering_program";
    export class CxRenderingProgramTextured extends CxRenderingProgram {
        vertexPositionAttribute: any;
        vertexTexAttribute: any;
        pMatrixUniform: any;
        mvMatrixUniform: any;
        colorUniform: any;
        configure(context: CxRenderingContext): void;
        getFragmentShaderSource(): string;
        getVertexShaderSource(): string;
    }
}
declare module "texture" {
    import { CxRenderingContext } from "rendering_context";
    export abstract class CxTexture {
        abstract load(context: CxRenderingContext): void;
        loading_started: boolean;
        texture: WebGLTexture;
        constructor();
        handleTextureLoaded(gl: any, image: HTMLElement): void;
        activate(context: CxRenderingContext): boolean;
        deactivate(context: CxRenderingContext): void;
    }
}
declare module "visualizer_textured" {
    import { CxRenderingContext } from "rendering_context";
    import { CxGeometry } from "geometry";
    import { CxVisualizer } from "visualizer";
    import { CxRenderingProgram } from "rendering_program";
    import { CxTexture } from "texture";
    import { CxRGBA } from "basic_types";
    export class CxVisualizerTextured extends CxVisualizer {
        color: CxRGBA;
        vertex_buf: WebGLBuffer;
        tex_buf: WebGLBuffer;
        texture: CxTexture;
        constructor(obj: CxGeometry, texture: CxTexture);
        visualize(context: CxRenderingContext, program_param: CxRenderingProgram): void;
    }
}
declare module "rendering_program_lines" {
    import { CxRenderingContext } from "rendering_context";
    import { CxRenderingProgram } from "rendering_program";
    export class CxRenderingProgramLines extends CxRenderingProgram {
        vertexPositionAttribute: any;
        pMatrixUniform: any;
        mvMatrixUniform: any;
        colorUniform: any;
        configure(context: CxRenderingContext): void;
        getFragmentShaderSource(): string;
        getVertexShaderSource(): string;
    }
}
declare module "visualizer_lines" {
    import { CxRenderingContext } from "rendering_context";
    import { CxGeometry } from "geometry";
    import { CxRenderingProgram } from "rendering_program";
    import { CxVisualizer } from "visualizer";
    import { CxRGBA } from "basic_types";
    export class CxVisualizerLines extends CxVisualizer {
        vertex_buf: WebGLBuffer;
        color: CxRGBA;
        strip: boolean;
        constructor(obj: CxGeometry, color: CxRGBA);
        visualize(context: CxRenderingContext, program_param: CxRenderingProgram): void;
    }
}
declare module "rendering_program_angular_alpha" {
    import { CxRenderingContext } from "rendering_context";
    import { CxRenderingProgram } from "rendering_program";
    export class CxRenderingProgramAngularAlpha extends CxRenderingProgram {
        vertexPositionAttribute: any;
        vertexNormalAttribute: any;
        colorUniform: any;
        pMatrixUniform: any;
        mvMatrixUniform: any;
        normalMatrixUniform: any;
        configure(context: CxRenderingContext): void;
        getFragmentShaderSource(): string;
        getVertexShaderSource(): string;
    }
}
declare module "visualizer_angular_alpha" {
    import { CxRenderingContext } from "rendering_context";
    import { CxGeometry } from "geometry";
    import { CxRGBA } from "basic_types";
    import { CxVisualizer } from "visualizer";
    import { CxRenderingProgram } from "rendering_program";
    export class CxVisualizerAngularAlpha extends CxVisualizer {
        color: number[];
        vertex_buf: WebGLBuffer;
        normal_buf: WebGLBuffer;
        constructor(obj: CxGeometry, color: CxRGBA);
        visualize(context: CxRenderingContext, program_param: CxRenderingProgram): void;
    }
}
declare module "texture_image" {
    import { CxRenderingContext } from "rendering_context";
    import { CxTexture } from "texture";
    export class CxTextureImage extends CxTexture {
        url: string;
        constructor(url: string);
        load(context: CxRenderingContext): void;
    }
}
declare module "texture_generated_font" {
    import { CxRenderingContext } from "rendering_context";
    import { CxTexture } from "texture";
    export class CxTexChar {
        tex_x0: number;
        tex_y0: number;
        tex_x1: number;
        tex_y1: number;
        w: number;
        constructor(tex_x0: number, tex_y0: number, tex_x1: number, tex_y1: number, w: number);
    }
    export class CxTextureFont extends CxTexture {
        font: string;
        size: number;
        start_char: any;
        end_char: any;
        fillStyle: string;
        font_canvas_width: number;
        font_canvas_height: number;
        font_tex_coords: Map<string, CxTexChar>;
        constructor(font: string, size: number);
        load(context: CxRenderingContext): void;
    }
}
declare module "selectable_background" {
    import { CxRenderingContext } from "rendering_context";
    import { CxNodePayload } from "node_payload";
    export class CxSelectableBackground implements CxNodePayload {
        constructor();
        enter(context: CxRenderingContext): void;
        exit(context: CxRenderingContext): void;
    }
}
declare module "node_payload_viewport" {
    import { CxRenderingContext } from "rendering_context";
    import { CxNodePayload } from "node_payload";
    import { CxXYWH, CxRGBA } from "basic_types";
    export class CxNodePayloadViewport implements CxNodePayload {
        viewport: CxXYWH;
        clear_color: CxRGBA;
        clear_depth_buffer: boolean;
        clear_color_buffer: boolean;
        enable_depth_test: boolean;
        _stored_current_relative_viewport: CxXYWH;
        constructor();
        enter(context: CxRenderingContext): void;
        exit(context: CxRenderingContext): void;
    }
}
declare module "node_payload_perspective" {
    import { CxRenderingContext } from "rendering_context";
    import { CxNodePayload } from "node_payload";
    export class CxNodePayloadPerspective implements CxNodePayload {
        angle: number;
        znear: number;
        zfar: number;
        constructor();
        enter(context: CxRenderingContext): void;
        exit(context: CxRenderingContext): void;
    }
}
declare module "node_payload_ortho" {
    import { CxRenderingContext } from "rendering_context";
    import { CxNodePayload } from "node_payload";
    export class CxNodePayloadOrtho implements CxNodePayload {
        left: number;
        bottom: number;
        top: number;
        right: number;
        near: number;
        far: number;
        constructor();
        enter(context: CxRenderingContext): void;
        exit(context: CxRenderingContext): void;
    }
}
declare module "node_payload_transform" {
    import { CxRenderingContext } from "rendering_context";
    import { CxNodePayload } from "node_payload";
    import { CxXYZ } from "basic_types";
    import * as glmatrix from "gl-matrix";
    export class CxNodePayloadTransform implements CxNodePayload {
        translate: CxXYZ;
        rotate: CxXYZ;
        scale: CxXYZ;
        _stored: glmatrix.mat4;
        constructor();
        enter(context: CxRenderingContext): void;
        exit(context: CxRenderingContext): void;
    }
}
declare module "node_payload_interactive" {
    import { CxRenderingContext, CxRenderingMode } from "rendering_context";
    import { CxNodePayload } from "node_payload";
    import { CxRenderingProgramSelection } from "rendering_program_selection";
    import { CxScene } from "scene";
    import { CxRGBA } from "basic_types";
    export interface CxPointerEventsProcessor {
        pressed(source: CxNodePayloadInteractive, object: number, screen_x: number, screen_y: number): void;
        moved(source: CxNodePayloadInteractive, object: number, screen_x: number, screen_y: number): void;
        released(source: CxNodePayloadInteractive, object: number, screen_x: number, screen_y: number): void;
    }
    export class CxNodePayloadInteractive implements CxNodePayload {
        _stored_mode: CxRenderingMode;
        selection_rendering_program: CxRenderingProgramSelection;
        _pixels: any;
        _pixels_w: number;
        _pixels_h: number;
        pointer_processors: Set<CxPointerEventsProcessor>;
        _canvas: HTMLCanvasElement;
        _scene: CxScene;
        constructor(canvas: HTMLCanvasElement, scene: CxScene);
        addPointerEventsProcessor(processor: CxPointerEventsProcessor): void;
        removePointerEventsProcessor(processor: CxPointerEventsProcessor): void;
        enter(context: CxRenderingContext): void;
        exit(context: CxRenderingContext): void;
        name_color_at(x: number, y: number): CxRGBA;
        relative_xy(e: MouseEvent): [number, number, number, number];
        process_onmousemove: (e: MouseEvent) => void;
        process_onmousedown: (e: MouseEvent) => void;
        process_onmouseup: (e: MouseEvent) => void;
    }
}
declare module "node_payload_name" {
    import { CxRenderingContext } from "rendering_context";
    import { CxNodePayload } from "node_payload";
    export class CxNodePayloadName implements CxNodePayload {
        _stored_name: number;
        myname: number;
        constructor(myname: number);
        enter(context: CxRenderingContext): void;
        exit(context: CxRenderingContext): void;
    }
}
declare module "node_payload_label" {
    import { CxRenderingContext } from "rendering_context";
    import { CxGeometry } from "geometry";
    import { CxNodePayload } from "node_payload";
    import { CxTextureFont } from "texture_generated_font";
    import { CxVisualizerTextured } from "visualizer_textured";
    export enum CxProjectionCompensation {
        CxNoCompensation = 1,
        CxVCompensation = 2,
        CxHCompensation = 3,
    }
    export class CxNodePayloadLabel implements CxNodePayload, CxGeometry {
        text: string;
        font: CxTextureFont;
        visualizer: CxVisualizerTextured;
        compensation: CxProjectionCompensation;
        constructor(font: CxTextureFont, text: string);
        vertices(context: CxRenderingContext): Float32Array;
        colors(context: CxRenderingContext): Float32Array;
        normals(context: CxRenderingContext): Float32Array;
        preorder(context: CxRenderingContext): void;
        texture(context: CxRenderingContext): Float32Array;
        enter(context: CxRenderingContext): void;
        exit(context: CxRenderingContext): void;
    }
}
declare module "node_payload_cylinder" {
    import { CxRenderingContext } from "rendering_context";
    import { CxGeometry } from "geometry";
    import { CxXYZ } from "basic_types";
    export class CxCylinder implements CxGeometry {
        pos: CxXYZ;
        h: number;
        r: number;
        sections: number;
        segments: number;
        points_array: Array<number>;
        color_array: Array<number>;
        normals_array: Array<number>;
        tex_array: Array<number>;
        constructor(pos: CxXYZ, r: number, h: number);
        preorder(context: CxRenderingContext): void;
        vertices(context: CxRenderingContext): Float32Array;
        colors(context: CxRenderingContext): Float32Array;
        texture(context: CxRenderingContext): Float32Array;
        normals(context: CxRenderingContext): Float32Array;
    }
}
declare module "ui_element" {
    import { CxScene } from "scene";
    export class CxUIElement {
        _scene: CxScene;
        constructor(scene: CxScene);
    }
}
declare module "ui_arrow" {
    import { CxRenderingContext } from "rendering_context";
    import { CxGeometry } from "geometry";
    import { CxVisualizerColorArray } from "visualizer_color_array";
    import { CxScene } from "scene";
    import { CxUIElement } from "ui_element";
    export class CxArrow extends CxUIElement {
        arrow_geometry: ArrowGeometry;
        visualizer: CxVisualizerColorArray;
        constructor(scene: CxScene);
        enter(context: CxRenderingContext): void;
        exit(context: CxRenderingContext): void;
    }
    export class ArrowGeometry implements CxGeometry {
        preorder(context: CxRenderingContext): void;
        vertices(context: CxRenderingContext): Float32Array;
        colors(context: CxRenderingContext): Float32Array;
        texture(context: CxRenderingContext): Float32Array;
        normals(context: CxRenderingContext): Float32Array;
    }
}
declare module "ui_grid" {
    import { CxRenderingContext } from "rendering_context";
    import { CxNodePayload } from "node_payload";
    import { CxNodePayloadViewport } from "node_payload_viewport";
    import { CxXYWH } from "basic_types";
    import { CxNodePayloadOrtho } from "node_payload_ortho";
    import { CxScene } from "scene";
    import { CxUIElement } from "ui_element";
    import { CxArrow } from "ui_arrow";
    import { CxNodePayloadName } from "node_payload_name";
    import { CxPointerEventsProcessor, CxNodePayloadInteractive } from "node_payload_interactive";
    export enum CxSplitDirection {
        CxNoSplit = 1,
        CxVerticalSplit = 2,
        CxHorizontalSplit = 3,
    }
    export enum CxMarkerOrientation {
        CxLeft = 1,
        CxRight = 2,
        CxTop = 3,
        CxBottom = 4,
    }
    export class CxSplit implements CxPointerEventsProcessor {
        direction: CxSplitDirection;
        volume: number;
        margin: number;
        viewportA: CxNodePayloadViewport;
        viewportB: CxNodePayloadViewport;
        subsplitA: CxSplit;
        subsplitB: CxSplit;
        sceneA: CxNodePayload;
        sceneB: CxNodePayload;
        name: CxNodePayloadName;
        _drag: boolean;
        _drag_start_x: number;
        _drag_start_y: number;
        _drag_start_split: number;
        constructor();
        pressed(source: CxNodePayloadInteractive, object: number, screen_x: number, screen_y: number): void;
        moved(source: CxNodePayloadInteractive, object: number, screen_x: number, screen_y: number): void;
        released(source: CxNodePayloadInteractive, object: number, screen_x: number, screen_y: number): void;
        enter(grid: CxGrid, context: CxRenderingContext): void;
        exit(context: CxRenderingContext): void;
    }
    export class CxGrid extends CxUIElement {
        split: CxSplit;
        proj: CxNodePayloadOrtho;
        _stored_viewport: CxXYWH;
        _splits: Array<CxSplit>;
        _arrow: CxArrow;
        constructor(scene: CxScene);
        draw_arrow(context: CxRenderingContext, x: number, y: number, angle: number, split: CxSplit): void;
        enter(context: CxRenderingContext): void;
        exit(context: CxRenderingContext): void;
    }
}
declare module "ui_widget" {
    import { CxUIElement } from "ui_element";
    import { CxScene } from "scene";
    export class CxUIWidget extends CxUIElement {
        constructor(scene: CxScene);
    }
}
declare module "ui_log_plot" {
    import { CxUIWidget } from "ui_widget";
    import { CxXYWH } from "basic_types";
    import { CxRenderingContext } from "rendering_context";
    import { CxScene } from "scene";
    import { CxNodePayloadViewport } from "node_payload_viewport";
    import { CxGeometry } from "geometry";
    import { CxVisualizerLines } from "visualizer_lines";
    import { CxNodePayloadOrtho } from "node_payload_ortho";
    import { CxSelectableBackground } from "selectable_background";
    import { CxNodePayloadName } from "node_payload_name";
    import { CxPointerEventsProcessor, CxNodePayloadInteractive } from "node_payload_interactive";
    import { CxNodePayloadLabel } from "node_payload_label";
    import { CxTextureFont } from "texture_generated_font";
    import { CxNodePayloadTransform } from "node_payload_transform";
    export type CxCurveData = [[number], [number]];
    export interface CxLogDataProvider {
        subscribe_to_channel(channel_uri: string): void;
        unsubscribe_from_channel(channel_uri: string): void;
        set_range(start: number, end: number, max_points: number): void;
        get_data(channel_uri: string, start: number, end: number, max_points: number): CxCurveData;
    }
    export class CxCurve {
        name: string;
        left: number;
        right: number;
        channel_uri: string;
        visualizer: CxVisualizerLines;
        track: CxTrack;
        constructor(track: CxTrack, name: string);
    }
    export class MinorGridGeometry implements CxGeometry {
        track: CxTrack;
        preorder(context: CxRenderingContext): void;
        vertices(context: CxRenderingContext): Float32Array;
        colors(context: CxRenderingContext): Float32Array;
        texture(context: CxRenderingContext): Float32Array;
        normals(context: CxRenderingContext): Float32Array;
        constructor(track: CxTrack);
    }
    export class IndexGridGeometry implements CxGeometry {
        track: CxTrack;
        preorder(context: CxRenderingContext): void;
        vertices(context: CxRenderingContext): Float32Array;
        colors(context: CxRenderingContext): Float32Array;
        texture(context: CxRenderingContext): Float32Array;
        normals(context: CxRenderingContext): Float32Array;
        constructor(track: CxTrack);
    }
    export class CurveGeometry implements CxGeometry {
        track: CxTrack;
        channel: string;
        preorder(context: CxRenderingContext): void;
        vertices(context: CxRenderingContext): Float32Array;
        colors(context: CxRenderingContext): Float32Array;
        texture(context: CxRenderingContext): Float32Array;
        normals(context: CxRenderingContext): Float32Array;
        constructor(track: CxTrack, channel: string);
    }
    export class CxTrack implements CxPointerEventsProcessor {
        name: string;
        width: number;
        curves: Array<CxCurve>;
        major_divisions: number;
        minor_divisions: number;
        border: number;
        _viewport: CxNodePayloadViewport;
        visualizer_major_grid: CxVisualizerLines;
        visualizer_minor_grid: CxVisualizerLines;
        visualizer_index_grid: CxVisualizerLines;
        proj_tmp: CxNodePayloadOrtho;
        _selectable_background: CxSelectableBackground;
        _index_grid_geometry: IndexGridGeometry;
        _track_name: CxNodePayloadName;
        _template: CxLogTemplate;
        _drag: boolean;
        _drag_start_x: number;
        _drag_start_y: number;
        _drag_index: number;
        constructor(template: CxLogTemplate, name: string);
        pressed(source: CxNodePayloadInteractive, object: number, screen_x: number, screen_y: number): void;
        moved(source: CxNodePayloadInteractive, object: number, screen_x: number, screen_y: number): void;
        released(source: CxNodePayloadInteractive, object: number, screen_x: number, screen_y: number): void;
        plot(context: CxRenderingContext, vp: CxXYWH): void;
    }
    export class CxLogTemplate {
        index_resolution: number;
        index_divisions: number;
        tracks: Array<CxTrack>;
        _logplot: CxLogPlot;
        constructor(logplot: CxLogPlot);
    }
    export class CxLogPlot extends CxUIWidget {
        template: CxLogTemplate;
        vp: CxXYWH;
        start_index: number;
        font: CxTextureFont;
        label: CxNodePayloadLabel;
        transform: CxNodePayloadTransform;
        _provider: CxLogDataProvider;
        _viewport: CxNodePayloadViewport;
        constructor(scene: CxScene, provider: CxLogDataProvider);
        enter(context: CxRenderingContext): void;
        exit(context: CxRenderingContext): void;
    }
}
declare module "cathode" {
    export { CxDisplay } from "display";
    export { CxNode } from "node";
    export { CxVisualizerColorArray } from "visualizer_color_array";
    export { CxVisualizerPalos } from "visualizer_palos";
    export { CxVisualizerTextured } from "visualizer_textured";
    export { CxVisualizerLines } from "visualizer_lines";
    export { CxVisualizerAngularAlpha } from "visualizer_angular_alpha";
    export { CxTextureImage } from "texture_image";
    export { CxTextureFont } from "texture_generated_font";
    export { CxSelectableBackground } from "selectable_background";
    export { CxGeometry } from "geometry";
    export { CxNodePayloadViewport } from "node_payload_viewport";
    export { CxNodePayloadPerspective } from "node_payload_perspective";
    export { CxNodePayloadOrtho } from "node_payload_ortho";
    export { CxNodePayloadTransform } from "node_payload_transform";
    export { CxNodePayloadInteractive } from "node_payload_interactive";
    export { CxNodePayloadName } from "node_payload_name";
    export { CxNameManager } from "name_manager";
    export { CxNodePayloadLabel } from "node_payload_label";
    export { CxCylinder } from "node_payload_cylinder";
    export { CxScene } from "scene";
    export { CxRenderingContext } from "rendering_context";
    export { CxGrid, CxSplit, CxSplitDirection } from "ui_grid";
    export { CxLogPlot, CxLogDataProvider, CxCurveData } from "ui_log_plot";
}
