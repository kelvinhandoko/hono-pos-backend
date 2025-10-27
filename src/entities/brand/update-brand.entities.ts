import { createBrandPayloadSchema } from '@/entities/brand/create-brand.entities'
import z from 'zod'

export const updateBrandPayloadSchema = createBrandPayloadSchema.extend({
  id: z.string().min(1),
})

export type UpdateBrandPayload = z.infer<typeof updateBrandPayloadSchema>
