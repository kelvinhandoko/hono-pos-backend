import { createRouter } from '@/lib/create-app'
import { categoryRouter } from '@/routes/v1/category'
import outletRouter from '@/routes/v1/outlet'
import tenantRouter from '@/routes/v1/tenant'

export const v1Router = createRouter()
  .route('/tenant', tenantRouter)
  .route('/outlets', outletRouter)
  .route('/categories', categoryRouter)
