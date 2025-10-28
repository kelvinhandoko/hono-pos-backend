import { DI_SYMBOLS } from '@/di/types'
import { BrandRepository } from '@/modules/brand/brand.repository'
import { createBrandUseCase } from '@/modules/brand/use-cases/create-brand.use-cases'
import { deleteBrandUseCase } from '@/modules/brand/use-cases/delete-brand.use.case'
import { getBrandUseCase } from '@/modules/brand/use-cases/get-brand.use-case'
import { getInfiniteBrandUseCase } from '@/modules/brand/use-cases/get-infinite-brand.use-case'
import { getPaginatedBrandUseCase } from '@/modules/brand/use-cases/get-paginated-brand.use-case'
import { updateBrandUseCase } from '@/modules/brand/use-cases/update-brand.use-case'
import { createModule } from '@evyweb/ioctopus'

export function createBrandModule() {
  const brandModule = createModule()

  //repo
  brandModule.bind(DI_SYMBOLS.IBrandRepository).toClass(BrandRepository)

  //use-case
  brandModule
    .bind(DI_SYMBOLS.ICreateBrandUseCase)
    .toHigherOrderFunction(createBrandUseCase, [DI_SYMBOLS.IBrandRepository])

  brandModule
    .bind(DI_SYMBOLS.IUpdateBrandUseCase)
    .toHigherOrderFunction(updateBrandUseCase, [DI_SYMBOLS.IBrandRepository])

  brandModule
    .bind(DI_SYMBOLS.IGetPaginatedBrandListUseCase)
    .toHigherOrderFunction(getPaginatedBrandUseCase, [
      DI_SYMBOLS.IBrandRepository,
    ])

  brandModule
    .bind(DI_SYMBOLS.IGetInfiniteBrandListUseCase)
    .toHigherOrderFunction(getInfiniteBrandUseCase, [
      DI_SYMBOLS.IBrandRepository,
    ])

  brandModule
    .bind(DI_SYMBOLS.IGetBrandDetailUseCase)
    .toHigherOrderFunction(getBrandUseCase, [DI_SYMBOLS.IBrandRepository])

  brandModule
    .bind(DI_SYMBOLS.IDeleteBrandUseCase)
    .toHigherOrderFunction(deleteBrandUseCase, [DI_SYMBOLS.IDeleteBrandUseCase])

  //orchestrator
  brandModule
    .bind(DI_SYMBOLS.ICreateBrandOrchestrator)
    .toHigherOrderFunction(createBrandUseCase, [DI_SYMBOLS.IBrandRepository])

  brandModule
    .bind(DI_SYMBOLS.IUpdateBrandOrchestrator)
    .toHigherOrderFunction(updateBrandUseCase, [DI_SYMBOLS.IBrandRepository])

  brandModule
    .bind(DI_SYMBOLS.IDeleteBrandOrchestrator)
    .toHigherOrderFunction(deleteBrandUseCase, [DI_SYMBOLS.IDeleteBrandUseCase])

  //controller
  brandModule
    .bind(DI_SYMBOLS.ICreateBrandController)
    .toHigherOrderFunction(createBrandUseCase, [DI_SYMBOLS.IBrandRepository])

  brandModule
    .bind(DI_SYMBOLS.IUpdateBrandController)
    .toHigherOrderFunction(updateBrandUseCase, [DI_SYMBOLS.IBrandRepository])

  brandModule
    .bind(DI_SYMBOLS.IDeleteBrandController)
    .toHigherOrderFunction(deleteBrandUseCase, [DI_SYMBOLS.IDeleteBrandUseCase])

  return brandModule
}
