<!--

import navbar from 'uview-ui/libs/config/props/navbar';
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-24 16:34:08
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-25 11:36:11
 * @FilePath: /community-square/subPages/user/my-order/my-order.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="my-order">
    <navbar :title="pageTitle"></navbar>

    <u-tabs :list="list1" @click="click" :scrollable="false"></u-tabs>

    <view class="my-order-list padding-40">
      <view
        class="item flex-a-center"
        v-for="(item, index) in orderList"
        :key="index"
      >
        <view class="item-image">
          <image :src="item.image" mode="aspectFill"></image>
        </view>
        <view class="item-content">
          <view class="item-content-title">{{ item.contentTitle }}</view>
          <view class="item-content-detail">{{ item.detailMessage }}</view>
          <view class="item-content-price">{{ item.price }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import navbar from "@/components/navbar/navbar.vue";
export default {
  data() {
    return {
      list1: [
        {
          name: "全部",
          type: "all",
        },
        {
          name: "房屋",
          type: "house",
        },
        {
          name: "车务",
          type: "car",
        },
        {
          name: "宠物",
          type: "pet",
        },
        {
          name: "其他",
          type: "other",
        },
      ],
      pageTitle: "",
      orderData: {},
      orderList: [],
    };
  },
  methods: {
    click(e) {
      //   console.log(e);
      switch (e.type) {
        case "all":
          this.orderList = this.orderData.all;
          break;
        case "house":
          this.orderList = this.orderData.house;
          break;
        case "car":
          this.orderList = this.orderData.car;
          break;
        case "pet":
          this.orderList = this.orderData.pet;
          break;
        case "other":
          this.orderList = this.orderData.other;
          break;
        default:
          this.orderList = [];
      }
    },
  },
  computed: {},
  components: { navbar },
  onLoad(options) {
    console.log(options);
    let { title } = options;
    this.pageTitle = title;
    switch (title) {
      case "我发布的":
        this.orderData = {
          all: [
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_4577831c5e0a4694bbd5859b5f5595fa.png",
              contentTitle: "出售 | 三室一厅精装房",
              detailMessage: "3室·120㎡·长江友邻·一单元",
              price: "120万",
            },
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_bf09614c3257484f8b50f1c1c4a6a5f4.png",
              contentTitle: "宠物出售",
              detailMessage: "幼犬柯基",
              price: "2000元",
            },
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_142150a2da9743009b8553ad5aaccd39.png",
              contentTitle: "minicooper   2018款",
              detailMessage: "米色 自动挡",
              price: "19.98万",
            },
          ],
          house: [
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_4577831c5e0a4694bbd5859b5f5595fa.png",
              contentTitle: "出售 | 三室一厅精装房",
              detailMessage: "3室·120㎡·长江友邻·一单元",
              price: "120万",
            },
          ],
          car: [
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_142150a2da9743009b8553ad5aaccd39.png",
              contentTitle: "minicooper   2018款",
              detailMessage: "米色 自动挡",
              price: "19.98万",
            },
          ],
          pet: [
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_bf09614c3257484f8b50f1c1c4a6a5f4.png",
              contentTitle: "宠物出售",
              detailMessage: "幼犬柯基",
              price: "2000元",
            },
          ],
          other: [
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_4577831c5e0a4694bbd5859b5f5595fa.png",
              contentTitle: "出售 | 三室一厅精装房",
              detailMessage: "3室·120㎡·长江友邻·一单元",
              price: "120万",
            },
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_bf09614c3257484f8b50f1c1c4a6a5f4.png",
              contentTitle: "宠物出售",
              detailMessage: "幼犬柯基",
              price: "2000元",
            },
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_142150a2da9743009b8553ad5aaccd39.png",
              contentTitle: "minicooper   2018款",
              detailMessage: "米色 自动挡",
              price: "19.98万",
            },
          ],
        };
        break;
      case "我收藏的":
        this.orderData = {
          all: [
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_4577831c5e0a4694bbd5859b5f5595fa.png",
              contentTitle: "出售 | 三室一厅精装房",
              detailMessage: "3室·120㎡·长江友邻·一单元",
              price: "120万",
            },
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_bf09614c3257484f8b50f1c1c4a6a5f4.png",
              contentTitle: "宠物出售",
              detailMessage: "幼犬柯基",
              price: "2000元",
            },
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_142150a2da9743009b8553ad5aaccd39.png",
              contentTitle: "minicooper   2018款",
              detailMessage: "米色 自动挡",
              price: "19.98万",
            },
          ],
          house: [
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_4577831c5e0a4694bbd5859b5f5595fa.png",
              contentTitle: "出售 | 三室一厅精装房",
              detailMessage: "3室·120㎡·长江友邻·一单元",
              price: "120万",
            },
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_bf09614c3257484f8b50f1c1c4a6a5f4.png",
              contentTitle: "宠物出售",
              detailMessage: "幼犬柯基",
              price: "2000元",
            },
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_142150a2da9743009b8553ad5aaccd39.png",
              contentTitle: "minicooper   2018款",
              detailMessage: "米色 自动挡",
              price: "19.98万",
            },
          ],
          car: [
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_4577831c5e0a4694bbd5859b5f5595fa.png",
              contentTitle: "出售 | 三室一厅精装房",
              detailMessage: "3室·120㎡·长江友邻·一单元",
              price: "120万",
            },
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_bf09614c3257484f8b50f1c1c4a6a5f4.png",
              contentTitle: "宠物出售",
              detailMessage: "幼犬柯基",
              price: "2000元",
            },
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_142150a2da9743009b8553ad5aaccd39.png",
              contentTitle: "minicooper   2018款",
              detailMessage: "米色 自动挡",
              price: "19.98万",
            },
          ],
          pet: [
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_bf09614c3257484f8b50f1c1c4a6a5f4.png",
              contentTitle: "宠物出售",
              detailMessage: "幼犬柯基",
              price: "2000元",
            },
          ],
          other: [
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_4577831c5e0a4694bbd5859b5f5595fa.png",
              contentTitle: "出售 | 三室一厅精装房",
              detailMessage: "3室·120㎡·长江友邻·一单元",
              price: "120万",
            },
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_bf09614c3257484f8b50f1c1c4a6a5f4.png",
              contentTitle: "宠物出售",
              detailMessage: "幼犬柯基",
              price: "2000元",
            },
          ],
        };
        break;

      case "我的足迹":
        this.orderData = {
          all: [
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_4577831c5e0a4694bbd5859b5f5595fa.png",
              contentTitle: "出售 | 三室一厅精装房",
              detailMessage: "3室·120㎡·长江友邻·一单元",
              price: "120万",
            },
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_bf09614c3257484f8b50f1c1c4a6a5f4.png",
              contentTitle: "宠物出售",
              detailMessage: "幼犬柯基",
              price: "2000元",
            },
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_142150a2da9743009b8553ad5aaccd39.png",
              contentTitle: "minicooper   2018款",
              detailMessage: "米色 自动挡",
              price: "19.98万",
            },
          ],
          house: [
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_4577831c5e0a4694bbd5859b5f5595fa.png",
              contentTitle: "出售 | 三室一厅精装房",
              detailMessage: "3室·120㎡·长江友邻·一单元",
              price: "120万",
            },
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_bf09614c3257484f8b50f1c1c4a6a5f4.png",
              contentTitle: "宠物出售",
              detailMessage: "幼犬柯基",
              price: "2000元",
            },
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_142150a2da9743009b8553ad5aaccd39.png",
              contentTitle: "minicooper   2018款",
              detailMessage: "米色 自动挡",
              price: "19.98万",
            },
          ],
          car: [
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_4577831c5e0a4694bbd5859b5f5595fa.png",
              contentTitle: "出售 | 三室一厅精装房",
              detailMessage: "3室·120㎡·长江友邻·一单元",
              price: "120万",
            },
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_bf09614c3257484f8b50f1c1c4a6a5f4.png",
              contentTitle: "宠物出售",
              detailMessage: "幼犬柯基",
              price: "2000元",
            },
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_142150a2da9743009b8553ad5aaccd39.png",
              contentTitle: "minicooper   2018款",
              detailMessage: "米色 自动挡",
              price: "19.98万",
            },
          ],
          pet: [
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_bf09614c3257484f8b50f1c1c4a6a5f4.png",
              contentTitle: "宠物出售",
              detailMessage: "幼犬柯基",
              price: "2000元",
            },
          ],
          other: [
            {
              image:
                "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_4577831c5e0a4694bbd5859b5f5595fa.png",
              contentTitle: "出售 | 三室一厅精装房",
              detailMessage: "3室·120㎡·长江友邻·一单元",
              price: "120万",
            },
          ],
        };
        break;
    }
    this.orderList = this.orderData.all;
  },
};
</script>

<style lang="scss" scoped>
.my-order {
  width: 100vw;

  &-list {
    font-size: 24rpx;
    color: #333333;

    .item {
      padding: 30rpx 0;
      border-bottom: 1px solid #e5e5e5;

      .item-image {
        width: 210rpx;
        height: 156rpx;
        margin-right: 20rpx;
        flex-shrink: 0;

        > image {
          width: 100%;
          height: 100%;
        }
      }

      .item-content {
        width: 100%;

        > view {
          margin-bottom: 16rpx;

          &:last-child {
            margin-bottom: 0;
          }
        }

        &-title {
          height: 45rpx;
          font-size: 32rpx;
          font-weight: bold;
          color: #333333;
          line-height: 45rpx;
        }

        &-price {
          height: 40rpx;
          font-size: 28rpx;
          font-weight: bold;
          color: #ff0000;
          line-height: 40rpx;
        }
      }
    }
  }
}
</style>