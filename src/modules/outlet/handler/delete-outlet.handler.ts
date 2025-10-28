import type { AppRouteHandler } from '@/lib/type'

import type { DeleteOutletRoute } from '@/routes/v1/outlet/delete-outlet.routes'
import { getInjection } from '@/di/container'

export const deleteOutletHandler: AppRouteHandler<DeleteOutletRoute> = async (
  c,
) => {
  const { id } = c.req.valid('param')
  const tenantId = c.req.param('tenantId')!

  const deleteOutletController = getInjection('IDeleteOutletController')
  await deleteOutletController({ id, tenantId })

  return c.json(
    {
      error: null,
      message: 'Outlet deleted successfully',
      success: true,
    },
    200,
  )
}
