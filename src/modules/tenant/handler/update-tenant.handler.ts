import type { AppRouteHandler } from '@/lib/type'

import type { UpdateTenantRoute } from '@/routes/v1/tenant/update-tenant.routes'
import { getInjection } from '@/di/container'

export const updateTenantHandler: AppRouteHandler<UpdateTenantRoute> = async (c) => {
  const payload = c.req.valid('json')
  const { id } = c.req.valid('param')

  const updateTenantController = getInjection('IUpdateTenantController')
  await updateTenantController({ ...payload, id })

  return c.json({
    error: null,
    message: 'Tenant updated successfully',
    success: true,
  }, 200)
}
