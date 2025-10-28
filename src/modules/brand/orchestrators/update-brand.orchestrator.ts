import { UpdateBrandPayload } from '@/entities/schemas/brand/update-brand.entities'
import { DbTransactionClient } from '@/lib/db'
import { IGetBrandUseCase } from '@/modules/brand/use-cases/get-brand.use-case'
import { IUpdateBrandUseCase } from '@/modules/brand/use-cases/update-brand.use-case'
import { IGetDetailTenantUseCase } from '@/modules/tenant/use-cases/get-detail-tenant.use-case'

export const updateBrandOrchestrator =
  (deps: { getTenant: IGetDetailTenantUseCase; updateBrandUseCase: IUpdateBrandUseCase; getBrand: IGetBrandUseCase }) =>
  async (payload: UpdateBrandPayload, tx?: DbTransactionClient) => {
    const { getTenant, getBrand, updateBrandUseCase } = deps

    const isTenantExists = await getTenant({
      id: payload.tenantId,
    })
    if (!isTenantExists) {
      throw new Error('Tenant does not exist')
    }

    const brandDetail = await getBrand({
      name: payload.name,
      tenantId: payload.tenantId,
    })
    if (brandDetail && brandDetail.id !== payload.id) {
      throw new Error('Brand name already in use')
    }
    const brand = await updateBrandUseCase(payload, tx)
    if (!brand) {
      throw new Error('Failed to update brand')
    }
    return brand
  }
