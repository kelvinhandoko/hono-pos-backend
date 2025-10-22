import type { DI_RETURN_TYPES } from '@/di/types'
import { createContainer } from '@evyweb/ioctopus'
import { createServiceModule } from '@/di/module/service.module'
import { createTenantModule } from '@/di/module/tenant.module'
import { createUserTenantModule } from '@/di/module/user-tenant.module'
import { DI_SYMBOLS } from '@/di/types'

const ApplicationContainer = createContainer()

ApplicationContainer.load(Symbol.for('TenantModule'), createTenantModule())
ApplicationContainer.load(Symbol.for('ServiceModule'), createServiceModule())
ApplicationContainer.load(Symbol.for('UserTenantModule'), createUserTenantModule())

export function getInjection<K extends keyof typeof DI_SYMBOLS>(
  symbol: K,
): DI_RETURN_TYPES[K] {
  return ApplicationContainer.get(DI_SYMBOLS[symbol])
}
