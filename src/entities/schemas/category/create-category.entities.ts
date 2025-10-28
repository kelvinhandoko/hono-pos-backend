import { baseResponseSchema } from '@/common/common.schema'
import z from 'zod'

export const createCategoryPayloadSchema = z.object({
  name: z.string().min(1).max(100),
  tenantId: z.string().min(1),
  userId: z.string().min(1),
})

export type CreateCategoryPayload = z.infer<typeof createCategoryPayloadSchema>

export const createCategoryResponseSchema = baseResponseSchema.extend({
  name: z.string(),
})

export type CreateCategoryResponse = z.infer<
  typeof createCategoryResponseSchema
>
