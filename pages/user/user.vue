<template>
  <view class="user-pages container">
    <!-- <navbar pages title="我的" bgColor="#5991fa" :custom="true" /> -->
    <view
      class="user-pages-header relative padding-y-24 flex"
      :class="{ 'items-center': !isLogin }"
    >
      <!-- 头像 -->
      <u-avatar size="140rpx" :src="avatar" />
      <!-- 登录后展示 -->
      <view v-if="isLogin" class="user-info flex-col flex-grow justify-evenly">
        <!-- 电话展示 -->
        <text class="user-name text_ellipsis">{{ realName }}</text>
        <!-- 学习{{ studyDays }}天 -->
        <text class="study-days">王阿姨</text>
      </view>
      <!-- 未登录展示 -->
      <view
        v-else
        class="login-btn color-white bg-theme radius-25"
        @click="handleLogin"
      >
        点击登录
      </view>
      <image
        class="head-bg absolute top-0"
        :src="$helper.getImage('', '20220829_9950d6ac472c4ad7bfe80a4d5511c3bf')"
      ></image>
    </view>

    <!-- 我的页面功能 -->
    <view class="user-types flex-a-center-j-space-around">
      <view class="user-types-item">
        <view class="num">2</view>
        <view>我发布的</view>
      </view>
      <view class="user-types-item">
        <view class="num">18</view>
        <view>我收藏的</view>
      </view>
      <view class="user-types-item">
        <view class="num">36</view>
        <view>我的足迹</view>
      </view>
    </view>

    <!-- 卡片 -->
    <view
      class="user-pages-body bg-white radius-10 overflow-hidden padding-24 margin-t-24"
    >
      <view
        class="user-pages-body-top flex-a-center-j-space-between margin-b-24"
      >
        <view>我的订单</view>
        <view class="flex-a-center">
          <view>查看</view>
          <u-icon name="arrow-right"></u-icon>
        </view>
      </view>

      <view class="user-pages-body-content flex-a-center-j-space-between">
        <view
          class="content-item"
          v-for="(item, index) in contentList"
          @click="handleBodyItemClick(item.path, index)"
          :key="index"
        >
          <image style="width: 44rpx; height: 56rpx" :src="item.icon" mode="" />
          <view>{{ item.title }}</view>
        </view>
      </view>
    </view>

    <!-- 功能列表页 -->
    <u-cell-group :border="false">
      <u-cell
        v-for="(item, index) in cellList"
        :key="index"
        isLink
        center
        size="large"
        :icon="item.icon"
        :title="item.title"
        @click="handleCellClick(item)"
      />
    </u-cell-group>
  </view>
</template>

<script>
import infoMixin from "@/common/mixins/info";
export default {
  mixins: [infoMixin],
  data() {
    const getIcon = (icon) => `/static/image/icon/user/${icon}.png`;
    const getPath = (path) => `/subPages/user/${path}/${path}`;

    return {
      cellList: [
        { title: "设置", path: getPath("settings"), icon: getIcon("settings") },
        {
          title: "地址管理",
          path: getPath("address"),
          icon: getIcon("address"),
        },
        { title: "消息", path: getPath("message"), icon: getIcon("message") },
      ],

      contentList: [
        {
          title: "全部",
          path: getPath("appointment-order"),
          icon: getIcon("all-order"),
        },
        {
          title: "待支付",
          path: getPath("appointment-order"),
          icon: getIcon("payment-order"),
        },
        {
          title: "已完成",
          path: getPath("appointment-order"),
          icon: getIcon("success-order"),
        },
        {
          title: "已取消",
          path: getPath("appointment-order"),
          icon: getIcon("cancel-order"),
        },
      ],
    };
  },
  computed: {
    studyDays() {
      return 0;
    },
  },
  methods: {
    /**
     * @description: 跳转登录页
     * @return {*}
     */
    handleLogin() {
      this.$jump("/subPages/user/login/login");
    },

    /**
     * @description:
     * @param {*} item
     * @return {*}
     */
    handleCellClick(item) {
      if (!item.path) this.$message("功能开发中...", "none");
      else this.$jump(item.path);
    },

    /**
     * @description:
     * @param {*} path
     * @return {*}
     */
    handleBodyItemClick(path,index) {
      this.$jump(path, { query: {tabIndex:index} });
    },

    /**
     * @description: 跳转页面
     * @param {*} path
     * @return {*}
     */
    // handleToAppointmentOrder(){
    //   this.$jump('/subPages/user/appointment-order/appointment-order',{query:{}})
    // }
  },
};
</script>
<style lang="scss" scoped>
.user-pages {
  padding: 0 5%;
  height: 100vh;
  position: relative;
  > view {
    position: relative;
    z-index: 1;
  }

  &::after {
    content: "";
    // display: block;
    height: 544rpx;
    background-color: #5991fa;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
  }

  &-header {
    margin-top: 200rpx;
    ::v-deep > .u-avatar {
      margin-right: 36rpx;
    }
    .login-btn {
      width: 180rpx;
      height: 80rpx;
      font-size: 30rpx;
      text-align: center;
      line-height: 80rpx;
    }
    .user-info {
      .user-name {
        max-width: 7em;
        font-size: 40rpx;
        color: #333;
      }
      .study-days {
        color: #969dab;
      }
    }
    .head-bg {
      width: 232rpx;
      right: 32rpx;
      height: 100%;
    }
  }

  .user-types {
    font-size: 24rpx;
    color: #ffffff;

    &-item {
      text-align: center;

      .num {
        height: 70rpx;
        font-size: 50rpx;
        font-weight: 800;
        color: #ffffff;
        line-height: 70rpx;
      }
    }
  }

  &-body {
    font-size: 26rpx;
    color: #333333;

    .content-item {
      text-align: center;
    }
  }

  ::v-deep .u-cell:last-child > .u-cell__body + view {
    // 隐藏最后一个下划线
    display: none;
  }
  ::v-deep .u-cell__title-text {
    font-weight: bold;
    text-indent: 0.8em;
  }
}
</style>
