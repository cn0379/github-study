<template>
  <div class="common-title-main">
      <div class="left-area">
          <span class="line">

          </span>
          <span class="text">{{title}}</span>
      </div>
      <router-link tag="div" :to="{name:'movie'}" class="right-area">
          <span class="text">{{moreText}}</span>
          <img class="icon" :src="require('@/assets/imgs/icons/arr-right.png')" alt="">
      </router-link>
  </div>
</template>

<script>
export default {
  name: "CommonTitle",
  props: {
      title: {
          type: String
      },
      moreText:{
          type: String,
          default: '全部'
      }
  },
  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
@import "../../../assets/style/common/common.scss";
.common-title-main {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
//   padding: 0 $basePadding;
  margin: 8px auto;
  .left-area {
    font-size: 18px;
    color: $baseFontColor;
    display: flex;
    align-items: center;
    .line {
      display: block;
      width: 4px;
      height: 17px;
      background: linear-gradient(
        rgba(242, 97, 130, 1) 0%,
        rgba(241, 160, 100, 1) 100%
      );
      margin: 5px;
    }
  }
  .right-area {
    font-size: 12px;
    color: #dfdfdf;
    .text{
        opacity: .5;
    }
    .icon{
        width: 6px;
        height: 10px;
        margin-left: 4px;
    }
  }
}
</style>
