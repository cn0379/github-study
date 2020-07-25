<template>
  <div class="cinema-list" @click="goDetail()">
    <div class="cinema-name cinema-block">
      <span class="name">{{cinema.title}}</span>
      <span class="price">
        {{cinema.price}}
        <span>起</span>
      </span>
    </div>
    <div class="cinema-address cinema-block">
      {{cinema.address}}
      <span>{{cinema.distance}}</span>
    </div>
    <div class="cinema-desc cinema-block">
      <span class="icon icon-1">惠</span>
      <span class="text">{{cinema.special}}</span>
    </div>
    <div class="cinema-desc cinema-block">
      <span class="icon icon-2">促</span>
      <span class="text">{{cinema.sale}}</span>
    </div>
    <div class="cinema-desc cinema-block">
      <span class="icon icon-3">卡</span>
      <span class="text">{{cinema.card}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "CinemaList",
  props: {
    cinema: {
      type: Object
    }
  },
  data() {
    return {};
  }, 
  methods: {
    goDetail() {
      this.$store.commit("cinema/setInfo", this.cinema);
      this.$router.push({
        path: `/cinema/cinemaDetail`,
        query: { id: this.cinema.id }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/style/common/common.scss";

.cinema-list {
  width: 335px;
  height: 146px;
  background-color: red;
  margin: 0 auto 15px;
  padding: 3px 12px;
  border-radius: 6px;
  font-size: 12px;
  background-color: $baseBgLightColor;
  box-sizing: border-box;
  .cinema-block {
    margin: 9px 0;
    color: $baseFontColor;
  }
  .cinema-name {
    display: flex;
    font-size: 14px;
    line-height: 20px;
    font-weight: bolder;
    color: #fff;
    justify-content: space-between;
    .price {
      color: $baseFontColor2;
      span {
        font-size: 12px;
        color: #d4d4d4;
        // margin-left: -4px;
        font-weight: normal;
      }
    }
  }
  .cinema-address {
    display: flex;
    justify-content: space-between;
    opacity: 0.75;
  }
  .cinema-desc {
    display: flex;
    line-height: 19px;
    // opacity: 0.6;
    .text {
      opacity: 0.6;
    }
    .icon {
      width: 18px;
      height: 19px;
      line-height: 19px;
      margin-right: 9px;
    }
    .icon.icon-1 {
      background: linear-gradient(#eb6e75, #f7a653);
    }
    .icon.icon-2 {
      background: linear-gradient(#b0469d, #6148aa);
    }
    .icon.icon-3 {
      background: linear-gradient(#322495, #3138ac);
    }
  }
}
</style>
