import type { db, DbTransactionClient } from '@/lib/db'

export class BaseRepository {
  constructor(protected readonly _db: DbTransactionClient | typeof db) {}

  protected _fail(err: unknown): never {
    throw err
  }
}
