import type { DeleteOutletPayload } from '@/entities/schemas/outlet/delete-outlet.entities'
import type { IDeleteOutletOrchestrator } from '@/modules/outlet/orchestrator/delete-outlet.orchestrator'
import type { TransactionManagerService } from '@/services/transaction-manager.service'

export function deleteOutletController(deps: {
  deleteOutletOrchestrator: IDeleteOutletOrchestrator
  transactionManagerService: TransactionManagerService
}) {
  return async (payload: DeleteOutletPayload) => {
    const { deleteOutletOrchestrator, transactionManagerService } = deps
    return await transactionManagerService.startTransaction(async (tx) => await deleteOutletOrchestrator(payload, tx))
  }
}

export type IDeleteOutletController = ReturnType<typeof deleteOutletController>
