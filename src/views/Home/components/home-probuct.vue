<script lang="ts" setup name="HomeProduct">
import userStore from '@/stores';
import { useLazyData } from '@/utils/hooks';
import HomePanel from './home-panel.vue'

const {home} = userStore()
const target = useLazyData(home.GetProbuctList)
// home.GetProbuctList()
</script>
<template>
  <div ref="target"  class="home-product">
    <HomePanel  :title="item.name" sub-title="" v-for="item in home.ProbuctList">
      <template v-slot:right>
        <div class="sub">
          <RouterLink to="/">{{item.name}}</RouterLink>
        </div>
        <XtxMore />
      </template>
      <div class="box">
        <RouterLink class="cover" to="/">
          <img
            v-lazy="item.picture"
            alt=""
          />
          <strong class="label">
            <span>{{item.name}}</span>
            <span>{{item.saleInfo}}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="sub in item.goods" :key="sub.id">
            <div class="goods-item">
              <RouterLink to="/" class="image">
                <img
                  v-lazy="sub.picture"
                  alt=""
                />
              </RouterLink>
              <p class="name ellipsis-2">{{sub.name}}</p>
              <p class="desc">{{sub.desc}}</p>
              <p class="price">&yen;{{sub.price}}</p>
              <div class="extra">
                <RouterLink to="/">
                  <span>找相似</span>
                  <span>发现现多宝贝 &gt;</span>
                </RouterLink>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </HomePanel>
  </div>
</template>

<style scoped lang="less">
.home-product {

  background: #fff;
  height: 2900px;
  .sub {
    margin-bottom: 2px;
    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;
      &:hover {
        background: @xtxColor;
        color: #fff;
      }
      &:last-child {
        margin-right: 80px;
      }
    }
  }
  .box {
    display: flex;
    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .label {
        width: 240px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        span {
          text-align: center;
          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }
          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }
    .goods-list {

      width: 990px;
      display: flex;
      flex-wrap: wrap;
      li {

        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;
        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }
        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }
  }
}
.goods-item {
  width: 240px;
  height: 300px;
  padding: 10px 30px;
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
  transition: all 0.5s;
  .image {
    display: block;
    width: 160px;
    height: 160px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    margin-top: 6px;
    font-size: 16px;
    &.name {
      height: 44px;
    }
    &.desc {
      color: #666;
      height: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;


    }
    &.price {
      margin-top: 25px;
      font-size: 20px;
      color: @priceColor;
    }
  }
  .extra {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 86px;
    width: 100%;
    background: @xtxColor;
    text-align: center;
    transform: translate3d(0, 100%, 0);
    transition: all 0.5s;
    span {
      display: block;
      color: #fff;
      width: 120px;
      margin: 0 auto;
      line-height: 30px;
      &:first-child {
        font-size: 18px;
        border-bottom: 1px solid #fff;
        line-height: 40px;
        margin-top: 5px;
      }
    }
  }
  &:hover {
    border-color: @xtxColor;
    .extra {
      transform: none;
    }
  }
}
</style>