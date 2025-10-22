import type { PaginatedOutletListQuery } from '@/entities/outlet/get-outlet-list.entities'
import type { OutletRepository } from '@/modules/outlet/outlet.repository'

export function getPaginatedOutletListUseCase(repo: OutletRepository) {
  return async (query: PaginatedOutletListQuery) => await repo.getPaginatedList(query)
}

export type IGetPaginatedOutletListUseCase = ReturnType<typeof getPaginatedOutletListUseCase>
