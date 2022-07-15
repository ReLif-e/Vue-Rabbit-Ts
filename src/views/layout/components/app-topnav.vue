<script lang="ts" setup name="AppTopnav">
// 通栏
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <li>
          <a href="javascript:;"><i class="iconfont icon-user"></i>痴尘大可爱</a>
        </li>
        <li><a href="javascript:;">退出登录</a></li>
        <li><router-link to="/login">请先登录</router-link></li>
        <li><a href="javascript:;">免费注册</a></li>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <li>
          <a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="less">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: @xtxColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}

// .app-topnav{
//  ul{
//   display: flex;
//   justify-content: flex-end;
//   li{
//      height: 53px;
//      line-height: 53px;
//     a{
//       display: inline-block;
//       border-left: 1px solid #000;
//       padding: 0 15px;
//     }
//   }
//  }
// }
</style>