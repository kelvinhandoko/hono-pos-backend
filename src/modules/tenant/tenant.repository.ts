import type { Prisma } from '@prisma/client'
import type { CreateTenantPayload } from '@/entities/tenant/create-tenant.entities'
import type { GetDetailTenantQuery } from '@/entities/tenant/get-detail-tenant.entities'
import type {
  GetTenantListQuery,
  InfiniteTenantListQuery,
  PaginatedTenantListQuery,
} from '@/entities/tenant/get-tenant-list.entities'
import type { UpdateTenantPayload } from '@/entities/tenant/update-tenant.entities'
import type { DbTransactionClient } from '@/lib/db'
import { BaseRepository } from '@/common/base.repository'
import { db } from '@/lib/db'

// jkabsdjasbd
export class TenantRepository extends BaseRepository {
  async create(payload: CreateTenantPayload, tx?: DbTransactionClient) {
    try {
      const invoker = tx ?? db

      const updated = await invoker.tenant.create({
        data: {
          name: payload.name,
        },
      })
      return updated
    } catch (error) {
      this._fail(error)
    }
  }

  async update(payload: UpdateTenantPayload, tx?: DbTransactionClient) {
    try {
      const invoker = tx ?? db

      const updated = await invoker.tenant.update({
        data: {
          name: payload.name,
        },
        where: {
          id: payload.id,
        },
      })
      return updated
    } catch (error) {
      this._fail(error)
    }
  }

  private _getList(q: GetTenantListQuery) {
    try {
      const { search, userId, sort } = q
      const whereClause: Prisma.TenantWhereInput = {
        users: { some: { userId } },
      }
      const sortClause: Prisma.TenantOrderByWithRelationInput = {}
      if (search) {
        whereClause.name = { contains: search, mode: 'insensitive' }
      }

      if (sort) {
        sortClause[sort.field] = sort.order
      }

      return db.tenant.paginate({ where: whereClause, orderBy: sortClause })
    } catch (error) {
      this._fail(error)
    }
  }

  async getPaginatedList(q: PaginatedTenantListQuery) {
    try {
      const [data, meta] = await this._getList(q).withPages({
        limit: q.takeAll ? null : q.limit,
        page: q.page,
      })
      return { data, meta }
    } catch (error) {
      this._fail(error)
    }
  }

  async getInfiniteList(q: InfiniteTenantListQuery) {
    try {
      const [data, meta] = await this._getList(q).withCursor({ limit: q.limit, after: q.cursor })
      return { data, meta }
    } catch (error) {
      this._fail(error)
    }
  }

  async getDetail(q: GetDetailTenantQuery) {
    try {
      const tenant = await db.tenant.findFirst({
        where: { id: q.id },
      })
      return tenant
    } catch (error) {
      this._fail(error)
    }
  }
}
