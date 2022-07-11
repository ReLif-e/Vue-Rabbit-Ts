// 创建路由1
import {createRouter, createWebHashHistory} from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/Home/index.vue'
const router = createRouter({
  history:createWebHashHistory(),
  
  routes:[
    {
      path:'/',
      component: Layout,
      children:[
        {
          path:'', //访问首页自动访问这个组件
          component:Home
        },

        {
          path:'category/:id', //首页一行路由--居家、美食..
          component:()=>import('@/views/category/index.vue')
        },
        {              //路由传参
          path:'category/sub/:id', //显示隐藏的路由--居家生活、收纳...
          component:()=>import('@/views/category/sub.vue')
        },
        {            
          path:'play',
          component:()=>import('@/views/playgroud/index.vue')
        },
        
      ]
    },
    {
      path:'/login',
      component: () => import('@/views/login/index.vue')
    }
  ],
  
 
})

// 导出路由对象请求·
export default router