import { IDeleteBrandUseCase } from '@/modules/brand/use-cases/delete-brand.use.case'
import { IGetBrandUseCase } from '@/modules/brand/use-cases/get-brand.use-case'

export const deleteBrandOrchestrator =
  (deps: { deleteBrand: IDeleteBrandUseCase; getBrand: IGetBrandUseCase }) => async (id: string, tenant: string) => {
    const { deleteBrand, getBrand } = deps

    const brandDetail = await getBrand({ id: id, tenantId: tenant })
    if (!brandDetail) {
      throw new Error('Brand does not exist')
    }

    const deleted = await deleteBrand(id)
    if (!deleted) {
      throw new Error('Failed to delete brand')
    }
    return deleted
  }
