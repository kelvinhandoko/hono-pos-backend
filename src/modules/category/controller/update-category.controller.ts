import { UpdateCategoryPayload } from '@/entities/category/update-category.entities'
import { IUpdateCategoryOrchestrator } from '@/modules/category/orchestrators/update-category.orchestrator'
import { TransactionManagerService } from '@/services/transaction-manager.service'

export function updateCategoryController(deps: {
  updateCategoryOrchestrator: IUpdateCategoryOrchestrator
  transactionManagerService: TransactionManagerService
}) {
  return async (payload: UpdateCategoryPayload) => {
    const { updateCategoryOrchestrator, transactionManagerService } = deps

    return await transactionManagerService.startTransaction(async (tx) => await updateCategoryOrchestrator(payload, tx))
  }
}

export type IUpdateCategoryController = ReturnType<typeof updateCategoryController>
