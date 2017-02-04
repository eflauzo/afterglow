import { CxXYZ,
         CxRGBA
       } from './basic_types'

export class CxStyle {

  background: CxRGBA;
  fill_primary: CxRGBA;
  fill_secondary: CxRGBA;
  contour: CxRGBA;
  contour_size: number;
  glow_start: CxRGBA;
  glow_end: CxRGBA;
  glow_size: number;

  constructor(){
    this.background = [0.1450, 0.2823, 0.3607, 1.0];
    this.fill_primary = [0.01, 0.01, 0.35, 1.0];
    this.fill_secondary = [0.01, 0.01, 0.40, 1.0];
    this.contour = [1.0, 1.0, 1.0, 0.1];
    this.glow_start = [0.1, 0.1, 0.8, 0.2];
    this.glow_end = [0.1, 0.1, 0.7, 0.0];
    this.glow_size = 0.01;
    this.contour_size = 0.01;
  }

}
