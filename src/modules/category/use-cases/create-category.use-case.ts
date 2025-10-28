import { CreateCategoryPayload } from '@/entities/schemas/category/create-category.entities'
import { DbTransactionClient } from '@/lib/db'
import { CategoryRepository } from '@/modules/category/category.repository'

export const CreateCategoryUseCase =
  (repo: CategoryRepository) => async (payload: CreateCategoryPayload, tx?: DbTransactionClient) => {
    const data = await repo.create(payload, tx)
    if (!data) {
      throw new Error('Failed to create category')
    }
    return data
  }

export type ICreateCategoryUseCase = ReturnType<typeof CreateCategoryUseCase>
