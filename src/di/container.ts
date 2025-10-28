import type { DI_RETURN_TYPES } from '@/di/types'
import { createContainer } from '@evyweb/ioctopus'
import { createOutletModule } from '@/di/module/outlet.module'
import { createServiceModule } from '@/di/module/service.module'
import { createTenantModule } from '@/di/module/tenant.module'
import { createUserTenantModule } from '@/di/module/user-tenant.module'
import { DI_SYMBOLS } from '@/di/types'
import { createCategoryModule } from '@/di/module/category.module'
import { createBrandModule } from '@/di/module/brand.module'

const ApplicationContainer = createContainer()

ApplicationContainer.load(Symbol.for('TenantModule'), createTenantModule())
ApplicationContainer.load(Symbol.for('ServiceModule'), createServiceModule())
ApplicationContainer.load(
  Symbol.for('UserTenantModule'),
  createUserTenantModule(),
)
ApplicationContainer.load(Symbol.for('OutletModule'), createOutletModule())
ApplicationContainer.load(Symbol.for('CategoryModule'), createCategoryModule())
ApplicationContainer.load(Symbol.for('BrandModule'), createBrandModule())

export function getInjection<K extends keyof typeof DI_SYMBOLS>(
  symbol: K,
): DI_RETURN_TYPES[K] {
  return ApplicationContainer.get(DI_SYMBOLS[symbol])
}
