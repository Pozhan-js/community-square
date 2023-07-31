<!--
 * @Author: hashMi 854059946@qq.com
 * @Date: 2023-07-31 14:51:21
 * @LastEditors: hashMi 854059946@qq.com
 * @LastEditTime: 2023-07-31 15:30:40
 * @FilePath: /community-square/subPages/home/unlock.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="unlock">
    <view class="swiper">
      <image
        src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230728_1de2f564eb2a4a78b95b0130cc63520e.png"
        mode=""
      />
    </view>

    <view class="unlock-type">
      <view
        class="unlock-type-item flex-center"
        v-for="(item, _) in gridList"
        :key="_"
        :style="{ color: item.color, borderColor: item.bcolor }"
      >
        <image :src="item.imageUrl" mode="" />
        <view class="item-text">{{ item.text }}</view>
      </view>
    </view>

    <u-gap height="20" bgColor="#F9F9F9"></u-gap>

    <!-- 评价 -->
    <view class="unlock-evaluate padding-30">
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
            沟通融洽,电话响应及时。准时上门服务态度好,提供发票，服务规范。
          </view>
        </view>
      </view>
    </view>

    <u-gap height="20" bgColor="#F9F9F9"></u-gap>

    <view class="unlock-notice">
      <view class="notice-title"> 服务须知 </view>
      <view class="notice-container">
        <view class="notice-container-item">
          <view class="dot"></view>
          <view class="text">
            110备案，10分钟快速上门，正规发票，有师傅24小时服务
          </view>
        </view>
        <view class="notice-container-item">
          <view class="dot"></view>
          <view class="text"> 电话咨询，在线留言 </view>
        </view>
        <view class="notice-container-item">
          <view class="dot"></view>
          <view class="text"> 上门服务，现场登记 </view>
        </view>
        <view class="notice-container-item">
          <view class="dot"></view>
          <view class="text"> 情况说明，沟通，制定方案报价。 </view>
        </view>
        <view class="notice-container-item">
          <view class="dot"></view>
          <view class="text"> 确定方案。 </view>
        </view>
        <view class="notice-container-item">
          <view class="dot"></view>
          <view class="text"> 施工，安装 </view>
        </view>
        <view class="notice-container-item">
          <view class="dot"></view>
          <view class="text"> 验收，开票售后。 </view>
        </view>
      </view>
    </view>
    <!-- footer -->
    <view class="unlock-footer">
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
    return {
      gridList: [
        {
          color: "#197263",
          bcolor: "#53D4D0",
          text: "24小时",
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230731_31e195cd2f5b47b1a7178a3c5da343d3.png",
        },
        {
          color: "#776216",
          bcolor: "#FFCC0E ",
          text: "服务保障",
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230731_73ffdb9ef18a41cb911c230ad2fb04dd.png",
        },
        {
          color: "#744E23",
          bcolor: "#FF8903",
          text: "上门服务",
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230731_9c654bebd80f4ff98b4cb78832b98ce8.png",
        },
        {
          color: "#244464",
          bcolor: "#4EA4FB",
          text: "公安备案",
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230731_8d079b5ed6344b65b4e04932b591262e.png",
        },
      ],
    };
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
.unlock {
  padding-bottom: 100rpx;

  .swiper {
    width: 100vw;
    height: 360rpx;

    > image {
      width: 100%;
      height: 100%;
    }
  }

  &-type {
    padding: 30rpx;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 78rpx;
    grid-gap: 10px;

    &-item {
      background: #ffffff;
      border-radius: 20rpx;
      opacity: 1;
      border: 1rpx solid #53d4d0;

      &:active {
        background-color: #eee;
      }

      > image {
        width: 40rpx;
        height: 40rpx;
        margin-right: 18rpx;
      }

      .item-text {
        font-size: 26rpx;
        font-weight: bold;
      }
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

  &-compared {
    padding: 40rpx;

    .compared-title {
      width: 100%;
      height: 50rpx;
      font-size: 36rpx;
      font-weight: bold;
      color: #333333;
      line-height: 50rpx;
      margin-bottom: 40rpx;
      text-align: center;
    }

    .compared-content {
      width: 100%;
      height: 164rpx;
      border-radius: 20rpx;
      overflow: hidden;
      margin-bottom: 20rpx;
      position: relative;

      &::before {
        position: absolute;
        content: "VS";
        color: #fff;
        display: block;
        width: 66rpx;
        height: 66rpx;
        line-height: 66rpx;
        text-align: center;
        background: #999999;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      &-left {
        width: 50%;
        height: 100%;

        > image {
          width: 100%;
          height: 100%;
        }
      }
      &-right {
        width: 50%;
        height: 100%;

        > image {
          width: 100%;
          height: 100%;
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

      &-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        // align-items: flex-start;
        position: relative;
        margin-bottom: 20rpx;

        .dot {
          width: 14rpx;
          height: 14rpx;
          background: #4ea4fb;
          opacity: 0.5;
          position: absolute;
          top: 10rpx;
          left: 0;
        }

        .text {
          font-size: 24rpx;
          color: #666666;
          margin-left: 30rpx;
        }
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