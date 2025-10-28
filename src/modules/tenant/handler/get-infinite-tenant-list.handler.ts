import type { AppRouteHandler } from '@/lib/type'

import type { GetInfiniteTenantListRoute } from '@/routes/v1/tenant/get-infinite-tenant-list.routes'
import { getInjection } from '@/di/container'
import { infiniteTenantListResponseSchema } from '@/entities/schemas/tenant/get-tenant-list.entities'

export const getInfiniteTenantListHandler: AppRouteHandler<
  GetInfiniteTenantListRoute
> = async (c) => {
  const query = c.req.valid('query')
  const userId = c.var.user!.id

  const getInfiniteTenantListController = getInjection(
    'IGetInfiniteTenantListController',
  )
  const result = await getInfiniteTenantListController({ ...query, userId })
  const output = infiniteTenantListResponseSchema.safeParse({
    error: null,
    message: 'Tenant list retrieved successfully',
    success: true,
    data: result.data,
    meta: result.meta,
  })
  return c.json(output.data, 200)
}
