import type { CreateTenantPayload } from '@/entities/tenant/create-tenant.entities'
import type { ICreateTenantOrchestrator } from '@/modules/tenant/orchestrator/create-tenant.orchestrator'
import type { TransactionManagerService } from '@/services/transaction-manager.service'

export function createTenantController(deps: {
  createTenantOrchestrator: ICreateTenantOrchestrator
  transactionManagerService: TransactionManagerService
}) {
  return async (payload: CreateTenantPayload & { userId: string }) => {
    const { createTenantOrchestrator, transactionManagerService } = deps
    return await transactionManagerService.startTransaction(
      async tx => await createTenantOrchestrator(payload, tx),
    )
  }
}

export type ICreateTenantController = ReturnType<typeof createTenantController>
