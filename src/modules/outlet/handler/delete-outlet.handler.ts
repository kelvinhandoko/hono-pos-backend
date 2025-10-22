import type { AppRouteHandler } from '@/lib/type'

import type { DeleteOutletRoute } from '@/routes/v1/outlet/delete-outlet.routes'
import { getInjection } from '@/di/container'

export const deleteOutletHandler: AppRouteHandler<DeleteOutletRoute> = async (c) => {
  const { id, tenantId } = c.req.valid('param')

  const deleteOutletController = getInjection('IDeleteOutletController')
  await deleteOutletController({ id, tenantId })

  return c.json({
    error: null,
    message: 'Outlet deleted successfully',
    success: true,
  }, 200)
}
