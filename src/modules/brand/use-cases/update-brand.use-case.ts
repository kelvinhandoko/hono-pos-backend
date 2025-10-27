import { UpdateBrandPayload } from '@/entities/brand/update-brand.entities'
import { DbTransactionClient } from '@/lib/db'
import { BrandRepository } from '@/modules/brand/brand.repository'

export const updateBrandUseCase =
  (repo: BrandRepository) => async (payload: UpdateBrandPayload, tx?: DbTransactionClient) => {
    return await repo.update(payload, tx)
  }
export type IUpdateBrandUseCase = ReturnType<typeof updateBrandUseCase>
