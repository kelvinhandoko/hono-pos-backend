import type { OUTLET_DI_RETURN_TYPES } from '@/di/types/outlet'
import type { SERVICE_DI_RETURN_TYPES } from '@/di/types/service'
import type { TENANT_DI_RETURN_TYPES } from '@/di/types/tenant'
import type { USER_TENANT_DI_RETURN_TYPES } from '@/di/types/user-tenant'
import { OUTLET_DI_SYMBOLS } from '@/di/types/outlet'
import { SERVICE_DI_SYMBOLS } from '@/di/types/service'
import { TENANT_DI_SYMBOLS } from '@/di/types/tenant'
import { USER_TENANT_DI_SYMBOLS } from '@/di/types/user-tenant'
import {
  CATEGORY_DI_RETURN_TYPES,
  CATEGORY_DI_SYMBOLS,
} from '@/di/types/category'
import { BRAND_DI_RETURN_TYPES, BRAND_DI_SYMBOLS } from '@/di/types/brand'

export const DI_SYMBOLS = {
  ...TENANT_DI_SYMBOLS,
  ...USER_TENANT_DI_SYMBOLS,
  ...OUTLET_DI_SYMBOLS,
  ...SERVICE_DI_SYMBOLS,
  ...CATEGORY_DI_SYMBOLS,
  ...BRAND_DI_SYMBOLS,
} as const

export interface DI_RETURN_TYPES
  extends TENANT_DI_RETURN_TYPES,
    USER_TENANT_DI_RETURN_TYPES,
    OUTLET_DI_RETURN_TYPES,
    CATEGORY_DI_RETURN_TYPES,
    SERVICE_DI_RETURN_TYPES,
    BRAND_DI_RETURN_TYPES {}
