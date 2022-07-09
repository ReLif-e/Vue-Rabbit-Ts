import { useIntersectionObserver } from "@vueuse/core"
import { ref } from "vue"

export function useLazyData(callback:()=>void){
  const target = ref(null)
  // 数据懒加载
  const {stop} = useIntersectionObserver(target,([{isIntersecting}])=>{
    if(isIntersecting){
      callback()
      stop()
    }
  })
  return target
}

// 接受传递来的元素和函数
// export function useLazyData(target:any,callback:()=>void){
//   // 数据懒加载
//   const {stop} = useIntersectionObserver(target,([{isIntersecting}])=>{
//     if(isIntersecting){
//       callback()
//       stop()
//     }
//   })
//   return target
// }