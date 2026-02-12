import { defineConfig } from 'tsup'

export default defineConfig((opts) => {
  return {
    clean: true,
    dts: true,
    entry: ['src/index.ts'],
    outDir: 'dist',
    format: ['cjs', 'esm'],
    treeshake: true,
    tsconfig: 'tsconfig.json',
    sourcemap: true,
    ...opts
  }
})
