import { CreateCategoryPayload, CreateCategoryResponse } from '@/entities/category/create-category.entities'
import {
  InfiniteCategoryListResponse,
  InfiniteCategoryQuery,
  PaginatedCategoryListResponse,
  PaginatedCategoryQuery,
} from '@/entities/category/get-category.entities'
import { UpdateCategoryPayload, UpdateCategoryResponse } from '@/entities/category/update-category.entities'
import { DbTransactionClient } from '@/lib/db'

export interface ICategoryRepository {
  create(payload: CreateCategoryPayload, tx?: DbTransactionClient): Promise<CreateCategoryResponse>
  update(payload: UpdateCategoryPayload, tx?: DbTransactionClient): Promise<UpdateCategoryResponse>
  getPaginatedList(query: PaginatedCategoryQuery): Promise<PaginatedCategoryListResponse>
  getInfiniteList(query: InfiniteCategoryQuery): Promise<InfiniteCategoryListResponse>
}
