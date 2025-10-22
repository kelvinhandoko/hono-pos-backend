import z from 'zod'
import { baseResponseSchema } from '@/common/common.schema'
import { createTenantPayloadSchema } from '@/entities/tenant/create-tenant.entities'

export const updateTenantPayloadSchema = createTenantPayloadSchema.extend({
  id: z.string().describe('The unique identifier of the tenant to be updated').min(1),
}).omit({ userId: true })

export type UpdateTenantPayload = z.infer<typeof updateTenantPayloadSchema>

export const updateTenantResponseSchema = baseResponseSchema
