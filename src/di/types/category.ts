import { ICategoryRepository } from '@/interfaces/category/category.repository.interface'
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
  IGetPaginatedCategoryListController: Symbol.for('IGetPaginatedCategoryListController'),
  IGetInfiniteCategoryListController: Symbol.for('IGetInfiniteCategoryListController'),
}

export interface CATEGORY_DI_RETURN_TYPES {
  // repo
  ICategoryRepository: ICategoryRepository

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
  IGetPaginatedCategoryListController: IGetPaginatedCategoryListController
  IGetInfiniteCategoryListController: IGetInfiniteCategoryListController
}
