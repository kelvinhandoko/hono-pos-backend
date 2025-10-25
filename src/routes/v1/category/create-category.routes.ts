import { createCategoryPayloadSchema, createCategoryResponseSchema } from '@/entities/category/create-category.entities'
import { createRoute } from '@hono/zod-openapi'
import { jsonContent, jsonContentRequired } from 'stoker/openapi/helpers'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import * as HttpStatusPhrases from 'stoker/http-status-phrases'

import { createErrorSchema, createMessageObjectSchema } from 'stoker/openapi/schemas'

export const createCategoryRoute = createRoute({
  path: '/:tenantId',
  method: 'post',
  description: 'Create a new category in the system.',
  summary: 'Create Category',
  tags: ['Category'],
  // Further route definitions would go here
  request: {
    body: jsonContentRequired(createCategoryPayloadSchema.pick({ name: true }), 'The category creation payload'),
    params: createCategoryPayloadSchema.pick({ tenantId: true }),
  },
  responses: {
    [HttpStatusCodes.CREATED]: jsonContent(createCategoryResponseSchema, 'The created tenant details'),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(createCategoryPayloadSchema),
      'The validation error(s)',
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      createMessageObjectSchema(HttpStatusPhrases.UNAUTHORIZED),
      HttpStatusPhrases.UNAUTHORIZED,
    ),
  },
})

export type CreateCategoryRoute = typeof createCategoryRoute
