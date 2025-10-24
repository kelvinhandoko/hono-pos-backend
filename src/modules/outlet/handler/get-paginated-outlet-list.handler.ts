import type { AppRouteHandler } from '@/lib/type'
import type { GetPaginatedOutletListRoute } from '@/routes/v1/outlet/get-paginated-outlet-list.routes'

import { getInjection } from '@/di/container'

export const getPaginatedOutletListHandler: AppRouteHandler<GetPaginatedOutletListRoute> = async (c) => {
  const query = c.req.valid('query')
  const tenantId = c.req.param('tenantId')!

  const getPaginatedOutletListController = getInjection('IGetPaginatedOutletListController')
  const result = await getPaginatedOutletListController({ ...query, tenantId })

  return c.json({
    error: null,
    message: 'Outlet list retrieved successfully',
    success: true,
    data: result.data,
    meta: result.meta,
  }, 200)
}
