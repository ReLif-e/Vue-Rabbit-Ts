import {defineStore} from 'pinia'
import axios from '@/utils/request'
import { ApiRes, userItem } from '@/types'
import { getProfile, removeProfile, setProfile } from '@/utils/user'


export default defineStore('user',{
  state() {
      return{
        userLogin:getProfile() as userItem
      }
  },

  actions:{
  async  getUser(data:{}){
      const res = await axios.post<ApiRes<userItem>>('/login',data)
      console.log(res);
      this.userLogin = res.data.result
      setProfile( this.userLogin)
    },

    async getPhone(mobile:string){
      axios.get('/login/code',{
        params:{
          mobile
        }
      })
    },

    async mobileLogin(data:{mobile: string, code: string}) {
      const res = await axios.post<ApiRes<userItem>>('/login/code', data)
      console.log(res);
      
      // 1. 保存用户信息到 state 中
      this.userLogin = res.data.result
      setProfile( this.userLogin)
    },

    removeToken(){
      this.userLogin = {} as userItem
      removeProfile()
    }

  }
})