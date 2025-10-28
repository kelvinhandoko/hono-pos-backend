import { CategoryRepository } from '@/modules/category/category.repository'

export const getCategoryDetailNameUseCase =
  (repo: CategoryRepository) =>
  ({ name, tenantId }: { name: string; tenantId: string }) => {
    return repo.getDetailByName(name, tenantId)
  }

export type IGetCategoryDetailNameUseCase = ReturnType<
  typeof getCategoryDetailNameUseCase
>
