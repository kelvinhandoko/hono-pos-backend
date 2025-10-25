import { UpdateCategoryPayload } from '@/entities/category/update-category.entities'
import { DbTransactionClient } from '@/lib/db'
import { IGetCategoryDetailNameUseCase } from '@/modules/category/use-cases/get-category-detail-name.use-case'
import { IUpdateCategoryUseCase } from '@/modules/category/use-cases/update-category.use-case'
import { IGetDetailTenantUseCase } from '@/modules/tenant/use-cases/get-detail-tenant.use-case'

export const updateCategoryOrchestrator =
  (deps: {
    getTenantDetail: IGetDetailTenantUseCase
    updateCategoryUseCase: IUpdateCategoryUseCase
    getCategoryDetail: IGetCategoryDetailNameUseCase
  }) =>
  async (payload: UpdateCategoryPayload, tx?: DbTransactionClient) => {
    const { getCategoryDetail, getTenantDetail, updateCategoryUseCase } = deps

    const isTenantExists = await getTenantDetail({
      id: payload.tenantId,
    })
    if (!isTenantExists) {
      throw new Error('Tenant does not exist')
    }

    const categoryDetail = await getCategoryDetail({ name: payload.name, tenandId: payload.tenantId })
    if (categoryDetail && categoryDetail.id !== payload.id) {
      throw new Error('Category name already in use')
    }
    const category = await updateCategoryUseCase(payload, tx)
    if (!category) {
      throw new Error('Failed to update category')
    }
    return category
  }

export type IUpdateCategoryOrchestrator = ReturnType<typeof updateCategoryOrchestrator>
