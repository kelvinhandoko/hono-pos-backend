import { BaseRepository } from '@/common/base.repository'
import { CreateBrandPayload } from '@/entities/brand/create-brand.entities'
import { getBrandQuery, InfiniteBrandQuery, PaginatedBrandQuery } from '@/entities/brand/get-category.entities'
import { UpdateBrandPayload } from '@/entities/brand/update-brand.entities'
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
  async get(payload: getBrandQuery) {
    try {
      const whereClause: Prisma.BrandWhereInput = {
        tenantId: payload.tenantId,
      }

      if (payload.id) {
        whereClause.id = payload.id
      }
      if (payload.name) {
        whereClause.name = {
          contains: payload.name,
          mode: 'insensitive',
        }
      }

      if (payload.createdById) {
        whereClause.createdById = payload.createdById
      }

      if (payload.updatedById) {
        whereClause.updatedById = payload.updatedById
      }
      if (payload.search) {
        whereClause.OR = [
          {
            name: {
              contains: payload.search,
              mode: 'insensitive',
            },
          },
        ]
      }

      const brands = await db.brand.findFirst({
        where: whereClause,
      })

      return brands
    } catch (error) {
      this._fail(error)
    }
  }
  async getPaginated(query: PaginatedBrandQuery) {
    try {
      const brand = await db.brand.findMany({
        where: {
          tenantId: query.tenantId,
        },
        skip: query.page,
        take: query.limit,
      })

      const total = await db.category.count({
        where: {
          tenantId: query.tenantId,
        },
      })

      return {
        data: brand,
        total: total,
      }
    } catch (error) {
      this._fail(error)
    }
  }
  async getInfinite(query: InfiniteBrandQuery) {
    try {
      const brand = await db.brand.findMany({
        where: {
          tenantId: query.tenantId,
        },
        skip: query.page,
        take: query.limit,
      })

      const total = await db.category.count({
        where: {
          tenantId: query.tenantId,
        },
      })

      return {
        data: brand,
        total: total,
      }
    } catch (error) {
      this._fail(error)
    }
  }
}
