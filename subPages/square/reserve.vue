<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-19 14:41:46
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-19 17:30:37
 * @FilePath: /community-square/pages-square/pay.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <view class="reserve">
    <view class="reserve-form box">
      <!-- 地址 -->
      <view class="reserve-form-addr flex-a-center-j-space-between">
        <view class="addr-info">
          <view class="addr-info-name">李阿奇</view>
          <view class="addr-icon">默认</view>
        </view>
        <view class="addr-detail">
          <view class="addr-detail-phone">136****4687</view>

          <view class="addr-detail-addr">
            湖南省长沙市开福区万家丽北路二段 218号
          </view>
        </view>
        <view>
          <u-icon name="arrow-right"></u-icon>
        </view>
      </view>

      <u-gap height="10" bgColor="#F9F9F9"></u-gap>

      <view class="reserve-form-item flex-a-center-j-space-between padding-32">
        <view class="reserve-form-item-label">服务时间：</view>
        <u--input
          v-model="addrForm.time"
          disabledColor="#ffffff"
          disabled
          placeholder="请选择时间"
          border="none"
        ></u--input>
        <u-icon
          slot="right"
          name="arrow-right"
          @click.stop="selectTime"
        ></u-icon>
      </view>
      <u-gap height="10" bgColor="#F9F9F9"></u-gap>

      <view class="reserve-form-item flex-a-center padding-32">
        <view class="reserve-form-item-label">备注：</view>
        <u--textarea
          v-model="value1"
          border="none"
          placeholder="请输入内容"
          autoHeight
        ></u--textarea>
      </view>
      <u-gap height="10" bgColor="#F9F9F9"></u-gap>
    </view>

    <!-- 时间选择器 -->
    <u-datetime-picker
      :show="show"
      v-model="pickTime"
      @confirm="confirmPickTime"
      mode="date"
    ></u-datetime-picker>
  </view>
</template>

<script>
export default {
  // 预约界面
  data() {
    return {
      pickTime: "",
      show: false,
      addrForm: {
        time: "",
      },
      value1: "",
    };
  },
  methods: {
    // 选择时间
    selectTime() {
      this.show = true;
      console.log(this.show);
    },
    confirmPickTime() {
      this.show = false;
      this.addrForm.time = uni.$u.timeFormat(this.pickTime, "yyyy-mm-dd");
    },
  },
};
</script>

<style lang="scss" scoped>
.reserve {
  width: 100vw;

  &-form {
    font-size: 30rpx;
    color: #333333;

    &-addr {
      padding: 30rpx;
      background-color: #ffffff;

      .addr-info {
        .addr-icon {
          height: 34rpx;
          line-height: 34rpx;
          text-align: center;
          border-radius: 6rpx;
          border: 1rpx solid #999999;
          font-size: 20rpx;
          color: #999999;
        }
      }

      .addr-detail {
        width: 428rpx;

        &-phone {
          margin-bottom: 10rpx;
        }
      }
    }

    &-item {
      &-label {
        margin-right: 20rpx;
      }
    }
  }
}
</style>