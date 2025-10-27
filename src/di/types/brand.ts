import { BrandRepository } from '@/modules/brand/brand.repository'
import { ICreateBrandUseCase } from '@/modules/brand/use-cases/create-brand.use-cases'
import { IDeleteBrandUseCase } from '@/modules/brand/use-cases/delete-brand.use.case'
import { IGetBrandUseCase } from '@/modules/brand/use-cases/get-brand.use-case'
import { IGetInfiniteBrandUseCase } from '@/modules/brand/use-cases/get-infinite-brand.use-case'
import { IUpdateBrandUseCase } from '@/modules/brand/use-cases/update-brand.use-case'
import { ICreateCategoryUseCase } from '@/modules/category/use-cases/create-category.use-case'

export const BRAND_DI_SYMBOLS = {
  IBrandRepository: Symbol.for('IBrandRepository'),

  // use-cases
  ICreateBrandUseCase: Symbol.for('ICreateBrandUseCase'),
  IUpdateBrandUseCase: Symbol.for('IUpdateBrandUseCase'),
  IGetPaginatedBrandListUseCase: Symbol.for('IGetPaginatedBrandListUseCase'),
  IGetInfiniteBrandListUseCase: Symbol.for('IGetInfiniteBrandListUseCase'),
  IGetBrandDetailUseCase: Symbol.for('IGetBrandDetailUseCase'),
  IDeleteBrandUseCase: Symbol.for('IDeleteBrandUseCase'),

  // orchestrators
  ICreateBrandOrchestrator: Symbol.for('ICreateBrandOrchestrator'),
  IUpdateBrandOrchestrator: Symbol.for('IUpdateBrandOrchestrator'),
  IDeleteBrandOrchestrator: Symbol.for('IDeleteBrandOrchestrator'),

  // controller
  ICreateBrandController: Symbol.for('ICreateBrandController'),
  IUpdateBrandController: Symbol.for('IUpdateBrandController'),
  IDeleteBrandController: Symbol.for('IDeleteBrandController'),
}

export interface BRAND_DI_RETURN_TYPES {
  // repo
  IBrandRepository: BrandRepository
  // use-cases
  ICreateBrandUseCase: ICreateBrandUseCase
  IUpdateBrandUseCase: IUpdateBrandUseCase
  IGetPaginatedBrandListUseCase: IGetBrandUseCase
  IGetInfiniteBrandListUseCase: IGetInfiniteBrandUseCase
  IGetBrandDetailUseCase: IGetBrandUseCase
  IDeleteBrandUseCase: IDeleteBrandUseCase

  // orchestrators
  ICreateBrandOrchestrator: ICreateCategoryUseCase
  IUpdateBrandOrchestrator: IUpdateBrandUseCase
  IDeleteBrandOrchestrator: IDeleteBrandUseCase

  // controller
  ICreateBrandController: ICreateBrandUseCase
  IUpdateBrandController: IUpdateBrandUseCase
  IDeleteBrandController: IDeleteBrandUseCase
}
