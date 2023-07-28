<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-20 17:17:02
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-28 10:27:38
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
      <view class="pay-header flex-a-center-j-space-between">
        <view class="flex-a-center">
          <view class="dot"></view>
          <view class="title">日常保洁</view>
        </view>
        <view class="pay-status">待支付</view>
      </view>

      <view class="pay-body flex-a-center-j-space-between">
        <image
          style="width: 126rpx; height: 110rpx; margin-right: 20rpx"
          src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230721_f36b0dec1e7841038cb88dd15daffa7c.png"
          mode=""
        />
        <view class="pay-body-message">
          <view class="message-item flex-a-center">
            <u-icon name="clock"></u-icon>
            <view class="text">2023-07-10（周一）</view>
          </view>
          <view class="flex-a-center">
            <u-icon name="map"></u-icon>
            <view class="text">万家丽北路二段218号</view>
          </view>
        </view>
      </view>

      <view class="pay-footer flex-a-center-j-space-between">
        <view class="pay-footer-left">预付：￥88.00</view>
        <view class="pay-footer-right flex-a-center">
          <view class="pay-btn" @click="showModel">取消订单</view>

          <view class="pay-btn active" @click="toReserve">去支付</view>
        </view>
      </view>
    </view>

    <u-gap height="10" bgColor="#F9F9F9"></u-gap>

    <view class="order-detail-massage padding-30">
      <view class="order-detail-massage-item flex-a-center-j-space-between">
        <view class="massage-label">应付金额：</view>
        <view class="money massage-item-content">￥88</view>
      </view>
      <view class="order-detail-massage-item flex-a-center-j-space-between">
        <view class="massage-label">预约时间：</view>
        <view class="massage-item-content">2023-07-10（周一）08:30-09:30</view>
      </view>
      <view class="order-detail-massage-item flex-a-center-j-space-between">
        <view class="massage-label">下单时间：</view>
        <view class="massage-item-content">023-07-10 08:00:00</view>
      </view>
      <view class="order-detail-massage-item flex-a-center-j-space-between">
        <view class="massage-label">支付方式：</view>
        <view class="massage-item-content">未选择</view>
      </view>
    </view>

    <u-toast ref="uToast" />

    <!-- model框 -->
    <u-modal
      :show="show"
      :title="title"
      :showCancelButton="true"
      @confirm="confirmModel"
      @cancel="cancelModel"
      :content="content"
    ></u-modal>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "提示",
      show: false,
      content: "取消订单",
    };
  },
  methods: {
    toReserve() {
      uni.navigateTo({
        url: "/subPages/square/reserve",
      });
    },

    showModel() {
      this.show = true;
    },
    confirmModel() {
      this.$message(`取消订单成功`);
      this.show = false;
    },
    cancelModel() {
      this.show = false;
    },
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

  &-pay {
    .pay-header {
      border-bottom: 1px solid #e5e5e5;
      padding: 20rpx 0;

      .dot {
        width: 15rpx;
        height: 30rpx;
        background: #5991fa;
        border-radius: 8rpx;
      }

      .title {
        height: 45rpx;
        font-size: 32rpx;
        color: #333333;
        line-height: 45rpx;
        margin-left: 10rpx;
      }

      .pay-status {
        font-size: 26rpx;
        font-weight: bold;
        color: #ee3b3b;
      }
    }

    .pay-body {
      padding: 20rpx 0;
      border-bottom: 1px solid #e5e5e5;

      > image {
        flex-shrink: 0;
      }

      &-message {
        width: 100%;

        .message-item {
          margin-bottom: 20rpx;
        }

        .text {
          font-size: 28rpx;
          color: #333333;
          margin-left: 20rpx;
        }
      }
    }

    .pay-footer {
      padding: 30rpx 0;

      .pay-footer-left {
        height: 40rpx;
        font-size: 28rpx;
        font-weight: bold;
        color: #333333;
        line-height: 40rpx;
      }

      .pay-footer-right {
        .pay-btn {
          width: 150rpx;
          height: 52rpx;
          border-radius: 35rpx;
          border: 1rpx solid #707070;
          line-height: 52rpx;
          text-align: center;
          font-size: 26rpx;
          color: #333333;
          margin-left: 20rpx;

          &:active {
            // background-color: #ccc;
            color: #fff;
            background-color: #ee3b3b;
            border-color: #ee3b3b;
          }
        }
      }
    }
  }

  &-massage {
    &-item {
      padding: 10rpx 0;
      font-size: 26rpx;

      .message-label {
        color: #999999;
      }

      &-content {
        color: #666;
      }
      .money {
        height: 45rpx;
        font-size: 32rpx;
        font-weight: 800;
        color: #ee3b3b;
        line-height: 45rpx;
      }
    }
  }
}

// .active {
//   color: #fff !important;
//   background-color: #ee3b3b;
//   border: none !important;
// }
</style>