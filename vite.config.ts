import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Runs the /api handlers inside the dev server so the real submission path can
 * be exercised locally. Vercel uses api/*.ts directly in production; this only
 * stands in for `vercel dev`. Nothing is faked: the handlers run unmodified,
 * including their "not configured" failure when no mail credentials are set.
 */
const apiDevServer = () => ({
  name: 'glad-api-dev',
  configureServer(server: import('vite').ViteDevServer) {
    server.middlewares.use(async (req, res, next) => {
      if (!req.url?.startsWith('/api/')) return next()

      const name = req.url.split('?')[0].replace('/api/', '').replace(/\/$/, '')
      if (!['order', 'contact'].includes(name)) {
        res.statusCode = 404
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ ok: false, error: 'not_found' }))
        return
      }

      const body = await new Promise<string>((resolve) => {
        let data = ''
        req.on('data', (chunk) => (data += chunk))
        req.on('end', () => resolve(data))
      })

      const resShim = {
        statusCode: 200,
        status(code: number) {
          res.statusCode = code
          return resShim
        },
        json(payload: unknown) {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(payload))
        },
        setHeader(key: string, value: string) {
          res.setHeader(key, value)
        },
        end() {
          res.end()
        },
      }

      try {
        const mod = await server.ssrLoadModule(`/api/${name}.ts`)
        await mod.default({ method: req.method, headers: req.headers, body }, resShim)
      } catch (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ ok: false, error: 'crash', detail: String(error) }))
      }
    })
  },
})

export default defineConfig({
  plugins: [react(), tailwindcss(), apiDevServer()],
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
})
