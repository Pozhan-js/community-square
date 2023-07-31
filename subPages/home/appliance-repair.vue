<!--
 * @Author: hashMi 854059946@qq.com
 * @Date: 2023-07-31 15:34:11
 * @LastEditors: hashMi 854059946@qq.com
 * @LastEditTime: 2023-07-31 16:00:10
 * @FilePath: /community-square/subPages/home/appliance-repair.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="appliance-repair">
    <view class="swiper">
      <image
        src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230731_d9a4d3e522ef4dd59ec08f8c661630b8.png"
        mode=""
      />
    </view>

    <view class="appliance-repair-text box">
      <view class="text-header flex-a-center-j-space-between">
        <view class="text-header-left">
          ¥<text class="timePrice">30</text>/小时起
        </view>
        <view class="text-header-right">随叫随到 最快1小时上门</view>
      </view>
      <view class="text-body">家电维修</view>
      <view class="text-footer">
        <view class="text-footer-item">满意为止</view>
        <view class="text-footer-item">损坏包赔</view>
      </view>
    </view>

    <u-gap height="20" bgColor="#F9F9F9"></u-gap>

    <view class="appliance-repair-evaluate padding-30">
      <view class="evaluate-header flex-center">
        <view class="evaluate-title">评价</view>
        <view class="flex-a-center icon">
          <view>更多</view>
          <u-icon name="arrow-right" size="18"></u-icon>
        </view>
      </view>

      <view class="evaluate-body">
        <view class="evaluate-body-item padding-20">
          <view class="item-header flex-a-center-j-space-between">
            <view class="item-header-left flex-a-center">
              <image
                src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230621_542df0fab88647f5b96e92c7e40391ad.png"
                mode=""
              />
              <view class="name">李怡静</view>
              <view class="date">6月4日</view>
            </view>
            <view class="item-header-right flex-a-center">
              <image
                src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_3192cd4e2f4546a59c82e5c9ab40f9d1.png"
                mode=""
              />
              <view class="text">好评</view>
            </view>
          </view>

          <view class="item-body text-hidden">
            沟通融洽,电话响应及时。准时上门服务态度好,提供发票，服务规范。
          </view>
        </view>
        <view class="evaluate-body-item padding-20">
          <view class="item-header flex-a-center-j-space-between">
            <view class="item-header-left flex-a-center">
              <image
                src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230621_542df0fab88647f5b96e92c7e40391ad.png"
                mode=""
              />
              <view class="name">李怡静</view>
              <view class="date">6月4日</view>
            </view>
            <view class="item-header-right flex-a-center">
              <image
                src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_3192cd4e2f4546a59c82e5c9ab40f9d1.png"
                mode=""
              />
              <view class="text">好评</view>
            </view>
          </view>

          <view class="item-body text-hidden">
            打扫非常干净，干活麻利，按时上门。
          </view>
        </view>
      </view>
    </view>

    <u-gap height="20" bgColor="#F9F9F9"></u-gap>

    <view class="appliance-repair-notice">
      <view class="notice-title"> 服务详情 </view>
      <view class="notice-container">
        <view class="notice-container-item">
          本服务线上0元预约，维修计价器报价，费用透明有保障
        </view>
        <view class="notice-container-item">
          <view class="item-title"> [服务流程] </view>
          <view> 标准服务流程，给您安心、贴心的服务 </view>
          <view> 1、咨询下单 </view>
          <view> 2、确认上门 </view>
          <view> 3、报价服务 </view>
          <view> 4、验收付款 </view>
        </view>
        <view class="notice-container-item">
          <view class="item-title"> [维修品类] </view>
          <view> 空调、冰箱、厨电家电、洗衣机 </view>
        </view>
        <view class="notice-container-item">
          <view class="item-title"> [费用说明] </view>
          <view> 1.服务时段:9:00-20:00 </view>
          <view> 2.服务项目价格30元仅为起步价，实际维修价格请咨询商家 </view>
          <view>
            3.工程师上门后，因用户个人原因取消订单，需支付30元上费，房屋业务除外。
          </view>
          <view>
            4.维修和配件价格以师傅上门后报价为准，先与师傅协商好价格，再进行维修。
          </view>
          <view>
            5.为保障您的权益，切勿与工程师私下交易，私下交易无法提供保障。
          </view>
        </view>
      </view>
    </view>
    <!-- footer -->
    <view class="appliance-repair-footer">
      <u-button
        type="primary"
        text="立即预约"
        @click="toHomeReserve"
        size="large"
      ></u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toHomeReserve() {
      uni.navigateTo({
        url: "/subPages/home/home-reserve",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.appliance-repair {
  padding-bottom: 100rpx;

  .swiper {
    width: 100vw;
    height: 360rpx;

    > image {
      width: 100%;
      height: 100%;
    }
  }

  &-text {
    margin-top: 20rpx;
    padding-bottom: 30rpx;

    .text-header {
      &-left {
        height: 84rpx;
        font-size: 28rpx;
        font-weight: bold;
        color: #ff0000;
        line-height: 84rpx;

        > text {
          font-size: 40rpx;
        }
      }

      &-right {
        height: 38rpx;
        font-size: 26rpx;
        color: #999999;
        line-height: 38rpx;
      }
    }

    .text-body {
      height: 50rpx;
      font-size: 36rpx;
      font-weight: bold;
      color: #333333;
      line-height: 50rpx;
      margin-bottom: 12rpx;
    }

    .text-footer {
      display: flex;

      &-item {
        padding: 0 18rpx;
        height: 40rpx;
        border-radius: 7rpx;
        margin-right: 20rpx;
        border: 1rpx solid #999999;
        text-align: center;
        line-height: 40rpx;
        font-size: 24rpx;
        color: #999999;
      }
    }
  }

  &-evaluate {
    position: relative;
    // text-align: center;

    .evaluate-header {
      display: flex;

      .evaluate-title {
        height: 50rpx;
        font-size: 36rpx;
        font-weight: bold;
        color: #333333;
        line-height: 50rpx;
      }

      .icon {
        position: absolute;
        right: 10rpx;
        font-size: 26rpx;
        color: #666666;
      }
    }

    .evaluate-body {
      display: flex;
      width: calc(100vw - 40rpx);
      overflow-x: scroll;
      margin-top: 20rpx;

      &-item {
        width: 580rpx;
        height: 180rpx;
        background: rgba(236, 233, 233, 0.5);
        border-radius: 20rpx;
        margin-right: 20rpx;

        .item-header {
          margin-bottom: 20rpx;

          &-left {
            > image {
              width: 70rpx;
              height: 70rpx;
              margin-right: 18rpx;
            }

            .name {
              height: 38rpx;
              font-size: 26rpx;
              color: #333333;
              line-height: 38rpx;
              margin-right: 18rpx;
            }

            .date {
              font-size: 24rpx;
              color: #999999;
            }
          }

          &-right {
            > image {
              width: 30rpx;
              height: 38rpx;
              margin-right: 18rpx;
            }

            .text {
              font-size: 24rpx;
              color: #4ea4fb;
            }
          }
        }

        .item-body {
          font-size: 26rpx;
          color: #666666;
        }
      }
    }
  }

  &-notice {
    padding: 40rpx;

    .notice-title {
      width: 100%;
      height: 50rpx;
      font-size: 36rpx;
      font-weight: bold;
      color: #333333;
      line-height: 50rpx;
      margin-bottom: 40rpx;
      text-align: center;
    }
    .notice-container {
      width: 100%;
      font-size: 24rpx;
      color: #333333;

      > view {
        margin-bottom: 18rpx;
        font-size: 24rpx;
        color: #333333;
      }

      .item-title {
        font-size: 30rpx;
        font-weight: bold;
        color: #333333;
      }
    }
  }

  &-footer {
    width: 100vw;

    /* 添加底部内边距 */
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}

.wrap {
  padding: 12px;
}

.demo-layout {
  //   height: 50rpx;
  //   line-height: 50rpx;
  //   padding: 10rpx 20rpx;
  margin: 10rpx 0;

  border-radius: 4px;
}

.bg-purple {
  font-size: 26rpx;
  color: #333333;
  //   background: #ced7e1;
}

.bg-purple-light {
  text-align: center;
  font-size: 26rpx;
  font-weight: bold;
  color: #333333;
  //   background: #e5e9f2;
}
</style>