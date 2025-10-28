import { createRoute } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import * as HttpStatusPhrases from 'stoker/http-status-phrases'
import { jsonContent } from 'stoker/openapi/helpers'
import { createMessageObjectSchema } from 'stoker/openapi/schemas'
import z from 'zod'
import { getDetailTenantResponseSchema } from '@/entities/schemas/tenant/get-detail-tenant.entities'

const tags = ['Tenant']

export const getDetailTenantRoute = createRoute({
  path: '/detail/:id',
  method: 'get',
  description: 'Get details of a specific tenant for the authenticated user.',
  summary: 'Get Tenant Details',
  tags,
  request: {
    params: z.object({
      id: z
        .string()
        .min(1)
        .describe('The unique identifier of the outlet to delete'),
    }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      getDetailTenantResponseSchema,
      'Tenant details retrieved successfully',
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      createMessageObjectSchema(HttpStatusPhrases.UNAUTHORIZED),
      HttpStatusPhrases.UNAUTHORIZED,
    ),
  },
})

export type GetDetailTenantRoute = typeof getDetailTenantRoute
