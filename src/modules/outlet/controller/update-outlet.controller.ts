import type { UpdateOutletPayload } from '@/entities/outlet/update-outlet.entities'
import type { IUpdateOutletOrchestrator } from '@/modules/outlet/orchestrator/update-outlet.orchestrator'
import type { TransactionManagerService } from '@/services/transaction-manager.service'

export function updateOutletController(deps: {
  updateOutletOrchestrator: IUpdateOutletOrchestrator
  transactionManagerService: TransactionManagerService
}) {
  return async (payload: UpdateOutletPayload) => {
    const { updateOutletOrchestrator, transactionManagerService } = deps
    return await transactionManagerService.startTransaction(
      async tx => await updateOutletOrchestrator(payload, tx),
    )
  }
}

export type IUpdateOutletController = ReturnType<typeof updateOutletController>
