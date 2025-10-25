import { createRouter } from '@/lib/create-app'
import { createCategoryHandler } from '@/modules/category/handler/create-category.handler'
import { updateCategoryHandler } from '@/modules/category/handler/update-category.handler'
import { createCategoryRoute } from '@/routes/v1/category/create-category.routes'
import { updateCategoryRoute } from '@/routes/v1/category/update-category.routes'

export const categoryRouter = createRouter()
  .openapi(createCategoryRoute, createCategoryHandler)
  .openapi(updateCategoryRoute, updateCategoryHandler)
