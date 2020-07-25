<template>
    <div class="main-main">
        <BaseLayer>
        <!-- 用户数据 -->
        <template v-slot:header>
            <div class="top" > 
                 <back>
                    
                    <template v-slot:img-right>
                        <div class="t">
                            <router-link to="/main/settings">
                                <img :src="settings" alt="">
                            </router-link>
                            <router-link to="/main/message">
                                <img :src="message" alt="">
                            </router-link>
                        </div>
                    </template>
                </back>
               
                    <!-- <router-link class="c" to="/main/userInfo">
                        <img :src="user" alt="">
                        <dl>
                            <dt>xyz112</dt>
                            <dd>v1青铜会员</dd>
                        </dl>
                        <div class="right">
                            <v-icon style="height:30px;color:rgba(255,255,255,0.6);" name="angle-right"></v-icon>
                        </div>
                    </router-link> -->
                
            </div>
        </template>
        <div class="top userIcons">
                <router-link class="c" to="/main/userInfo">
                        <img :src="user" alt="">
                        <dl>
                            <dt>xyz112</dt>
                            <dd>v1青铜会员</dd>
                        </dl>
                        <div class="right">
                            <v-icon style="height:30px;color:rgba(255,255,255,0.6);" name="angle-right"></v-icon>
                        </div>
                    </router-link>
            </div>
        <!-- 会员中心 -->
        <div class="user">
            
            <div class="box">
                <h2>
                    会员中心
                </h2>
                <div class="bg1">

                </div>
                <dl>
                    <dt>
                        会员中心
                    </dt>
                    <dd>
                        50元通兑券天天送
                    </dd>
                </dl>
                <img :src="hb" alt="">
            </div>
            
        </div>
        <!-- 用户订单 -->
        <div class="order">
            <div class="t">
                <span>
                    我的订单
                </span>
                <router-link to="/main/orderList/0" class="r">
                    全部<v-icon style="height:30px;color:rgba(255,255,255,0.6);" name="angle-right"></v-icon>
                </router-link>
            </div>
            <div class="b">
                <router-link :to="'/main/orderList/'+item.urls" v-for="(item , index) in orderList" :key="index">
                <dl >
                    <dt>
                        <img :src="item.imgs" alt="">
                    </dt>
                    <dd>
                        {{ item.name }}
                    </dd>
                </dl>
                </router-link>
            </div>
        </div>
        <!-- 其他功能 -->
        <div class="menu">
            <ul>
                <li v-for="(item , index) in menuList" :key="index">
                    <router-link :to="item.link">
                        <span>
                            {{ item.name }}
                        </span>
                        <v-icon style="height:30px;color:rgba(255,255,255,0.6);" name="angle-right"></v-icon>
                    </router-link>
                </li>
            </ul>
        </div>
        </BaseLayer>
    </div>
</template>
<script>
import BaseLayer from '@/components/BaseLayer'
import datas from "./components/data.js";
import back from "@/components/TopBackBar.vue";
export default {
    name: 'Main',
    mixins: [datas],
    components:{
        BaseLayer,
        back,
    }

}
</script>
<style lang="scss">
.main-main .base-layer-main .scroller-wrapper .content{
    padding-top: 0;
    height: auto;
}
.main-main{
    height: 100%;
    .icon-goback{
        display: none;
    }
    .top-back-bar-main{
        background: transparent!important;
    }
}
.main-main .base-layer-main .scroller-wrapper{
    //margin-top: -29px;
    top: 0;
    height: calc(100% - 119px);
}
</style>

<style scoped lang="scss">
@import "@/assets/style/common/common.scss";
// .main-main{
//     height: calc(100% - 99px);
//     overflow-y: auto;
// }
.main-main{
    height: 100%;
    background: $baseBgColor url("~@/assets/imgs/cinema/movie_bg.png")
    no-repeat top;
    //background-size: 375px 323px;
    background-size: 375px 190px;
    .icon-goback{
        display: none;
    }
}
.top{
    padding: 0 20px 0 20px;
   //background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
    //height:160px;
    height: 44px;
    border-bottom-right-radius: 23px;
    border-bottom-left-radius: 23px;
    .t{
         display: flex;
        align-items: center;
        justify-content: flex-end;
        //margin-bottom: 22px;
        img{
            height: 20px;
            margin: 0 6px;
        }
    }
    .c{
        display: flex;
        align-items: center;
        color: #fff;
        text-decoration: none;
        // justify-content: space-between;
        img{
            height: 73px;
            margin-right: 17px;
        }
        dl{
            text-align: left;
            dt{
                font-size:12px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(255,255,255,1);
                padding-bottom: 4px;
                line-height:25px;
            }
            dd{
                width:99px;
                height:23px;
                background:rgba(51,54,61,1);
                border-radius:5px;
                opacity:0.7293999999999999;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        .right{
            flex: 1;
            padding-top: 10px;
            display: flex;
            justify-content: flex-end;
        }
    }
}
.userIcons{
    padding-top: 18px;
    padding-bottom: 18px;
}
.userIcons{
    height: auto;
    background: none;
}
.user{
    width:336px;
    height:68px;
    background:rgba(51,54,61,1);
    box-shadow:0px 0px 4px 3px rgba(0,0,0,0.1);
    border-radius:17px;
    margin: 0 auto 0;
    display: flex;
    align-items: stretch;
    .box{
        display: flex;
        align-items: center;
        flex: 1;
        padding: 13px 21px 8px 36px;
    }
    .bg1{
        height: 100%;
        width: 1px;
        background: #979797;
        margin-right: 16px;
    }
    h2{
        margin-right: 11px;
        height:25px;
        font-size:18px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:25px;
    }
    dl{
        text-align: left;
        flex: 1;
        dt{
           
            height:17px;
            font-size:12px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(255,255,255,0.6);
            line-height:17px;
            margin-bottom: 8px;
        }
        dd{
            
            height:17px;
            font-size:12px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(255,255,255,0.6);
            line-height:17px;
        }
    }
    img{
        width: 32px;
    }
}
.order{
    padding: 10px 20px 30px 20px;
    background:#33363d;
    margin-top: 23px;
    a{
        text-decoration: none;
    }
    .t{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .r{
             display: flex;
            align-items: center;
            color: rgba(255,255,255,0.6);
        }
    }
    .b{
        display: flex;
        align-items: center;
        justify-content: space-around;

        img{
            width: 24px;
            height: 24px;
        }
        dt{
            padding-bottom: 13px;
            padding-top: 20px;
        }
        dd{
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(255,255,255,0.6);
            line-height:20px;
        }
    }
}
.menu{
    padding: 10px 20px;
    background:#33363d;
    margin-top: 22px;
    ul{
        li{
            display: flex;
            align-items: stretch;
            font-size:16px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(255,255,255,.6);
            line-height:22px;
            padding-bottom: 30px;
            a{
                display: flex;
                flex:1;
                align-items: center;
                justify-content: space-between;
                color:#fff;
                text-decoration: none;
            }
        }
        li:last-child{
            padding-bottom: 0;
        }
    }
}
</style>

