import { App } from 'vue'
import XtxSkeleton from '@/components/skeleton/index.vue'
import XtxCarousel from '@/components/carousel/index.vue'
import XtxMore from '@/components/more/index.vue'
import XtxBread from '@/components/bread/index.vue'
import XtxBreadItem from '@/components/bread/item.vue'
import XtxCity from '@/components/city/index.vue'
import { useIntersectionObserver } from '@vueuse/core'
import dImage from '@/assets/images/200.png'

export default {
  install(app: App) {
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
    app.component(XtxBread.name, XtxBread)
    app.component(XtxBreadItem.name, XtxBreadItem)
    app.component(XtxCity.name, XtxCity)
 

    // 自定义指令directive
    app.directive('lazy',{
      mounted(el,binding){
        // console.log(binding);
        // 监听图片是否在可视区 
        useIntersectionObserver(el,([{isIntersecting}])=>{
          // console.log(isIntersecting);
          if(isIntersecting){
            el.src = binding.value
          }
        })
        // 捕获图片加载失败
        el.onerror = () =>{
          // 加载失败后加载默认的图片
          el.src = dImage
        }
      }
    })
  }
}