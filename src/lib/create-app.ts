import { auth } from '@/lib/better-auth/server'
import type { AppBindings } from '@/lib/type'
import { authenticationMiddleware } from '@/middlewares/authentication'
import { errorMiddleware } from '@/middlewares/error'
import { logger } from '@/middlewares/logger'
import { OpenAPIHono } from '@hono/zod-openapi'
import { cors } from 'hono/cors'
import { notFound } from 'stoker/middlewares'
import { defaultHook } from 'stoker/openapi'

export function createRouter() {
  const router = new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook,
  })
  return router
}

export function createApp() {
  const app = createRouter()

  app.use(logger())

  app.use(
    '*',
    cors({
      origin: 'http://localhost:3001',
      allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    }),
  )

  app.on(['POST', 'GET'], '/api/auth/*', (c) => {
    return auth.handler(c.req.raw)
  })

  app.use('v1/*', authenticationMiddleware)
  app.onError(errorMiddleware)
  app.notFound(notFound)

  return app
}
