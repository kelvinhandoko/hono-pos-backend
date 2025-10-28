import {
  getQuerySchema,
  infiniteQuerySchema,
  paginatedQuerySchema,
} from '@/common/common.schema'
import z from 'zod'

export const getBrandQuerySchema = getQuerySchema.extend({
  id: z
    .string()
    .min(1)
    .optional()
    .describe('The unique identifier of the brand'),
  tenantId: z.string().min(1).describe('The unique identifier of the tenant'),
  createdById: z
    .string()
    .min(1)
    .optional()
    .describe('Filter brands by the creator user ID'),
  updatedById: z
    .string()
    .min(1)
    .optional()
    .describe('Filter brands by the updater user ID'),
})

export type getBrandQuery = z.infer<typeof getBrandQuerySchema>

export const paginatedBrandQuerySchema = getBrandQuerySchema.extend(
  paginatedQuerySchema.shape,
)

export type PaginatedBrandQuery = z.infer<typeof paginatedBrandQuerySchema>

export const infiniteBrandQuerySchema = getBrandQuerySchema.extend(
  infiniteQuerySchema.shape,
)

export type InfiniteBrandQuery = z.infer<typeof infiniteBrandQuerySchema>
