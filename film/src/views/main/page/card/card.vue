<template>
  <div class="cardList">
    <BaseLayer class="top">
      <template v-slot:header>
        <back>
          影城卡
          <template v-slot:img-right>
            <span></span>
          </template>
        </back>
      </template>
    </BaseLayer>
    <div class="cen">
        <BaseLayer>
            <ul class="cardList">
                <li v-for="(item , index) in list" :key="index">
                    <h2>
                        <span>{{ item.name }}</span>
                        <em>{{ item.money }}</em>
                    </h2>
                    <p>
                        {{ item.info }}
                    </p>
                    <h3>
                        {{ item.time }}
                    </h3>
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
export default {
  components: {
    back,
    BaseLayer
  },
  data () {
      return {
          list:[
              {
                  name:"耀莱成龙影城影城卡",
                  money:"10元起",
                  info:"开卡可享购票超值会员",
                  img:"",
                  time:"有效期6个月"
              },
              {
                  name:"耀莱成龙影城影城卡",
                  money:"10元起",
                  info:"开卡可享购票超值会员",
                  img:"",
                  time:"有效期6个月"
              },
              {
                  name:"耀莱成龙影城影城卡",
                  money:"10元起",
                  info:"开卡可享购票超值会员",
                  img:"",
                  time:"有效期6个月"
              },
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
        .cardList{
            width: $baseCenterWidth;
            margin: 0 auto;
            padding: 1px;
            li{
                padding-top: 20px;
                background:linear-gradient(136deg,rgba(242,95,133,1) 0%,rgba(242,166,98,1) 100%);
                border-radius:6px;
                margin-top: 20px;
                h2,p,h3{
                    padding: 0 20px;
                }
                h2{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    span{
                        font-size:14px;
                        font-family:PingFangSC-Medium;
                        font-weight:500;
                        color:rgba(255,255,255,1);
                        line-height:20px;
                    }
                    em{
                        font-size:14px;
                        font-family:PingFangSC-Medium;
                        font-weight:500;
                        color:rgba(255,255,255,1);
                        line-height:20px;
                    }
                }
                p{
                    padding: 36px 0 43px;
                    font-size:14px;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height:20px;
                    text-align: center;
                    opacity: 0.7;
                }
                h3{
                    background:linear-gradient(136deg,rgba(242,95,133,1) 0%,rgba(242,166,98,1) 100%);
                    border-radius:6px;
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:20px;
                    padding: 7px 22px;
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
