<template>
    <div class="settings">
      <BaseLayer>
      <template v-slot:header>
        <back>
            设置
            <template v-slot:img-right>
            <span></span>
          </template>
        </back>
      </template>
      <template v-slot:default>
          <div class="box">

         
          <div class="top">
              <dl>
                  <dt>
                      <img :src="userIcon" alt="">
                  </dt>
                  <dd>
                      yujia1130
                  </dd>
              </dl>
          </div>
          <div class="center">
              <div class="t">
                  <span>
                      账号与安全
                  </span>
                  <span class="r">
                      手机绑定与更换<v-icon style="height:30px;color:rgba(255,255,255,0.6);margin-left:9px;" name="angle-right"></v-icon>
                  </span>
              </div>
              <div class="c">
                  <ul>
                      <li v-for="(item , index) in settings" :key="index">
                          <span>{{ item.name }}</span>
                          <div>
                              <switchs :isOn.sync = "item.isOn"></switchs>
                          </div>
                      </li>
                  </ul>
              </div>
              <div class="t b">
                  <span>
                      关于
                  </span>
                  <span class="r">
                      <v-icon style="height:30px;color:rgba(255,255,255,0.6);margin-left:9px;" name="angle-right"></v-icon>
                  </span>
              </div>
          </div>
          <div class="logout">
              退出登陆
          </div>
           </div>
      </template>
      </BaseLayer>  
    </div>
</template>
<script>
import back from "@/components/TopBackBar.vue";
import BaseLayer from '@/components/BaseLayer';
import userIcon from "@/assets/imgs/mine/user.png";
import switchs from "@/components/switch.vue";
export default {
    components: {
        back,
        BaseLayer,
        switchs
    },
    data () {
        return {
            userIcon,
            settings:[
                {
                    name:"被赞提醒",
                    isOn:false
                },{
                    name:"影评/话题提醒",
                    isOn:false
                },{
                    name:"系统通知",
                    isOn:true
                },{
                    name:"系统通知",
                    isOn:false
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/style/common/common.scss";
.settings{
    height: 100%;
}
.box{
    padding-bottom: 50px;
}
.top{
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    padding-bottom: 48px;
    dt{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            height: 73px;
        }
    }
    dd{
        padding-top: 12px;
        font-size:16px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:22px;
        text-align: center;
    }
}
.center{

    .t{
        padding: 0 $basePadding;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 6px solid rgba(51,54,61,1);
        .r{
            display: flex;
            align-items: center;
            opacity: 0.6;
        }
    }
    .t{
        border-bottom: none;
        padding-top: 18px ;
        padding-bottom: 18px ;
    }
    .c{
        ul{
            padding-top: 18px ;
             border-bottom: 6px solid rgba(51,54,61,1);
            li{
                padding: 0 $basePadding 18px ;
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
    }
}
.logout{
    width: $baseCenterWidth;
    height: 40px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:6px;
    background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
}
</style>

