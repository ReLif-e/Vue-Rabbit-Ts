// 创建路由1
import {createRouter, createWebHashHistory} from 'vue-router'
import Layout from '@/views/layout/index.vue'
const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:'/',
      component: Layout
    },
    {
      path:'/login',
      component: () => import('@/views/login/index.vue')
    }
  ]
 
})

// 导出路由对象请求·
export default router