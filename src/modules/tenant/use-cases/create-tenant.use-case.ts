import type { CreateTenantPayload } from '@/entities/tenant/create-tenant.entities'
import type { TenantRepository } from '@/modules/tenant/tenant.repository'

export const createTenantUseCase = (repo: TenantRepository) => async (payload: CreateTenantPayload) => await repo.create(payload)

export type ICreateTenantUseCase = ReturnType<typeof createTenantUseCase>
