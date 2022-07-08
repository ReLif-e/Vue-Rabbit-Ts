import {defineStore} from 'pinia'
import axios from '@/utils/request'
import { ApiRes, BannerItem } from '@/types'



export default defineStore('home',{
  state() {
      return{
       BannerList:[] as BannerItem[]
      }
  },
  
   actions:{
    async GetBannerList(){
      const res = await axios.get<ApiRes<BannerItem>>('/home/banner')
      console.log(res);
      this.BannerList = res.data.result
    }
  }
})