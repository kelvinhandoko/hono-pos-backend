import { getBrandQuery } from '@/entities/brand/get-category.entities'
import { BrandRepository } from '@/modules/brand/brand.repository'

export const getBrandUseCase = (repo: BrandRepository) => async (payload: getBrandQuery) => {
  return await repo.get(payload)
}
export type IGetBrandUseCase = ReturnType<typeof getBrandUseCase>
