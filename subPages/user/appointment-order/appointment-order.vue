<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-24 10:39:23
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-24 12:58:32
 * @FilePath: /community-square/subPages/user/appointment-order/appointment-order.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="appointment-order padding-20">
    <u-tabs :list="list1" @click="click" :scrollable="false"></u-tabs>

    <!-- 列表 -->
    <view class="appointment-order-list">
      <view
        class="appointment-order-list-item padding-22"
        v-for="(order, index) in orderList"
        :key="index"
      >
        <view class="pay-header flex-a-center-j-space-between">
          <view class="flex-a-center">
            <view class="dot"></view>
            <view class="title">{{ order.name }}</view>
          </view>
          <view class="pay-status">{{ order.status }}</view>
        </view>

        <view class="pay-body flex-a-center-j-space-between">
          <image
            style="width: 126rpx; height: 110rpx; margin-right: 20rpx"
            :src="order.imageUrl"
            mode=""
          />
          <view class="pay-body-message">
            <view class="message-item flex-a-center">
              <u-icon name="clock"></u-icon>
              <view class="text">{{ order.time }}</view>
            </view>
            <view class="flex-a-center">
              <u-icon name="map"></u-icon>
              <view class="text">{{ order.address }}</view>
            </view>
          </view>
        </view>

        <view
          class="pay-footer flex-a-center-j-space-between"
          v-if="order.status === '待支付'"
        >
          <view class="pay-footer-left">预付：￥{{ order.money }}</view>
          <view class="pay-footer-right flex-a-center">
            <view class="pay-btn" @click="showModel">取消订单</view>

            <view class="pay-btn active" @click="toReserve">去支付</view>
          </view>
        </view>

        <view
          class="pay-footer flex-a-center-j-space-between"
          v-if="order.status === '已支付'"
        >
          <view></view>
          <view class="pay-footer-right flex-a-center">
            <!-- <view class="pay-btn" @click="showModel">取消订单</view> -->

            <view class="pay-btn" @click="toeValuatePage">待评价</view>
          </view>
        </view>
      </view>
    </view>

    <u-toast ref="uToast" />

    <!-- model框 -->
    <u-modal
      :show="show"
      :title="title"
      :showCancelButton="true"
      @confirm="confirmModel"
      @cancel="cancelModel"
      :content="content"
    ></u-modal>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list1: [
        {
          name: "全部",
        },
        {
          name: "待支付",
        },
        {
          name: "已完成",
        },
        {
          name: "已取消",
        },
      ],
      title: "提示",
      show: false,
      content: "取消订单",
      orderList: [],
      orderListAll: [
        {
          name: "日常保洁",
          status: "待支付",
          time: "2023-07-10（周一）",
          address: "万家丽北路二段218号",
          money: "88.00",
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230721_f36b0dec1e7841038cb88dd15daffa7c.png",
        },
        {
          name: "家庭护理",
          status: "已支付",
          time: "2023-07-10（周一）",
          address: "万家丽北路二段218号",
          money: "126.00",
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230721_f36b0dec1e7841038cb88dd15daffa7c.png",
        },
        {
          name: "上门做饭",
          status: "已取消",
          time: "2023-07-10（周一）",
          address: "万家丽北路二段218号",
          money: "111.00",
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230721_f36b0dec1e7841038cb88dd15daffa7c.png",
        },
      ],
      orderList1: [
        {
          name: "社区跑腿",
          status: "待支付",
          time: "2023-07-10（周一）",
          address: "万家丽北路二段218号",
          money: "88.00",
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230721_f36b0dec1e7841038cb88dd15daffa7c.png",
        },
        {
          name: "上门做饭",
          status: "待支付",
          time: "2023-07-10（周一）",
          address: "万家丽北路二段218号",
          money: "111.00",
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230721_f36b0dec1e7841038cb88dd15daffa7c.png",
        },
      ],
      orderList2: [
        {
          name: "社区跑腿",
          status: "已支付",
          time: "2023-07-10（周一）",
          address: "万家丽北路二段218号",
          money: "88.00",
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230721_f36b0dec1e7841038cb88dd15daffa7c.png",
        },
        {
          name: "上门做饭",
          status: "已支付",
          time: "2023-07-10（周一）",
          address: "万家丽北路二段218号",
          money: "111.00",
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230721_f36b0dec1e7841038cb88dd15daffa7c.png",
        },
      ],
      orderList3: [
        {
          name: "社区跑腿",
          status: "已取消",
          time: "2023-07-10（周一）",
          address: "万家丽北路二段218号",
          money: "88.00",
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230721_f36b0dec1e7841038cb88dd15daffa7c.png",
        },
        {
          name: "上门做饭",
          status: "已取消",
          time: "2023-07-10（周一）",
          address: "万家丽北路二段218号",
          money: "111.00",
          imageUrl:
            "https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230721_f36b0dec1e7841038cb88dd15daffa7c.png",
        },
      ],
    };
  },
  methods: {
    click(item) {
      console.log("item", item);
      switch (item.name) {
        case "全部":
          this.orderList = this.orderListAll;
          break;
        case "待支付":
          this.orderList = this.orderList1;
          break;
        case "已完成":
          this.orderList = this.orderList2;
          break;
        case "已取消":
          this.orderList = this.orderList3;
          break;
      }
    },
    toReserve() {
      return;
      uni.navigateTo({
        url: "/subPages/square/reserve",
      });
    },
    showModel() {
      this.show = true;
    },
    confirmModel() {
      this.$message(`取消订单成功`);
      this.show = false;
    },
    cancelModel() {
      this.show = false;
    },
    toeValuatePage() {
      this.$jump("/subPages/user/evaluate/evaluate");
    },
  },
  onLoad(option) {
    this.orderList = this.orderListAll;
    console.log("appointment-order", option);
  },
};
</script>

<style lang="scss" scoped>
.appointment-order {
  width: 100vw;

  &-list {
    &-item {
      // height: 342rpx;
      background: #ffffff;
      box-shadow: 0rpx 6rpx 18rpx 1rpx rgba(209, 209, 209, 0.4);
      border-radius: 15rpx;

      .pay-header {
        // border-bottom: 1px solid #e5e5e5;
        padding: 20rpx 0;

        .dot {
          width: 15rpx;
          height: 30rpx;
          background: #5991fa;
          border-radius: 8rpx;
        }

        .title {
          height: 45rpx;
          font-size: 32rpx;
          color: #333333;
          line-height: 45rpx;
          margin-left: 10rpx;
        }

        .pay-status {
          font-size: 26rpx;
          font-weight: bold;
          color: #ee3b3b;
        }
      }

      .pay-body {
        padding: 20rpx 0;
        // border-bottom: 1px solid #e5e5e5;

        > image {
          flex-shrink: 0;
        }

        &-message {
          width: 100%;

          .message-item {
            margin-bottom: 20rpx;
          }

          .text {
            font-size: 28rpx;
            color: #333333;
            margin-left: 20rpx;
          }
        }
      }

      .pay-footer {
        padding: 20rpx 0;

        .pay-footer-left {
          height: 40rpx;
          font-size: 28rpx;
          font-weight: bold;
          color: #333333;
          line-height: 40rpx;
        }

        .pay-footer-right {
          .pay-btn {
            width: 150rpx;
            height: 52rpx;
            border-radius: 35rpx;
            border: 1rpx solid #707070;
            line-height: 52rpx;
            text-align: center;
            font-size: 26rpx;
            color: #333333;
            margin-left: 20rpx;

            &:active {
              // background-color: #ccc;
              color: #fff;
              background-color: #ee3b3b;
              border-color: #ee3b3b;
            }
          }
        }
      }
    }
  }
}

// .active {
//   color: #fff !important;
//   background-color: #ee3b3b;
//   border: none !important;
// }
</style>