export class BaseRepository {
  protected _fail(err: unknown): never {
    throw err
  }
}
