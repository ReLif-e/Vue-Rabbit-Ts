import { App } from 'vue'
import XtxSkeleton from '@/components/skeleton/index.vue'
import XtxCarousel from '@/components/carousel/index.vue'
import XtxMore from '@/components/more/index.vue'
import { useIntersectionObserver } from '@vueuse/core'

export default {
  install(app: App) {
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
 

    // 自定义指令directive
    app.directive('lazy',{
      mounted(el,binding){
        console.log(binding);
        // 监听图片是否在可视区
        useIntersectionObserver(el,([{isIntersecting}])=>{
          console.log(isIntersecting);
          if(isIntersecting){
            el.src = binding.value
          }
        })
      }
    })
  }
}