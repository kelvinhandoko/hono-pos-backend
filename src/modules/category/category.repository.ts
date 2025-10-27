import { BaseRepository } from '@/common/base.repository'
import { CreateCategoryPayload } from '@/entities/category/create-category.entities'
import {
  InfiniteCategoryListResponse,
  InfiniteCategoryQuery,
  PaginatedCategoryListResponse,
  PaginatedCategoryQuery,
} from '@/entities/category/get-category.entities'
import { GetDetailCategoryQuery } from '@/entities/category/get-detail-category.entities'
import { UpdateCategoryPayload } from '@/entities/category/update-category.entities'

import { db, DbTransactionClient } from '@/lib/db'

export class CategoryRepository extends BaseRepository {
  async create(payload: CreateCategoryPayload, tx?: DbTransactionClient) {
    try {
      const invoker = tx ?? db

      const category = await invoker.category.create({
        data: {
          name: payload.name,
          tenantId: payload.tenantId,
          createdById: payload.userId,
        },
      })

      return category
    } catch (error) {
      this._fail(error)
    }
  }
  async update(payload: UpdateCategoryPayload, tx?: DbTransactionClient) {
    try {
      const invoker = tx ?? db

      const updateData = await invoker.category.update({
        data: {
          name: payload.name,
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
  async getPaginatedList(query: PaginatedCategoryQuery): Promise<PaginatedCategoryListResponse> {
    try {
      const data = await db.category.findMany({
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
      const response: PaginatedCategoryListResponse = {
        data: data.map((item) => ({
          id: item.id,
          name: item.name,
          createdBy: item.createdById,
          updatedBy: item.updatedById,
        })),
        meta: {
          total,
          skip: query.page,
          take: query.limit,
        },
      }
      return response
    } catch (error) {
      this._fail(error)
    }
  }
  async getInfiniteList(query: InfiniteCategoryQuery): Promise<InfiniteCategoryListResponse> {
    try {
      const data = await db.category.findMany({
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
      const response: InfiniteCategoryListResponse = {
        data: data.map((item) => ({
          id: item.id,
          name: item.name,
          createdBy: item.createdById,
          updatedBy: item.updatedById,
        })),
        meta: {
          total,
          skip: query.page,
          take: query.limit,
        },
      }
      return response
    } catch (error) {
      this._fail(error)
    }
  }
  async getDetailCategory(id: string) {
    try {
      const category = await db.category.findUnique({
        where: { id },
        select: { id: true, name: true, createdBy: { select: { name: true } }, updatedBy: { select: { name: true } } },
      })
      if (!category) return null

      return {
        id: category.id,
        name: category.name,
        createdBy: category.createdBy.name,
        updatedBy: category?.updatedBy?.name,
      }
    } catch (error) {
      this._fail(error)
    }
  }

  async getDetailByName(name: string, tenantId: string) {
    try {
      const category = await db.category.findFirst({
        where: { name, tenantId },
      })
      return category
    } catch (error) {
      this._fail(error)
    }
  }
}
