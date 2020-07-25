<template>
  <div class="detail-main">
    <BaseLayer>
      <template v-slot:header>
        <TopBackBar :bgColor="color">
          {{cinemaName}}
          <template v-slot:img-right>
            <img class="icon icon-xing" :src="require('@/assets/imgs/cinema/xing.png')" alt />
          </template>
        </TopBackBar>
      </template>
      <template v-slot:default>
        <Position>
          {{cinemaName}}
          <p>{{cinemaAddress}}</p>
        </Position>
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,index) in cinemaInfo" :key="index">
            <img :src="item.img" alt />
            <div class="b">
              <div class="stars">
                <img :src="require('@/assets/imgs/mine/starOn.png')" alt srcset />
                <img :src="require('@/assets/imgs/mine/starOn.png')" alt srcset />
                <img :src="require('@/assets/imgs/mine/starOn.png')" alt srcset />
                <img :src="require('@/assets/imgs/mine/starOn.png')" alt srcset />
                <img :src="require('@/assets/imgs/mine/starOn.png')" alt srcset />
              </div>
              <div class="score">
                9.
                <span>5</span>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="movie-info">
          <div class="title">{{currentMovie.title}}</div>
          <div class="tags">
            <span>{{currentMovie.time}}</span>
            |
            <span>{{currentMovie.type}}</span>
            |
            <span>{{currentMovie.actor}}</span>
          </div>
          <p class="date">今天2月1日</p>
        </div>
        <div class="movie-list-main">
          <MovieList
            v-for="(item,index) in currentMovie.timeList"
            :key="index"
            :list="item"
            :movieTitle="currentMovie.title"
          ></MovieList>
        </div>
      </template>
    </BaseLayer>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import BaseLayer from "@/components/BaseLayer";
import Position from "../components/Position";
import TopBackBar from "@/components/TopBackBar";
import MovieList from "./components/MovieList";
export default {
  name: "detail",
  components: {
    BaseLayer,
    Position,
    TopBackBar,
    swiper,
    swiperSlide,
    MovieList
  },
  data() {
    let self = this;
    return {
      color: "",

      cinemaInfo: [
        {
          title: "后来的我们",
          type: "剧情",
          time: "119分钟",
          actor: "周冬雨",
          img: require("@/assets/imgs/cinema/movie_1.png"),
          timeList: [
            {
              startTime: "15:30",
              endTime: "17:14",
              type: "原版3D",
              room: "2号厅 (冠名招商中)",
              price: "30.9"
            },
            {
              startTime: "15:30",
              endTime: "17:14",
              type: "原版3D",
              room: "2号厅 (冠名招商中)",
              price: "30.9"
            },
            {
              startTime: "15:30",
              endTime: "17:14",
              type: "原版3D",
              room: "2号厅 (冠名招商中)",
              price: "30.9"
            },
            {
              startTime: "15:30",
              endTime: "17:14",
              type: "原版3D",
              room: "2号厅 (冠名招商中)",
              price: "30.9"
            }
          ]
        },
        {
          title: "春风十里不如你",
          type: "剧情",
          time: "119分钟",
          actor: "周冬雨",
          img: require("@/assets/imgs/cinema/movie_2.png")
        },
        {
          title: "后来的我们",
          type: "剧情",
          time: "119分钟",
          actor: "周冬雨",
          img: require("@/assets/imgs/cinema/movie_3.png")
        },
        {
          title: "后来的我们",
          type: "剧情",
          time: "119分钟",
          actor: "周冬雨",
          img: require("@/assets/imgs/cinema/movie_4.png")
        },
        {
          title: "后来的我们",
          type: "剧情",
          time: "119分钟",
          actor: "周冬雨",
          img: require("@/assets/imgs/cinema/movie_1.png")
        }
      ],
      currentMovie: null
    };
  },
  computed: {
    cinemaName() {
      return this.$store.state.cinema.cinemaName;
    },
    cinemaAddress() {
      return this.$store.state.cinema.cinemaAddress;
    }
  },
  created() {
    // 根据影院id获取该影院影片信息
    this.currentMovie = this.cinemaInfo[0];
  },
  mounted() {
    // console.log(this.$refs.mySwiper);
    // this.swiper = this.$refs.mySwiper.swiper;
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/style/common/common.scss";
.detail-main {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  background: $baseBgColor url("../../../assets/imgs/cinema/movie_bg.png")
    no-repeat top;
  background-size: 375px 323px;
  z-index: 2999;
  .top-back-bar-main {
    background: transparent;
  }
  ::v-deep.position {
    margin-top: 56px;
    background-color: transparent;
    align-items: flex-start;
    .text {
      font-size: 16px;
      color: #fff;
      margin-left: 25px;
      opacity: 1;
      p {
        font-size: 12px;
        line-height: 17px;
        color: $baseFontColor;
      }
    }
    .icon {
      width: 22px;
      margin-top: 4px;
    }
  }
  ::v-deep.scroller-wrapper {
    .content {
      padding-bottom: 0;
      padding-top: 0;
    }
  }
  .swiper-container {
    width: 140px;
    height: 188px;
    overflow: visible;
    .swiper-slide {
      position: relative;
      transform: scale(0.8);
      transition: all ease 0.4s;
      img {
        width: 100%;
        height: 100%;
      }
      .b {
        position: absolute;
        left: 8px;
        bottom: 10px;
        width: 124px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .stars {
        // position: absolute;
        // left: 6px;
        // bottom: 10px;
        // width: 60px;
        img {
          width: 8px;
          height: 8px;
          margin: 0 2px;
        }
      }
      .score {
        // position: absolute;
        // right: 8px;
        // bottom: 10px;
        // font-weight: bolder;
        // width: 28px;
        font-size: 18px;
        span {
          font-size: 14px;
        }
      }
    }
    .swiper-slide-active {
      transform: scale(1);
    }
  }
  .movie-info {
    color: $baseFontColor;

    .title {
      line-height: 25px;
      font-size: 18px;
      color: #fff;
      margin: 4px auto;
    }
    .tags {
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      opacity: 0.6;
      span {
        vertical-align: -1px;
      }
    }
  }
  .date {
    width: 335px;
    color: $baseFontColor2;
    text-align: left;
    margin: 10px auto;
  }
  .movie-list-main {
    width: 100%;
    // display: flex;
    // justify-content: center;
  }
}
</style>
