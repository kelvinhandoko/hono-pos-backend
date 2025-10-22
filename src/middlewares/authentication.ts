import type { Context, Next } from 'hono'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import * as HttpStatusPhrases from 'stoker/http-status-phrases'
import { auth } from '@/lib/better-auth/server'

export async function authenticationMiddleware(c: Context, next: Next) {
  const session = await auth.api.getSession({ headers: c.req.raw.headers })
  if (!session) {
    c.set('user', null)
    c.set('session', null)
    return c.json({
      message: HttpStatusPhrases.UNAUTHORIZED,
    }, HttpStatusCodes.UNAUTHORIZED)
  }
  c.set('user', session.user)
  c.set('session', session.session)
  return next()
}
