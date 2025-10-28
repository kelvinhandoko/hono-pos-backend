import type { AppRouteHandler } from '@/lib/type'

import type { GetDetailTenantRoute } from '@/routes/v1/tenant/get-detail-tenant.routes'
import { getInjection } from '@/di/container'
import { getDetailTenantResponseSchema } from '@/entities/schemas/tenant/get-detail-tenant.entities'

export const getDetailTenantHandler: AppRouteHandler<
  GetDetailTenantRoute
> = async (c) => {
  const { id } = c.req.valid('param')
  const userId = c.var.user!.id
  const getDetailTenantController = getInjection('IGetDetailTenantController')
  const tenant = await getDetailTenantController({ id, userId })

  const output = getDetailTenantResponseSchema.parse({
    message: 'Tenant details retrieved successfully',
    success: true,
    error: null,
    data: tenant,
  })

  return c.json(output, 200)
}
