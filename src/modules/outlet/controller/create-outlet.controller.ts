import type { CreateOutletPayload } from '@/entities/outlet/create-outlet.entities'
import type { ICreateOutletOrchestrator } from '@/modules/outlet/orchestrator/create-outlet.orchestrator'
import type { TransactionManagerService } from '@/services/transaction-manager.service'

export function createOutletController(deps: {
  createOutletOrchestrator: ICreateOutletOrchestrator
  transactionManagerService: TransactionManagerService
}) {
  return async (payload: CreateOutletPayload) => {
    const { createOutletOrchestrator, transactionManagerService } = deps
    return await transactionManagerService.startTransaction(
      async tx => await createOutletOrchestrator(payload, tx),
    )
  }
}

export type ICreateOutletController = ReturnType<typeof createOutletController>
