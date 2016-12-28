import { CxRenderingContext } from './rendering_context'

export interface CxNodePayload {
    enter(context: CxRenderingContext): void;
    exit(context: CxRenderingContext): void;
}
