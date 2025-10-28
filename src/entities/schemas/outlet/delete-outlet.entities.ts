import z from 'zod'
import { baseResponseSchema } from '@/common/common.schema'

export const deleteOutletPayloadSchema = z.object({
  id: z.string().min(1).describe('The unique identifier of the outlet to be deleted'),
  tenantId: z.string().min(1).describe('The tenant ID associated with the outlet'),
})

export type DeleteOutletPayload = z.infer<typeof deleteOutletPayloadSchema>

export const deleteOutletResponseSchema = baseResponseSchema
