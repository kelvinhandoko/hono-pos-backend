import type { DbTransactionClient } from '@/lib/db'
import { db } from '@/lib/db'

export class TransactionManagerService {
  startTransaction<T>(
    cb: (tx: DbTransactionClient) => Promise<T>,
    parent?: typeof db,
  ): Promise<T> {
    const invoker = parent ?? db
    return invoker.$transaction(cb)
  }
}
