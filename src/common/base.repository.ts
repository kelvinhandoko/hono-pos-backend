import { DatabaseOperationError } from '@/entities/error/common'
import { env } from '@/env'

export class BaseRepository {
  protected _fail(err: unknown): never {
    if (env.NODE_ENV === 'development') {
      throw err
    }
    throw new DatabaseOperationError()
  }
}
