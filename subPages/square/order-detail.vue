<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-20 17:17:02
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-20 17:47:23
 * @FilePath: /community-square/subPages/square/order-detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="order-detail">
    <view class="order-detail-info padding-30">
      <view class="info-message flex-a-center">
        <view class="name">李阿奇</view>
        <view class="phone">136****4687</view>
      </view>
      <view class="address">湖南省长沙市开福区万家丽北路二段218号</view>
    </view>

    <u-gap height="10" bgColor="#F9F9F9"></u-gap>

    <view class="order-detail-pay padding-30">
      <view></view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.order-detail {
  width: 100vw;

  &-info {
    .info-message {
      font-size: 30rpx;
      color: #333333;

      .name {
        height: 42rpx;
        line-height: 42rpx;
        margin-right: 20rpx;
      }

      .phone {
        height: 42rpx;
        line-height: 42rpx;
      }
    }
    .address {
      height: 38rpx;
      font-size: 26rpx;
      color: #999999;
      line-height: 38rpx;
      margin-top: 10rpx;
    }
  }
}
</style>