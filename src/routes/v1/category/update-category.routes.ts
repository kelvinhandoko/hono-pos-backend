import { updateCategoryPayloadSchema, updateCategoryResponseSchema } from '@/entities/category/update-category.entities'
import { createRoute } from '@hono/zod-openapi'
import { jsonContentRequired } from 'stoker/openapi/helpers'
import { createCategoryPayloadSchema, createCategoryResponseSchema } from '@/entities/category/create-category.entities'
import { jsonContent } from 'stoker/openapi/helpers'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import * as HttpStatusPhrases from 'stoker/http-status-phrases'
import { createErrorSchema, createMessageObjectSchema } from 'stoker/openapi/schemas'

export const updateCategoryRoute = createRoute({
  path: '/:tenantId/:id',
  method: 'put',
  description: 'Update an existing category in the system.',
  summary: 'Update Category',
  tags: ['Category'],
  // Further route definitions would go here
  request: {
    // Define request body and parameters here
    body: jsonContentRequired(updateCategoryPayloadSchema.pick({ name: true }), 'The category update payload'),
    params: updateCategoryPayloadSchema.pick({ tenantId: true, id: true }),
  },
  responses: {
    // Define responses here
    [HttpStatusCodes.OK]: jsonContent(updateCategoryResponseSchema, 'The update tenant details'),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(updateCategoryPayloadSchema),
      'The validation error(s)',
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      createMessageObjectSchema(HttpStatusPhrases.UNAUTHORIZED),
      HttpStatusPhrases.UNAUTHORIZED,
    ),
  },
})

export type UpdateCategoryRoute = typeof updateCategoryRoute
