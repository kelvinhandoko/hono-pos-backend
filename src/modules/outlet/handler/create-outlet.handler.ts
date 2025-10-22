import type { AppRouteHandler } from '@/lib/type'
import type { CreateOutletRoute } from '@/routes/v1/outlet/create-outlet.routes'

import { getInjection } from '@/di/container'

export const createOutletHandler: AppRouteHandler<CreateOutletRoute> = async (c) => {
  const payload = c.req.valid('json')
  const { tenantId } = c.req.valid('param')

  const createOutletController = getInjection('ICreateOutletController')
  await createOutletController({ ...payload, tenantId })

  return c.json({
    error: null,
    message: 'Outlet created successfully',
    success: true,
  }, 201)
}
