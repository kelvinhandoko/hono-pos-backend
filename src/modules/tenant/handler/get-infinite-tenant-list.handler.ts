import type { AppRouteHandler } from '@/lib/type'

import type { GetInfiniteTenantListRoute } from '@/routes/v1/tenant/get-infinite-tenant-list.routes'
import { getInjection } from '@/di/container'

export const getInfiniteTenantListHandler: AppRouteHandler<GetInfiniteTenantListRoute> = async (c) => {
  const query = c.req.valid('query')
  const userId = c.var.user!.id

  const getInfiniteTenantListController = getInjection('IGetInfiniteTenantListController')
  const result = await getInfiniteTenantListController({ ...query, userId })

  return c.json({
    error: null,
    message: 'Tenant list retrieved successfully',
    success: true,
    data: result.data,
    meta: result.meta,
  }, 200)
}
