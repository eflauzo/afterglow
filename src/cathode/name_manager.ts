import { CxRGBA } from './basic_types'

export class CxNameManager {

    name_counter: number;

    genName(): number {
        this.name_counter += 1;
        return this.name_counter;
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
