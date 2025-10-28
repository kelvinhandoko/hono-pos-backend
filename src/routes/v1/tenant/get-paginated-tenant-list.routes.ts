import { createRoute } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import * as HttpStatusPhrases from 'stoker/http-status-phrases'
import { jsonContent } from 'stoker/openapi/helpers'
import {
  createErrorSchema,
  createMessageObjectSchema,
} from 'stoker/openapi/schemas'
import {
  paginatedTenantListQuerySchema,
  paginatedTenantListResponseSchema,
} from '@/entities/schemas/tenant/get-tenant-list.entities'

const tags = ['Tenant']

export const getPaginatedTenantListRoute = createRoute({
  path: '/',
  method: 'get',
  description: 'Get a paginated list of tenants for the authenticated user.',
  summary: 'Get Paginated Tenant List',
  tags,
  request: {
    query: paginatedTenantListQuerySchema.omit({ userId: true }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      paginatedTenantListResponseSchema,
      'Paginated tenant list retrieved successfully',
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(paginatedTenantListQuerySchema),
      'The validation error(s)',
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      createMessageObjectSchema(HttpStatusPhrases.UNAUTHORIZED),
      HttpStatusPhrases.UNAUTHORIZED,
    ),
  },
})

export type GetPaginatedTenantListRoute = typeof getPaginatedTenantListRoute
