import type { CreateOutletPayload } from '@/entities/outlet/create-outlet.entities'
import type { DbTransactionClient } from '@/lib/db'
import type { OutletRepository } from '@/modules/outlet/outlet.repository'

export function createOutletUseCase(repo: OutletRepository) {
  return async (payload: CreateOutletPayload, tx?: DbTransactionClient) => await repo.create(payload, tx)
}

export type ICreateOutletUseCase = ReturnType<typeof createOutletUseCase>
