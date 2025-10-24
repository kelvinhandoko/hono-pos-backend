import { createRoute } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import * as HttpStatusPhrases from 'stoker/http-status-phrases'
import { jsonContent, jsonContentRequired } from 'stoker/openapi/helpers'
import { createErrorSchema, createMessageObjectSchema } from 'stoker/openapi/schemas'
import z from 'zod'
import { createOutletPayloadSchema, createOutletResponseSchema } from '@/entities/outlet/create-outlet.entities'

const tags = ['Outlet']

export const createOutletRoute = createRoute({
  path: '/',
  method: 'post',
  description: 'Create a new outlet in the system for a specific tenant.',
  summary: 'Create Outlet',
  tags,
  request: {
    body: jsonContentRequired(
      createOutletPayloadSchema.omit({ tenantId: true }),
      'The outlet creation payload',
    ),
  },
  responses: {
    [HttpStatusCodes.CREATED]: jsonContent(
      createOutletResponseSchema,
      'The outlet was created successfully',
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(createOutletPayloadSchema),
      'The validation error(s)',
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      createMessageObjectSchema(HttpStatusPhrases.UNAUTHORIZED),
      HttpStatusPhrases.UNAUTHORIZED,
    ),
  },
})

export type CreateOutletRoute = typeof createOutletRoute
