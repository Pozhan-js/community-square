<template>
  <view class="square">
    <view class="square-container padding-20">
      <view
        class="square-container-item"
        v-for="(item, _) in squareList"
        @click="toDetail"
        :key="_"
      >
        <image
          style="width: 100%; height: 246rpx"
          :src="item.imageUrl"
          mode=""
        />
        <view class="title">{{ item.title }}</view>
        <view class="type">{{ item.type }}</view>
        <view class="price">{{ item.price }}</view>
      </view>
      <view class="square-container-item"></view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      squareList: [
        {
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_01f10eb6a5864f94ab7e232f699e51ae.png",
          title: "猫狗寄养",
          type: "寄养·洗澡",
          price: "200元/天",
        },
        {
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_09bc78eeff804811b4d2cbfc0d17e1f4.png",
          title: "宠物出售",
          type: "幼犬柯基",
          price: "2000元",
        },
        {
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_6d0a7cd929024d588f9fbb348f58c22c.png",
          title: "整租 | 精装修押一付一",
          type: "3室·120㎡·长江友邻·一单元",
          price: "4000元/月",
        },
        {
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_6c1eaf2e73d946e6a1db48c0a7c6bcc2.png",
          title: "出售 | 三室一厅精装房",
          type: "3室·120㎡·长江友邻·一单元",
          price: "150万",
        },
        {
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_6c922c4dc8124c32910fb00cedff85f1.png",
          title: "私家车位 | 亏本出售",
          type: "A区6栋A155号",
          price: "8万",
        },
        {
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230718_9a630e0859854889bc2dab34567d02e1.png",
          title: "minicooper   2018款",
          type: "米色 自动挡",
          price: "19.98万",
        },
      ],
    };
  },
  methods: {
    /**
     * @description: 跳转到详情页
     * @return {*}
     */
    toDetail() {
      uni.navigateTo({
        url: "/subPages/square/product-detail",
      });
    },
  },
};
</script>

<style lang="scss">
.square {
  width: 100vw;

  &-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    &-item {
      border-radius: 20rpx 20rpx 0 0;

      .title {
        margin: 10rpx 0;
        font-size: 32rpx;
        font-weight: bold;
        color: #333333;
      }

      .type {
        margin: 10rpx 0;
        font-size: 24rpx;
        color: #333333;
      }

      .price {
        height: 40rpx;
        font-size: 28rpx;
        font-weight: bold;
        color: #ff0000;
        line-height: 40rpx;
      }
    }
  }
}
</style>
