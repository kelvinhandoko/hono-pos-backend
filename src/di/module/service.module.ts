import { createModule } from '@evyweb/ioctopus'
import { DI_SYMBOLS } from '@/di/types'
import { TransactionManagerService } from '@/services/transaction-manager.service'

export function createServiceModule() {
  const serviceModule = createModule()

  serviceModule.bind(DI_SYMBOLS.ITransactionManagerService).toClass(TransactionManagerService)

  return serviceModule
}
