import {
  createCategoryPayloadSchema,
  createCategoryResponseSchema,
} from '@/entities/schemas/category/create-category.entities'
import z from 'zod'

export const updateCategoryPayloadSchema = createCategoryPayloadSchema.extend({
  id: z.string().min(1),
})

export type UpdateCategoryPayload = z.infer<typeof updateCategoryPayloadSchema>

export const updateCategoryResponseSchema = createCategoryResponseSchema

export type UpdateCategoryResponse = z.infer<typeof updateCategoryResponseSchema>
