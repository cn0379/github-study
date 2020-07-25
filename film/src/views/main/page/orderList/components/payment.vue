<template>
    <div>
        <ul class="list">
            <router-link tag="li" to="/main/tickets" v-for="(item , index) in orderList" :key="index">
                <div class="t">
                    <span>
                        {{ item.area }} <v-icon
                    style="margin-left:10px;height:30px;color:rgba(255,255,255,0.6);"
                    name="angle-right"></v-icon>
                    </span>
                    <span>
                        {{ item.state }}
                    </span>
                </div>
                <div class="c">
                    <div class="l">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="r">
                        <h2>
                            <span>{{ item.name }}</span>{{  item.num }}
                        </h2>
                        <p>
                           {{ item.times }} 
                        </p>
                        <p>
                           {{ item.areas }} 
                        </p>
                    </div>
                </div>
                <div class="b">
                   总价： {{ item.money }}
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
import movie1 from "@/assets/imgs/mine/movie1.png";
import movie2 from "@/assets/imgs/mine/movie2.png";
import movie3 from "@/assets/imgs/mine/movie3.png";
import movie4 from "@/assets/imgs/mine/movie4.png";
export default {
    data () {
        return {
            orderList:[
               
                {
                    area:"万达国际影城",
                    state:"待付款",
                    img:movie2,
                    name:"帕丁顿熊",
                    num:"1张",
                    times:"05月16日 17:00",
                    areas:"五号厅 5排14座 5排15座",
                    money:"70元"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/common/common.scss";

.list{
    width: $baseCenterWidth;
    margin: 0 auto;
    padding: 14px 0;
    li{
        background:rgba(51,54,61,1);
        border-radius:6px;
        padding: 14px;
        margin-bottom: 15px;
        .t{
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            span{
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:14px;
                display: flex;
                align-items: center;
            }
        }
        .c{
            display: flex;
            align-items: center;
            text-align: left;
            padding-top: 8px;
            img{
                width: 70px;
            }
            .r{
                margin-left: 14px;
                h2{
                    font-size:14px;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height:14px;
                    display: flex;
                    align-items: center;
                    padding-bottom: 12px;
                    span{
                        width: 140px;
                        display: block;
                    }
                }
                p{
                    font-size:12px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:14px;
                    opacity: 0.4;
                    padding-bottom: 6px;
                }
            }
        }
        .b{
            font-size:12px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:12px;
            opacity: 0.4;
            text-align: left;
            padding-top: 10px;
        }
    }
}
</style>
