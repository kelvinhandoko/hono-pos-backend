import { PaginatedBrandQuery } from '@/entities/schemas/brand/get-brand.entities'
import { BrandRepository } from '@/modules/brand/brand.repository'

export const getPaginatedBrandUseCase =
  (repo: BrandRepository) => async (payload: PaginatedBrandQuery) => {
    return await repo.getPaginatedList(payload)
  }
export type IGetPaginatedBrandUseCase = ReturnType<
  typeof getPaginatedBrandUseCase
>
