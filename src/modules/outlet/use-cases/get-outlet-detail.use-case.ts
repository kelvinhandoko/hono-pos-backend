import type { OutletRepository } from '@/modules/outlet/outlet.repository'

export function getOutletDetailUseCase(repo: OutletRepository) {
  return async (id: string, tenantId: string) =>
    await repo.getById(id, tenantId)
}

export type IGetOutletDetailUseCase = ReturnType<typeof getOutletDetailUseCase>
