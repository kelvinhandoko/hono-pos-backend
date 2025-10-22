import z from 'zod'
import { baseResponseSchema, getQuerySchema, infiniteMetaSchema, infiniteQuerySchema, paginatedMetaSchema, paginatedQuerySchema, sortEnum } from '@/common/common.schema'

export const getTenantListQuerySchema = getQuerySchema.extend({
  userId: z.string().min(1).describe('Filter tenants by the associated user ID'),
  sort: z.object({
    field: z.enum(['name', 'createdAt']).describe('The field to sort by'),
    order: sortEnum,
  }).optional().describe('Sorting options for the tenant list'),
})

export type GetTenantListQuery = z.infer<typeof getTenantListQuerySchema>

export const paginatedTenantListQuerySchema = getTenantListQuerySchema.extend(paginatedQuerySchema.shape)

export type PaginatedTenantListQuery = z.infer<typeof paginatedTenantListQuerySchema>

export const infiniteTenantListQuerySchema = getTenantListQuerySchema.extend(infiniteQuerySchema.shape)

export type InfiniteTenantListQuery = z.infer<typeof infiniteTenantListQuerySchema>

export const tenantItemSchema = z.object({
  id: z.string(),
  name: z.string(),
})

export const paginatedTenantListResponseSchema = baseResponseSchema.extend({
  data: z.array(tenantItemSchema),
  meta: paginatedMetaSchema,
})

export type PaginatedTenantListResponse = z.infer<typeof paginatedTenantListResponseSchema>

export const infiniteTenantListResponseSchema = baseResponseSchema.extend({
  data: z.array(tenantItemSchema),
  meta: infiniteMetaSchema,
})

export type InfiniteTenantListResponse = z.infer<typeof infiniteTenantListResponseSchema>
