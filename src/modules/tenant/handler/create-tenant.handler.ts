import type { AppRouteHandler } from '@/lib/type'
import type { CreateTenantRoute } from '@/routes/v1/tenant/create-tenant.routes'

import { getInjection } from '@/di/container'

export const createTenantHandler: AppRouteHandler<CreateTenantRoute> = async (
  c,
) => {
  const payload = c.req.valid('json')

  const userId = c.var.user!.id
  const createTenantController = getInjection('ICreateTenantController')
  await createTenantController({ ...payload, userId })
  return c.json(
    {
      error: null,
      message: 'Tenant created successfully',
      success: true,
    },
    201,
  )
}
