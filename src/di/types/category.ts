import { IGetCategoryDetailController } from '@/modules/category/controller/get-category-detail.controller'
import { CategoryRepository } from '@/modules/category/category.repository'
import { ICreateCategoryUseCase } from '@/modules/category/use-cases/create-category.use-case'
import { IGetCategoryDetailUseCase } from '@/modules/category/use-cases/get-category-detail.use-case'
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
  IGetCategoryDetailUseCase: Symbol.for('IGetCategoryDetailUseCase'),

  // orchestrators
  ICreateCategoryOrchestrator: Symbol.for('ICreateCategoryOrchestrator'),
  IUpdateCategoryOrchestrator: Symbol.for('IUpdateCategoryOrchestrator'),

  // controller
  ICreateCategoryController: Symbol.for('ICreateCategoryController'),
  IUpdateCategoryController: Symbol.for('IUpdateCategoryController'),
  IGetPaginatedCategoryListController: Symbol.for('IGetPaginatedCategoryListController'),
  IGetInfiniteCategoryListController: Symbol.for('IGetInfiniteCategoryListController'),
  IGetCategoryDetailController: Symbol.for('IGetCategoryDetailController'),
}

export interface CATEGORY_DI_RETURN_TYPES {
  // repo
  ICategoryRepository: CategoryRepository

  // use-cases
  ICreateCategoryUseCase: ICreateCategoryUseCase
  IUpdateCategoryUseCase: IUpdateCategoryUseCase
  IGetPaginatedCategoryListUseCase: IGetPaginatedCategoryListUseCase
  IGetInfiniteCategoryListUseCase: IGetInfiniteCategoryListUseCase
  IGetCategoryDetailUseCase: IGetCategoryDetailUseCase

  // orchestrators
  ICreateCategoryOrchestrator: ICreateCategoryOrchestrator
  IUpdateCategoryOrchestrator: IUpdateCategoryOrchestrator

  // controller
  ICreateCategoryController: ICreateCategoryController
  IUpdateCategoryController: IUpdateCategoryController
  IGetPaginatedCategoryListController: IGetPaginatedCategoryListController
  IGetInfiniteCategoryListController: IGetInfiniteCategoryListController
  IGetCategoryDetailController: IGetCategoryDetailController
}
