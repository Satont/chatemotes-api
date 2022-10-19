import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export function pathToAssets(...paths: string[]): string {
  return resolve(
    dirname(fileURLToPath(import.meta.url)),
    '..',
    'assets',
    ...paths
  )
}
