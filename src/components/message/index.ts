import { h, render } from 'vue'
import XtxMessage from './message.vue'
type Props = {
  type: 'success' | 'error' | 'warning'
  text: string
}

const div = document.createElement('div')
div.setAttribute('class', 'xtx-message-container')
document.body.appendChild(div)
export default function Message({ type, text }: Props) {
  const vNode = h(XtxMessage, { type, text })
  render(vNode, div)
}
