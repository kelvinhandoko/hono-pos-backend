import { GetDetailCategoryQuery } from '@/entities/schemas/category/get-detail-category.entities'
import { IGetCategoryDetailUseCase } from '@/modules/category/use-cases/get-category-detail.use-case'

export function getCategoryDetailController(deps: { getCategoryDetailUseCase: IGetCategoryDetailUseCase }) {
  return async (id: string) => {
    const { getCategoryDetailUseCase } = deps
    return await getCategoryDetailUseCase(id)
  }
}

export type IGetCategoryDetailController = ReturnType<typeof getCategoryDetailController>
