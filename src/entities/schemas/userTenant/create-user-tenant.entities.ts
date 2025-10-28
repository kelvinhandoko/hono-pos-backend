import z from 'zod'
import { baseResponseSchema } from '@/common/common.schema'

export const createUserTenantPayloadSchema = z.object({
  userId: z.string().min(1),
  tenantId: z.string().min(1),
})

export type CreateUserTenantPayload = z.infer<
  typeof createUserTenantPayloadSchema
>

export const createUserTenantResponseSchema = baseResponseSchema
