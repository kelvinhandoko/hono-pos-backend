import { GetDetailCategoryQuery } from '@/entities/category/get-detail-category.entities'
import { CategoryRepository } from '@/modules/category/category.repository'

export const getCategoryDetailUseCase = (repo: CategoryRepository) => async (query: GetDetailCategoryQuery) => {
  const data = await repo.getDetailCategory(query)
  return data
}

export type IGetCategoryDetailUseCase = ReturnType<typeof getCategoryDetailUseCase>
