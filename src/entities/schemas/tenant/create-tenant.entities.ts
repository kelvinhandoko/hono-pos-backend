import z from 'zod'
import { baseResponseSchema } from '@/common/common.schema'

export const createTenantPayloadSchema = z.object({
  name: z.string().min(1).max(100),
  userId: z.string().min(1),
})

export type CreateTenantPayload = z.infer<typeof createTenantPayloadSchema>

export const createTenantResponseSchema = baseResponseSchema
