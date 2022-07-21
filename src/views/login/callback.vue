<script lang="ts" setup >
import LoginHeader from './components/login-header.vue'
import LoginFooter from './components/login-footer.vue'
import CallbackBind from './components/callback-bind.vue'
import CallbackPatch from './components/callback-patch.vue'
import { ref } from 'vue'
import userStore from '@/stores'
import Message from '@/components/message'
import { useRouter } from 'vue-router'
const hasAccount = ref(true)
const {user} = userStore()

const router = useRouter()

// 获取登录状态
const isLogin = QC.Login.check()
console.log(isLogin);

// 如果已经登陆, 就获取 openId
if (isLogin) {
  QC.Login.getMe(async openId => {
    // console.log(openId)
    // 发送请求
    await user.QQlogin({unionId:openId,source:6})
    // 提示用户
    Message.success('QQ is Ok')
    // 跳转首页
    router.push('/')
  })
}
</script>

<template>
  <LoginHeader>YADA</LoginHeader>
  <section class="container">
    <nav class="tab">
      <a
        :class="{ active: hasAccount }"
        href="javascript:;"
        @click="hasAccount = true"
      >
        <i class="iconfont icon-bind" />
        <span>已有小兔鲜账号，请绑定手机</span>
      </a>
      <a
        :class="{ active: !hasAccount }"
        href="javascript:;"
        @click="hasAccount = false"
      >
        <i class="iconfont icon-edit" />
        <span>没有小兔鲜账号，请完善资料</span>
      </a>
    </nav>
    <div class="tab-content" v-if="hasAccount">
   <CallbackBind />
    </div>
    <div class="tab-content" v-else>
     <CallbackPatch />
    </div>
  </section>
  <LoginFooter></LoginFooter>
</template>

<style scoped lang="less">
.container {
  padding: 25px 0;
}
.tab {
  background: #fff;
  height: 80px;
  padding-top: 40px;
  font-size: 18px;
  text-align: center;
  a {
    color: #666;
    display: inline-block;
    width: 350px;
    line-height: 40px;
    border-bottom: 2px solid #e4e4e4;
    i {
      font-size: 22px;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
      margin-left: 4px;
    }
    &.active {
      color: @xtxColor;
      border-color: @xtxColor;
    }
  }
}
.tab-content {
  min-height: 600px;
  background: #fff;
}
</style>