import { CreateBrandPayload } from '@/entities/schemas/brand/create-brand.entities'
import { DbTransactionClient } from '@/lib/db'
import { BrandRepository } from '@/modules/brand/brand.repository'

export const createBrandUseCase =
  (repo: BrandRepository) => async (payload: CreateBrandPayload, tx?: DbTransactionClient) => {
    return await repo.create(payload, tx)
  }

export type ICreateBrandUseCase = ReturnType<typeof createBrandUseCase>
