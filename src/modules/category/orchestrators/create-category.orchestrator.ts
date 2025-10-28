import { ConflictError, NotFoundError } from '@/entities/error/common'
import { CreateCategoryPayload } from '@/entities/schemas/category/create-category.entities'
import { DbTransactionClient } from '@/lib/db'
import { ICreateCategoryUseCase } from '@/modules/category/use-cases/create-category.use-case'
import { IGetCategoryDetailNameUseCase } from '@/modules/category/use-cases/get-category-detail-name.use-case'
import { IGetDetailTenantUseCase } from '@/modules/tenant/use-cases/get-detail-tenant.use-case'

export const createCategoryOrchestrator =
  (deps: {
    getTenantDetail: IGetDetailTenantUseCase
    createCategoryUseCase: ICreateCategoryUseCase
    getCategoryDetail: IGetCategoryDetailNameUseCase
  }) =>
  async (payload: CreateCategoryPayload, tx?: DbTransactionClient) => {
    const { createCategoryUseCase, getCategoryDetail, getTenantDetail } = deps
    const isTenantExists = await getTenantDetail({
      id: payload.tenantId,
      userId: payload.userId,
    })
    if (!isTenantExists) {
      throw new NotFoundError('Tenant does not exist')
    }

    const categoryDetail = await getCategoryDetail({
      name: payload.name,
      tenantId: payload.tenantId,
    })

    if (!categoryDetail) {
      throw new ConflictError('Category name already in use')
    }

    const category = await createCategoryUseCase(payload, tx)

    return category
  }

export type ICreateCategoryOrchestrator = ReturnType<
  typeof createCategoryOrchestrator
>
