import type { AppRouteHandler } from '@/lib/type'
import type { GetOutletDetailRoute } from '@/routes/v1/outlet/get-outlet-detail.routes'

import * as HttpStatusCodes from 'stoker/http-status-codes'
import { getInjection } from '@/di/container'

export const getOutletDetailHandler: AppRouteHandler<GetOutletDetailRoute> = async (c) => {
  const { id, tenantId } = c.req.valid('param')

  const getOutletDetailController = getInjection('IGetOutletDetailController')
  const outlet = await getOutletDetailController(id, tenantId)

  if (!outlet) {
    return c.json({
      error: 'Outlet not found',
      message: 'Outlet not found',
      success: false,
    }, HttpStatusCodes.NOT_FOUND)
  }

  return c.json({
    error: null,
    message: 'Outlet retrieved successfully',
    success: true,
    data: {
      id: outlet.id,
      name: outlet.name,
      address: outlet.address,
    },
  }, 200)
}
