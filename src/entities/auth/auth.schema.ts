import z from 'zod'
import { baseResponseSchema } from '@/entities/common/common.schema'

export const registerPayloadSchema = z.object({
  email: z.email().min(1),
  password: z.string().min(1),
  name: z.string().min(1),
})

export const registerOutputSchema = baseResponseSchema.extend({
  data: z.object({
    email: z.email(),
  }),
})
