import z from 'zod'
import { baseResponseSchema } from '@/common/common.schema'

export const updateOutletPayloadSchema = z.object({
  id: z
    .string()
    .min(1)
    .describe('The unique identifier of the outlet to be updated'),
  name: z
    .string()
    .min(1)
    .max(100)
    .describe('The name of the outlet')
    .optional(),
  address: z
    .string()
    .min(1)
    .max(255)
    .describe('The address of the outlet')
    .optional(),
  tenantId: z
    .string()
    .min(1)
    .describe('The tenant ID associated with the outlet'),
})

export type UpdateOutletPayload = z.infer<typeof updateOutletPayloadSchema>

export const updateOutletResponseSchema = baseResponseSchema
