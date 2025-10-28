import type { PaginatedTenantListQuery } from '@/entities/schemas/tenant/get-tenant-list.entities'
import type { IGetPaginatedTenantListUseCase } from '@/modules/tenant/use-cases/get-paginated-tenant-list.use-case'

export function getPaginatedTenantListController(deps: {
  getPaginatedTenantListUseCase: IGetPaginatedTenantListUseCase
}) {
  return async (query: PaginatedTenantListQuery) => {
    const { getPaginatedTenantListUseCase } = deps
    return await getPaginatedTenantListUseCase(query)
  }
}

export type IGetPaginatedTenantListController = ReturnType<
  typeof getPaginatedTenantListController
>
