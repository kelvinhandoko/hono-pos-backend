import z from 'zod'
import { baseResponseSchema } from '@/common/common.schema'

export const createOutletPayloadSchema = z.object({
  name: z.string().min(1).max(100).describe('The name of the outlet'),
  address: z.string().min(1).max(255).describe('The address of the outlet'),
  tenantId: z
    .string()
    .min(1)
    .describe('The tenant ID associated with the outlet'),
})

export type CreateOutletPayload = z.infer<typeof createOutletPayloadSchema>

export const createOutletResponseSchema = baseResponseSchema
