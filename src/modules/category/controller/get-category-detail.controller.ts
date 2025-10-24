import { GetDetailCategoryQuery } from '@/entities/category/get-detail-category.entities'
import { IGetCategoryDetailUseCase } from '@/modules/category/use-cases/get-category-detail.use-case'

export function getCategoryDetailController(deps: { getCategoryDetailUseCase: IGetCategoryDetailUseCase }) {
  return async (query: GetDetailCategoryQuery) => {
    const { getCategoryDetailUseCase } = deps
    return await getCategoryDetailUseCase(query)
  }
}

export type IGetCategoryDetailController = ReturnType<typeof getCategoryDetailController>
