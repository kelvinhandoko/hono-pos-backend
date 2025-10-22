import { createRoute } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import * as HttpStatusPhrases from 'stoker/http-status-phrases'
import { jsonContent } from 'stoker/openapi/helpers'
import { createMessageObjectSchema } from 'stoker/openapi/schemas'
import z from 'zod'
import { infiniteOutletListQuerySchema, infiniteOutletListResponseSchema } from '@/entities/outlet/get-outlet-list.entities'

const tags = ['Outlet']

export const getInfiniteOutletListRoute = createRoute({
  path: '/:tenantId/outlets/infinite',
  method: 'get',
  description: 'Get an infinite scroll list of outlets for a specific tenant.',
  summary: 'Get Infinite Outlet List',
  tags,
  request: {
    params: z.object({
      tenantId: z.string().min(1).describe('The tenant ID'),
    }),
    query: infiniteOutletListQuerySchema.omit({ tenantId: true }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      infiniteOutletListResponseSchema,
      'Infinite scroll outlet list retrieved successfully',
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      createMessageObjectSchema(HttpStatusPhrases.UNAUTHORIZED),
      HttpStatusPhrases.UNAUTHORIZED,
    ),
  },
})

export type GetInfiniteOutletListRoute = typeof getInfiniteOutletListRoute
