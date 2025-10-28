import type { GetDetailTenantQuery } from '@/entities/schemas/tenant/get-detail-tenant.entities'
import type { IGetDetailTenantUseCase } from '@/modules/tenant/use-cases/get-detail-tenant.use-case'

export function GetDetailTenantController(deps: {
  getDetailTenantUseCase: IGetDetailTenantUseCase
}) {
  return async (query: GetDetailTenantQuery) => {
    const { getDetailTenantUseCase } = deps
    return await getDetailTenantUseCase(query)
  }
}

export type IGetDetailTenantController = ReturnType<
  typeof GetDetailTenantController
>
