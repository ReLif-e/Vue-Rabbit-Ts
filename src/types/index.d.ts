// 类型声明文件

export interface CategoryRes {
  id:string
  name:string
  picture:string
  children:CategoryRes[]
  open:boolean
  goods:GoodItem[]
  }
  

 export interface ApiRes<T> {
    code:string
    msg:string
    result:T[]
    
  }

export interface GoodItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum?: any;
}


interface BannerItem {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}