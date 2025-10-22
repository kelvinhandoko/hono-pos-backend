import { createRouter } from '@/lib/create-app'
import outletHandler from '@/modules/outlet/handler'
import { createOutletRoute } from '@/routes/v1/outlet/create-outlet.routes'
import { deleteOutletRoute } from '@/routes/v1/outlet/delete-outlet.routes'
import { getInfiniteOutletListRoute } from '@/routes/v1/outlet/get-infinite-outlet-list.routes'
import { getOutletDetailRoute } from '@/routes/v1/outlet/get-outlet-detail.routes'
import { getPaginatedOutletListRoute } from '@/routes/v1/outlet/get-paginated-outlet-list.routes'
import { updateOutletRoute } from '@/routes/v1/outlet/update-outlet.routes'

const outletRouter = createRouter()
  .openapi(getPaginatedOutletListRoute, outletHandler.getPaginatedList)
  .openapi(getInfiniteOutletListRoute, outletHandler.getInfiniteList)
  .openapi(createOutletRoute, outletHandler.create)
  .openapi(getOutletDetailRoute, outletHandler.getDetail)
  .openapi(updateOutletRoute, outletHandler.update)
  .openapi(deleteOutletRoute, outletHandler.delete)

export default outletRouter
