import z from 'zod'
import { baseResponseSchema } from '@/common/common.schema'

export const getDetailTenantQuerySchema = z.object({
  id: z.string().describe('The unique identifier of the tenant').min(1),
})

export type GetDetailTenantQuery = z.infer<typeof getDetailTenantQuerySchema>

export const getDetailTenantResponseSchema = baseResponseSchema.extend({
  id: z.string().describe('The unique identifier of the tenant'),
  name: z.string().describe('The name of the tenant'),
})

export type GetDetailTenantResponse = z.infer<typeof getDetailTenantResponseSchema>
