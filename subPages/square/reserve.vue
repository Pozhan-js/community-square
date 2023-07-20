<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-19 14:41:46
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-20 17:05:31
 * @FilePath: /community-square/pages-square/pay.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <view class="reserve">
    <view class="reserve-form box">
      <!-- 地址 -->
      <view class="reserve-form-addr flex-a-center-j-space-between">
        <view class="addr-info">
          <view class="addr-info-name">李阿奇</view>
          <view class="addr-icon">默认</view>
        </view>
        <view class="addr-detail">
          <view class="addr-detail-phone">136****4687</view>

          <view class="addr-detail-addr">
            湖南省长沙市开福区万家丽北路二段 218号
          </view>
        </view>
        <view>
          <u-icon name="arrow-right" @click="toAddrManager"></u-icon>
        </view>
      </view>

      <u-gap height="10" bgColor="#F9F9F9"></u-gap>

      <view class="reserve-form-item flex-a-center-j-space-between padding-32">
        <view class="reserve-form-item-label">服务时间：</view>
        <u--input
          v-model="addrForm.time"
          disabledColor="#ffffff"
          disabled
          placeholder="请选择时间"
          border="none"
        ></u--input>
        <u-icon
          slot="right"
          name="arrow-right"
          @click.stop="selectTime"
        ></u-icon>
      </view>
      <u-gap height="10" bgColor="#F9F9F9"></u-gap>

      <view class="reserve-form-item flex-a-center padding-32">
        <view class="reserve-form-item-label">备注：</view>
        <u--textarea
          v-model="value1"
          border="none"
          placeholder="请输入内容"
          autoHeight
        ></u--textarea>
      </view>
      <u-gap height="10" bgColor="#F9F9F9"></u-gap>

      <view class="reserve-form-item flex-a-center-j-space-between padding-32">
        <view class="reserve-form-item-label">支付：</view>
        <view class="flex-a-center">
          <image
            style="width: 40rpx; height: 36rpx; margin-right: 10rpx"
            src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230720_fa6dfccee1d64e8c8ce420ed148796c2.png"
            mode=""
          />
          <view>微信支付</view>
          <!-- <u-icon name="arrow-right"></u-icon> -->
        </view>
      </view>
      <u-line></u-line>
      <view class="reserve-form-item flex-a-center-j-space-between padding-32">
        <view class="reserve-form-item-label">商品合计：</view>
        <view>￥88</view>
      </view>
    </view>
    <!-- footer -->
    <view class="reserve-footer">
      <view
        class="reserve-footer-product flex-a-center-j-space-between padding-32"
      >
        <view>商品合计：<text>￥88</text></view>
        <view class="reserve-footer-product-btn" @click="toPayResult"
          >提交订单</view
        >
      </view>
    </view>
    <!-- 时间选择器 -->
    <u-datetime-picker
      :show="show"
      v-model="pickTime"
      @confirm="confirmPickTime"
      @change="changePickTime"
      mode="datetime"
    ></u-datetime-picker>
  </view>
</template>

<script>
export default {
  // 预约界面
  data() {
    return {
      pickTime: "",
      show: false,
      addrForm: {
        time: "",
      },
      value1: "",
    };
  },
  methods: {
    // 选择时间
    selectTime() {
      this.show = true;
      console.log(this.show);
    },
    confirmPickTime() {
      console.log(this.pickTime);
      this.addrForm.time = uni.$u.timeFormat(
        this.pickTime,
        "yyyy-mm-dd hh:MM:ss"
      );
      console.log(this.addrForm.time);
      this.show = false;
    },
    changePickTime(date) {
      console.log(date);
      this.pickTime = date.value;
    },

    // 跳转到地址管理
    toAddrManager() {
      uni.navigateTo({
        url: "/subPages/square/address-manage",
      });
    },
    // 跳转到支付成功页面
    toPayResult() {
      uni.navigateTo({
        url: "/subPages/square/pay-result",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.reserve {
  width: 100vw;
  position: relative;

  &-form {
    font-size: 30rpx;
    color: #333333;

    &-addr {
      padding: 30rpx;
      background-color: #ffffff;

      .addr-info {
        .addr-icon {
          height: 34rpx;
          line-height: 34rpx;
          text-align: center;
          border-radius: 6rpx;
          border: 1rpx solid #999999;
          font-size: 20rpx;
          color: #999999;
        }
      }

      .addr-detail {
        width: 428rpx;

        &-phone {
          margin-bottom: 10rpx;
        }
      }
    }

    &-item {
      &-label {
        margin-right: 20rpx;
      }
    }
  }

  &-footer {
    width: 100vw;
    height: 220rpx;
    background-color: #f9f9f9;
    position: fixed;
    bottom: 0;

    text {
      font-size: 38rpx;
      font-weight: bold;
      color: #ff2d2d;
    }

    .reserve-footer-product-btn {
      width: 246rpx;
      height: 88rpx;
      background: #5991fa;
      box-shadow: 0rpx 6rpx 10rpx 1rpx rgba(0, 0, 0, 0.16);
      border-radius: 53rpx;
      text-align: center;
      line-height: 88rpx;
      font-size: 38rpx;
      font-weight: bold;
      color: #ffffff;
    }
  }
}
</style>