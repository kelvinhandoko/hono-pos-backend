import type { SERVICE_DI_RETURN_TYPES } from '@/di/types/service'
import type { TENANT_DI_RETURN_TYPES } from '@/di/types/tenant'
import type { USER_TENANT_DI_RETURN_TYPES } from '@/di/types/user-tenant'
import { SERVICE_DI_SYMBOLS } from '@/di/types/service'
import { TENANT_DI_SYMBOLS } from '@/di/types/tenant'
import { USER_TENANT_DI_SYMBOLS } from '@/di/types/user-tenant'

export const DI_SYMBOLS = {
  ...TENANT_DI_SYMBOLS,
  ...USER_TENANT_DI_SYMBOLS,
  ...SERVICE_DI_SYMBOLS,
} as const

export interface DI_RETURN_TYPES extends
  TENANT_DI_RETURN_TYPES,
  USER_TENANT_DI_RETURN_TYPES,
  SERVICE_DI_RETURN_TYPES {}
