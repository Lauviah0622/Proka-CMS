import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{tsx,jsx,astro}'],
  },
  preflight: false /* ... */,
})
