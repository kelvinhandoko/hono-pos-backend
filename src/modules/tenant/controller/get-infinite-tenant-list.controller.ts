import type { InfiniteTenantListQuery } from '@/entities/tenant/get-tenant-list.entities'
import type { IGetInfiniteTenantListUseCase } from '@/modules/tenant/use-cases/get-infinite-tenant-list.use-case'

export function getInfiniteTenantListController(deps: {
  getInfiniteTenantListUseCase: IGetInfiniteTenantListUseCase
}) {
  return async (query: InfiniteTenantListQuery) => {
    const { getInfiniteTenantListUseCase } = deps
    return await getInfiniteTenantListUseCase(query)
  }
}

export type IGetInfiniteTenantListController = ReturnType<typeof getInfiniteTenantListController>
