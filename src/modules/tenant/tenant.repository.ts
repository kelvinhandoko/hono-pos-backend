import type { CreateTenantPayload } from '@/entities/tenant/create-tenant.entities'
import { BaseRepository } from '@/common/base.repository'

export class TenantRepository extends BaseRepository {
  async create(payload: CreateTenantPayload) {
    try {
      const created = await this._db.tenant.create({
        data: {
          name: payload.name,
        },
      })
      return created
    }
    catch (error) {
      this._fail(error)
    }
  }
}
