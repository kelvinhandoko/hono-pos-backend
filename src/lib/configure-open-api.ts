import type { AppOpenAPI } from '@/lib/type'
import { Scalar } from '@scalar/hono-api-reference'
import packageJSON from '../../package.json'

export function configureOpenApi(app: AppOpenAPI) {
  app.doc('/docs', {
    openapi: '3.0.0',
    info: {
      title: 'POS Backend API',
      version: packageJSON.version,
      description: 'API documentation for the POS Backend application.',
    },
    tags: [
      {
        name: 'Index',
        description: 'Root API endpoints',
      },
      {
        name: 'Tenant',
        description: 'Tenant management endpoints for creating and managing multi-tenant organizations',
      },
    ],
  })

  app.get('/reference', Scalar({ sources: [{ url: '/docs', title: 'API Docs' }, {
    url: '/api/auth/open-api/generate-schema',
    title: 'Auth Docs',
  }], theme: 'bluePlanet' }))
}
