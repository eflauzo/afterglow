import { CxUIElement } from './ui_element'
import { CxScene } from './scene'

// widget is element with dimensions (it repots dimenstions)
// think about label, parent won't know how much space label need
// label knows, it can report to parent so it could be properly aligned
export class CxUIWidget extends CxUIElement{

  constructor(scene:CxScene) {
      super(scene)
  }

  // abstract width():number;
  // abstract height():number;

}
