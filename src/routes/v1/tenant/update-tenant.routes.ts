import { createRoute } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import * as HttpStatusPhrases from 'stoker/http-status-phrases'
import { jsonContent, jsonContentRequired } from 'stoker/openapi/helpers'
import { createErrorSchema, createMessageObjectSchema } from 'stoker/openapi/schemas'
import z from 'zod'
import { updateTenantPayloadSchema, updateTenantResponseSchema } from '@/entities/tenant/update-tenant.entities'

const tags = ['Tenant']

export const updateTenantRoute = createRoute({
  path: '/:id',
  method: 'put',
  description: 'Update an existing tenant in the system.',
  summary: 'Update Tenant',
  tags,
  request: {
    params: z.object({
      id: z.string().min(1).describe('The unique identifier of the tenant to update'),
    }),
    body: jsonContentRequired(
      updateTenantPayloadSchema.omit({ id: true }),
      'The tenant update payload',
    ),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      updateTenantResponseSchema,
      'The tenant was updated successfully',
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(updateTenantPayloadSchema),
      'The validation error(s)',
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      createMessageObjectSchema(HttpStatusPhrases.UNAUTHORIZED),
      HttpStatusPhrases.UNAUTHORIZED,
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      createMessageObjectSchema('Tenant not found'),
      'Tenant not found',
    ),
  },
})

export type UpdateTenantRoute = typeof updateTenantRoute
