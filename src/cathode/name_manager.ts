import { CxRGBA } from './basic_types'

export class CxNameManager {

    name_counter: number;

    // todo: shall it be just a vector?
    _objects: Map<number, any> = new Map<number, any>()

    constructor() {
        this.name_counter = 0;
    }

    genName(object:any): number {
        this.name_counter += 1;
        //console.log("name return", this.name_counter)
        this._objects.set(this.name_counter, object);
        return this.name_counter;
    }

    getObject(name:number): any {
      //todo use .has and fail nicely
      return this._objects.get(name);
    }

    static toColor(name_value: number): CxRGBA {
        let value = name_value * 20
        let red = value >> 16 & 0xFF
        let green = value >> 8 & 0xFF
        let blue = value & 0xFF
        return [red / 255.0, green / 255.0, blue / 255.0, 1.0]
    }

    static fromColor(color: CxRGBA): number {
        let result = 0x000000
        result = result | Math.round(color[0] * 255.0) << 16;
        result = result | Math.round(color[1] * 255.0) << 8;
        result = result | Math.round(color[2] * 255.0);
        return Math.ceil(result / 20)
    }

}
