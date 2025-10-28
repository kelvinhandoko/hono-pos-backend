import z from 'zod'
import {
  baseResponseSchema,
  getQuerySchema,
  infiniteMetaSchema,
  infiniteQuerySchema,
  paginatedMetaSchema,
  paginatedQuerySchema,
  sortEnum,
} from '@/common/common.schema'

export const getOutletListQuerySchema = getQuerySchema.extend({
  tenantId: z
    .string()
    .min(1)
    .describe('Filter outlets by the associated tenant ID'),
  sort: z
    .object({
      field: z
        .enum(['name', 'address', 'createdAt'])
        .describe('The field to sort by'),
      order: sortEnum,
    })
    .optional()
    .describe('Sorting options for the outlet list'),
})

export type GetOutletListQuery = z.infer<typeof getOutletListQuerySchema>

export const paginatedOutletListQuerySchema = getOutletListQuerySchema.extend(
  paginatedQuerySchema.shape,
)

export type PaginatedOutletListQuery = z.infer<
  typeof paginatedOutletListQuerySchema
>

export const infiniteOutletListQuerySchema = getOutletListQuerySchema.extend(
  infiniteQuerySchema.shape,
)

export type InfiniteOutletListQuery = z.infer<
  typeof infiniteOutletListQuerySchema
>

// Response schemas
export const outletItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
})

export const paginatedOutletListResponseSchema = baseResponseSchema.extend({
  data: z.array(outletItemSchema),
  meta: paginatedMetaSchema,
})

export type PaginatedOutletListResponse = z.infer<
  typeof paginatedOutletListResponseSchema
>

export const infiniteOutletListResponseSchema = baseResponseSchema.extend({
  data: z.array(outletItemSchema),
  meta: infiniteMetaSchema,
})

export type InfiniteOutletListResponse = z.infer<
  typeof infiniteOutletListResponseSchema
>

export const getOutletDetailResponseSchema = baseResponseSchema.extend({
  data: outletItemSchema,
})

export type GetOutletDetailResponse = z.infer<
  typeof getOutletDetailResponseSchema
>
