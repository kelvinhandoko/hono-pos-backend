import type { UpdateTenantPayload } from '@/entities/schemas/tenant/update-tenant.entities'
import type { DbTransactionClient } from '@/lib/db'
import type { TenantRepository } from '@/modules/tenant/tenant.repository'

export function updateTenantUseCase(repo: TenantRepository) {
  return async (payload: UpdateTenantPayload, tx?: DbTransactionClient) =>
    await repo.update(payload, tx)
}

export type IUpdateTenantUseCase = ReturnType<typeof updateTenantUseCase>
