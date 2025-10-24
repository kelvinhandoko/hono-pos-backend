import { createModule } from '@evyweb/ioctopus'
import { DI_SYMBOLS } from '@/di/types'
import { getCategoryDetailController } from '@/modules/category/controller/get-category-detail.controller'
import { CategoryRepository } from '@/modules/category/category.repository'
import { getCategoryDetailUseCase } from '@/modules/category/use-cases/get-category-detail.use-case'

export function createCategoryModule() {
  const categoryModule = createModule()

  // repo
  categoryModule.bind(DI_SYMBOLS.ICategoryRepository).toClass(CategoryRepository)

  // use-cases
  categoryModule
    .bind(DI_SYMBOLS.IGetCategoryDetailUseCase)
    .toHigherOrderFunction(getCategoryDetailUseCase, [DI_SYMBOLS.ICategoryRepository])

  // controllers
  categoryModule.bind(DI_SYMBOLS.IGetCategoryDetailController).toHigherOrderFunction(getCategoryDetailController, {
    getCategoryDetailUseCase: DI_SYMBOLS.IGetCategoryDetailUseCase,
  })

  return categoryModule
}
