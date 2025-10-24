import { CreateCategoryPayload } from '@/entities/category/create-category.entities'
import { ICreateCategoryUseCase } from '@/modules/category/use-cases/create-category.use-case'
import { IGetCategoryDetailNameUseCase } from '@/modules/category/use-cases/get-category-detail-name.use-case'
import { IGetDetailTenantUseCase } from '@/modules/tenant/use-cases/get-detail-tenant.use-case'

export const createCategoryOrchestrator =
  (deps: {
    getTenantDetail: IGetDetailTenantUseCase
    createCategoryUseCase: ICreateCategoryUseCase
    getCategoryDetail: IGetCategoryDetailNameUseCase
  }) =>
  async (payload: CreateCategoryPayload) => {
    const { createCategoryUseCase, getCategoryDetail, getTenantDetail } = deps
    const isTenantExists = await getTenantDetail({
      id: payload.tenantId,
    })
    if (!isTenantExists) {
      throw new Error('Tenant does not exist')
    }

    const categoryDetail = await getCategoryDetail({ name: payload.name, tenandId: payload.tenantId })
    if (!categoryDetail) {
      throw new Error('Failed to get category detail after creation')
    }
    const category = await createCategoryUseCase(payload)
    if (!category) {
      throw new Error('Failed to create category')
    }
    return category
  }
