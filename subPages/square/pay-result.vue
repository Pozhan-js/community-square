<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-20 17:02:38
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-20 17:28:09
 * @FilePath: /community-square/subPages/square/pay-result.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="pay-result">
    <view class="pay-result-box padding-42">
      <image
        style="width: 144rpx; height: 144rpx"
        src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230720_5ac6043cfd054d3f919f8fcd24d677dc.png"
        mode=""
      />

      <view class="title">支付成功</view>
      <view class="docs">等待商家为您分配服务人员</view>

      <view class="btn" @click="toOrderDetail">查看订单详情</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      payResult: 1,
    };
  },
  methods: {
    toOrderDetail() {
      uni.navigateTo({
        url: "/subPages/square/order-detail",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.pay-result {
  width: 100vw;

  &-box {
    text-align: center;

    .title {
      height: 50rpx;
      font-size: 36rpx;
      font-weight: bold;
      color: #333333;
      line-height: 50rpx;
      margin-top: 20rpx;
    }

    .docs {
      height: 38rpx;
      font-size: 26rpx;
      color: #999999;
      line-height: 38rpx;
      margin-top: 10rpx;
    }

    .btn {
      width: 500rpx;
      height: 88rpx;
      line-height: 88rpx;
      border-radius: 53rpx;
      border: 1rpx solid #5991fa;
      margin: 40px auto;
      font-size: 38rpx;
      color: #5991fa;

      &:active {
        background-color: #ccc;
      }
    }
  }
}
</style>