<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-21 17:16:03
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-24 16:30:02
 * @FilePath: /community-square/subPages/user/message/message.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="user-message">
    <view class="user-message-list padding-30">
      <view class="item flex-a-center">
        <image
          style="width: 100rpx; height: 100rpx"
          src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_07324682832745b7a048592efc1fa0f3.png"
          mode=""
        />
        <view class="item-right">
          <view class="item-right-header flex-a-center-j-space-between">
            <view class="item-right-header-title">服务通知</view>
            <view class="item-right-header-time">12小时</view>
          </view>
          <view class="item-right-text flex-a-center">
            <view class="text-content text-hidden">
              您好，您预约的上门体检服务将于今天下午4点钟上门，请您家中留人
            </view>
            <view class="dot">1</view>
          </view>
        </view>
      </view>
      <!-- 用户信息 -->
      <view class="item flex-a-center">
        <image
          style="width: 100rpx; height: 100rpx"
          src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_1ba101bcf3334f4c8706546a70c762ce.png"
          mode=""
        />
        <view class="item-right">
          <view class="item-right-header flex-a-center-j-space-between">
            <view class="item-right-header-title">颜叔</view>
            <view class="item-right-header-time">12小时</view>
          </view>
          <view class="item-right-text flex-a-center">
            <view class="text-content text-hidden"> 您有一条消息 </view>
            <view class="dot">1</view>
          </view>
        </view>
      </view>
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
.user-message {
  width: 100vw;

  &-list {
    .item {
      > image {
        flex-shrink: 0;
      }

      &-right {
        width: 100%;
        margin-left: 20rpx;
        border-bottom: 1px solid #cbcbcb;
        padding: 30rpx 0;

        &-header {
          height: 40rpx;
          font-size: 28rpx;
          color: #999999;
          line-height: 40rpx;
          margin-bottom: 10rpx;

          &-title {
            height: 54rpx;
            font-size: 38rpx;
            font-weight: bold;
            color: #333333;
            line-height: 54rpx;
          }
        }

        &-text {
          height: 40rpx;
          font-size: 28rpx;
          color: #333333;
          line-height: 40rpx;
          position: relative;

          .text-content {
            width: 448rpx;
          }

          .dot {
            width: 46rpx;
            height: 46rpx;
            background: #ff4d4d;
            border-radius: 50%;
            line-height: 46rpx;
            text-align: center;
            font-size: 32rpx;
            font-weight: bold;
            color: #ffffff;
            position: absolute;
            right: 0;
          }
        }
      }
    }
  }
}
</style>