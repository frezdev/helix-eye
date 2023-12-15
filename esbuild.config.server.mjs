import { build } from 'esbuild'

try {
  await build({
    entryPoints: ['./src/server/index.ts'],
    bundle: true,
    minify: true,
    platform: 'node',
    outdir: './dist'
  })
} catch { process.exit(1) }
