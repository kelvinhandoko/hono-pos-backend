import { createRoute } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import * as HttpStatusPhrases from 'stoker/http-status-phrases'
import { jsonContent } from 'stoker/openapi/helpers'
import { createMessageObjectSchema } from 'stoker/openapi/schemas'
import z from 'zod'
import { getOutletDetailResponseSchema } from '@/entities/outlet/get-outlet-list.entities'

const tags = ['Outlet']

export const getOutletDetailRoute = createRoute({
  path: '/:tenantId/outlets/:id',
  method: 'get',
  description: 'Get detailed information about a specific outlet.',
  summary: 'Get Outlet Detail',
  tags,
  request: {
    params: z.object({
      id: z.string().min(1).describe('The unique identifier of the outlet'),
      tenantId: z.string().min(1).describe('The tenant ID'),
    }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      getOutletDetailResponseSchema,
      'Outlet details retrieved successfully',
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

export type GetOutletDetailRoute = typeof getOutletDetailRoute
