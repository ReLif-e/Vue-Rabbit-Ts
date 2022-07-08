import {defineStore} from 'pinia'
import axios from '@/utils/request'
import { ApiRes, BannerItem, HotItem, NewItem } from '@/types'



export default defineStore('home',{
  state() {
      return{
       BannerList:[] as BannerItem[],
       NewList:[] as NewItem[],
       HotList:[] as HotItem[]
      } 
  },
  
   actions:{
    async GetBannerList(){
      const res = await axios.get<ApiRes<BannerItem>>('/home/banner')
      // console.log(res);
      this.BannerList = res.data.result
    },

// 新鲜好物
    async GetNewList(){
      const res = await axios.get<ApiRes<NewItem>>('/home/new')
      // console.log(res);
      this.NewList = res.data.result
    },

  // 人气推荐
    async GetHotList(){
      const res = await axios.get<ApiRes<HotItem>>('/home/hot')
      // console.log(res);
      this.HotList = res.data.result
    },
  }
})