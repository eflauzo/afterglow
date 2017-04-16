
export type CxRGBA = [number, number, number, number];
export type CxXYWH = [number, number, number, number];
export type CxXYZ = [number, number, number];

export enum CxUnitOfMeasure {
    px = 1,  // screen pixel
    x_percent, // percent of enclosing element (x axis)
    y_percent, // percent of enclosing element (y axis)
    z_percent, // percent of enclosing element (z axis)
    meter, // meter (main physical 3 dimensional unit)
}

export type CxValue = [number, CxUnitOfMeasure]
