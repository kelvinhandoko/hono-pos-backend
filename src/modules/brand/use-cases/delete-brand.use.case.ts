import { DbTransactionClient } from '@/lib/db'
import { BrandRepository } from '@/modules/brand/brand.repository'

export const deleteBrandUseCase = (repo: BrandRepository) => async (id: string, tx?: DbTransactionClient) => {
  return await repo.delete(id, tx)
}
export type IDeleteBrandUseCase = ReturnType<typeof deleteBrandUseCase>
