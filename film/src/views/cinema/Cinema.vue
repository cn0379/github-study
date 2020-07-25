<template>
  <div class="cinema-main">
    <BaseLayer ref="bscroll">
      <template v-slot:header>
        <TopBar>
          <router-link tag="div" :to="{name:'cityList'}" class="city-area">
            <span class="city-text">郑州</span>
            <img class="icon icon-arr-down" :src="require('@/assets/imgs/home/arr-down.png')" alt>
          </router-link>
          <div class="title">影院</div>
          <div class="search">
            <img class="icon" :src="require('@/assets/imgs/icons/search.png')" alt>
          </div>
        </TopBar>
      </template>
      <template v-slot:default>
        <Position>
          <template v-slot:img-left></template>
          我在: 金水区绿地新都会
          <template v-slot:img-right>
            <span></span>
          </template>
        </Position>
        <div class="cinema-list">
          <CinemaList v-for="item in CinemaList" :key="item.id" :cinema="item"></CinemaList>
        </div>
        <div id="l-map"></div>
      </template>
       
    </BaseLayer>
    <!-- <router-view></router-view> -->
   
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import BaseLayer from "@/components/BaseLayer";
import Position from "./components/Position";
import CinemaList from "./components/CinemaBlock";

import { mapMutations } from "vuex"
export default {
  name: "Cinema",
  components: {
    TopBar,
    BaseLayer,
    Position,
    CinemaList
  },
  data() {
    return {
      CinemaList: [
        
      ]
    };
  },
  methods: {
    ...mapMutations({
      setMovieList:"cinema/setMovieList"
    })
  },
  mounted(){
    
    var _this = this;
    var map = new BMap.Map("l-map");    
    map.centerAndZoom(new BMap.Point(113.754407,34.776794), 18);
  
    var local = new BMap.LocalSearch(map,{
      onSearchComplete: function(results){
        // 判断状态是否正确
        if (local.getStatus() == BMAP_STATUS_SUCCESS){
        
          results.Ir.forEach(ele =>{
            var pointA = new BMap.Point(113.754407,34.776794);  // 创建点坐标A--大渡口区
            var pointB = new BMap.Point(ele.point.lng,ele.point.lat);
            var instance = (map.getDistance(pointA,pointB)/1000).toFixed(2)+'公里。'
            console.log(instance);
            var obj = {
              id: ele.uid,
              title: ele.title,
              address: ele.address,
              distance: instance,
              point:ele.point,
              price: "19.9元",
              special: "我是药神等4部影片特惠",
              sale: "观影套餐限量特惠",
              card: "开卡特惠,每单2张立减2元"
            }
            _this.CinemaList.push(obj)
          })
          _this.setMovieList(_this.CinemaList)
        }
      }
    });
    local.search("影院");
  }
};
</script>

<style lang='scss' scoped>
@import "../../assets/style/common/common.scss";
.cinema-main {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  .top-bar-main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: $baseTopHeight;
    background-color: #33363d;
    align-items: center;
    box-sizing: border-box;
    padding: $basePadding;
    color: $baseFontColor;
    .city-area {
      display: flex;
      align-items: center;
      height: 36px;
      padding: 0 4px;
      .icon.icon-arr-down {
        width: 12px;
        height: 6px;
        margin: auto 4px;
      }
    }
    .title {
      flex-grow: 1;
      line-height: 36px;
      font-size: 18px;
      color: #fff;
      font-weight: medium;
    }
    .search {
      width: 50px;
      text-align: right;
      .icon {
        width: 18px;
        height: 18px;
      }
    }
  }
  ::v-deep.position {
    .icon {
      width: 14px;
    }
  }
  ::v-deep.scroller-wrapper {
    .content {
      padding-bottom: 140px;
    }
  }
}
</style>
