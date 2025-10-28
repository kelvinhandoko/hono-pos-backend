import z from 'zod'

export const getDetailBrandQuerySchema = z.discriminatedUnion('by', [
  z.object({
    by: z.literal('id'),
    identifier: z
      .string()
      .min(1)
      .describe('The unique identifier of the Brand'),
  }),
  z.object({
    by: z.literal('name'),
    identifier: z.string().min(1).describe('The name of the Brand'),
  }),
])

export type GetDetailBrandQuery = z.infer<typeof getDetailBrandQuerySchema>
