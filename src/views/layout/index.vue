<script lang="ts" setup name="Layout">
import AppTopnav from './components/app-topnav.vue';
import AppHeader from './components/app-header.vue';
import AppFooter from './components/app-footer.vue';
import AppHeaderStick from './components/app-header-stick.vue';
import category from '@/stores/modules/category';
// 将组件赋值给cares
const cares = category()

// 调用组件内的方法
cares.getCategoryList()

</script>
<template>
<AppTopnav />
<AppHeader />
<AppHeaderStick />
<main class="app-body">
  <!-- 路由出口:配置对应的路由，在这里导出
  然后在app-header-nav里面配置跳转的路由并把对应的参数(id)传递过去 -->
  <RouterView />
</main>

<AppFooter />
</template>

<style lang="less" scoped>
.app-body{
  min-height: 600px;
}
</style>