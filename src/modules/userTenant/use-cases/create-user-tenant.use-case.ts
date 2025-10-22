import type { CreateUserTenantPayload } from '@/entities/userTenant/create-user-tenant.entities'
import type { DbTransactionClient } from '@/lib/db'
import type { UserTenantRepository } from '@/modules/userTenant/user-tenant.repository'

export function createUserTenantUseCase(repo: UserTenantRepository) {
  return async (payload: CreateUserTenantPayload, tx?: DbTransactionClient) => await repo.create(payload, tx)
}

export type ICreateUserTenantUseCase = ReturnType<typeof createUserTenantUseCase>
