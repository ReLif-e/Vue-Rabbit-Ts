<script lang="ts" setup name="LoginForm">
import Message from '@/components/message';
import userStore from '@/stores';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
// 导入校验库
import {useField,useForm} from 'vee-validate'

// 导入路由
const router = useRouter()

const active = ref<'acount' | 'cateform'>('acount')
// 导入方法
const {user} = userStore()

watch(active,()=>{
  // console.log(1);
  resetForm()
})

// 表单数据
// const isArgeen = ref(false)
// const form = ref({
//   account: '',
//   password: '',
//   isAgree: false,
// })

const login = async ()=>{
  // Message({type:'success',text:'你好，靓仔',time:2000})
  // Message.success('芜湖')
  // Message.error('你愁啥')
  // Message.warning('禁止进入')
  // 表单校验---基础版
  //  if (form.value.account === '') {
  //   Message.error( '用户名或手机号不能为空')
  //   return
  // }
  // if (form.value.password === '') {
  //   Message.error( '密码不能为空')

  //   return
  // }
  // if (!form.value.isAgree) {
  //   Message.error( '请同意许可')
  //   return
  // }
  console.log('通过校验，可以发送请求')

  // 发送请求
  user.getUser({account:accountValuea,password:passwordMessage})
  // 登入成功跳转首页
  try{
    Message.success('登入成功')
    await router.push('/')
  } catch(e){
    // 失败提示用户
    Message.error('检查用户名和密码')
  }
}

    // 表单校验
 const {resetForm} =    useForm({
      validationSchema:{
        // 校验的数据项,下面解构出来并v-model进行双向绑定
        account(val:string){
          // 对数据项校验
            if(val?.length === 0) return '用户名错误了了'
            if(!/^[a-zA-Z]\w{5,19}$/.test(val)) return '用户名字母开头,应为5~19位'
            return true
        },
        password(val:string){
          // 对数据项校验
          if(val?.length === 0) return '用户名错误了了'
          if(!/^\w{6,12}$/.test(val)) return '密码应为6~12位'
          return true
        },
        isAgree(val:boolean){
          if(!val) return '请同意协议'
          return true
        },
       mobile: (value: string) => {
          if (!value) return '请输入手机号'
          if (!/^1[3-9]\d{9}$/.test(value)) return '手机号格式错误'
          return true
             },
       code: (value: string) => {
          if (!value) return '请输入验证码'
          if (!/^\d{6}$/.test(value)) return '验证码格式错误'
          return true
          },
         }
       })

    // 解构出value和errorMessage
    // value表示里面的值
    // errorMessage表示验证未通过的提示
    const {value:accountValuea,errorMessage:accountMessage} = useField<string>('account')// 调用方法时的参数，必须和userForm里面定义的方法一致
    const {value:passwordValuea,errorMessage:passwordMessage} = useField<string>('password')
    const {value:isArgeeValuea,errorMessage:isArgeeMessage} = useField<boolean>('isAgree')
    const {value:mobileValuea,errorMessage:mobileMessage} = useField<boolean>('mobile')
    const {value:codeValuea,errorMessage:codeMessage} = useField<string>('code')



</script>
<template>
  <div class="account-box">
    <div class="toggle">
      <a @click="active = 'acount'" href="javascript:;" v-if="active === 'cateform'">
        <i class="iconfont icon-user"></i> 使用账号登录
      </a>
      <a @click="active = 'cateform'" href="javascript:;" v-else>
        <i class="iconfont icon-msg"></i> 使用短信登录
      </a>
    </div>
    <div class="form">
      <template v-if="active === 'acount'">
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-user"></i>
            <input v-model="accountValuea" type="text" placeholder="请输入用户名或手机号" />
          </div>
          <div v-if="accountMessage" class="error"><i class="iconfont icon-warning" />{{accountMessage}}</div>
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-lock"></i>
            <input v-model="passwordValuea" type="password" placeholder="请输入密码" />
          </div>
         <div v-if="passwordMessage" class="error"><i class="iconfont icon-warning" />{{passwordMessage}}</div>
        </div>
      </template>
      <template v-else>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-user"></i>
            <input v-model="mobileValuea" type="text" placeholder="请输入手机号" />
          </div>
          <div v-if="mobileMessage" class="error"><i class="iconfont icon-warning" />{{mobileMessage}}</div>
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-code"></i>
            <input v-model="codeValuea" type="text" placeholder="请输入验证码" />
            <span class="code">发送验证码</span>
          </div>
          <div v-if="codeMessage" class="error"><i class="iconfont icon-warning" />{{codeMessage}}</div>

        </div>
      </template>
      <div class="form-item">
        <div class="agree">
         
          <span>
          <XtxCheckbox v-model="isArgeeValuea">
            我已同意
          </XtxCheckbox>
          </span>
          <a href="javascript:;">《隐私条款》</a>
          <span>和</span>
          <a href="javascript:;">《服务条款》</a>
        </div>
          <div v-if="isArgeeMessage" class="error"><i class="iconfont icon-warning" />{{isArgeeMessage}}</div>
      </div>
      <a href="javascript:;" class="btn" @click="login">登录</a>
    </div>
    <div class="action">
      <img
        src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png"
        alt=""
      />
      <div class="url">
        <a href="javascript:;">忘记密码</a>
        <a href="javascript:;">免费注册</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
// 账号容器
.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;
    a {
      color: @xtxColor;
      i {
        font-size: 14px;
      }
    }
  }
  .form {
    padding: 0 40px;
    &-item {
      margin-bottom: 28px;
      .input {
        position: relative;
        height: 36px;
        > i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }
        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;
          &.error {
            border-color: @priceColor;
          }
          &.active,
          &:focus {
            border-color: @xtxColor;
          }
        }
        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }
      > .error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: @priceColor;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }
    .agree {
      a {
        color: #069;
      }
    }
    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: @xtxColor;
      &.disabled {
        background: #cfcdcd;
      }
    }
  }
  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      cursor: pointer;
    }
    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}
</style>
