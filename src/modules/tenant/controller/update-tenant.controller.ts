import type { UpdateTenantPayload } from '@/entities/schemas/tenant/update-tenant.entities'
import type { IUpdateTenantOrchestrator } from '@/modules/tenant/orchestrator/update-tenant.orchestrator'
import type { TransactionManagerService } from '@/services/transaction-manager.service'

export function updateTenantController(deps: {
  updateTenantOrchestrator: IUpdateTenantOrchestrator
  transactionManagerService: TransactionManagerService
}) {
  return async (payload: UpdateTenantPayload) => {
    const { updateTenantOrchestrator, transactionManagerService } = deps
    return await transactionManagerService.startTransaction(
      async (tx) => await updateTenantOrchestrator(payload, tx),
    )
  }
}

export type IUpdateTenantController = ReturnType<typeof updateTenantController>
