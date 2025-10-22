import { createRouter } from '@/lib/create-app'
import auth from './auth'

export const v1Router = createRouter()
  .route('/test', auth)
