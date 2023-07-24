<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-24 16:34:08
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-24 16:46:58
 * @FilePath: /community-square/subPages/user/my-order/my-order.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="my-order">
    <u-tabs :list="list1" @click="click" :scrollable="false"></u-tabs>

    <view class="my-order-list">
      <view class="item"></view>
    </view>
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
          name: "房屋",
        },
        {
          name: "车务",
        },
        {
          name: "宠物",
        },
        {
          name: "其他",
        },
      ],
    };
  },
  methods: {
    click(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-order {
  width: 100vw;
}
</style>