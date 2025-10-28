import type { AppRouteHandler } from '@/lib/type'

import { getInjection } from '@/di/container'
import { CreateCategoryRoute } from '@/routes/v1/category/create-category.routes'

export const createCategoryHandler: AppRouteHandler<
  CreateCategoryRoute
> = async (c) => {
  const payload = c.req.valid('json')

  const tenantId = c.var.user!.tenantId
  const userId = c.var.user!.id
  const createCategoryController = getInjection('ICreateCategoryController')
  await createCategoryController({
    ...payload,
    userId: userId,
    tenantId: tenantId,
  })
  return c.json(
    {
      error: null,
      message: 'Category created successfully',
      success: true,
      name: payload.name,
    },
    201,
  )
}
