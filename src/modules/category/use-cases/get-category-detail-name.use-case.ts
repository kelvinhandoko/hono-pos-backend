import { CategoryRepository } from '@/modules/category/category.repository'

export const getCategoryDetailNameUseCase =
  (repo: CategoryRepository) =>
  async ({ name, tenantId }: { name: string; tenantId: string }) => {
    return await repo.getDetailByName(name, tenantId)
  }

export type IGetCategoryDetailNameUseCase = ReturnType<
  typeof getCategoryDetailNameUseCase
>
