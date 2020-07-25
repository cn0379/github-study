<template>
  <div class="seat-main">
    <TopBackBar :bgColor="color">{{cinemaName}}</TopBackBar>
    <div class="movie-info">
      <div class="movie-title">{{title}}</div>
      <div class="tags">
        <span class="time">{{movieInfo.startTime}}--{{movieInfo.endTime}}</span>
        <span class="text-3d">{{movieInfo.type}}</span>
      </div>
    </div>
    <div class="seat-tool">
      <div class="able btn">
        <span></span>
        可选
      </div>
      <div class="disable btn">
        <span></span>
        不可选
      </div>
      <div class="selected btn">
        <span></span>
        已选
      </div>
    </div>
    <div class="room">
      <span>{{movieInfo.room}}</span>
    </div>
    <Seat :roomInfo="roomInfo"></Seat>
  </div>
</template>
<script>
import TopBackBar from "@/components/TopBackBar";

import Seat from "./components/Seat";
export default {
  name: "seat",
  components: {
    TopBackBar,
    Seat
  },
  data() {
    return {
      color: "",
      roomInfo: null
    };
  },
  computed: {
    title() {
      return this.$store.state.cinema.movieTitle;
    },
    movieInfo() {
      return this.$store.state.cinema.movieInfo;
    },
    cinemaName() {
      return this.$store.state.cinema.cinemaName;
    }
  },
  created() {
    //   根据选择的场次获取 影厅信息
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/style/common/common.scss";

.seat-main {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  background: $baseBgColor url("../../../assets/imgs/cinema/seat_bg.png")
    no-repeat top;
  background-size: 375px 202px;
  z-index: 2999;
  .top-back-bar-main {
    background: transparent;
  }
  .movie-info {
    width: 340px;
    color: $baseFontColor;
    margin: 44px auto 0;
    .movie-title {
      font-size: 16px;
      line-height: 22px;
      text-align: left;
      padding: 13px 0;
    }
    .tags {
      display: flex;
      font-size: 14px;
      line-height: 23px;
      opacity: 0.73;
      .time {
        width: 99px;
        height: 23px;
        background-color: $baseBgLightColor;
        border-radius: 5px;
      }
      .text-3d {
        width: 61px;
        height: 23px;
        box-sizing: border-box;
        border: 1px solid $baseBgLightColor;
        margin-left: 10px;
        border-radius: 5px;
      }
    }
  }
  .seat-tool {
    width: 340px;
    margin: 21px auto;
    display: flex;
    justify-content: space-between;
    .btn {
      line-height: 26px;
      font-size: 14px;
      span {
        display: inline-block;
        width: 26px;
        height: 26px;
        vertical-align: -8px;
        background-color: #909294;
        border-radius: 6px;
        margin-right: 5px;
      }
      &.disable span {
        background-color: #f9c34a;
      }
      &.selected span {
        background-color: #6548a9;
      }
    }
  }
  .room {
    position: relative;
    margin: -2px auto 0;
    font-size: 12px;
    border-radius: 8px;
    width: 135px;
    border-top: 20px solid $baseBgLightColor;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    span {
      position: absolute;
      width: 100%;
      left: 0;
      margin: -16px 0 0 0;
    }
  }
}
</style>
