import type { CreateOutletPayload } from '@/entities/schemas/outlet/create-outlet.entities'
import type { DbTransactionClient } from '@/lib/db'
import type { ICreateOutletUseCase } from '@/modules/outlet/use-cases/create-outlet.use-case'

export function createOutletOrchestrator(deps: { createOutletUseCase: ICreateOutletUseCase }) {
  return async (payload: CreateOutletPayload, tx?: DbTransactionClient) => {
    const { createOutletUseCase } = deps
    const outlet = await createOutletUseCase(payload, tx)
    return outlet
  }
}

export type ICreateOutletOrchestrator = ReturnType<typeof createOutletOrchestrator>
