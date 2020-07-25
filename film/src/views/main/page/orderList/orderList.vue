<template>
    <div class="orderList">
        <BaseLayer>
             <template v-slot:header>
                 <back>
                    我的订单
                    <template v-slot:img-right>
                        <button class="edit">
                            编辑
                        </button>
                    </template>
                </back>
                 <div class="tabTop">
                    <ul>
                        <li @click="nowIndex = index" :class="nowIndex == index ? 'on' : ''" v-for="(item , index) in tabTop" :key="index">
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
            </template>
            <template v-slot:default>
               
                <div class="tabBot">
                    <component :is="currentView"></component>
                </div>
            </template>
        </BaseLayer>
    </div>
</template>
<script>
import back from "@/components/TopBackBar.vue";
import BaseLayer from "@/components/BaseLayer";
import all from "./components/all.vue";
import evaluate from "./components/evaluate.vue";
import payment from "./components/payment.vue";
import refund from "./components/refund.vue";
export default {
    computed: {
        currentView(){
            return this.tabList[this.nowIndex];
        }
    },
    components: {
        back,
        BaseLayer,
        all,
        evaluate,
        payment,
        refund
    },
    data () {
        return {
            nowIndex:0,
            tabList:[all,payment,evaluate,refund],
            tabTop:[
                {
                    name:"全部"
                },
                {
                    name:"待付款"
                },
                {
                    name:"待评价"
                },
                {
                    name:"退款"
                },
            ]
        }
    },
    mounted () {
        console.log(this.$router.currentRoute.params.id);
        this.nowIndex = this.$router.currentRoute.params.id;
    },
    activated(){
        this.nowIndex = this.$router.currentRoute.params.id;
    }
}
</script>
<style lang="scss">
.orderList .base-layer-main .scroller-wrapper{
    height:calc(100% - 81px);
}
.orderList .base-layer-main .scroller-wrapper .content{
    padding-top: 0;
}
</style>

<style lang="scss" scoped>
@import "@/assets/style/common/common.scss";
.orderList{
    height: 100%;
    .edit{
        width:42px;
        height:20px;
        border-radius:2px;
        border:1px solid rgba(249,195,74,1);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        padding: 0;
        background: transparent;
        color: rgba(249,195,74,1);
    }
    .tabTop{
        width: $baseCenterWidth;
        margin: 44px auto 0;
        padding-bottom: 5px;
        ul{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 20px;
            li{
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:14px;
                padding: 8px 0;
                transition: .3s ease-in;
                border-bottom: 3px solid transparent;
            }
            .on{
                border-bottom-color: #F9C34A;
            }
        }
    }
}
</style>

