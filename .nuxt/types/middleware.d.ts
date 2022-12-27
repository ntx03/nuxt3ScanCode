import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "/media/andrey/1CDC7029DC6FFC00/dev/nuxt3ScanCode/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}