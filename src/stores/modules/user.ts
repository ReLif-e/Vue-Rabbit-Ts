import {defineStore} from 'pinia'
import axios from '@/utils/request'
import { ApiRes, userItem } from '@/types'


export default defineStore('user',{
  state() {
      return{
        userLogin:{} as userItem
      }
  },

  actions:{
  async  getUser(data:{}){
      const res = await axios.post<ApiRes<userItem>>('/login',data)
      console.log(res);
      this.userLogin = res.data.result
    },
    async getPhone(mobile:string){
      axios.get('/login/code',{
        params:{
          mobile
        }
      })
    }
  }
})