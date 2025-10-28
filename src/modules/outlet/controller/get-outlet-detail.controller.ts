import type { IGetOutletDetailUseCase } from '@/modules/outlet/use-cases/get-outlet-detail.use-case'

export function getOutletDetailController(deps: {
  getOutletDetailUseCase: IGetOutletDetailUseCase
}) {
  return async (id: string, tenantId: string) => {
    const { getOutletDetailUseCase } = deps
    return await getOutletDetailUseCase(id, tenantId)
  }
}

export type IGetOutletDetailController = ReturnType<
  typeof getOutletDetailController
>
