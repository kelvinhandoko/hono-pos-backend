import { ConflictError, NotFoundError } from '@/entities/error/common'
import { UpdateCategoryPayload } from '@/entities/schemas/category/update-category.entities'
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
      throw new NotFoundError('Tenant not found')
    }

    const categoryDetail = await getCategoryDetail({
      name: payload.name,
      tenantId: payload.tenantId,
    })

    if (categoryDetail && categoryDetail.id !== payload.id) {
      throw new ConflictError('Category name already exists')
    }

    const category = await updateCategoryUseCase(payload, tx)

    return category
  }

export type IUpdateCategoryOrchestrator = ReturnType<
  typeof updateCategoryOrchestrator
>
