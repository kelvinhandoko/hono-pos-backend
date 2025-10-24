import { UpdateCategoryPayload } from '@/entities/category/update-category.entities'
import { CategoryRepository } from '@/modules/category/category.repository'

export const UpdateCategoryUseCase = (repo: CategoryRepository) => async (payload: UpdateCategoryPayload) => {
  const data = await repo.update(payload)
  if (!data) {
    throw new Error('Failed to update category')
  }
  return data
}

export type IUpdateCategoryUseCase = ReturnType<typeof UpdateCategoryUseCase>
