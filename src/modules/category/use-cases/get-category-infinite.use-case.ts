import { InfiniteCategoryQuery } from '@/entities/schemas/category/get-category.entities'
import { CategoryRepository } from '@/modules/category/category.repository'

export const GetInfiniteCategoryUseCase = (repo: CategoryRepository) => async (query: InfiniteCategoryQuery) => {
  const data = await repo.getInfiniteList(query)
  if (!data) {
    throw new Error('Failed to get category list')
  }
  return data
}

export type IGetInfiniteCategoryListUseCase = ReturnType<typeof GetInfiniteCategoryUseCase>
