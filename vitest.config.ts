import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
const path = resolve(__dirname, 'src')

export default defineConfig({
  resolve: {
    alias: {
      '@app': `${path}/app`,
      '@core': `${path}/core`,
      '@infra': `${path}/infra`
    }
  }
})
