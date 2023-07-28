<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-25 11:40:24
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-27 14:27:58
 * @FilePath: /community-square/subPages/release/house-release.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="house-release box-half">
    <view class="house-release-header flex-a-center-j-space-between">
      <view
        class="header-left flex-center"
        :class="!showBtn ? 'header-left-btn' : ''"
        @click="clickHeaderBtn('left')"
      >
        <image
          style="width: 46rpx; height: 46rpx; margin-right: 20rpx"
          src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230725_20b71b90e61b4a80a323b731a97b6fc6.png"
          mode=""
        />
        <view>房屋出租</view>
      </view>
      <view
        class="header-right flex-center"
        :class="showBtn ? 'header-right-btn' : ''"
        @click="clickHeaderBtn('right')"
      >
        <image
          style="width: 46rpx; height: 46rpx; margin-right: 20rpx"
          src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230725_2ea0f82364b84315911b1e52fa8065e0.png"
          mode=""
        />
        <view>我要卖房</view>
      </view>
    </view>
    <!-- 间隔槽 -->
    <u-gap height="20" bgColor="#F9F9F9"></u-gap>

    <view class="house-release-content" v-if="!showBtn">
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">发布需求</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">小区</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">面积</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">类型</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">售价</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item">
        <view class="label" style="margin-bottom: 10rpx">照片</view>
        <u-upload
          :fileList="fileList1"
          @afterRead="afterRead"
          @delete="deletePic"
          name="1"
          multiple
          :maxCount="10"
        ></u-upload>
      </view>
      <view class="house-release-content-item">
        <view class="flex-a-center-j-space-between">
          <view class="label">联系人</view>
          <u--input
            placeholder="请输入内容"
            border="none"
            v-model="formData.value"
            @change="change"
          ></u--input>
          <u-icon name="arrow-right"></u-icon>
        </view>
        <!-- 单选按钮 -->
        <view class="radio flex-j-right">
          <u-radio-group v-model="formData.radioSex" placement="row">
            <u-radio activeColor="red" :name="1" label="先生"></u-radio>
            <u-radio activeColor="red" :name="0" label="女士"></u-radio>
          </u-radio-group>
        </view>
      </view>
      <view class="house-release-content-item">
        <view class="flex-a-center-j-space-between">
          <view class="label">联系号码</view>
          <u--input
            placeholder="请输入内容"
            border="none"
            v-model="formData.value"
            @change="change"
          ></u--input>
          <u-icon name="arrow-right"></u-icon>
        </view>
        <!-- 单选按钮 -->
        <view class="radio flex-j-right"> 安全通话，隐藏真实号码 </view>
      </view>
      <view class="house-release-content-item">
        <view class="label">房屋介绍</view>
        <u--textarea
          v-model="value1"
          placeholder="请输入内容"
          border="none"
        ></u--textarea>
      </view>
    </view>

    <view class="house-release-content" v-else>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">发布需求</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">品牌</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">型号</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">年份</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">首次上牌</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">表显里程</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">牌照归属</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">年检到期</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">排量/变速</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">过户次数</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">有无抵押</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">车身颜色</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">所在城市</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item flex-a-center-j-space-between">
        <view class="label">车辆性质</view>
        <u--input
          placeholder="请输入内容"
          border="none"
          v-model="formData.value"
          @change="change"
        ></u--input>
        <u-icon name="arrow-right"></u-icon>
      </view>
      <view class="house-release-content-item">
        <view class="label" style="margin-bottom: 10rpx">照片</view>
        <u-upload
          :fileList="fileList1"
          @afterRead="afterRead"
          @delete="deletePic"
          name="1"
          multiple
          :maxCount="10"
        ></u-upload>
      </view>
      <view class="house-release-content-item">
        <view class="flex-a-center-j-space-between">
          <view class="label">联系人</view>
          <u--input
            placeholder="请输入内容"
            border="none"
            v-model="formData.value"
            @change="change"
          ></u--input>
          <u-icon name="arrow-right"></u-icon>
        </view>
        <!-- 单选按钮 -->
        <view class="radio flex-j-right">
          <u-radio-group v-model="formData.radioSex" placement="row">
            <u-radio activeColor="red" :name="1" label="先生"></u-radio>
            <u-radio activeColor="red" :name="0" label="女士"></u-radio>
          </u-radio-group>
        </view>
      </view>
      <view class="house-release-content-item">
        <view class="flex-a-center-j-space-between">
          <view class="label">联系号码</view>
          <u--input
            placeholder="请输入内容"
            border="none"
            v-model="formData.value"
            @change="change"
          ></u--input>
          <u-icon name="arrow-right"></u-icon>
        </view>
        <!-- 单选按钮 -->
        <view class="radio flex-j-right"> 安全通话，隐藏真实号码 </view>
      </view>
      <view class="house-release-content-item">
        <view class="label">描述</view>
        <u--textarea
          v-model="value1"
          placeholder="请输入内容"
          border="none"
        ></u--textarea>
      </view>
    </view>
    <view class="house-release-bottom">
      <u-button type="primary" text="提交"></u-button>
    </view>

    <!-- 选择器 -->
    <u-picker
      :show="show"
      :columns="columns"
      @cancel="cancelPicker"
      @confirm="confirmPicker"
    ></u-picker>
  </view>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        value: "",
        houseType: "",
        radio: false,
        radioSex: 0,
      },
      fileList1: [],
      value1: "",
      columns: [["普通住宅", "公寓", "别墅"]],
      show: false,
      // 控制按钮
      showBtn: false,
    };
  },
  methods: {
    change(e) {
      console.log(e);
    },
    // 删除图片
    deletePic(event) {
      this[`fileList${event.name}`].splice(event.index, 1);
    },
    // 新增图片
    async afterRead(event) {
      // 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
      let lists = [].concat(event.file);
      let fileListLen = this[`fileList${event.name}`].length;
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中",
        });
      });
      for (let i = 0; i < lists.length; i++) {
        const result = await this.uploadFilePromise(lists[i].url);
        let item = this[`fileList${event.name}`][fileListLen];
        this[`fileList${event.name}`].splice(
          fileListLen,
          1,
          Object.assign(item, {
            status: "success",
            message: "",
            url: result,
          })
        );
        fileListLen++;
      }
    },
    uploadFilePromise(url) {
      return new Promise((resolve, reject) => {
        let a = uni.uploadFile({
          url: "http://192.168.2.21:7001/upload", // 仅为示例，非真实的接口地址
          filePath: url,
          name: "file",
          formData: {
            user: "test",
          },
          success: (res) => {
            setTimeout(() => {
              resolve(res.data.data);
            }, 1000);
          },
        });
      });
    },

    // 选择器
    clickShowPick() {
      this.show = true;
    },
    cancelPicker() {
      this.show = false;
    },
    confirmPicker(e) {
      this.formData.houseType = e.value[0];
      this.show = false;
    },

    // radio
    radioGroupChange(value) {
      this.formData.radio = value;
    },
    clickHeaderBtn(type = "right") {
      if (type === "right") {
        this.showBtn = true;
      } else {
        this.showBtn = false;
      }
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.house-release {
  width: 100vw;
  position: relative;

  &-header {
    margin: 20rpx 0;

    > view {
      width: 326rpx;
      height: 78rpx;
      border-radius: 10rpx;
      font-size: 26rpx;
      font-weight: bold;

      // &:active {
      //   background: #999;
      //   color: #fff;
      // }
    }

    .header-left {
      color: #197263;
      border: 1rpx solid #53d4d0;
    }

    .header-right {
      color: #776216;
      border: 1rpx solid #ffcc0e;
    }
  }

  &-content {
    height: calc(100vh - 150px);
    overflow-y: scroll;

    &-item {
      padding: 22rpx 20rpx;
      border-bottom: 1px solid #cccccc;

      .label {
        height: 40rpx;
        font-size: 28rpx;
        color: #333333;
        line-height: 40rpx;
        margin-right: 20rpx;
      }

      .radio {
        width: 100%;
        text-align: right;
        font-size: 22rpx;
        color: #999999;
      }
    }
  }

  &-bottom {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 20px;
  }
}

.header-left-btn {
  background: #53d4d0 !important;
}
.header-right-btn {
  background: #ffcc0e !important;
}
</style>