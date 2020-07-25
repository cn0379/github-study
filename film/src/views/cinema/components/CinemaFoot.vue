<template>
  <div class="cinema-foot-main">
    <div class="tips">
      <slot name="tips"></slot>
    </div>
    <div class="btn">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "CinemaFoot",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/style/common/common.scss";

.cinema-foot-main {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 145px;
  background-color: $baseBgLightColor;
  .btn {
    width: 340px;
    line-height: 40px;
    font-size: 18px;
    color: #fff;
    margin: 15px auto;
    border-radius: 6px;
    @include changeColor();
  }
  .tips {
    display: flex;
    width: 335px;
    height: 50px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
