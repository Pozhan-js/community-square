<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-27 15:20:55
 * @LastEditors: hashMi 854059946@qq.com
 * @LastEditTime: 2023-07-31 12:52:23
 * @FilePath: /community-square/subPages/square/product-detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="product-detail">
    <view class="product-detail-header">
      <u-swiper
        :list="list6"
        height="180"
        @change="(e) => (currentNum = e.current)"
        :autoplay="false"
        indicatorStyle="right: 20px"
      >
        <view slot="indicator" class="indicator-num">
          <text class="indicator-num__text"
            >{{ currentNum + 1 }}/{{ list6.length }}</text
          >
        </view>
      </u-swiper>
    </view>

    <view class="product-detail-title flex-a-center-j-space-between padding-30">
      <text class="title">柯基犬幼犬自家领养转让</text>
      <text class="price">¥ <text class="price-num">2000</text></text>
    </view>
    <!-- 间隔槽 -->
    <u-gap height="20" bgColor="#F9F9F9"></u-gap>

    <view class="product-detail-message flex-center padding-20">
      <view class="product-detail-message-content">
        <view class="content-header">宠物信息</view>
        <view class="content-body">
          <view class="content-body-item">
            <view><text>宠物年龄</text><text class="result">2个月</text></view>
          </view>
          <view class="content-body-item">
            <view
              ><text>宠物性别</text><text class="result">公母均有</text></view
            >
          </view>
          <view class="content-body-item">
            <view><text>宠物毛色</text><text class="result">黄白</text></view>
          </view>
          <view class="content-body-item">
            <view><text>在售只数</text><text class="result">2只</text></view>
          </view>
        </view>
      </view>
    </view>

    <u-gap height="20" bgColor="#F9F9F9"></u-gap>

    <view class="product-detail-info flex-a-center-j-space-between padding-40">
      <view class="flex-a-center left-info">
        <image
          style="width: 80rpx; height: 80rpx"
          src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230727_53a4a00c3f684459bc36b1fc91c0c9df.png"
          mode=""
        />
        <view>
          <view>张先生</view>
          <view>15698769546</view>
        </view>
      </view>

      <view class="flex-a-center right-icon">
        <view>
          <u-icon
            name="chat-fill"
            color="#f0c456"
            size="30"
            @click="toChatPage"
          ></u-icon>
        </view>
        <view>
          <u-icon name="phone-fill" color="#6492f3" size="30"></u-icon>
        </view>
      </view>
    </view>

    <u-gap height="20" bgColor="#F9F9F9"></u-gap>

    <view class="product-detail-footer flex-a-center-j-space-around">
      <view class="footer-icon">
        <!-- <u-icon
          name="star-fill"
          size="24"
          label="收藏"
          labelPos="bottom"
          labelSize="12"
        ></u-icon> -->
        <view class="example-body">
          <uni-fav
            :checked="checkStatus"
            :content-text="contentText"
            @click="favClick(4)"
          />
        </view>
      </view>
      <u-button
        type="warning"
        text="在线问"
        @click="toChatPage"
        :customStyle="customStyleObj"
      ></u-button>
      <u-button
        type="primary"
        text="打电话"
        :customStyle="customStyleObj"
      ></u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list6: [
        "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_bf09614c3257484f8b50f1c1c4a6a5f4.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        "https://cdn.uviewui.com/uview/swiper/swiper1.png",
      ],
      currentNum: 0,
      customStyleObj: {
        marginRight: "20px", // 注意驼峰命名，并且值必须用引号包括，因为这是对象
        // color: "red",
      },
      checkStatus: false,
      contentText: {
        contentDefault: "收藏",
        contentFav: "已收藏",
      },
    };
  },
  methods: {
    // 跳转到聊天页面
    toChatPage() {
      uni.navigateTo({
        url: "/subPages/square/chat",
      });
    },
    favClick(index) {
      this.checkStatus = !this.checkStatus;
      // console.log(this.checkList[index]);
      this.$forceUpdate();
    },
  },
};
</script>

<style lang="scss" scoped>
.product-detail {
  width: 100vw;
  position: relative;

  &-header {
  }

  &-title {
    .title {
      height: 50rpx;
      font-size: 36rpx;
      font-weight: bold;
      color: #333333;
      line-height: 50rpx;
    }

    .price {
      height: 84rpx;
      font-size: 40rpx;
      font-family: PingFang SC-Bold, PingFang SC;
      font-weight: bold;
      color: #ff0000;
      line-height: 84rpx;

      &-num {
        font-size: 60rpx;
      }
    }
  }

  &-message {
    height: 290rpx;

    &-content {
      text-align: center;

      .content-header {
        height: 50rpx;
        font-size: 36rpx;
        font-weight: bold;
        color: #333333;
        line-height: 50rpx;
        margin-bottom: 30rpx;
      }
      .content-body {
        width: 100%;
        font-size: 26rpx;
        color: #999999;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 40rpx 40rpx;
        gap: 20rpx 150rpx;

        &-item {
          text-align: left;

          .result {
            margin-left: 20rpx;
            font-size: 26rpx;
            font-weight: bold;
            color: #333333;
          }
        }
      }
    }
  }

  &-info {
    .left-info {
      > image {
        margin-right: 20rpx;
      }
    }
    .right-icon {
      > view {
        margin-left: 20rpx;
      }
    }
  }

  &-footer {
    width: 100vw;
    height: 100rpx;
    position: fixed;
    bottom: 30rpx;

    .footer-icon {
      width: 150rpx;
      margin: 0 30rpx;
    }
  }
}

.indicator-num {
  padding: 2px 0;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 100px;
  width: 35px;
  @include flex;
  justify-content: center;

  &__text {
    color: #ffffff;
    font-size: 12px;
  }
}
</style>