import type { Prisma } from '@prisma/client'
import type { CreateOutletPayload } from '@/entities/schemas/outlet/create-outlet.entities'
import type { DeleteOutletPayload } from '@/entities/schemas/outlet/delete-outlet.entities'
import type {
  GetOutletListQuery,
  InfiniteOutletListQuery,
  PaginatedOutletListQuery,
} from '@/entities/schemas/outlet/get-outlet-list.entities'
import type { UpdateOutletPayload } from '@/entities/schemas/outlet/update-outlet.entities'
import type { DbTransactionClient } from '@/lib/db'
import { BaseRepository } from '@/common/base.repository'
import { db } from '@/lib/db'

export class OutletRepository extends BaseRepository {
  async create(payload: CreateOutletPayload, tx?: DbTransactionClient) {
    try {
      const invoker = tx ?? db

      const outlet = await invoker.outlet.create({
        data: {
          name: payload.name,
          address: payload.address,
          tenantId: payload.tenantId,
        },
      })
      return outlet
    } catch (error) {
      this._fail(error)
    }
  }

  async update(payload: UpdateOutletPayload, tx?: DbTransactionClient) {
    try {
      const invoker = tx ?? db

      const updateData: Prisma.OutletUpdateInput = {}
      if (payload.name !== undefined) updateData.name = payload.name
      if (payload.address !== undefined) updateData.address = payload.address

      const updated = await invoker.outlet.update({
        data: updateData,
        where: {
          id: payload.id,
          tenantId: payload.tenantId,
        },
      })
      return updated
    } catch (error) {
      this._fail(error)
    }
  }

  async delete(payload: DeleteOutletPayload, tx?: DbTransactionClient) {
    try {
      const invoker = tx ?? db

      const deleted = await invoker.outlet.update({
        data: {
          deletedAt: new Date(),
        },
        where: {
          id: payload.id,
          tenantId: payload.tenantId,
        },
      })
      return deleted
    } catch (error) {
      this._fail(error)
    }
  }

  async getById(id: string, tenantId: string) {
    try {
      const outlet = await db.outlet.findFirst({
        where: {
          id,
          tenantId,
          deletedAt: null,
        },
      })
      return outlet
    } catch (error) {
      this._fail(error)
    }
  }

  private _getList(q: GetOutletListQuery) {
    try {
      const { search, tenantId, sort } = q
      const whereClause: Prisma.OutletWhereInput = {
        tenantId,
        deletedAt: null,
      }
      const sortClause: Prisma.OutletOrderByWithRelationInput = {}
      if (search) {
        whereClause.OR = [
          { name: { contains: search, mode: 'insensitive' } },
          { address: { contains: search, mode: 'insensitive' } },
        ]
      }

      if (sort) {
        sortClause[sort.field] = sort.order
      }

      return db.outlet.paginate({ where: whereClause, orderBy: sortClause })
    } catch (error) {
      this._fail(error)
    }
  }

  async getPaginatedList(q: PaginatedOutletListQuery) {
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

  async getInfiniteList(q: InfiniteOutletListQuery) {
    try {
      const [data, meta] = await this._getList(q).withCursor({ limit: q.limit, after: q.cursor })
      return { data, meta }
    } catch (error) {
      this._fail(error)
    }
  }
}
