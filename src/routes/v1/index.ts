import { createRouter } from '@/lib/create-app'
import outletRouter from '@/routes/v1/outlet'
import tenantRouter from '@/routes/v1/tenant'

export const v1Router = createRouter()
  .route('/tenant', tenantRouter)
  .route('', outletRouter)
