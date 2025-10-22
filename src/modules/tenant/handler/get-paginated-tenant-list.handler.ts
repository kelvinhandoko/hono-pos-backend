import type { AppRouteHandler } from '@/lib/type'

import type { GetPaginatedTenantListRoute } from '@/routes/v1/tenant/get-paginated-tenant-list.routes'
import { getInjection } from '@/di/container'

export const getPaginatedTenantListHandler: AppRouteHandler<GetPaginatedTenantListRoute> = async (c) => {
  const query = c.req.valid('query')
  const userId = c.var.user!.id

  const getPaginatedTenantListController = getInjection('IGetPaginatedTenantListController')
  const result = await getPaginatedTenantListController({ ...query, userId })

  return c.json({
    error: null,
    message: 'Tenant list retrieved successfully',
    success: true,
    data: result.data,
    meta: result.meta,
  }, 200)
}
