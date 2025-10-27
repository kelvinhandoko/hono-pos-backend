import { InfiniteBrandQuery } from '@/entities/brand/get-category.entities'
import { BrandRepository } from '@/modules/brand/brand.repository'

export const getInfiniteBrandUseCase = (repo: BrandRepository) => async (payload: InfiniteBrandQuery) => {
  return await repo.getInfinite(payload)
}
export type IGetInfiniteBrandUseCase = ReturnType<typeof getInfiniteBrandUseCase>
