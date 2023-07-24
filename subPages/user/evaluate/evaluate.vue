<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-24 12:32:04
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-24 15:14:39
 * @FilePath: /community-square/subPages/user/evaluate/evaluate.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="evaluate padding-20">
    <u-upload
      :fileList="fileList1"
      @afterRead="afterRead"
      @delete="deletePic"
      name="1"
      uploadText="上传图片"
      multiple
      :maxCount="10"
    ></u-upload>

    <view class="evaluate-content padding-30">
      <view class="evaluate-content-header">综合评价</view>

      <view class="evaluate-content-body">
        <view class="flex-a-center body-item">
          <image
            style="width: 30rpx; height: 38rpx"
            src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_0ed1e30412f24f5880200c725def09c5.png"
            mode=""
          />
          <view>差评</view>
        </view>
        <view class="flex-a-center body-item">
          <image
            style="width: 30rpx; height: 38rpx"
            src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_bc8db70c5dfc49baa4731221de617d6c.png"
            mode=""
          />
          <view>中评</view>
        </view>
        <view class="flex-a-center body-item">
          <image
            style="width: 30rpx; height: 38rpx"
            src="https://kindoucloud.com:8077/api/mongoFile/Image/systemicon/SmartPark/20230724_3192cd4e2f4546a59c82e5c9ab40f9d1.png"
            mode=""
          />
          <view>好评</view>
        </view>
      </view>

      <view class="evaluate-content-footer">
        <u--textarea
          v-model="value1"
          border="none"
          placeholder="展开说说对我们服务的想法"
        ></u--textarea>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      fileList1: [],
      value1: "",
    };
  },
  methods: {
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
  },
};
</script>

<style lang="scss" scoped>
.evaluate {
  width: 100vw;
  height: 100vh;
  background: #f8f9fd;

  &-content {
    height: 416rpx;
    background: #ffffff;
    border-radius: 10rpx;

    &-header {
      height: 40rpx;
      font-size: 28rpx;
      color: #333333;
      line-height: 40rpx;
    }

    &-body {
      padding: 20rpx 0;
      display: flex;
      font-size: 24rpx;
      color: #999999;
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 20rpx;

      .body-item {
        margin-right: 30rpx;
        > image {
          margin-right: 10rpx;
        }
      }
    }

    &-footer {
    }
  }
}
</style>