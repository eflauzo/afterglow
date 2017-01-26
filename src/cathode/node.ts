import { CxRenderingContext } from './rendering_context'
import { CxNodePayload } from './node_payload'

//TODO: node should be interface

/**
 * Node acts as hub. It has payload array items that need to be redered
 * and it maintains list of children
 * @class CxNode
 */
export class CxNode implements CxNodePayload{

    payload: Array<CxNodePayload>
    items: Array<CxNode>

    constructor(payload: Array<CxNodePayload>) {
        this.payload = payload
        this.items = []
    }

    render(context: CxRenderingContext) {
        //iterate over payload nodes and execute 'enter' method
        for (let item of this.payload) {
            item.enter(context)
        }

        // perform rendering on all subnodes
        for (let item of this.items) {
            item.render(context)
        }

        //iterate over payload nodes and execute 'exit' method
        for (let item of this.payload) {
            item.exit(context)
        }
    }

    enter(context: CxRenderingContext): void {
      this.render(context)
    }
    exit(context: CxRenderingContext): void {

    }


}
