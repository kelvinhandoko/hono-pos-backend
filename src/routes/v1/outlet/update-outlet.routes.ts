import { createRoute } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import * as HttpStatusPhrases from 'stoker/http-status-phrases'
import { jsonContent, jsonContentRequired } from 'stoker/openapi/helpers'
import { createErrorSchema, createMessageObjectSchema } from 'stoker/openapi/schemas'
import z from 'zod'
import { updateOutletPayloadSchema, updateOutletResponseSchema } from '@/entities/schemas/outlet/update-outlet.entities'

const tags = ['Outlet']

export const updateOutletRoute = createRoute({
  path: '/:id',
  method: 'put',
  description: 'Update an existing outlet in the system.',
  summary: 'Update Outlet',
  tags,
  request: {
    params: z.object({
      id: z.string().min(1).describe('The unique identifier of the outlet to update'),
    }),
    body: jsonContentRequired(
      updateOutletPayloadSchema.omit({ id: true, tenantId: true }),
      'The outlet update payload',
    ),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(updateOutletResponseSchema, 'The outlet was updated successfully'),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(updateOutletPayloadSchema),
      'The validation error(s)',
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      createMessageObjectSchema(HttpStatusPhrases.UNAUTHORIZED),
      HttpStatusPhrases.UNAUTHORIZED,
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(createMessageObjectSchema('Outlet not found'), 'Outlet not found'),
  },
})

export type UpdateOutletRoute = typeof updateOutletRoute
