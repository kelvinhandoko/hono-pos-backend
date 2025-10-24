import { createRouter } from '@/lib/create-app'
import tenantRouter from '@/routes/v1/tenant'

export const v1Router = createRouter()
  .route('/tenant', tenantRouter)
