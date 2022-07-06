import XtxSkeleton from '@/components/skeleton/index.vue'
import { App } from 'vue'

export default {
  install(app: App) {
    app.component('XtxSkeleton', XtxSkeleton)
  }
}