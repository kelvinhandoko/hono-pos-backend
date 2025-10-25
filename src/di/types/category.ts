import { CategoryRepository } from '@/modules/category/category.repository'
import { ICreateCategoryController } from '@/modules/category/controller/create-category.controller'
import { IUpdateCategoryController } from '@/modules/category/controller/update-category.controller'
import { ICreateCategoryOrchestrator } from '@/modules/category/orchestrators/create-category.orchestrator'
import { IUpdateCategoryOrchestrator } from '@/modules/category/orchestrators/update-category.orchestrator'
import { ICreateCategoryUseCase } from '@/modules/category/use-cases/create-category.use-case'
import { IGetInfiniteCategoryListUseCase } from '@/modules/category/use-cases/get-category-infinite.use-case'
import { IGetPaginatedCategoryListUseCase } from '@/modules/category/use-cases/get-category.use-case'
import { IUpdateCategoryUseCase } from '@/modules/category/use-cases/update-category.use-case'

export const CATEGORY_DI_SYMBOLS = {
  // repo
  ICategoryRepository: Symbol.for('ICategoryRepository'),

  // use-cases
  ICreateCategoryUseCase: Symbol.for('ICreateCategoryUseCase'),
  IUpdateCategoryUseCase: Symbol.for('IUpdateCategoryUseCase'),
  IGetPaginatedCategoryListUseCase: Symbol.for('IGetPaginatedCategoryListUseCase'),
  IGetInfiniteCategoryListUseCase: Symbol.for('IGetInfiniteCategoryListUseCase'),

  // orchestrators
  ICreateCategoryOrchestrator: Symbol.for('ICreateCategoryOrchestrator'),
  IUpdateCategoryOrchestrator: Symbol.for('IUpdateCategoryOrchestrator'),

  // controller
  ICreateCategoryController: Symbol.for('ICreateCategoryController'),
  IUpdateCategoryController: Symbol.for('IUpdateCategoryController'),
}

export interface CATEGORY_DI_RETURN_TYPES {
  // repo
  ICategoryRepository: CategoryRepository

  // use-cases
  ICreateCategoryUseCase: ICreateCategoryUseCase
  IUpdateCategoryUseCase: IUpdateCategoryUseCase
  IGetPaginatedCategoryListUseCase: IGetPaginatedCategoryListUseCase
  IGetInfiniteCategoryListUseCase: IGetInfiniteCategoryListUseCase

  // orchestrators
  ICreateCategoryOrchestrator: ICreateCategoryOrchestrator
  IUpdateCategoryOrchestrator: IUpdateCategoryOrchestrator

  // controller
  ICreateCategoryController: ICreateCategoryController
  IUpdateCategoryController: IUpdateCategoryController
}
