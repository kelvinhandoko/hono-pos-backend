import { NotFoundError } from '@/entities/error/common'
import { CategoryRepository } from '@/modules/category/category.repository'

export const GetCategoryDetailUseCase =
  (repo: CategoryRepository) => async (id: string) => {
    const data = await repo.getDetailCategory(id)

    if (!data) {
      throw new NotFoundError('Category not found')
    }

    return data
  }

export type IGetCategoryDetailUseCase = ReturnType<
  typeof GetCategoryDetailUseCase
>
