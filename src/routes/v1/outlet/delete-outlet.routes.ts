import { createRoute } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import * as HttpStatusPhrases from 'stoker/http-status-phrases'
import { jsonContent } from 'stoker/openapi/helpers'
import { createMessageObjectSchema } from 'stoker/openapi/schemas'
import z from 'zod'
import { deleteOutletResponseSchema } from '@/entities/outlet/delete-outlet.entities'

const tags = ['Outlet']

export const deleteOutletRoute = createRoute({
  path: '/:tenantId/outlets/:id',
  method: 'delete',
  description: 'Soft delete an outlet from the system.',
  summary: 'Delete Outlet',
  tags,
  request: {
    params: z.object({
      id: z.string().min(1).describe('The unique identifier of the outlet to delete'),
      tenantId: z.string().min(1).describe('The tenant ID'),
    }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      deleteOutletResponseSchema,
      'The outlet was deleted successfully',
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      createMessageObjectSchema(HttpStatusPhrases.UNAUTHORIZED),
      HttpStatusPhrases.UNAUTHORIZED,
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      createMessageObjectSchema('Outlet not found'),
      'Outlet not found',
    ),
  },
})

export type DeleteOutletRoute = typeof deleteOutletRoute
