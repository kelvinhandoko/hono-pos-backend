import { PaginatedCategoryQuery } from '@/entities/schemas/category/get-category.entities'
import { IGetPaginatedCategoryListUseCase } from '@/modules/category/use-cases/get-category.use-case'

export function getPaginateCategoryController(deps: {
  getPaginateCategoryUseCase: IGetPaginatedCategoryListUseCase
}) {
  return async (query: PaginatedCategoryQuery) => {
    const { getPaginateCategoryUseCase } = deps
    return await getPaginateCategoryUseCase(query)
  }
}

export type IGetPaginateCategoryController = ReturnType<
  typeof getPaginateCategoryController
>
