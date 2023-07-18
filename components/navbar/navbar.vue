<template>
  <view class="navbar w-full" :class="customClass" :style="[customStyle]">
    <u-navbar
      :leftIcon="leftIcon"
      :leftText="leftText"
      :leftIconSize="iconSize"
      :placeholder="placeholder"
      @leftClick="goBack"
      :bgColor="backgroundColor"
      :fixed="fixed"
      :leftIconColor="color">
      <view class="u-nav-slot text-center" slot="center" :style="{ color }">
        <slot>
          <text
            class="u-nav-title u-line-1"
            :style="[{ width: $u.addUnit(titleWidth) }]">
            {{ title }}
          </text>
        </slot>
      </view>
    </u-navbar>
  </view>
</template>

<script>
export default {
  name: "Navbar",
  // #ifdef MP-WEIXIN
  options: { virtualHost: true },
  // #endif
  props: {
    icon: {
      type: String,
      default: "",
    },
    iconSize: {
      type: String,
      default: "20px",
    },
    fixed: Boolean,
    placeholder: Boolean,
    custom: {
      //是否开启自定义模式，开启后，将通过customFunc回调函数控制组件
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "#000",
    },
    title: {
      type: String,
      default: "",
    },
    bgColor: String,
    titleWidth: {
      type: String,
      default: "400rpx",
    },
    pages: {
      //如果是pages页面,则没有返回按钮
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      leftIcon: this.icon,
      leftText: "",
    };
  },
  computed: {
    backgroundColor() {
      return this.bgColor || "transparent";
    },
  },
  beforeCreate() {
    this.stateRetention = {}; //自定义模式下的状态保留
  },
  created() {
    if (this.pages) return;
    const pages = getCurrentPages();
    if (this.custom) return (this.goBack = () => {});
    if (pages.length <= 1) {
      this.leftIcon = "home";
      this.goBack = () => uni.reLaunch({ url: "/pages/index/index" });
    } else {
      this.leftIcon = "arrow-left";
      this.goBack = () => uni.navigateBack();
    }
  },
  methods: {
    setCustomParams(params = {}) {
      //设置自定义模式下的参数
      Object.keys(params).forEach(key => {
        this.stateRetention[key] = this[key];
        this[key] = params[key];
      });
    },
  },
  watch: {
    custom: {
      handler(val) {
        if (val) {
          setTimeout(() => {
            //开启immediate,优先级高于created钩子,需要延迟触发
            //(其中使用事件触发函数,使用props传递函数有this指向问题,且uinapp的props无法传递箭头函数)
            //微信小程序不能通过事件传递this
            this.$emit("customFunc", this.setCustomParams);
          });
        } else {
          Object.assign(this, this.stateRetention);
          this.stateRetention = {};
        }
      },
      immediate: true,
    },
  },
};
</script>
<style scoped>
.u-nav-slot {
  font-size: 32rpx;
}
</style>
