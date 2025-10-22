import { createTenantHandler } from '@/modules/tenant/handler/create-tenant.handler'
import { getInfiniteTenantListHandler } from '@/modules/tenant/handler/get-infinite-tenant-list.handler'
import { getPaginatedTenantListHandler } from '@/modules/tenant/handler/get-paginated-tenant-list.handler'
import { updateTenantHandler } from '@/modules/tenant/handler/update-tenant.handler'

const tenantHandler = {
  create: createTenantHandler,
  update: updateTenantHandler,
  getPaginatedList: getPaginatedTenantListHandler,
  getInfiniteList: getInfiniteTenantListHandler,
}

export default tenantHandler
