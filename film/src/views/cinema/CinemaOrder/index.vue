<template>
  <div class="order-main" :style="bgImage">
    <BaseLayer>
      <template v-slot:header>
        <TopBackBar :bgColor="color">
          <template v-slot:img-right>
            <span></span>
          </template>
        </TopBackBar>
      </template>
      <template v-slot:default>
        <div class="movie-info">
          <div class="title">{{title}}</div>
          <div class="date">今天2月1日 {{movieInfo.startTime}} {{movieInfo.type}}</div>
          <div class="address">{{cinemaName}}</div>
          <div class="room">{{movieInfo.room}} {{seatInfo}}</div>
        </div>
        <div class="order-info">
          <div class="order-item">
            <div class="order-item-key">电影优惠券</div>
            <div class="order-item-val">
              一张优惠券可用
              <v-icon
                style="height:22px;color:rgba(249,195,74,0.7);verticalAlign: -6px"
                name="angle-right"
              ></v-icon>
            </div>
          </div>
          <div class="order-item">
            <div class="order-item-key">会员卡</div>
            <div class="order-item-val">
              去使用
              <v-icon
                style="height:22px;color:rgba(249,195,74,0.7);verticalAlign: -6px"
                name="angle-right"
              ></v-icon>
            </div>
          </div>
          <div class="order-item">
            <div class="order-item-key">票价总计</div>
            <div class="order-item-val price">
              {{totalPrice}}
              <span style="fontSize:12px">元</span>
            </div>
          </div>
          <div class="order-item">
            <div class="order-item-key tel">手机号</div>
            <!-- <div class="order-item-val"></div> -->
            <div class="item-key">购票成功后将取到购票码</div>
            <div class="item-val">18577778888</div>
          </div>
        </div>
      </template>
    </BaseLayer>
    <CinemaFoot>
      <template v-slot:tips>
        <div class="left">
          查看退票、改签协议
          <img
            class="icon icon-arr-down"
            :src="require('@/assets/imgs/home/arr-down.png')"
            alt
          />
          <!-- <v-icon style="height:22px;verticalAlign: -6px;" name="angle-up"></v-icon> -->
        </div>
        <div class="right">
          还需支付：
          <span>
            {{totalPrice}}
            <span style="fontSize:12px">元</span>
          </span>
          <img
            class="icon icon-arr-down icon-right"
            :src="require('@/assets/imgs/home/arr-down.png')"
            alt
          />
          <!-- <v-icon style="height:22px;marginLeft:11px;verticalAlign: -6px;" name="angle-up"></v-icon> -->
        </div>
      </template>
      确认订单
    </CinemaFoot>
  </div>
</template>
<script>
import BaseLayer from "@/components/BaseLayer";
import TopBackBar from "@/components/TopBackBar";
import CinemaFoot from "../components/CinemaFoot";
export default {
  name: "order",
  components: {
    BaseLayer,
    TopBackBar,
    CinemaFoot
  },
  data() {
    return {
      color: "",
      bgi: "../../../assets/imgs/cinema/order_bg.png",
      bgImage: {
        backgroundImage:
          "url(" + require("../../../assets/imgs/cinema/order_bg.png") + ")"
      }
    };
  },
  computed: {
    totalPrice() {
      return (
        Math.floor(this.movieInfo.price * this.selectedSeat.length * 100) / 100
      );
    },
    selectedSeat() {
      return this.$store.state.cinema.selectedSeat;
    },
    title() {
      return this.$store.state.cinema.movieTitle;
    },
    movieInfo() {
      return this.$store.state.cinema.movieInfo;
    },
    seatInfo() {
      var str = "";
      for (var i = 0; i < this.selectedSeat.length; i++) {
        str +=
          "" +
          (this.selectedSeat[i][0] + 1) +
          "排" +
          (this.selectedSeat[i][1] + 1) +
          "座  ";
      }
      return str;
    },
    cinemaName() {
      return this.$store.state.cinema.cinemaName;
    }
  },
  methods: {
    // seat(arr) {
    //   var str = "";
    //   for (let i = 0; i < arr.length; i++) {
    //     str += "" + arr[i][0] + "排" + arr[i][1] + "座  ";
    //   }
    //   this.seatStr = str;
    //   console.log(str);
    // }
  },
  created() {
    // this.seat(this.selectedSeat);
    // console.log(this.seatStr);
    //   根据路由参数 获取 选中的座位
    // 可以将 影厅 影片信息 放入store 管理
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/style/common/common.scss";
.order-main {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: $baseBgColor;
  background-repeat: no-repeat;
  background-position: top;
  background-size: 375px 252px;
  z-index: 2999;
  .top-back-bar-main {
    background: transparent;
  }
  .movie-info {
    padding: 44px $basePadding;
    padding-top: 0;
    border-bottom: 1px dashed #fff;
    text-align: left;
    font-size: 14px;
    line-height: 20px;
    color: $baseFontColor;
    .title {
      line-height: 33px;
      font-size: 24px;
      color: #fff;
      margin-top: 10px;
    }
    .date {
      margin-top: 10px;
    }
    .address {
      margin-top: 10px;
    }
    .room {
      margin-top: 10px;
    }
  }
  .order-info {
    width: 340px;
    height: 209px;
    margin: 0 auto;
    margin-top: 10px;
    text-align: left;
    background-color: $baseBgLightColor;
    border-radius: 6px;
    overflow: hidden;
    .order-item {
      display: flex;
      flex-wrap: wrap;
      padding: 0 10px 0 9px;
      line-height: 22px;
      font-size: 16px;
      margin: 20px 0;
      justify-content: space-between;
      .order-item-val {
        color: $baseFontColor2;
        font-size: 12px;
      }
      .price {
        color: #c21313;
        font-size: 20px;
      }
      .tel {
        flex-basis: 340px;
      }
      .item-key {
        line-height: 17px;
        font-size: 12px;
        margin-top: 4px;
      }
      .item-val {
        line-height: 20px;
        font-size: 14px;
      }
    }
  }
  .tips {
    .left {
      font-size: 12px;
      color: $baseFontColor;
      line-height: 17px;
    }
    .right {
      font-size: 16px;
      color: #fff;
      line-height: 22px;
      span {
        color: #c21313;
        line-height: 28px;
      }
    }
    .icon {
      width: 13px;
      transform: rotate(180deg);
    }
    .icon.icon-right {
      vertical-align: 2px;
      margin-left: 10px;
    }
  }
}
</style>
