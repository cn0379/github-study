<template>
    <div class="tickets">
        <BaseLayer>
            <template v-slot:header>
                <back>
                我的影票
                <template v-slot:img-right>
                    <span></span>
                </template>
                </back>
            </template>
            <template v-slot:default>
                <div class="box">
                    <div class="top">
                        <ul>
                            <li>后来的我们</li>
                            <li>今天 5-8 12:00-13:56 （英语3D)</li>
                            <li>耀莱成龙影城（建业店）</li>
                            <li>1号激光厅 7排12座 7排13座</li>
                        </ul>
                        <img :src="img1" alt="">
                    </div>
                    <div class="cen">
                        <ul>
                            <li>取票码</li>
                            <li>284856992589858F</li>
                            <li>33元</li>
                        </ul>
                        <dl>
                            <dt>
                                二维码
                            </dt>
                            <dd>
                                2张电影票
                            </dd>
                        </dl>
                    </div>
                    <div class="bot">
                        <ul>
                            <li>
                                <p>
                                    耀莱成龙影城（建业店）
                                </p>
                                <p>
                                    1.3km
                                </p>
                            </li>
                            <li>
                                <p>
                                    地址：云龙区万达广场3层
                                </p>
                                <img :src="img2" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
            </template>
        </BaseLayer>
    </div>
</template>
<script>
import back from "@/components/TopBackBar.vue";
import BaseLayer from "@/components/BaseLayer";
import img1 from "@/assets/imgs/mine/tickets1.png";
import img2 from "@/assets/imgs/mine/tickets2.png";
import img3 from "@/assets/imgs/mine/tickets3.png";
export default {
    components: {
        back,
        BaseLayer
    },
    data () {
        return {
            img1,
            img2,
            img3
        }
    }
}
</script>
<style lang="scss">
.tickets .base-layer-main .scroller-wrapper .content{
    bottom: 0;
}
</style>

<style lang="scss" scoped>
@import "@/assets/style/common/common.scss";
    .tickets{
        height: 100%;
        .box{
            height: 519px;
            width: $baseCenterWidth;
            margin: 50px auto 0;
            background: url(~@/assets/imgs/mine/tickets3.png) no-repeat center;
            background-size: cover;
            .top{
                margin: 0 31px 0 33px;
                padding-bottom: 37px;
                padding-top: 33px;
                display: flex;
                align-items: center;
                text-align: left;
                border-bottom: 2px dotted #D5D5D5;
                justify-content: space-between;
                li{
                    font-size:12px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(58,58,58,1);
                    line-height:17px;
                    margin-bottom: 8px;
                }
                li:first-child{
                    font-size:18px;
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    color:rgba(58,58,58,1);
                    line-height:25px;
                }
                img{
                    width: 78px;
                }
            }
            .cen{
                 border-bottom: 2px dotted #D5D5D5;
                 margin: 0 11px;
                ul{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin: 25px 31px 0 33px;
                    li{
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(58,58,58,1);
                        line-height:20px;
                    }
                    li:nth-child(2){
                        width:162px;
                        height:21px;
                        background:rgba(255,255,255,0.5);
                        border-radius:3px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border:1px solid rgba(151,151,151,0.39);
                    }
                }
                dl{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 12px;
                    dt{
                        width:144px;
                        height:144px;
                        background: darkturquoise;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        
                    }
                    dd{
                        font-size:10px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(58,58,58,1);
                        line-height:14px;
                        opacity: 0.6;
                        padding-top: 18px;
                        padding-bottom: 9px;
                    }
                }
            }
            .bot{
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(58,58,58,1);
                line-height:20px;
                margin: 0 31px 0 33px;
                padding-top: 12px;
                li,p{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                img{
                    height: 18px;
                }
            }
        }
    }
</style>


