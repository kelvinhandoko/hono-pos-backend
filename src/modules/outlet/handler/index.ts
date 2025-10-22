import { createOutletHandler } from '@/modules/outlet/handler/create-outlet.handler'
import { deleteOutletHandler } from '@/modules/outlet/handler/delete-outlet.handler'
import { getInfiniteOutletListHandler } from '@/modules/outlet/handler/get-infinite-outlet-list.handler'
import { getOutletDetailHandler } from '@/modules/outlet/handler/get-outlet-detail.handler'
import { getPaginatedOutletListHandler } from '@/modules/outlet/handler/get-paginated-outlet-list.handler'
import { updateOutletHandler } from '@/modules/outlet/handler/update-outlet.handler'

const outletHandler = {
  create: createOutletHandler,
  update: updateOutletHandler,
  delete: deleteOutletHandler,
  getDetail: getOutletDetailHandler,
  getPaginatedList: getPaginatedOutletListHandler,
  getInfiniteList: getInfiniteOutletListHandler,
}

export default outletHandler
