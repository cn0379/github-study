<template>
  <div class="movie-list">
    <div class="time">
      {{list.startTime}}
      <span>{{list.endTime}}散场</span>
    </div>
    <div class="room">
      {{list.type}}
      <span>{{list.room}}</span>
    </div>
    <div class="price">
      {{list.price}}
      <span>元</span>
    </div>
    <div class="buy" @click="toSeat(list.room)">购票</div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Object
    },
    movieTitle: {
      type: String
    }
  },
  name: "MovieList",
  data() {
    return {};
  },
  methods: {
    toSeat(room) {
      // 设置 store
      this.$store.commit("cinema/setTitle", this.movieTitle);
      //   this.$store.commit("cinema/setAddress", this.movieTitle);

      this.$store.commit("cinema/setMovieInfo", this.list);
      // query可以传参数
      this.$router.push({ path: "/cinema/movie" });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../../assets/style/common/common.scss";
.movie-list {
  display: flex;
  justify-content: space-around;
  width: 335px;
  height: 91px;
  background: $baseBgLightColor;
  border-radius: 6px;
  margin: 10px auto;
  padding-top: 25px;
  box-sizing: border-box;
  color: $baseFontColor;
  .buy {
    width: 45px;
    height: 25px;
    line-height: 25px;
    border-radius: 6px;
    @include changeColor();
  }
  .price {
    width: 55px;
    height: 25px;
    line-height: 25px;
    font-size: 18px;
    color: $baseFontColor2;
    span {
      font-size: 14px;
      margin-left: -4px;
    }
  }
  .room {
    display: flex;
    flex-wrap: wrap;
    width: 68px;
    line-height: 17px;
    font-size: 12px;
    text-align: left;
    span {
      opacity: 0.6;
      margin-top: -8px;
    }
  }
  .time {
    width: 55px;
    font-size: 18px;
    text-align: right;
    // line-height: 25px;
    span {
      font-size: 12px;
      opacity: 0.6;
      line-height: 17px;
    }
  }
}
</style>
