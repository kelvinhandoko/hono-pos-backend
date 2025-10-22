import type { ICreateUserTenantUseCase } from '@/modules/userTenant/use-cases/create-user-tenant.use-case'
import type { UserTenantRepository } from '@/modules/userTenant/user-tenant.repository'

export const USER_TENANT_DI_SYMBOLS = {
  // repo
  IUserTenantRepository: Symbol.for('IUserTenantRepository'),

  // use-cases
  ICreateUserTenantUseCase: Symbol.for('ICreateUserTenantUseCase'),

} as const

export interface USER_TENANT_DI_RETURN_TYPES {
  // repo
  IUserTenantRepository: UserTenantRepository

  // use-cases
  ICreateUserTenantUseCase: ICreateUserTenantUseCase
}
