import { CreateBrandPayload } from '@/entities/schemas/brand/create-brand.entities'
import { ICreateBrandOrchestrator } from '@/modules/brand/orchestrators/create-brand.orchestrator'
import { TransactionManagerService } from '@/services/transaction-manager.service'

export function createBrandController(deps: {
  createBrandOrchestrator: ICreateBrandOrchestrator
  transactionManagerService: TransactionManagerService
}) {
  return async (payload: CreateBrandPayload) => {
    const { createBrandOrchestrator, transactionManagerService } = deps

    return await transactionManagerService.startTransaction(
      async (tx) => await createBrandOrchestrator(payload, tx),
    )
  }
}

export type ICreateBrandController = ReturnType<typeof createBrandController>
