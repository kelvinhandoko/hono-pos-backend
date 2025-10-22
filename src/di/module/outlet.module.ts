import { createModule } from '@evyweb/ioctopus'
import { DI_SYMBOLS } from '@/di/types'
import { createOutletController } from '@/modules/outlet/controller/create-outlet.controller'
import { deleteOutletController } from '@/modules/outlet/controller/delete-outlet.controller'
import { getInfiniteOutletListController } from '@/modules/outlet/controller/get-infinite-outlet-list.controller'
import { getOutletDetailController } from '@/modules/outlet/controller/get-outlet-detail.controller'
import { getPaginatedOutletListController } from '@/modules/outlet/controller/get-paginated-outlet-list.controller'
import { updateOutletController } from '@/modules/outlet/controller/update-outlet.controller'
import { createOutletOrchestrator } from '@/modules/outlet/orchestrator/create-outlet.orchestrator'
import { deleteOutletOrchestrator } from '@/modules/outlet/orchestrator/delete-outlet.orchestrator'
import { updateOutletOrchestrator } from '@/modules/outlet/orchestrator/update-outlet.orchestrator'
import { OutletRepository } from '@/modules/outlet/outlet.repository'
import { createOutletUseCase } from '@/modules/outlet/use-cases/create-outlet.use-case'
import { deleteOutletUseCase } from '@/modules/outlet/use-cases/delete-outlet.use-case'
import { getInfiniteOutletListUseCase } from '@/modules/outlet/use-cases/get-infinite-outlet-list.use-case'
import { getOutletDetailUseCase } from '@/modules/outlet/use-cases/get-outlet-detail.use-case'
import { getPaginatedOutletListUseCase } from '@/modules/outlet/use-cases/get-paginated-outlet-list.use-case'
import { updateOutletUseCase } from '@/modules/outlet/use-cases/update-outlet.use-case'

export function createOutletModule() {
  const outletModule = createModule()

  // repo
  outletModule
    .bind(DI_SYMBOLS.IOutletRepository)
    .toClass(OutletRepository)

  // use-cases
  outletModule
    .bind(DI_SYMBOLS.ICreateOutletUseCase)
    .toHigherOrderFunction(createOutletUseCase, [DI_SYMBOLS.IOutletRepository])

  outletModule
    .bind(DI_SYMBOLS.IUpdateOutletUseCase)
    .toHigherOrderFunction(updateOutletUseCase, [DI_SYMBOLS.IOutletRepository])

  outletModule
    .bind(DI_SYMBOLS.IDeleteOutletUseCase)
    .toHigherOrderFunction(deleteOutletUseCase, [DI_SYMBOLS.IOutletRepository])

  outletModule
    .bind(DI_SYMBOLS.IGetOutletDetailUseCase)
    .toHigherOrderFunction(getOutletDetailUseCase, [DI_SYMBOLS.IOutletRepository])

  outletModule
    .bind(DI_SYMBOLS.IGetPaginatedOutletListUseCase)
    .toHigherOrderFunction(getPaginatedOutletListUseCase, [DI_SYMBOLS.IOutletRepository])

  outletModule
    .bind(DI_SYMBOLS.IGetInfiniteOutletListUseCase)
    .toHigherOrderFunction(getInfiniteOutletListUseCase, [DI_SYMBOLS.IOutletRepository])

  // orchestrators
  outletModule
    .bind(DI_SYMBOLS.ICreateOutletOrchestrator)
    .toHigherOrderFunction(createOutletOrchestrator, {
      createOutletUseCase: DI_SYMBOLS.ICreateOutletUseCase,
    })

  outletModule
    .bind(DI_SYMBOLS.IUpdateOutletOrchestrator)
    .toHigherOrderFunction(updateOutletOrchestrator, {
      updateOutletUseCase: DI_SYMBOLS.IUpdateOutletUseCase,
    })

  outletModule
    .bind(DI_SYMBOLS.IDeleteOutletOrchestrator)
    .toHigherOrderFunction(deleteOutletOrchestrator, {
      deleteOutletUseCase: DI_SYMBOLS.IDeleteOutletUseCase,
    })

  // controllers
  outletModule.bind(DI_SYMBOLS.ICreateOutletController).toHigherOrderFunction(createOutletController, {
    createOutletOrchestrator: DI_SYMBOLS.ICreateOutletOrchestrator,
    transactionManagerService: DI_SYMBOLS.ITransactionManagerService,
  })

  outletModule.bind(DI_SYMBOLS.IUpdateOutletController).toHigherOrderFunction(updateOutletController, {
    updateOutletOrchestrator: DI_SYMBOLS.IUpdateOutletOrchestrator,
    transactionManagerService: DI_SYMBOLS.ITransactionManagerService,
  })

  outletModule.bind(DI_SYMBOLS.IDeleteOutletController).toHigherOrderFunction(deleteOutletController, {
    deleteOutletOrchestrator: DI_SYMBOLS.IDeleteOutletOrchestrator,
    transactionManagerService: DI_SYMBOLS.ITransactionManagerService,
  })

  outletModule.bind(DI_SYMBOLS.IGetOutletDetailController).toHigherOrderFunction(getOutletDetailController, {
    getOutletDetailUseCase: DI_SYMBOLS.IGetOutletDetailUseCase,
  })

  outletModule.bind(DI_SYMBOLS.IGetPaginatedOutletListController).toHigherOrderFunction(getPaginatedOutletListController, {
    getPaginatedOutletListUseCase: DI_SYMBOLS.IGetPaginatedOutletListUseCase,
  })

  outletModule.bind(DI_SYMBOLS.IGetInfiniteOutletListController).toHigherOrderFunction(getInfiniteOutletListController, {
    getInfiniteOutletListUseCase: DI_SYMBOLS.IGetInfiniteOutletListUseCase,
  })

  return outletModule
}
