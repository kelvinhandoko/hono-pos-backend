import { createRoute } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import * as HttpStatusPhrases from 'stoker/http-status-phrases'
import { jsonContent } from 'stoker/openapi/helpers'
import { createMessageObjectSchema } from 'stoker/openapi/schemas'
import z from 'zod'
import { getDetailCategoryResponseSchema } from '@/entities/category/get-detail-category.entities'

const tags = ['Category']

export const getCategoryDetailRoute = createRoute({
  path: '/:by/:identifier',
  method: 'get',
  description: 'Get detailed information about a specific category by ID or name.',
  summary: 'Get Category Detail',
  tags,
  request: {
    params: z.object({
      by: z.enum(['id', 'name']).describe('Search category by id or name'),
      identifier: z.string().min(1).describe('The ID or name of the category'),
    }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(getDetailCategoryResponseSchema, 'Category details retrieved successfully'),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      createMessageObjectSchema(HttpStatusPhrases.UNAUTHORIZED),
      HttpStatusPhrases.UNAUTHORIZED,
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(createMessageObjectSchema('Category not found'), 'Category not found'),
  },
})

export type GetCategoryDetailRoute = typeof getCategoryDetailRoute
