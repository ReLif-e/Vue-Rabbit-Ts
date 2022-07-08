import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 取名的插件
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

const path = require('path')
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue({
    reactivityTransform:true
  }),vueSetupExtend()],
  // 配置vite识别@符号
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        // 相当于是全局注册了全局的less样式
        additionalData: `
          @import "@/assets/styles/variables.less";
          @import "@/assets/styles/mixins.less";
        `
      }
    }
  }
})
