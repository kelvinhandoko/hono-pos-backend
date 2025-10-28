import type { AppRouteHandler } from '@/lib/type'
import type { GetCategoryDetailRoute } from '@/routes/v1/category/get-category-detail.routes'

import { getInjection } from '@/di/container'
import * as HttpStatusCodes from 'stoker/http-status-codes'

export const getCategoryDetailHandler: AppRouteHandler<
  GetCategoryDetailRoute
> = async (c) => {
  const { id } = c.req.valid('param')

  const getCategoryDetailController = getInjection(
    'IGetCategoryDetailController',
  )
  const category = await getCategoryDetailController(id)

  if (!category) {
    return c.json(
      {
        error: 'Category not found',
        message: 'Category not found',
        success: false,
      },
      HttpStatusCodes.NOT_FOUND,
    )
  }

  return c.json(
    {
      error: null,
      message: 'Category retrieved successfully',
      success: true,
      ...category,
    },
    200,
  )
}
