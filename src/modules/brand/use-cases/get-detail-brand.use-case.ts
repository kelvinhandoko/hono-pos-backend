import { PaginatedBrandQuery } from '@/entities/schemas/brand/get-brand.entities'
import { GetDetailBrandQuery } from '@/entities/schemas/brand/get-detail-brand.entities'
import { BrandRepository } from '@/modules/brand/brand.repository'

export const getDetailBrandUseCase =
  (repo: BrandRepository) => async (q: GetDetailBrandQuery) => {
    return await repo.getDetail(q)
  }
export type IgetDetailBrandUseCase = ReturnType<typeof getDetailBrandUseCase>
