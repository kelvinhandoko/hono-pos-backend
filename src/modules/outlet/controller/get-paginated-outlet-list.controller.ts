import type { PaginatedOutletListQuery } from '@/entities/schemas/outlet/get-outlet-list.entities'
import type { IGetPaginatedOutletListUseCase } from '@/modules/outlet/use-cases/get-paginated-outlet-list.use-case'

export function getPaginatedOutletListController(deps: {
  getPaginatedOutletListUseCase: IGetPaginatedOutletListUseCase
}) {
  return async (query: PaginatedOutletListQuery) => {
    const { getPaginatedOutletListUseCase } = deps
    return await getPaginatedOutletListUseCase(query)
  }
}

export type IGetPaginatedOutletListController = ReturnType<
  typeof getPaginatedOutletListController
>
