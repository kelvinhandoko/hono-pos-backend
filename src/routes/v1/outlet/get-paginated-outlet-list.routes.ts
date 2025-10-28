import { createRoute } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import * as HttpStatusPhrases from 'stoker/http-status-phrases'
import { jsonContent } from 'stoker/openapi/helpers'
import { createMessageObjectSchema } from 'stoker/openapi/schemas'
import {
  paginatedOutletListQuerySchema,
  paginatedOutletListResponseSchema,
} from '@/entities/schemas/outlet/get-outlet-list.entities'

const tags = ['Outlet']

export const getPaginatedOutletListRoute = createRoute({
  path: '/',
  method: 'get',
  description: 'Get a paginated list of outlets for a specific tenant.',
  summary: 'Get Paginated Outlet List',
  tags,
  request: {
    query: paginatedOutletListQuerySchema.omit({ tenantId: true }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      paginatedOutletListResponseSchema,
      'Paginated outlet list retrieved successfully',
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      createMessageObjectSchema(HttpStatusPhrases.UNAUTHORIZED),
      HttpStatusPhrases.UNAUTHORIZED,
    ),
    [HttpStatusCodes.INTERNAL_SERVER_ERROR]: jsonContent(
      createMessageObjectSchema(HttpStatusPhrases.INTERNAL_SERVER_ERROR),
      HttpStatusPhrases.INTERNAL_SERVER_ERROR,
    ),
  },
})

export type GetPaginatedOutletListRoute = typeof getPaginatedOutletListRoute
