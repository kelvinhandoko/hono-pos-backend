import { InfiniteBrandQuery } from '@/entities/schemas/brand/get-brand.entities'
import { BrandRepository } from '@/modules/brand/brand.repository'

export const getInfiniteBrandUseCase =
  (repo: BrandRepository) => async (payload: InfiniteBrandQuery) => {
    return await repo.getInfiniteList(payload)
  }
export type IGetInfiniteBrandUseCase = ReturnType<
  typeof getInfiniteBrandUseCase
>
