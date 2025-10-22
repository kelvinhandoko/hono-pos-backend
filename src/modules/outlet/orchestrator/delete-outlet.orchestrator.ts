import type { DeleteOutletPayload } from '@/entities/outlet/delete-outlet.entities'
import type { DbTransactionClient } from '@/lib/db'
import type { IDeleteOutletUseCase } from '@/modules/outlet/use-cases/delete-outlet.use-case'

export function deleteOutletOrchestrator(deps: {
  deleteOutletUseCase: IDeleteOutletUseCase
}) {
  return async (payload: DeleteOutletPayload, tx?: DbTransactionClient) => {
    const { deleteOutletUseCase } = deps
    const outlet = await deleteOutletUseCase(payload, tx)
    return outlet
  }
}

export type IDeleteOutletOrchestrator = ReturnType<typeof deleteOutletOrchestrator>
