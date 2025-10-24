import type { AppRouteHandler } from '@/lib/type'
import type { GetInfiniteOutletListRoute } from '@/routes/v1/outlet/get-infinite-outlet-list.routes'

import { getInjection } from '@/di/container'

export const getInfiniteOutletListHandler: AppRouteHandler<GetInfiniteOutletListRoute> = async (c) => {
  const query = c.req.valid('query')
  const tenantId = c.req.param('tenantId')!

  const getInfiniteOutletListController = getInjection('IGetInfiniteOutletListController')
  const result = await getInfiniteOutletListController({ ...query, tenantId })

  return c.json({
    error: null,
    message: 'Outlet list retrieved successfully',
    success: true,
    data: result.data,
    meta: result.meta,
  }, 200)
}
