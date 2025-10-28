import type { CreateTenantPayload } from '@/entities/schemas/tenant/create-tenant.entities'
import type { DbTransactionClient } from '@/lib/db'
import type { TenantRepository } from '@/modules/tenant/tenant.repository'

// export function createTenantUseCase(repo: TenantRepository) {
//   return async (payload: CreateTenantPayload, tx?: DbTransactionClient) => await repo.create(payload, tx)
// }

export type ICreateTenantUseCase = ReturnType<typeof createTenantUseCase>

export const createTenantUseCase =
  (repo: TenantRepository) =>
  async (payload: CreateTenantPayload, tx?: DbTransactionClient) =>
    await repo.create(payload, tx)
