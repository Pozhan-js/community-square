<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-05-29 16:20:48
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-27 15:07:41
 * @FilePath: /community-square/pages/release/release.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="release padding-20">
    <view
      class="release-item flex-a-center-j-space-between"
      v-for="(data, _) in releaseList"
      @click="toPath(data.path)"
      :key="_"
    >
      <view class="release-item-left flex-a-center padding-20">
        <image
          style="width: 76rpx; height: 76rpx; margin-right: 20rpx"
          :src="data.image"
          mode=""
        />
        <view class="name">{{ data.name }}</view>
      </view>
      <view class="release-item-right">
        <u-icon name="arrow-right"></u-icon>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      releaseList: [
        {
          image:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_debcdf99e98c4d54979dca29e4120263.png",
          name: "房屋",
          path: "/subPages/release/house-release",
        },
        {
          image:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_e5f75de8ced74c4080dbb6620b1dbedc.png",
          name: "车务",
          path: "/subPages/release/car-release",
        },
        {
          image:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_df3b4735ee3747059a8eda473d48362a.png",
          name: "宠物",
          path: "/subPages/release/pet-release",
        },
        {
          image:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_d66525e920494d3988cffcf17db7209e.png",
          name: "其他",
          path: "/subPages/release/other-release",
        },
      ],
    };
  },
  methods: {
    toPath(url) {
      uni.navigateTo({
        url,
      });
    },
  },
};
</script>

<style lang="scss">
.release {
  width: 100vw;

  &-item {
    width: 100%;
    // height: 100px;
    // background-color: #fff;
    // border-radius: 10px;
    border-bottom: 1px solid #ccc;

    .name {
      height: 45rpx;
      font-size: 32rpx;
      color: #1f2329;
      line-height: 45rpx;
    }
  }
}
</style>
