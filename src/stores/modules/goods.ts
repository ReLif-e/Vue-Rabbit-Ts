import {defineStore} from 'pinia'
import axios from '@/utils/request'
import { ApiRes,GoodsInfo } from '@/types'


export default defineStore('goods',{
  state() {
      return{
        Info:{} as GoodsInfo
      }
  },

  actions:{
   async GetInfo(id:string){
    const res = await axios.get<ApiRes<GoodsInfo>>('/goods',{
      params:{
        id
      }
     })
     this.Info = res.data.result
    },
    removeInfo(){
      this.Info = {} as GoodsInfo
    },



  }
})
