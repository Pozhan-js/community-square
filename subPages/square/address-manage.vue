<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-20 15:00:21
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-20 15:54:16
 * @FilePath: /community-square/subPages/square/address-manage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="address-manage">
    <view class="address-manage-item flex-a-center-j-space-between">
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
        <image
          style="width: 38rpx; height: 38rpx"
          src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230720_dcccd220075246198a92975f7c584171.png"
          mode=""
        />
      </view>
    </view>
    <u-gap height="10" bgColor="#F9F9F9"></u-gap>
    <view class="address-manage-item flex-a-center-j-space-between">
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
        <image
          style="width: 38rpx; height: 38rpx"
          src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230720_dcccd220075246198a92975f7c584171.png"
          mode=""
        />
      </view>
    </view>

    <!-- footer -->
    <view class="address-manage-footer flex-center">
      <view class="flex-center" @click="toEditAddress">
        <u-icon name="plus" size="20" color="#FFF"></u-icon>
        <view class="footer-addr">新建地址</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toEditAddress() {
      uni.navigateTo({
        url: "/subPages/square/edit-address",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.address-manage {
  width: 100vw;
  position: relative;
  text-align: center;

  &-item {
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

  &-footer {
    width: 690rpx;
    height: 88rpx;
    background: #5991fa;
    box-shadow: 0rpx 6rpx 10rpx 1rpx rgba(0, 0, 0, 0.16);
    border-radius: 10rpx;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    .footer-addr {
      margin-left: 20rpx;
      height: 53rpx;
      font-size: 38rpx;
      font-weight: bold;
      color: #ffffff;
      line-height: 53rpx;
    }
  }
}
</style>