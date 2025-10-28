import type { ICreateOutletController } from '@/modules/outlet/controller/create-outlet.controller'
import type { IDeleteOutletController } from '@/modules/outlet/controller/delete-outlet.controller'
import type { IGetInfiniteOutletListController } from '@/modules/outlet/controller/get-infinite-outlet-list.controller'
import type { IGetOutletDetailController } from '@/modules/outlet/controller/get-outlet-detail.controller'
import type { IGetPaginatedOutletListController } from '@/modules/outlet/controller/get-paginated-outlet-list.controller'
import type { IUpdateOutletController } from '@/modules/outlet/controller/update-outlet.controller'
import type { ICreateOutletOrchestrator } from '@/modules/outlet/orchestrator/create-outlet.orchestrator'
import type { IDeleteOutletOrchestrator } from '@/modules/outlet/orchestrator/delete-outlet.orchestrator'
import type { IUpdateOutletOrchestrator } from '@/modules/outlet/orchestrator/update-outlet.orchestrator'
import type { OutletRepository } from '@/modules/outlet/outlet.repository'
import type { ICreateOutletUseCase } from '@/modules/outlet/use-cases/create-outlet.use-case'
import type { IDeleteOutletUseCase } from '@/modules/outlet/use-cases/delete-outlet.use-case'
import type { IGetInfiniteOutletListUseCase } from '@/modules/outlet/use-cases/get-infinite-outlet-list.use-case'
import type { IGetOutletDetailUseCase } from '@/modules/outlet/use-cases/get-outlet-detail.use-case'
import type { IGetPaginatedOutletListUseCase } from '@/modules/outlet/use-cases/get-paginated-outlet-list.use-case'
import type { IUpdateOutletUseCase } from '@/modules/outlet/use-cases/update-outlet.use-case'

export const OUTLET_DI_SYMBOLS = {
  // repo
  IOutletRepository: Symbol.for('IOutletRepository'),

  // use-cases
  ICreateOutletUseCase: Symbol.for('ICreateOutletUseCase'),
  IUpdateOutletUseCase: Symbol.for('IUpdateOutletUseCase'),
  IDeleteOutletUseCase: Symbol.for('IDeleteOutletUseCase'),
  IGetOutletDetailUseCase: Symbol.for('IGetOutletDetailUseCase'),
  IGetPaginatedOutletListUseCase: Symbol.for('IGetPaginatedOutletListUseCase'),
  IGetInfiniteOutletListUseCase: Symbol.for('IGetInfiniteOutletListUseCase'),

  // orchestrators
  ICreateOutletOrchestrator: Symbol.for('ICreateOutletOrchestrator'),
  IUpdateOutletOrchestrator: Symbol.for('IUpdateOutletOrchestrator'),
  IDeleteOutletOrchestrator: Symbol.for('IDeleteOutletOrchestrator'),

  // controllers
  ICreateOutletController: Symbol.for('ICreateOutletController'),
  IUpdateOutletController: Symbol.for('IUpdateOutletController'),
  IDeleteOutletController: Symbol.for('IDeleteOutletController'),
  IGetOutletDetailController: Symbol.for('IGetOutletDetailController'),
  IGetPaginatedOutletListController: Symbol.for(
    'IGetPaginatedOutletListController',
  ),
  IGetInfiniteOutletListController: Symbol.for(
    'IGetInfiniteOutletListController',
  ),
} as const

export interface OUTLET_DI_RETURN_TYPES {
  // repo
  IOutletRepository: OutletRepository

  // use-cases
  ICreateOutletUseCase: ICreateOutletUseCase
  IUpdateOutletUseCase: IUpdateOutletUseCase
  IDeleteOutletUseCase: IDeleteOutletUseCase
  IGetOutletDetailUseCase: IGetOutletDetailUseCase
  IGetPaginatedOutletListUseCase: IGetPaginatedOutletListUseCase
  IGetInfiniteOutletListUseCase: IGetInfiniteOutletListUseCase

  // orchestrators
  ICreateOutletOrchestrator: ICreateOutletOrchestrator
  IUpdateOutletOrchestrator: IUpdateOutletOrchestrator
  IDeleteOutletOrchestrator: IDeleteOutletOrchestrator

  // controllers
  ICreateOutletController: ICreateOutletController
  IUpdateOutletController: IUpdateOutletController
  IDeleteOutletController: IDeleteOutletController
  IGetOutletDetailController: IGetOutletDetailController
  IGetPaginatedOutletListController: IGetPaginatedOutletListController
  IGetInfiniteOutletListController: IGetInfiniteOutletListController
}
