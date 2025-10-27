import { getInjection } from '@/di/container'
import { AppRouteHandler } from '@/lib/type'
import { UpdateCategoryRoute } from '@/routes/v1/category/update-category.routes'

export const updateCategoryHandler: AppRouteHandler<UpdateCategoryRoute> = async (c) => {
  const payload = c.req.valid('json')

  const tenantId = c.req.valid('param').tenantId
  const updateId = c.req.valid('param').id
  const userId = c.var.user!.id
  const updateCategoryController = getInjection('IUpdateCategoryController')
  const data = await updateCategoryController({
    name: payload.name,
    userId: userId,
    tenantId: tenantId,
    id: updateId,
  })
  return c.json(
    {
      error: null,
      message: 'Category updated successfully',
      success: true,
      name: data.name,
    },
    200,
  )
}
