import type { InfiniteOutletListQuery } from '@/entities/outlet/get-outlet-list.entities'
import type { IGetInfiniteOutletListUseCase } from '@/modules/outlet/use-cases/get-infinite-outlet-list.use-case'

export function getInfiniteOutletListController(deps: {
  getInfiniteOutletListUseCase: IGetInfiniteOutletListUseCase
}) {
  return async (query: InfiniteOutletListQuery) => {
    const { getInfiniteOutletListUseCase } = deps
    return await getInfiniteOutletListUseCase(query)
  }
}

export type IGetInfiniteOutletListController = ReturnType<typeof getInfiniteOutletListController>
