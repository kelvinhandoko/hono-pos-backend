import type { GetDetailTenantQuery } from '@/entities/tenant/get-detail-tenant.entities'
import type { TenantRepository } from '@/modules/tenant/tenant.repository'

export function getDetailTenantUseCase(repo: TenantRepository) {
  return async (payload: GetDetailTenantQuery) => await repo.getDetail(payload)
}

export type IGetDetailTenantUseCase = ReturnType<typeof getDetailTenantUseCase>
