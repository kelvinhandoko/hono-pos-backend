import type { PaginatedTenantListQuery } from '@/entities/schemas/tenant/get-tenant-list.entities'
import type { TenantRepository } from '@/modules/tenant/tenant.repository'

export function getPaginatedTenantListUseCase(repo: TenantRepository) {
  return async (query: PaginatedTenantListQuery) => await repo.getPaginatedList(query)
}

export type IGetPaginatedTenantListUseCase = ReturnType<typeof getPaginatedTenantListUseCase>
