import { BaseRepository } from '@/common/base.repository'
import { CreateCategoryPayload, CreateCategoryResponse } from '@/entities/category/create-category.entities'
import {
  PaginatedCategoryQuery,
  PaginatedCategoryListResponse,
  InfiniteCategoryQuery,
  InfiniteCategoryListResponse,
} from '@/entities/category/get-category.entities'
import { UpdateCategoryPayload, UpdateCategoryResponse } from '@/entities/category/update-category.entities'
import { ICategoryRepository } from '@/interfaces/category/category.repository.interface'
import { db, DbTransactionClient } from '@/lib/db'

export class CategoryRepository extends BaseRepository implements ICategoryRepository {
  async create(payload: CreateCategoryPayload, tx?: DbTransactionClient): Promise<CreateCategoryResponse> {
    try {
      const invoker = tx ?? db

      const category = await invoker.category.create({
        data: {
          name: payload.name,
          tenantId: payload.tenantId,
          createdById: payload.createdById,
        },
      })
      const response = {
        id: category.id,
        name: category.name,
        tenantId: category.tenantId,
        createdById: category.createdById,
        createdAt: category.createdAt.toISOString(),
        updatedAt: category.updatedAt.toISOString(),
        deletedAt: category.deletedAt ? category.deletedAt.toISOString() : null,
        updatedById: category.updatedById,
      }
      return response
    } catch (error) {
      this._fail(error)
    }
  }
  async update(payload: UpdateCategoryPayload, tx?: DbTransactionClient): Promise<UpdateCategoryResponse> {
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
      const response = {
        id: updateData.id,
        name: updateData.name,
        tenantId: updateData.tenantId,
        createdById: updateData.createdById,
        updatedById: updateData.updatedById,
        createdAt: updateData.createdAt.toISOString(),
        updatedAt: updateData.updatedAt.toISOString(),
        deletedAt: updateData.deletedAt ? updateData.deletedAt.toISOString() : null,
      }
      return response
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
}
