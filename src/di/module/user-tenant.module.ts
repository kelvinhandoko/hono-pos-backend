import { createModule } from '@evyweb/ioctopus'
import { DI_SYMBOLS } from '@/di/types'
import { createUserTenantUseCase } from '@/modules/userTenant/use-cases/create-user-tenant.use-case'
import { UserTenantRepository } from '@/modules/userTenant/user-tenant.repository'

export function createUserTenantModule() {
  const userTenantModule = createModule()

  // repo
  userTenantModule
    .bind(DI_SYMBOLS.IUserTenantRepository)
    .toClass(UserTenantRepository)

  // use-cases
  userTenantModule
    .bind(DI_SYMBOLS.ICreateUserTenantUseCase)
    .toHigherOrderFunction(createUserTenantUseCase, [
      DI_SYMBOLS.IUserTenantRepository,
    ])

  return userTenantModule
}
