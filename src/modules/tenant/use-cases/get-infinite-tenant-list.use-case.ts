import type { InfiniteTenantListQuery } from '@/entities/schemas/tenant/get-tenant-list.entities'
import type { TenantRepository } from '@/modules/tenant/tenant.repository'

export function getInfiniteTenantListUseCase(repo: TenantRepository) {
  return async (query: InfiniteTenantListQuery) => await repo.getInfiniteList(query)
}

export type IGetInfiniteTenantListUseCase = ReturnType<typeof getInfiniteTenantListUseCase>
