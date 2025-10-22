import { createRoute } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import * as HttpStatusPhrases from 'stoker/http-status-phrases'
import { jsonContent, jsonContentRequired } from 'stoker/openapi/helpers'
import { createErrorSchema, createMessageObjectSchema } from 'stoker/openapi/schemas'
import { createTenantPayloadSchema, createTenantResponseSchema } from '@/entities/tenant/create-tenant.entities'

const tags = ['Tenant']

export const createTenantRoute = createRoute({
  path: '/',
  method: 'post',
  description: 'Create a new tenant in the system.',
  summary: 'Create Tenant',
  tags,
  request: {
    body: jsonContentRequired(
      createTenantPayloadSchema,
      'The tenant creation payload',
    ),
  },
  responses: {
    [HttpStatusCodes.CREATED]: jsonContent(
      createTenantResponseSchema,
      'The created tenant details',
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(createTenantPayloadSchema),
      'The validation error(s)',
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      createMessageObjectSchema(HttpStatusPhrases.UNAUTHORIZED),
      HttpStatusPhrases.UNAUTHORIZED,
    ),
  },
})

export type CreateTenantRoute = typeof createTenantRoute
