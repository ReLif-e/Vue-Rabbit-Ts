import { h, render } from 'vue'
import XtxMessage from './message.vue'
type Props = {
  type: 'success' | 'error' | 'warning'
  text: string
  time:number
}

// const div = document.createElement('div')
// div.setAttribute('class', 'xtx-message-container')
// document.body.appendChild(div)
// 创建·真实dom
const div = document.createElement('div')

// 给dom添加元素
div.setAttribute('class','xtx-message-container')

// 往dom树上添加结构
document.body.appendChild(div)

// 向外导出方法
export default function Message({ type, text ,time}: Props) {
  const vNode = h(XtxMessage, { type, text })
  render(vNode, div)

  // 关闭弹框
  setTimeout(()=>{
    render(null,div)
  },time)
}

// 成功提示
Message.success = function (text:string,time:number = 2000){
  Message({
    type:'success',
    text,
    time
  })
}

// 错误提示
Message.error = function (text:string,time:number = 2000){
  Message({
    type:'error',
    text,
    time
  })
}

// 警告提示
Message.warning = function (text:string,time:number = 2000){
  Message({
    type:'warning',
    text,
    time
  })
}