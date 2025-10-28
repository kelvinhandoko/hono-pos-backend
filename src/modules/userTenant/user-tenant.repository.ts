import type { CreateUserTenantPayload } from '@/entities/schemas/userTenant/create-user-tenant.entities'
import type { DbTransactionClient } from '@/lib/db'
import { BaseRepository } from '@/common/base.repository'
import { db } from '@/lib/db'

export class UserTenantRepository extends BaseRepository {
  async create(payload: CreateUserTenantPayload, tx?: DbTransactionClient) {
    try {
      const invoker = tx ?? db
      const created = await invoker.userTenant.create({
        data: {
          userId: payload.userId,
          tenantId: payload.tenantId,
        },
      })
      return created
    } catch (error) {
      this._fail(error)
    }
  }
}
