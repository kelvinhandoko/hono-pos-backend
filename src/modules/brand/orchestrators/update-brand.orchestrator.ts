import { NotFoundError } from '@/entities/error/common'
import { UpdateBrandPayload } from '@/entities/schemas/brand/update-brand.entities'
import { DbTransactionClient } from '@/lib/db'
import { IgetDetailBrandUseCase } from '@/modules/brand/use-cases/get-detail-brand.use-case'

import { IUpdateBrandUseCase } from '@/modules/brand/use-cases/update-brand.use-case'
import { IGetDetailTenantUseCase } from '@/modules/tenant/use-cases/get-detail-tenant.use-case'

export const updateBrandOrchestrator =
  (deps: {
    getTenant: IGetDetailTenantUseCase
    updateBrandUseCase: IUpdateBrandUseCase
    getBrand: IgetDetailBrandUseCase
  }) =>
  async (payload: UpdateBrandPayload, tx?: DbTransactionClient) => {
    const { getTenant, getBrand, updateBrandUseCase } = deps

    const isTenantExists = await getTenant({
      id: payload.tenantId,
      userId: payload.userId,
    })

    if (!isTenantExists) {
      throw new NotFoundError('Tenant does not exist')
    }

    const brandDetail = await getBrand({
      by: 'id',
      identifier: payload.id,
    })

    if (!brandDetail) {
      throw new NotFoundError('Brand does not exist')
    }

    const brand = await updateBrandUseCase(payload, tx)

    return brand
  }
