<script name="CallbackBind" lang="ts" setup>
import Message from '@/components/message';
import userStore from '@/stores';
import { QQUserInfo, QQUserInfoRes } from '@/types';
import { Counted } from '@/utils/hooks';
import { codeRule, mobileRule } from '@/utils/validate';
import { useField, useForm } from 'vee-validate';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const {user} = userStore()

const qqInfo = ref<QQUserInfo>()

let openId = ''
const isLogin = QC.Login.check()
if(isLogin){
  QC.Login.getMe(async id => {
    openId = id

   
  }),

  QC.api('get_user_info').success((res:QQUserInfoRes)=>{
    qqInfo.value = res.data
  })
}

const {validate} =   useForm({
    validationSchema:{
      mobile:mobileRule,
      code:codeRule
    }
  })

 const {value:mobile,errorMessage:mobileMessage,validate:validateMobile} =  useField<string>('mobile')
 const {value:code,errorMessage:codeMessage} =  useField<string>('code')


const ljbd = async () =>{
  const res = await validate()
  if(!res.valid) return
  console.log('兜底校验');
  user.QQbind({
    unionld:openId,
    mobile:mobile.value,
    code:code.value
  })
  Message.success('登入成功')
  router.push('/')
}

const {timeId,start} = Counted(59)

const bind = async () =>{
  if(timeId.value > 0 ) return
  const res = await validateMobile()
  if(!res.valid) return
 
 const res1 =  await user.QQcode(mobile.value)
 console.log(res1);
 
  start()
}
</script>
<template>
  <div class="xtx-form">
    <div class="user-info">
      <img
        :src="qqInfo?.figureurl_2"
        alt=""
      />
      <p>Hi，{{qqInfo?.nickname}} 欢迎来小兔鲜，完成绑定后可以QQ账号一键登录哦~</p>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-phone"></i>
        <input v-model="mobile" class="input" type="text" placeholder="绑定的手机号" />
      </div>
      <div class="error">{{mobileMessage}}</div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-code"></i>
        <input v-model="code" class="input" type="text" placeholder="短信验证码" />
        <span class="code" @click="bind">
        {{timeId === 0 ? '发送验证码1' : `${timeId}s后可重新发送`}}
        </span>
      </div>
      <div class="error">{{codeMessage}}</div>
    </div>
    <a href="javascript:;" class="submit" @click="ljbd">立即绑定</a>
  </div>
</template>

<style scoped lang="less">
.user-info {
  width: 320px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  background: #f2f2f2;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 25px;
  img {
    background: #f2f2f2;
    width: 50px;
    height: 50px;
  }
  p {
    padding-left: 10px;
  }
}
.code {
  position: absolute;
  right: 0;
  top: 0;
  line-height: 50px;
  width: 80px;
  color: #999;
  &:hover {
    cursor: pointer;
  }
}
</style>