import { createRouter } from '@/lib/create-app'
import { categoryRouter } from '@/routes/v1/category'
import tenantRouter from '@/routes/v1/tenant'

export const v1Router = createRouter().route('/tenant', tenantRouter).route('/category', categoryRouter)
