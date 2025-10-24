import z from 'zod'

export const createCategoryPayloadSchema = z.object({
  name: z.string().min(1).max(100),
  tenantId: z.string().min(1),
  createdById: z.string().min(1),
})

export type CreateCategoryPayload = z.infer<typeof createCategoryPayloadSchema>

export const createCategoryResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  tenantId: z.string(),
  createdById: z.string(),
  updatedById: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
})

export type CreateCategoryResponse = z.infer<typeof createCategoryResponseSchema>
