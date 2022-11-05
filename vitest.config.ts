import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
const path = resolve(__dirname, 'src')

export default defineConfig({
  test: {
    coverage: {
      functions: 80,
      branches: 80,
      statements: 80,
      lines: 80
    }
  },
  resolve: {
    alias: {
      '@app': `${path}/app`,
      '@core': `${path}/core`,
      '@infra': `${path}/infra`,
      '@shared': `${path}/shared`,
      '@test': `${path}/test`
    }
  }
})
