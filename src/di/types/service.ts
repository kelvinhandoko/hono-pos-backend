import type { TransactionManagerService } from '@/services/transaction-manager.service'

export const SERVICE_DI_SYMBOLS = {
  ITransactionManagerService: Symbol.for('ITransactionManagerService'),
} as const

export interface SERVICE_DI_RETURN_TYPES {
  ITransactionManagerService: TransactionManagerService
}
