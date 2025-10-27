import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { openAPI } from 'better-auth/plugins'
import { db } from '@/lib/db'
import { env } from '@/env'

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: 'postgresql',
  }),
  advanced: {
    crossSubDomainCookies: {
      enabled: true,
    },
  },
  user: {
    additionalFields: {
      tenantId: {
        type: 'string',
        input: false,
      },
      branchId: {
        type: 'string',
        input: false,
      },
    },
  },
  trustedOrigins: [env.CLIENT_URL],
  emailAndPassword: {
    enabled: true,
  },

  plugins: [openAPI()],
})
