import type { CreateTenantPayload } from '@/entities/schemas/tenant/create-tenant.entities'
import type { DbTransactionClient } from '@/lib/db'
import type { ICreateTenantUseCase } from '@/modules/tenant/use-cases/create-tenant.use-case'
import type { ICreateUserTenantUseCase } from '@/modules/userTenant/use-cases/create-user-tenant.use-case'

export function createTenantOrchestrator(deps: {
  createTenantUseCase: ICreateTenantUseCase
  createUserTenantUseCase: ICreateUserTenantUseCase
}) {
  return async (payload: CreateTenantPayload & { userId: string }, tx?: DbTransactionClient) => {
    const { createTenantUseCase, createUserTenantUseCase } = deps
    const tenant = await createTenantUseCase(payload, tx)
    await createUserTenantUseCase({ userId: payload.userId, tenantId: tenant.id }, tx)
    return tenant
  }
}

export type ICreateTenantOrchestrator = ReturnType<typeof createTenantOrchestrator>
