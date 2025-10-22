import type { UpdateOutletPayload } from '@/entities/outlet/update-outlet.entities'
import type { DbTransactionClient } from '@/lib/db'
import type { OutletRepository } from '@/modules/outlet/outlet.repository'

export function updateOutletUseCase(repo: OutletRepository) {
  return async (payload: UpdateOutletPayload, tx?: DbTransactionClient) => await repo.update(payload, tx)
}

export type IUpdateOutletUseCase = ReturnType<typeof updateOutletUseCase>
