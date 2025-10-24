import { createRouter } from '@/lib/create-app'
import tenantHandler from '@/modules/tenant/handler'
import outletRouter from '@/routes/v1/outlet'
import { createTenantRoute } from '@/routes/v1/tenant/create-tenant.routes'
import { getDetailTenantRoute } from '@/routes/v1/tenant/get-detail-tenant.routes'
import { getInfiniteTenantListRoute } from '@/routes/v1/tenant/get-infinite-tenant-list.routes'
import { getPaginatedTenantListRoute } from '@/routes/v1/tenant/get-paginated-tenant-list.routes'
import { updateTenantRoute } from '@/routes/v1/tenant/update-tenant.routes'

const tenantRouter = createRouter()
  .openapi(getPaginatedTenantListRoute, tenantHandler.getPaginatedList)
  .openapi(getInfiniteTenantListRoute, tenantHandler.getInfiniteList)
  .openapi(createTenantRoute, tenantHandler.create)
  .openapi(updateTenantRoute, tenantHandler.update)
  .openapi(getDetailTenantRoute, tenantHandler.getDetail)
  .route('/:tenantId/outlets', outletRouter)

export default tenantRouter
