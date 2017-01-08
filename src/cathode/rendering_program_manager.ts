import { CxRenderingContext } from './rendering_context'
import { CxRenderingProgram } from './rendering_program'

export class CxRenderingProgramManager {

  programs: Map<any, CxRenderingProgram> = new Map<any, CxRenderingProgram>()

  get_program(context: CxRenderingContext, program:any): CxRenderingProgram {
    if (!this.programs.has(program)) {
      let new_program = new program()
      new_program.init(context)
      this.programs.set(program, new_program)
    }
    return this.programs.get(program)
  }

}
