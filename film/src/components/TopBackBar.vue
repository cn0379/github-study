<template>
  <div class="top-back-bar-main" :style="topBar">
    <img
      @click="$router.go(-1)"
      class="icon icon-goback"
      :src="require('@/assets/imgs/icons/arr-left.png')"
      alt
    >
    <span class="title">
      <slot></slot>
    </span>
    <slot name="img-right">
      <img class="icon icon-share" :src="require('@/assets/imgs/icons/share.png')" alt>
    </slot>
  </div>
</template>

<script>
export default {
  name: "TopBackBar",
  props: {
    bgColor: {
      type: String,
      default: "#22262D"
    }
  },
  data() {
    return {
      topBar: {
        backgroundColor: this.bgColor
      }
    };
  },

  methods: {}
};
</script>
<style lang='scss' scoped>
@import "../assets/style/common/common.scss";
.top-back-bar-main {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1999;
  display: flex;
  justify-content: space-between;
  padding: 0 $basePadding;
  height: 44px;
  width: 100%;
  font-size: 16px;
  color: #fff;
  align-items: center;
  background-color: $baseBgColor;
  box-sizing: border-box;
  .icon {
    width: 22px;
    height: 22px;
  }
}
</style>
