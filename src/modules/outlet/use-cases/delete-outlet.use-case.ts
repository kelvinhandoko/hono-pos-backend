import type { DeleteOutletPayload } from '@/entities/outlet/delete-outlet.entities'
import type { DbTransactionClient } from '@/lib/db'
import type { OutletRepository } from '@/modules/outlet/outlet.repository'

export function deleteOutletUseCase(repo: OutletRepository) {
  return async (payload: DeleteOutletPayload, tx?: DbTransactionClient) => await repo.delete(payload, tx)
}

export type IDeleteOutletUseCase = ReturnType<typeof deleteOutletUseCase>
