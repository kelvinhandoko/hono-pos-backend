import type { UpdateOutletPayload } from '@/entities/schemas/outlet/update-outlet.entities'
import type { DbTransactionClient } from '@/lib/db'
import type { IUpdateOutletUseCase } from '@/modules/outlet/use-cases/update-outlet.use-case'

export function updateOutletOrchestrator(deps: { updateOutletUseCase: IUpdateOutletUseCase }) {
  return async (payload: UpdateOutletPayload, tx?: DbTransactionClient) => {
    const { updateOutletUseCase } = deps
    const outlet = await updateOutletUseCase(payload, tx)
    return outlet
  }
}

export type IUpdateOutletOrchestrator = ReturnType<typeof updateOutletOrchestrator>
