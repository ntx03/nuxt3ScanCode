import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "header"
declare module "/media/andrey/1CDC7029DC6FFC00/dev/nuxt3ScanCode/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}