import type { AppRouteHandler } from '@/lib/type'
import type { RegisterRoute } from '@/routes/v1/auth/auth.routes'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import { auth } from '@/lib/better-auth/server'

export const registerHandler: AppRouteHandler<RegisterRoute> = async (c) => {
  const registerPayload = c.req.valid('json')
  const inserted = await auth.api.signUpEmail({
    body: {
      email: registerPayload.email,
      password: registerPayload.password,
      name: registerPayload.name,
    },
  })

  return c.json({ data: { email: inserted.user.email }, message: 'success register' }, HttpStatusCodes.CREATED)
}
