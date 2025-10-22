import type { AppRouteHandler } from '@/lib/type'
import type { UpdateOutletRoute } from '@/routes/v1/outlet/update-outlet.routes'

import { getInjection } from '@/di/container'

export const updateOutletHandler: AppRouteHandler<UpdateOutletRoute> = async (c) => {
  const payload = c.req.valid('json')
  const { id, tenantId } = c.req.valid('param')

  const updateOutletController = getInjection('IUpdateOutletController')
  await updateOutletController({ ...payload, id, tenantId })

  return c.json({
    error: null,
    message: 'Outlet updated successfully',
    success: true,
  }, 200)
}
