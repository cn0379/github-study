<template>
  <div class="position">
    <slot name="img-left">
      <img class="icon" :src="require('@/assets/imgs/cinema/position.png')" alt>
    </slot>
    <router-link tag="span" to="/cinema/address" class="text">
      <slot></slot>
    </router-link>
    <!-- <div class="text">
      <slot></slot>
    </div>-->
    <slot name="img-right">
      <img class="icon icon-right" :src="require('@/assets/imgs/icons/arr-left.png')" alt>
    </slot>
  </div>
</template>
<script>
export default {
  name: "Position",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/style/common/common.scss";
.position {
  display: flex;
  line-height: 30px;
  color: $baseFontColor;
  margin: 12px 0;
  padding: 0 $basePadding;
  background-color: $baseBgLightColor;
  align-items: center;
  .icon {
    width: 20px;
  }
  .icon-right {
    transform: rotate(180deg);
  }
  .text {
    flex: 1;
    text-align: left;
    text-indent: 12px;
    opacity: 0.6;
  }
}
</style>
