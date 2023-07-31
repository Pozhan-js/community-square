<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-05-29 16:07:39
 * @LastEditors: hashMi 854059946@qq.com
 * @LastEditTime: 2023-07-31 15:39:07
 * @FilePath: /community-square/pages/index/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="home">
    <u-swiper :list="list1" :height="175" :indicator="true"></u-swiper>

    <!-- body布局 -->
    <view class="home-application box-all">
      <view class="box1 padding-30" @click.stop="toGarbageCollection"
        >废品回收</view
      >
      <view class="box2 padding-30" @click.stop="toClearPage">日常保洁</view>
      <view class="box3 padding-30" @click.stop="toNewHouse">新居开荒</view>
    </view>

    <!-- 社区服务 -->
    <view class="home-serve box-half">
      <view
        class="home-serve-item"
        v-for="(item, _) in serveList"
        :key="_"
        @click.stop="toServeListPage(item.path)"
        :style="{ backgroundColor: item.bgcolor, color: item.color }"
      >
        <view class="home-serve-item-name">{{ item.name }}</view>
        <image style="width: 70rpx; height: 72rpx" :src="item.icon" mode="" />
      </view>
    </view>

    <view class="home-other box-half">
      <view class="home-other-item footer1 padding-20">车务代办</view>
      <view class="home-other-item footer2 padding-20">房屋租售</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list1: [
        "https://cdn.uviewui.com/uview/swiper/swiper1.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230630_ba323e2251204d5c9c126c09057800d4.png",
      ],
      serveList: [
        {
          name: "上门开锁",
          icon: "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_4690767a19544d4bbd29c62fcdc36e54.png",
          bgcolor: "#e0faf6",
          color: "#0A7563",
          path: "/subPages/home/unlock",
        },
        {
          name: "家电维修",
          icon: "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_41ae26b6f6a74568ba0097b8e2850260.png",
          bgcolor: "#fae4e0",
          color: "#8D200F",
          path: "/subPages/home/appliance-repair",
        },
        {
          name: "旧房改造",
          icon: "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_022f3c3d39944ead892c4abba170806e.png",
          bgcolor: "#e5f0fd",
          color: "#0D5987",
          path: "/subPages/home/unlock",
        },
        {
          name: "宠物寄养",
          icon: "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_2110cb59eb2246f08da8766e9bff9ada.png",
          bgcolor: "#fef7db",
          path: "/subPages/home/unlock",
        },
      ],
    };
  },
  methods: {
    /**
     * @description: 跳转到垃圾回收页面
     * @return {*}
     */
    toGarbageCollection() {
      uni.navigateTo({
        url: "/subPages/home/garbage-collection",
      });
    },
    /**
     * @description: 挑转到日产清洁页面
     * @return {*}
     */
    toClearPage() {
      uni.navigateTo({
        url: "/subPages/home/clear",
      });
    },
    /**
     * @description: 跳转到新居开荒页面
     * @return {*}
     */
    toNewHouse() {
      uni.navigateTo({
        url: "/subPages/home/new-house",
      });
    },
    /**
     * @description: 跳转到开锁页面
     * @return {*}
     */
    toServeListPage(url) {
      uni.navigateTo({
        url,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;

  &-application {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 160rpx;
    grid-gap: 10px;

    .box1 {
      background-color: #bfc;
      grid-column-start: 1;
      grid-row-start: 1;
      grid-row-end: 3;
      background: url("https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_a606227ff79040d7aff76d50d6c648cd.png");
      background-size: 100% 100%;
    }

    .box2 {
      background: url("https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_aba5a2676f274d9ca748a322e7116dc3.png");
      background-size: 100% 100%;
    }

    .box3 {
      background: url("https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_58959d4f4b314fc69d396f2b0abca33e.png");
      background-size: 100% 100%;
    }

    &-item {
      border: 1px solid red;
    }
  }

  &-serve {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 216rpx;
    gap: 10px;

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
    grid-auto-rows: 216rpx;
    gap: 10px;
    margin-top: 32rpx;

    &-item {
      font-size: 36rpx;
      font-weight: 800;
      color: #fff;
    }

    .footer1 {
      background: url("https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_7db0cd5fc9164d14aef33b0bc7e3ac4d.png");
      background-size: cover;
    }
    .footer2 {
      background: url("https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_6f645f7e58564f579d57321fa79deab9.png");
      background-size: cover;
    }
  }
}
</style>