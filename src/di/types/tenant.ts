import type { ICreateTenantController } from '@/modules/tenant/controller/create-tenant.controller'
import type { IGetInfiniteTenantListController } from '@/modules/tenant/controller/get-infinite-tenant-list.controller'
import type { IGetPaginatedTenantListController } from '@/modules/tenant/controller/get-paginated-tenant-list.controller'
import type { IUpdateTenantController } from '@/modules/tenant/controller/update-tenant.controller'
import type { ICreateTenantOrchestrator } from '@/modules/tenant/orchestrator/create-tenant.orchestrator'
import type { IUpdateTenantOrchestrator } from '@/modules/tenant/orchestrator/update-tenant.orchestrator'
import type { TenantRepository } from '@/modules/tenant/tenant.repository'
import type { ICreateTenantUseCase } from '@/modules/tenant/use-cases/create-tenant.use-case'
import type { IGetInfiniteTenantListUseCase } from '@/modules/tenant/use-cases/get-infinite-tenant-list.use-case'
import type { IGetPaginatedTenantListUseCase } from '@/modules/tenant/use-cases/get-paginated-tenant-list.use-case'
import type { IUpdateTenantUseCase } from '@/modules/tenant/use-cases/update-tenant.use-case'

export const TENANT_DI_SYMBOLS = {
  // repo
  ITenantRepository: Symbol.for('ITenantRepository'),

  // use-cases
  ICreateTenantUseCase: Symbol.for('ICreateTenantUseCase'),
  IUpdateTenantUseCase: Symbol.for('IUpdateTenantUseCase'),
  IGetPaginatedTenantListUseCase: Symbol.for('IGetPaginatedTenantListUseCase'),
  IGetInfiniteTenantListUseCase: Symbol.for('IGetInfiniteTenantListUseCase'),

  // orchestrators
  ICreateTenantOrchestrator: Symbol.for('ICreateTenantOrchestrator'),
  IUpdateTenantOrchestrator: Symbol.for('IUpdateTenantOrchestrator'),

  // controller
  ICreateTenantController: Symbol.for('ICreateTenantController'),
  IUpdateTenantController: Symbol.for('IUpdateTenantController'),
  IGetPaginatedTenantListController: Symbol.for('IGetPaginatedTenantListController'),
  IGetInfiniteTenantListController: Symbol.for('IGetInfiniteTenantListController'),
} as const

export interface TENANT_DI_RETURN_TYPES {
  // repo
  ITenantRepository: TenantRepository

  // use-cases
  ICreateTenantUseCase: ICreateTenantUseCase
  IUpdateTenantUseCase: IUpdateTenantUseCase
  IGetPaginatedTenantListUseCase: IGetPaginatedTenantListUseCase
  IGetInfiniteTenantListUseCase: IGetInfiniteTenantListUseCase

  // orchestrators
  ICreateTenantOrchestrator: ICreateTenantOrchestrator
  IUpdateTenantOrchestrator: IUpdateTenantOrchestrator

  // controller
  ICreateTenantController: ICreateTenantController
  IUpdateTenantController: IUpdateTenantController
  IGetPaginatedTenantListController: IGetPaginatedTenantListController
  IGetInfiniteTenantListController: IGetInfiniteTenantListController
}
