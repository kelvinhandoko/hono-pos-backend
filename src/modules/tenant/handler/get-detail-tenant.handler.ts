import type { AppRouteHandler } from '@/lib/type'

import type { GetDetailTenantRoute } from '@/routes/v1/tenant/get-detail-tenant.routes'
import { getInjection } from '@/di/container'
import { getDetailTenantResponseSchema } from '@/entities/tenant/get-detail-tenant.entities'

export const getDetailTenantHandler: AppRouteHandler<GetDetailTenantRoute> = async (c) => {
  const { id } = c.req.valid('param')

  const getDetailTenantController = getInjection('IGetDetailTenantController')
  const output = getDetailTenantResponseSchema.safeParse(await getDetailTenantController({ id })).data

  return c.json(output, 200)
}
