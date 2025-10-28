import { InfiniteCategoryQuery } from '@/entities/schemas/category/get-category.entities'
import { IGetInfiniteCategoryListUseCase } from '@/modules/category/use-cases/get-category-infinite.use-case'

export function getInfiniteCategoryController(deps: {
  getInfiniteCategoryUseCase: IGetInfiniteCategoryListUseCase
}) {
  return async (query: InfiniteCategoryQuery) => {
    const { getInfiniteCategoryUseCase } = deps
    return await getInfiniteCategoryUseCase(query)
  }
}

export type IGetInfiniteCategoryController = ReturnType<
  typeof getInfiniteCategoryController
>
