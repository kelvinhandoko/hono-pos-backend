import { createCategoryResponseSchema } from '@/entities/category/create-category.entities'
import { createTenantPayloadSchema } from '@/entities/tenant/create-tenant.entities'
import z from 'zod'

export const updateCategoryPayloadSchema = createTenantPayloadSchema.extend({
  id: z.string().min(1),
})

export type UpdateCategoryPayload = z.infer<typeof updateCategoryPayloadSchema>

export const updateCategoryResponseSchema = createCategoryResponseSchema

export type UpdateCategoryResponse = z.infer<typeof updateCategoryResponseSchema>
