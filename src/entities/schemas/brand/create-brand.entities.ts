import z from 'zod'

export const createBrandPayloadSchema = z.object({
  name: z.string().min(1).max(100),
  tenantId: z.string().min(1),
  userId: z.string().min(1),
  image: z.string(),
})

export type CreateBrandPayload = z.infer<typeof createBrandPayloadSchema>
