import { UpdateCategoryPayload } from '@/entities/schemas/category/update-category.entities'
import { DbTransactionClient } from '@/lib/db'
import { CategoryRepository } from '@/modules/category/category.repository'

export const UpdateCategoryUseCase =
  (repo: CategoryRepository) =>
  async (payload: UpdateCategoryPayload, tx?: DbTransactionClient) => {
    const data = await repo.update(payload, tx)
    if (!data) {
      throw new Error('Failed to update category')
    }
    return data
  }

export type IUpdateCategoryUseCase = ReturnType<typeof UpdateCategoryUseCase>
