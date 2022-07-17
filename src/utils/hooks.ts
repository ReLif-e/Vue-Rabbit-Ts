import { useIntersectionObserver, useIntervalFn } from "@vueuse/core"
import { ref } from "vue"

export function useLazyData(callback:()=>void){
  const target = ref(null)
  // 数据懒加载
  const {stop} = useIntersectionObserver(target,([{isIntersecting}])=>{
    if(isIntersecting){
      callback()
      stop()
    }
  },{
    // 只要漏一点就发送触发回调----阈值
    threshold:0
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


export function Counted(count:number){
    // 短信倒计时
    const timeId = ref(0)

      // 第三方定时器
      const {pause,resume} = useIntervalFn(()=>{
        // console.log(1);
        timeId.value--
        // 关闭定时器
        if(timeId.value === 0 ) pause()
        
      },1000,{
        immediate:false //首次加载不执行
      })
      // 开启定时器的方法
      const start = ()=>{
        timeId.value = count
        resume()
      }

  return{
    resume,
    timeId,
    start
  }
}