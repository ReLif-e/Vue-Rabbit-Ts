// 类型声明文件11

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

// 轮播图
export interface BannerItem {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}

// 新鲜好物
export interface NewItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}

// 人气推荐
export interface HotItem {
  id: string;
  picture: string;
  title: string;
  alt: string;
}


// 热门品牌
export type BrandItem = {
  id: string
  name: string
  nameEn: string
  logo: string
  picture: string
  type?: any
  desc: string
  place: string
}


// 生鲜
export interface GoodsItem {
  id: string;
  name: string;
  picture: string;
  saleInfo: string;
  children: Child[];
  goods: Good[];
}

export interface Good {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}

export interface Child {
  id: string;
  name: string;
  layer: number;
  parent?: any;
}




// 专题
export interface specialItem {
  creator: string;
  isDelete: number;
  createTime: string;
  updateTime: string;
  id: string;
  classificationId: string;
  title: string;
  summary: string;
  lowestPrice: number;
  cover: string;
  detailsUrl: string;
  collectNum: number;
  viewNum: number;
  replyNum: number;
}
// 顶级分类类型
export type TopCategory = {
  id: string
  name: string
  picture: string
  children: CategoryRes[]
}