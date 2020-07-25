<template>
  <div class="address">
    <BaseLayer>
      <template v-slot:header>
        <TopBackBar>
          影院地图
          <template v-slot:img-right>
            <img class="icon icon-search" :src="require('@/assets/imgs/cinema/search.png')" alt>
          </template>
        </TopBackBar>
      </template>
      <template v-slot:default>
        <div class="map">
          <!-- <img :src="require('@/assets/imgs/cinema/map.png')" alt> -->
          <el-amap class="amap-box" :zoom="zoom" :center="points" :vid="'amap-vue'">
            <el-amap-marker
              :position="points"
            ></el-amap-marker>
            <!-- <el-amap-ground-image :url="groundimage.url" :bounds="groundimage.bounds"></el-amap-ground-image> -->
            <!-- <el-amap-circle
              :center="circle.center"
              :radius="circle.radius"
              :fill-opacity="circle.fillOpacity"
            ></el-amap-circle>-->
          </el-amap>
        </div>
      </template>
    </BaseLayer>

    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id">
        <img :src="item.img" alt>
        <div class="info">
          <span class="title">{{item.title}}</span>
          <span class="icon refresh"></span>
          <span class="icon tel"></span>
          <span class="timing">{{item.time}}</span>
        </div>
        <div class="view">查看</div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import TopBackBar from "@/components/TopBackBar";
import BaseLayer from "@/components/BaseLayer";

import {mapState} from "vuex"
export default {
  components: {
    swiper,
    swiperSlide,
    TopBackBar,
    BaseLayer
  },
  computed:{
    ...mapState({
      points:function(state){
        console.log(state)
        var point = state.cinema.cinemaPoint
        return [point.lng,point.lat]
      },
      list(state){
        var list = JSON.parse(JSON.stringify(state.cinema.movieList));
        list.forEach((ele,index) =>{
          ele.time = "50min";
          if(index%2 == 0){
            ele.img = require("@/assets/imgs/cinema/cinema_1.png")
          }else{
            ele.img = require("@/assets/imgs/cinema/cinema_2.png")
          }
        })
        return list
      }
    })
  },
  data() {
    return {
      swiperOption: {
       
      },
      zoom: 14,
      center: [113.767929, 34.77033],
      CinemaList: [
        {
          id: "1",
          title: "耀莱成龙影城 (建业店)",
          address: "金水区普惠路77号绿地之窗尚峰座正大乐城3楼",
          time: "45min",
          img: require("@/assets/imgs/cinema/cinema_1.png")
        },
        {
          id: "2",
          title: "耀莱成龙影城 (建业店)",
          address: "金水区普惠路77号绿地之窗尚峰座正大乐城3楼",
          time: "36min",
          img: require("@/assets/imgs/cinema/cinema_2.png")
        },
        {
          id: "3",
          title: "耀莱成龙影城 (建业店)",
          address: "金水区普惠路77号绿地之窗尚峰座正大乐城3楼",
          time: "50min",
          img: require("@/assets/imgs/cinema/cinema_1.png")
        },
        {
          id: "4",
          title: "五一影城",
          address: "管城回族区东风南路商鼎路",
          time: "20min",
          img: require("@/assets/imgs/cinema/cinema_2.png")
        }
      ]
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/style/common/common.scss";

.address {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: $baseBgColor;
  overflow: hidden;
  z-index: 2999;
  .map {
    width: 100%;
    height: 584px;
    opacity: 0.6;
    img {
      width: 100%;
    }
    // .amap-logo {
    //   opacity: 0;
    // }
    // padding-top: 44px;
  }
  .swiper-container {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 203px;
    height: 194px;
    padding-left: 3px;
    overflow: visible;
    z-index: 999;
    .swiper-slide {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 203px !important;
      margin-left: 18px;
      background: $baseBgLightColor;
      border-radius: 6px;

      img {
        width: 202px;
        height: 131px;
      }
      .info {
        display: flex;
        flex-wrap: wrap;
        width: 132px;
        text-align: left;
        margin-top: -10px;
        .title {
          width: 100%;
        }
        .icon {
          width: 20px;
          height: 20px;
          margin-top: -3px;
        }
        .tel {
          margin-left: 12px;
          margin-right: 38px;
          background: url("../../../assets/imgs/cinema/tel.png") no-repeat
            center;
        }
        .refresh {
          background: url("../../../assets/imgs/cinema/share.png") no-repeat
            center;
        }
      }
      .view {
        width: 45px;
        height: 25px;
        line-height: 25px;
        border-radius: 6px;
        margin-top: -2px;
        @include changeColor();
        // background: linear-gradient(#f25b86, #f1ac5e);
      }
    }
  }
}
</style>
