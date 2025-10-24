import { createModule } from '@evyweb/ioctopus'
import { DI_SYMBOLS } from '@/di/types'
import { createTenantController } from '@/modules/tenant/controller/create-tenant.controller'
import { GetDetailTenantController } from '@/modules/tenant/controller/get-detail-tenant.controller'
import { getInfiniteTenantListController } from '@/modules/tenant/controller/get-infinite-tenant-list.controller'
import { getPaginatedTenantListController } from '@/modules/tenant/controller/get-paginated-tenant-list.controller'
import { updateTenantController } from '@/modules/tenant/controller/update-tenant.controller'
import { createTenantOrchestrator } from '@/modules/tenant/orchestrator/create-tenant.orchestrator'
import { updateTenantOrchestrator } from '@/modules/tenant/orchestrator/update-tenant.orchestrator'
import { TenantRepository } from '@/modules/tenant/tenant.repository'
import { createTenantUseCase } from '@/modules/tenant/use-cases/create-tenant.use-case'
import { getDetailTenantUseCase } from '@/modules/tenant/use-cases/get-detail-tenant.use-case'
import { getInfiniteTenantListUseCase } from '@/modules/tenant/use-cases/get-infinite-tenant-list.use-case'
import { getPaginatedTenantListUseCase } from '@/modules/tenant/use-cases/get-paginated-tenant-list.use-case'
import { updateTenantUseCase } from '@/modules/tenant/use-cases/update-tenant.use-case'

export function createTenantModule() {
  const tenantModule = createModule()

  // repo
  tenantModule
    .bind(DI_SYMBOLS.ITenantRepository)
    .toClass(TenantRepository)

  // use-cases
  tenantModule
    .bind(DI_SYMBOLS.ICreateTenantUseCase)
    .toHigherOrderFunction(createTenantUseCase, [DI_SYMBOLS.ITenantRepository])

  tenantModule
    .bind(DI_SYMBOLS.IUpdateTenantUseCase)
    .toHigherOrderFunction(updateTenantUseCase, [DI_SYMBOLS.ITenantRepository])

  tenantModule
    .bind(DI_SYMBOLS.IGetPaginatedTenantListUseCase)
    .toHigherOrderFunction(getPaginatedTenantListUseCase, [DI_SYMBOLS.ITenantRepository])

  tenantModule
    .bind(DI_SYMBOLS.IGetInfiniteTenantListUseCase)
    .toHigherOrderFunction(getInfiniteTenantListUseCase, [DI_SYMBOLS.ITenantRepository])

  tenantModule
    .bind(DI_SYMBOLS.IGetDetailTenantUseCase)
    .toHigherOrderFunction(getDetailTenantUseCase, [DI_SYMBOLS.ITenantRepository])

  // orchestrators
  tenantModule
    .bind(DI_SYMBOLS.ICreateTenantOrchestrator)
    .toHigherOrderFunction(createTenantOrchestrator, {
      createTenantUseCase: DI_SYMBOLS.ICreateTenantUseCase,
      createUserTenantUseCase: DI_SYMBOLS.ICreateUserTenantUseCase,
    })

  tenantModule
    .bind(DI_SYMBOLS.IUpdateTenantOrchestrator)
    .toHigherOrderFunction(updateTenantOrchestrator, {
      updateTenantUseCase: DI_SYMBOLS.IUpdateTenantUseCase,
    })

  // controllers
  tenantModule
    .bind(DI_SYMBOLS.ICreateTenantController)
    .toHigherOrderFunction(createTenantController, {
      createTenantOrchestrator: DI_SYMBOLS.ICreateTenantOrchestrator,
      transactionManagerService: DI_SYMBOLS.ITransactionManagerService,
    })

  tenantModule
    .bind(DI_SYMBOLS.IUpdateTenantController)
    .toHigherOrderFunction(updateTenantController, {
      updateTenantOrchestrator: DI_SYMBOLS.IUpdateTenantOrchestrator,
      transactionManagerService: DI_SYMBOLS.ITransactionManagerService,
    })

  tenantModule
    .bind(DI_SYMBOLS.IGetPaginatedTenantListController)
    .toHigherOrderFunction(getPaginatedTenantListController, {
      getPaginatedTenantListUseCase: DI_SYMBOLS.IGetPaginatedTenantListUseCase,
    })

  tenantModule
    .bind(DI_SYMBOLS.IGetInfiniteTenantListController)
    .toHigherOrderFunction(getInfiniteTenantListController, {
      getInfiniteTenantListUseCase: DI_SYMBOLS.IGetInfiniteTenantListUseCase,
    })

  tenantModule
    .bind(DI_SYMBOLS.IGetDetailTenantController)
    .toHigherOrderFunction(GetDetailTenantController, {
      getDetailTenantUseCase: DI_SYMBOLS.IGetDetailTenantUseCase,
    })

  return tenantModule
}
