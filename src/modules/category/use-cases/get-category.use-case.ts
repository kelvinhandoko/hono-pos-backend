import { PaginatedCategoryQuery } from '@/entities/schemas/category/get-category.entities'
import { CategoryRepository } from '@/modules/category/category.repository'

export const GetPaginatedCategoryUseCase =
  (repo: CategoryRepository) => async (query: PaginatedCategoryQuery) => {
    const data = await repo.getPaginatedList(query)
    if (!data) {
      throw new Error('Failed to get category list')
    }
    return data
  }

export type IGetPaginatedCategoryListUseCase = ReturnType<
  typeof GetPaginatedCategoryUseCase
>
