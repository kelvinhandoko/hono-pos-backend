import type { UpdateTenantPayload } from '@/entities/schemas/tenant/update-tenant.entities'
import type { DbTransactionClient } from '@/lib/db'
import type { IUpdateTenantUseCase } from '@/modules/tenant/use-cases/update-tenant.use-case'

export function updateTenantOrchestrator(deps: {
  updateTenantUseCase: IUpdateTenantUseCase
}) {
  return async (payload: UpdateTenantPayload, tx?: DbTransactionClient) => {
    const { updateTenantUseCase } = deps
    const tenant = await updateTenantUseCase(payload, tx)
    return tenant
  }
}

export type IUpdateTenantOrchestrator = ReturnType<
  typeof updateTenantOrchestrator
>
