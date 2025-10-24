import { CreateCategoryPayload } from '@/entities/category/create-category.entities'
import { ICreateCategoryOrchestrator } from '@/modules/category/orchestrators/create-category.orchestrator'
import { TransactionManagerService } from '@/services/transaction-manager.service'

export function createCategoryController(deps: {
  createCategoryOrchestrator: ICreateCategoryOrchestrator
  transactionManagerService: TransactionManagerService
}) {
  return async (payload: CreateCategoryPayload) => {
    const { createCategoryOrchestrator, transactionManagerService } = deps

    return await transactionManagerService.startTransaction(async (tx) => await createCategoryOrchestrator(payload, tx))
  }
}

export type ICreateCategoryController = ReturnType<typeof createCategoryController>
