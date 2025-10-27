import { CategoryRepository } from '@/modules/category/category.repository'

export const getCategoryDetailNameUseCase =
  (repo: CategoryRepository) =>
  ({ name, tenandId }: { name: string; tenandId: string }) => {
    return repo.getDetailByName(name, tenandId)
  }

export type IGetCategoryDetailNameUseCase = ReturnType<typeof getCategoryDetailNameUseCase>
