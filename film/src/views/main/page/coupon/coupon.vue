<template>
  <div class="cardList">
    <BaseLayer class="top">
      <template v-slot:header>
        <back>
          优惠券
          <template v-slot:img-right>
            <span></span>
          </template>
        </back>
      </template>
    </BaseLayer>
    <div class="cen">
        <BaseLayer>
            <h2>
                你有2张优惠券可有
            </h2>
            <ul>
                <li v-for="(item , index) in list" :key="index">
                    <div class="l">
                        <h3>
                            {{ item.title }}
                        </h3>
                        <p>
                            {{ item.info }}
                        </p>
                        <p>
                            {{ item.times }}
                        </p>
                    </div>
                    <div class="r" :class="item.isGQ ? '' : 'on'">
                        <p v-html="item.money"></p>
                        <img v-if="item.isGQ" :src="gq" alt="">
                    </div>
                    <div class="mask">

                    </div>
                </li>
            </ul>
        </BaseLayer>
        
    </div>
    <div class="bottom">
        去购票&nbsp;<v-icon style="height:30px;color:rgba(255,255,255,0.6);" name="angle-right"></v-icon>
    </div>
  </div>
</template>
<script>
import back from "@/components/TopBackBar.vue";
import BaseLayer from "@/components/BaseLayer";
import couponOn from "@/assets/imgs/mine/on.png";
import couponFailed from "@/assets/imgs/mine/failed.png";
import gq from "@/assets/imgs/mine/gq.png";
export default {
  components: {
    back,
    BaseLayer
  },
  data () {
      return {
          gq,
          list:[
              {
                  title:"电影专享代金券",
                  info:"购票即可抵扣 快去购票",
                  times:"有效期至： 2018-04-11",
                  money:"5元<br />购票",
                  isGQ:false
              },
              {
                  title:"电影专享代金券",
                  info:"购票即可抵扣 快去购票",
                  times:"有效期至： 2018-04-11",
                  money:"5元<br />购票",
                  isGQ:false
              },
              {
                  title:"电影专享代金券",
                  info:"购票即可抵扣 快去购票",
                  times:"有效期至： 2018-04-11",
                  money:"5元",
                  isGQ:true
              }
          ]
      }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/common/common.scss";
.cardList{
    height: 100%;
    display: flex;
    flex-direction: column;
    .top{
        height: 44px;
    }
    .cen{
        flex: 1;
        h2{
            height:30px;
            background:rgba(44,47,54,1);
            font-size:12px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding:0 $basePadding;
        }
        ul{
            width: $baseCenterWidth;
            margin: 0 auto;
            li{
                display: flex;
                align-items: center;
                height: 125px;
                margin-top: 15px;
                position: relative;
                text-align: left;
                .mask{
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    right: 30px;
                    background:rgba(51,54,61,1);
                    z-index: -1;
                }
                .l{
                    width: 190px;
                    padding-left: 24px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    
                    h3,p{
                        margin-block: 8px;
                    }
                    h3{
                        font-size:18px;
                        font-family:PingFangSC-Medium;
                        font-weight:500;
                        color:rgba(255,255,255,1);
                        line-height:25px;
                    }
                    p{
                        font-size:12px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:17px;
                    }
                }
                .r{
                    flex: 1;
                    height: 100%;
                    background:url(~@/assets/imgs/mine/img2.png) no-repeat right top;
                    background-size: contain;
                    font-size:24px;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height:33px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    img{
                        position: absolute;
                        top: 46px;
                        left: 43px;
                        width: 54px;
                    }
                }
                .on{
                    
                    background:url(~@/assets/imgs/mine/img1.png) no-repeat right top;
                    background-size: contain;
                }
            }
        }
    }
    .bottom{
        height: 70px;
        background: #2C2F36;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:18px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:25px;

    }
}
</style>
