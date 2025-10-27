import { CreateBrandPayload } from '@/entities/brand/create-brand.entities'
import { DbTransactionClient } from '@/lib/db'
import { ICreateBrandUseCase } from '@/modules/brand/use-cases/create-brand.use-cases'
import { IGetBrandUseCase } from '@/modules/brand/use-cases/get-brand.use-case'
import { IGetDetailTenantUseCase } from '@/modules/tenant/use-cases/get-detail-tenant.use-case'

export const createBrandOrchestrator =
  (deps: { getTenant: IGetDetailTenantUseCase; getBrand: IGetBrandUseCase; createBrand: ICreateBrandUseCase }) =>
  async (payload: CreateBrandPayload, tx?: DbTransactionClient) => {
    const { getTenant, getBrand, createBrand } = deps
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
    if (!brandDetail) {
      throw new Error('Brand name already in use')
    }
    const brand = await createBrand(payload, tx)
    if (!brand) {
      throw new Error('Failed to create brand')
    }
    return brand
  }

export type ICreateBrandOrchestrator = ReturnType<typeof createBrandOrchestrator>
