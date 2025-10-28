import { PaginatedBrandQuery } from '@/entities/schemas/brand/get-category.entities'
import { BrandRepository } from '@/modules/brand/brand.repository'

export const getPaginatedBrandUseCase = (repo: BrandRepository) => async (payload: PaginatedBrandQuery) => {
  return await repo.getPaginated(payload)
}
export type IGetPaginatedBrandUseCase = ReturnType<typeof getPaginatedBrandUseCase>
