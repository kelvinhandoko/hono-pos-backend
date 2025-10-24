import { CreateCategoryPayload } from '@/entities/category/create-category.entities'
import { CategoryRepository } from '@/modules/category/category.repository'

export const CreateCategoryUseCase = (repo: CategoryRepository) => async (payload: CreateCategoryPayload) => {
  const data = await repo.create(payload)
  if (!data) {
    throw new Error('Failed to create category')
  }
  return data
}

export type ICreateCategoryUseCase = ReturnType<typeof CreateCategoryUseCase>
