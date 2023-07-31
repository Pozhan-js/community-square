<template>
  <view class="garbage-collection">
    <view class="garbage-collection-swiper">
      <image
        src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230728_a893f7588582497f86ec7368e5f5c581.png"
        mode=""
      />
    </view>

    <!-- 社区服务 -->
    <view class="garbage-collection-serve box-half">
      <view
        class="garbage-collection-serve-item"
        v-for="(item, _) in serveList"
        :key="_"
        :style="{ backgroundColor: item.bgcolor, color: item.color }"
      >
        <view class="garbage-collection-serve-item-name">{{ item.name }}</view>
        <image style="width: 70rpx; height: 72rpx" :src="item.icon" mode="" />
      </view>
    </view>
    <!-- 功能分类 -->
    <view class="garbage-collection-other box-half">
      <view class="garbage-collection-other-item footer1 padding-40">
        <view>车务代办</view>
        <image
          src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230728_dd0ac198f2694bc8bac55c2186e21b6e.png"
          mode=""
        />
      </view>
      <view class="garbage-collection-other-item footer2 padding-40">
        <view>车务代办</view>
        <image
          src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230728_bc10f300f0d94bc0aa3f0cb58a42a8f9.png"
          mode=""
        />
      </view>
    </view>

    <!-- footer -->
    <view class="garbage-collection-footer">
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
      serveList: [
        {
          name: "信用为本",
          icon: "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230728_2601dbe404fe4e5186b0805f53553041.png",
          bgcolor: "#e0faf6",
          color: "#0A7563",
        },
        {
          name: "全心服务",
          icon: "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230728_9ac9fa0ddc7a4f8fb5bf678b3a0e3027.png",
          bgcolor: "#fae4e0",
          color: "#8D200F",
        },
        {
          name: "上门回收",
          icon: "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230728_5e5922ec1a5148679ca46d4231592f22.png",
          bgcolor: "#e5f0fd",
          color: "#0D5987",
        },
        {
          name: "方便舒心",
          icon: "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230728_dadad091c8164cbc8adcd429ddf4af54.png",
          bgcolor: "#fef7db",
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
.garbage-collection {
  width: 100vw;
  position: relative;

  &-swiper {
    width: 100%;
    height: 280rpx;

    > image {
      width: 100%;
      height: 100%;
    }
  }

  &-serve {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 216rpx;
    gap: 10px;
    margin-top: 32rpx;

    &-item {
      text-align: center;
      // border: 1px solid red;
      font-size: 22rpx;
      color: #0a7563;
      border-radius: 20rpx;

      &-name {
        margin: 20rpx 0 40rpx 0;
      }
    }
  }

  &-other {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 240rpx;
    gap: 10px;
    margin-top: 32rpx;

    &-item {
      font-size: 32rpx;
      font-weight: bold;
      color: #333333;
      border-radius: 20rpx;
      display: flex;
    }

    .footer1 {
      background-color: #fef6e7;
      > image {
        width: 88rpx;
        height: 172rpx;
        margin-left: 20rpx;
        margin-bottom: 20rpx;
      }
    }
    .footer2 {
      background-color: #eaf1fb;
      > image {
        width: 137rpx;
        height: 128rpx;
        margin-top: 40rpx;
        // margin-left: 10rpx;
      }
    }
  }

  &-footer {
    width: 100vw;
    position: fixed;
    bottom: 0;
    /* 添加底部内边距 */
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>