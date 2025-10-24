import { ICreateCategoryUseCase } from '@/modules/category/use-cases/create-category.use-case'
import { IGetPaginatedCategoryListUseCase } from '@/modules/category/use-cases/get-category.use-case'
import { IGetDetailTenantUseCase } from '@/modules/tenant/use-cases/get-detail-tenant.use-case'

export const createCategoryOrchestrator =
  (deps: {
    getTenantDetail: IGetDetailTenantUseCase
    createCategoryUseCase: ICreateCategoryUseCase
    getCategoryUseCase: IGetPaginatedCategoryListUseCase
  }) =>
  async () => {
    const { createCategoryUseCase, getCategoryUseCase, getTenantDetail } = deps
  }
