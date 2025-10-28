import type { InfiniteOutletListQuery } from '@/entities/schemas/outlet/get-outlet-list.entities'
import type { OutletRepository } from '@/modules/outlet/outlet.repository'

export function getInfiniteOutletListUseCase(repo: OutletRepository) {
  return async (query: InfiniteOutletListQuery) => await repo.getInfiniteList(query)
}

export type IGetInfiniteOutletListUseCase = ReturnType<typeof getInfiniteOutletListUseCase>
