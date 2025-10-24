import { createRouter } from '@/lib/create-app'
import categoryHandler from '@/modules/category/handler'
import { getCategoryDetailRoute } from '@/routes/v1/category/get-category-detail.routes'

const categoryRouter = createRouter().openapi(getCategoryDetailRoute, categoryHandler.getDetail)

export default categoryRouter
