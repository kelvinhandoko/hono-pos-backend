import { configureOpenApi } from '@/lib/configure-open-api'
import { createApp } from '@/lib/create-app'
import index from '@/routes'
import { v1Router } from '@/routes/v1'

const app = createApp()

configureOpenApi(app)

app.route('/', index)
app.route('/v1', v1Router)

export default app
