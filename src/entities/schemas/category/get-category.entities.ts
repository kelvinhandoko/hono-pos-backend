import { getQuerySchema, paginatedQuerySchema } from '@/common/common.schema'
import z from 'zod'

export const getCategoryQuerySchema = getQuerySchema.extend({
  tenantId: z.string().min(1).describe('The unique identifier of the tenant'),
  createdById: z.string().min(1).optional().describe('Filter categories by the creator user ID'),
  updatedById: z.string().min(1).optional().describe('Filter categories by the updater user ID'),
})

export type GetCategoryQuery = z.infer<typeof getCategoryQuerySchema>

export const paginatedCategoryQuerySchema = getCategoryQuerySchema.extend(paginatedQuerySchema.shape)

export type PaginatedCategoryQuery = z.infer<typeof paginatedCategoryQuerySchema>

export const infiniteCategoryQuerySchema = getCategoryQuerySchema.extend(paginatedQuerySchema.shape)

export type InfiniteCategoryQuery = z.infer<typeof infiniteCategoryQuerySchema>

export const categoryDataResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdBy: z.string(),
  updatedBy: z.string().nullable(),
})

export const paginatedCategoryListResponseSchema = z.object({
  data: z.array(categoryDataResponseSchema).describe('List of category items'),
  meta: paginatedQuerySchema.shape,
})

export type PaginatedCategoryListResponse = z.infer<typeof paginatedCategoryListResponseSchema>

export const infiniteCategoryListResponseSchema = z.object({
  data: z.array(categoryDataResponseSchema).describe('List of category items'),
  meta: paginatedQuerySchema.shape,
})

export type InfiniteCategoryListResponse = z.infer<typeof infiniteCategoryListResponseSchema>
