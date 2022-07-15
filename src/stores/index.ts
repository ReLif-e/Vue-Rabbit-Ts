import userCategory from './modules/category'
import userHome from './modules/home'
import userGoods from './modules/goods'
import userUser from './modules/user'

// 导出userStore后去解构里面的组件
export default function userStore(){
  return{
    category:userCategory(),
    home:userHome(),
    goods:userGoods(),
    user:userUser()

  }
}