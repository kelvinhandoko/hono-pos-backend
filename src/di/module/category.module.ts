import { DI_SYMBOLS } from '@/di/types'
import { CategoryRepository } from '@/modules/category/category.repository'
import { CreateCategoryUseCase } from '@/modules/category/use-cases/create-category.use-case'
import { GetPaginatedCategoryUseCase } from '@/modules/category/use-cases/get-category.use-case'
import { UpdateCategoryUseCase } from '@/modules/category/use-cases/update-category.use-case'
import { createModule } from '@evyweb/ioctopus'

export function createCategoryModule() {
  const categoryModule = createModule()

  //repo
  categoryModule
    .bind(DI_SYMBOLS.ICategoryRepository)
    .toClass(CategoryRepository)

  //use-case
  categoryModule
    .bind(DI_SYMBOLS.ICreateCategoryUseCase)
    .toHigherOrderFunction(CreateCategoryUseCase, [
      DI_SYMBOLS.ICategoryRepository,
    ])

  categoryModule
    .bind(DI_SYMBOLS.IGetPaginatedCategoryListUseCase)
    .toHigherOrderFunction(GetPaginatedCategoryUseCase, [
      DI_SYMBOLS.ICategoryRepository,
    ])

  categoryModule
    .bind(DI_SYMBOLS.IGetInfiniteOutletListUseCase)
    .toHigherOrderFunction(CreateCategoryUseCase, [
      DI_SYMBOLS.ICategoryRepository,
    ])

  categoryModule
    .bind(DI_SYMBOLS.IUpdateCategoryUseCase)
    .toHigherOrderFunction(UpdateCategoryUseCase, [
      DI_SYMBOLS.ICategoryRepository,
    ])

  //orchestrator
  categoryModule
    .bind(DI_SYMBOLS.ICreateCategoryOrchestrator)
    .toHigherOrderFunction(CreateCategoryUseCase, {
      createCategoryUseCase: DI_SYMBOLS.ICreateCategoryUseCase,
    })
  categoryModule
    .bind(DI_SYMBOLS.IUpdateCategoryOrchestrator)
    .toHigherOrderFunction(UpdateCategoryUseCase, {
      updateCategoryUseCase: DI_SYMBOLS.IUpdateCategoryUseCase,
    })

  //controller
  categoryModule
    .bind(DI_SYMBOLS.ICreateCategoryController)
    .toHigherOrderFunction(CreateCategoryUseCase, [
      DI_SYMBOLS.ICategoryRepository,
    ])

  return categoryModule
}
