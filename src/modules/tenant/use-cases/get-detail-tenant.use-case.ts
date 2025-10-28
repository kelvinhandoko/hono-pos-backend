import { NotFoundError } from '@/entities/error/common'
import type { GetDetailTenantQuery } from '@/entities/schemas/tenant/get-detail-tenant.entities'
import type { TenantRepository } from '@/modules/tenant/tenant.repository'

export function getDetailTenantUseCase(repo: TenantRepository) {
  return async (payload: GetDetailTenantQuery) => {
    const tenant = await repo.getDetail(payload)

    if (!tenant) {
      throw new NotFoundError('Tenant not found')
    }
    return tenant
  }
}

export type IGetDetailTenantUseCase = ReturnType<typeof getDetailTenantUseCase>
