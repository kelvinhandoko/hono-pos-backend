import { createRoute } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import { jsonContent, jsonContentRequired } from 'stoker/openapi/helpers'
import { createErrorSchema } from 'stoker/openapi/schemas'
import { registerOutputSchema, registerPayloadSchema } from '@/entities/auth/auth.schema'

const tags = ['v1/auth']

export const register = createRoute({
  path: '/register',
  method: 'post',
  tags,
  request: {
    body: jsonContentRequired(
      registerPayloadSchema,
      'The registration payload',
    ),
  },
  responses: {
    [HttpStatusCodes.CREATED]: jsonContent(
      registerOutputSchema,
      'The registered user details',
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(registerOutputSchema),
      'The validation error(s)',
    ),
  },
})

export type RegisterRoute = typeof register
