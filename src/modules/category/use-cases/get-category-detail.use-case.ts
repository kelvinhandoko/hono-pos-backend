import { CategoryRepository } from '@/modules/category/category.repository'

// export const getCategoryDetail
export const GetCategoryDetailUseCase = (repo: CategoryRepository) => async (id: string) => {
  const data = await repo.getDetailCategory(id)
  if (!data) {
    throw new Error('Failed to get category detail')
  }
  return data
}

export type IGetCategoryDetailUseCase = ReturnType<typeof GetCategoryDetailUseCase>
