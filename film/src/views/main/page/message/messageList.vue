<template>
    <div class="messageList">
        <div class="top">
             <img
                @click="$router.go(-1)"
                class="icon icon-goback l"
                :src="require('@/assets/imgs/icons/arr-left.png')"
                alt
                >
                <div class="c">
                    <img :src="icons" alt="">
                    Zeng Wen
                </div>
                <div class="r">
                    <img :src="icons1" alt="">
                </div>
        </div>
        <BaseLayer>
            <template v-slot:default>
               <ul class="messageList">
                   <li :class="ele.className" v-for="(ele , index) in messageList" :key="index">
                       <p>{{ ele.info }}</p>
                   </li>
               </ul>
            </template>
        </BaseLayer>
    </div>
</template>
<script>
import back from "@/components/TopBackBar.vue";
import BaseLayer from "@/components/BaseLayer";
import icons from "@/assets/imgs/mine/message/img1.png";
import icons1 from "@/assets/imgs/mine/message/more.png";
export default {
    components: {
        back,
        BaseLayer
    },
    data () {
        return {
            icons,
            icons1,
            messageList:[
                {
                    info:"你好",
                    className:""
                },
                {
                    info:"你好",
                    className:"on"
                },
                {
                    info:"2002年，15岁的石原里美参加 了HORIPRO公司第27回艺人新 人选拔，获得最佳新人“完…",
                    className:""
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
        display: flex;
        align-items: center;
        width: $baseCenterWidth;
        margin: 0 auto;
        height: 44px;

        img{
            display: block;
        }
        .l{
            width: 22px;
    height: 22px;
        }
        .c{
            display: flex;
            align-items: center;
            font-size:14px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:20px;
            flex: 1;
            img{
                width: 32px;
                margin: 0 8px 0 20px;
            }
        }
        .r{
            img{
                height: 3px;
            }
        }
    }
    .messageList{
        display: flex;
        flex-direction: column;
        width: $baseCenterWidth;
        margin: 0 auto;
        li{
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            p{
                display: inline-block;
                padding: 15px 14px;
                //min-width: 46px;
                background: rgba(51,54,61,1);
                max-width: 187px;
                border-radius: 6px;
                text-align: left;
            }
        }
        .on{
            justify-content: flex-end;
            p{
                background: #F9C34A;
            }
            
        }
    }
}
</style>

