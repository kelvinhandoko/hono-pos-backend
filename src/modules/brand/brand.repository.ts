import { BaseRepository } from '@/common/base.repository'
import { CreateBrandPayload } from '@/entities/schemas/brand/create-brand.entities'
import {
  getBrandQuery,
  InfiniteBrandQuery,
  PaginatedBrandQuery,
} from '@/entities/schemas/brand/get-brand.entities'
import { UpdateBrandPayload } from '@/entities/schemas/brand/update-brand.entities'
import { GetDetailCategoryQuery } from '@/entities/schemas/category/get-detail-category.entities'
import { db, DbTransactionClient } from '@/lib/db'
import { Prisma } from '@prisma/client'

export class BrandRepository extends BaseRepository {
  async create(payload: CreateBrandPayload, tx?: DbTransactionClient) {
    try {
      const invoker = tx ?? db

      const brand = await invoker.brand.create({
        data: {
          name: payload.name,
          tenantId: payload.tenantId,
          createdById: payload.userId,
          image: payload.image,
        },
      })
      return brand
    } catch (error) {
      this._fail(error)
    }
  }

  async update(payload: UpdateBrandPayload, tx?: DbTransactionClient) {
    try {
      const invoker = tx ?? db

      const updateData = await invoker.brand.update({
        data: {
          name: payload.name,
          image: payload.image,
          updatedById: payload.userId,
        },
        where: {
          id: payload.id,
        },
      })

      return updateData
    } catch (error) {
      this._fail(error)
    }
  }

  async delete(id: string, tx?: DbTransactionClient) {
    try {
      const invoker = tx ?? db

      return await invoker.brand.delete({
        where: {
          id,
        },
      })
    } catch (error) {
      this._fail(error)
    }
  }

  async getDetail(q: GetDetailCategoryQuery) {
    try {
      const data = await db.brand.findFirst({
        where: { [q.by]: q.identifier },
      })
      return data
    } catch (error) {
      this._fail(error)
    }
  }

  private _getQuery(query: getBrandQuery) {
    const whereClause: Prisma.BrandWhereInput = {
      tenantId: query.tenantId,
    }
    if (query.search) {
      whereClause.name = {
        contains: query.search,
        mode: 'insensitive',
      }
    }
    if (query.createdById) {
      whereClause.createdById = query.createdById
    }

    if (query.updatedById) {
      whereClause.updatedById = query.updatedById
    }

    return db.brand.paginate({ where: whereClause })
  }

  async getPaginatedList(query: PaginatedBrandQuery) {
    try {
      const [data, meta] = await this._getQuery(query).withPages({
        page: query.page,
        limit: query.limit,
      })
      return { data, meta }
    } catch (error) {
      this._fail(error)
    }
  }

  async getInfiniteList(query: InfiniteBrandQuery) {
    try {
      const [data, meta] = await this._getQuery(query).withCursor({
        after: query.cursor,
        limit: query.limit,
      })
      return { data, meta }
    } catch (error) {
      this._fail(error)
    }
  }
}
