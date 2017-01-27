
import { CxNode } from './node'
import { CxStyle } from './style'
import { CxNameManager } from './name_manager'

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

}
