import { createRoute } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import * as HttpStatusPhrases from 'stoker/http-status-phrases'
import { jsonContent } from 'stoker/openapi/helpers'
import { createErrorSchema, createMessageObjectSchema } from 'stoker/openapi/schemas'
import {
  infiniteTenantListQuerySchema,
  infiniteTenantListResponseSchema,
} from '@/entities/schemas/tenant/get-tenant-list.entities'

const tags = ['Tenant']

export const getInfiniteTenantListRoute = createRoute({
  path: '/infinite',
  method: 'get',
  description: 'Get an infinite scroll list of tenants for the authenticated user.',
  summary: 'Get Infinite Tenant List',
  tags,
  request: {
    query: infiniteTenantListQuerySchema.omit({ userId: true }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      infiniteTenantListResponseSchema,
      'Infinite scroll tenant list retrieved successfully',
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(infiniteTenantListQuerySchema),
      'The validation error(s)',
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      createMessageObjectSchema(HttpStatusPhrases.UNAUTHORIZED),
      HttpStatusPhrases.UNAUTHORIZED,
    ),
  },
})

export type GetInfiniteTenantListRoute = typeof getInfiniteTenantListRoute
