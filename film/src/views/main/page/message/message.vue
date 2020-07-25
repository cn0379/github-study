<template>
    <div class="messageList">
        <BaseLayer>
             <template v-slot:header>
                 <back>
                    消息中心
                    <template v-slot:img-right>
                        <span></span>
                    </template>
                </back>
            </template>
            <template v-slot:default>
               <div class="top">
                   <ul>
                       <li v-for="(item , index) in listTop" :key="index">
                           <div class="left" :class="item.className">
                                <img :src="item.imgs" alt="">
                           </div>
                           
                           <div class="cen">
                               <h3>{{ item.title }}</h3>
                               <p>{{ item.info }}</p>
                           </div>
                           <span>{{ item.time }}</span>
                       </li>
                   </ul>
               </div>
               <div class="bot">
                   <h4>
                       全部私信
                   </h4>
                   <ul>
                       
                        <router-link :to="item.link" tag="li"  v-for="(item , index) in message" :key="index">
                            <img :src="item.imgs" alt="">
                            <div class="right">
                                <div>
                                    <p>{{ item.name }}</p>
                                    <span>{{ item.time }}</span>
                                </div>
                                <div class="b">
                                    <p>{{ item.info }}</p>
                                    <em>{{ item.num }}</em>
                                </div>
                            </div>
                        </router-link>
                   </ul>
               </div>
            </template>
        </BaseLayer>
    </div>
</template>
<script>
import back from "@/components/TopBackBar.vue";
import BaseLayer from "@/components/BaseLayer";
import img1 from "@/assets/imgs/mine/message/notice.png";
import img2 from "@/assets/imgs/mine/message/zan.png";
import img3 from "@/assets/imgs/mine/message/pl.png";
import img4 from "@/assets/imgs/mine/message/img1.png";
import img5 from "@/assets/imgs/mine/message/img2.png";
import img6 from "@/assets/imgs/mine/message/img3.png";
import img7 from "@/assets/imgs/mine/message/img4.png";
import img8 from "@/assets/imgs/mine/message/img5.png";
export default {
    components: {
        back,
        BaseLayer
    },
    data () {
        return {
            listTop:[
                {
                    imgs:img1,
                    title:"系统通知",
                    info:"哈皮巴斯得！祝你生日快乐！",
                    time:"1个月前",
                    className:"yellow"
                },
                {
                    imgs:img2,
                    title:"赞",
                    info:"一个赞都不给我！",
                    time:"1个月前",
                    className:"orange"
                },
                {
                    imgs:img3,
                    title:"评论",
                    info:"暂时还没有收到评论",
                    time:"1个月前",
                    className:"purple"
                }
            ],
            message:[
                {
                    imgs:img4,
                    name:"Zeng Wen",
                    time:"1个月前",
                    info:"暂时还没有收到评论",
                    num:"1",
                    link:"/main/messageList"
                },
                {
                    imgs:img5,
                    name:"Chikelu Obasea",
                    time:"1个月前",
                    info:"暂时还没有收到评论",
                    num:"1",
                    link:"/main/messageList"
                },
                {
                    imgs:img6,
                    name:"Kimmy McIlmorie",
                    time:"1个月前",
                    info:"暂时还没有收到评论",
                    num:"1",
                    link:"/main/messageList"
                },
                {
                    imgs:img7,
                    name:"Xu Jianhong",
                    time:"1个月前",
                    info:"暂时还没有收到评论",
                    num:"3",
                    link:"/main/messageList"
                },
                {
                    imgs:img8,
                    name:"Kung Jiyeon",
                    time:"1个月前",
                    info:"暂时还没有收到评论",
                    num:"5",
                    link:"/main/messageList"
                },
            ]
        }
    },
    mounted () {
    },
    activated(){
    }
}
</script>
<style lang="scss">
.messageList .base-layer-main .scroller-wrapper{
    height:calc(100% - 44px);
    padding-top: 44px;
}
.messageList .base-layer-main .scroller-wrapper{
    //height:calc(100% - 79px);
    //padding-top: 44px;
}
.messageList .base-layer-main .scroller-wrapper .content{
    //padding-top: 0;
}
</style>

<style lang="scss" scoped>
@import "@/assets/style/common/common.scss";
.messageList{
    height: 100%;
    .top{
        ul{
            width: $baseCenterWidth;
            margin: 0 auto;
            padding-top: 30px;
            li{
                display: flex;
                align-items: center;
                margin-bottom: 30px;
                text-align: left;
                .left{
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 15px;
                    border-radius: 100%;

                }
                .yellow{
                    background: rgba(249,195,74,1);
                }
                .orange{
                    background: rgba(239,136,51,1);
                }
                .purple{
                    background: rgba(101,72,169,1);
                }
                .cen{
                    flex: 1;
                    font-size:16px;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height:22px;
                    margin-bottom: 1px;
                    p{
                        font-size:12px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:17px;
                        opacity: .6;
                    }
                }
                span{
                    font-size:12px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:17px;
                }
                img{
                    width: 20px;
                }
            }
        }
    }
    .bot{
        h4{
            font-size:16px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:16px;
            text-align: left;
            width: $baseCenterWidth;
            margin: 0 auto;
            padding-bottom: 20px;
        }
        ul{
             width: $baseCenterWidth;
            margin: 0 auto;
            li{
                display: flex;
                align-items: center;
                margin-bottom: 15px;
                img{
                    width: 44px;
                    height: 44px;
                    margin-right: 13px;
                }
                .right{
                    flex: 1;
                    >div{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 1px;
                        p{
                            font-size:14px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(249,195,74,1);
                            line-height:20px;
                        }
                        span{
                            font-size:12px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            line-height:17px;
                            opacity: 0.6;
                        }
                    }
                    .b{
                        font-size:12px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:17px;
                        p{
                            opacity: 0.6;
                            font-size:12px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            line-height:17px;
                        }
                        em{
                            width: 14px;
                            height: 14px;
                            border-radius: 100%;
                            background-color: rgba(249,195,74,1);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                }
            }
        }
    }
}
</style>

