import { Prisma, PrismaClient } from '@prisma/client'
import { pagination } from 'prisma-extension-pagination'
import { createSoftDeleteExtension } from 'prisma-extension-soft-delete'
import { env } from '@/env'

function createPrismaClient() {
  return new PrismaClient({
    errorFormat: 'pretty',
    transactionOptions: { maxWait: 5000, timeout: 100000 },
  })
    .$extends(
      pagination({
        pages: {
          limit: 10,
          includePageCount: true,
        },
        cursor: {
          limit: 10,
          getCursor: ({ id }) => String(id),
          parseCursor: (cursor) => {
            return {
              id: String(cursor),
            }
          },
        },
      }),
    )
    .$extends(
      createSoftDeleteExtension({
        models: Object.fromEntries(
          Object.keys(Prisma.ModelName).map(model => [model, true]),
        ),
        defaultConfig: {
          allowCompoundUniqueIndexWhere: true,
          field: 'deletedAt',
          createValue: (deleted) => {
            if (deleted)
              return new Date()
            return null
          },
        },
      }),
    )
}
const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined
}

export const db = globalForPrisma.prisma ?? createPrismaClient()

export type DbTransactionClient = Parameters<
  Parameters<(typeof db)['$transaction']>[0]
>[0]

if (env.NODE_ENV !== 'production')
  globalForPrisma.prisma = db
