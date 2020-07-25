<template>
  <div class="userInfos">
    <BaseLayer>
        <template v-slot:header>
             <div class="top">
                <div class="goBack"  @click="goBack">
                <v-icon
                    style="height:30px;color:rgba(255,255,255,0.6);"
                    name="angle-left"
                   
                ></v-icon>
                </div>
            </div>
        </template>
     
      <div class="userInfo">
          <div class="userIcon">
              <img :src="user" alt="">
          </div>
          <dl>
              <dt>
                  yujia1130 
                  <div class="member">
                      <img :src="member" alt="">
                      LV1
                  </div>
              </dt>
              <dd>
                  同学有点懒，还没有写签名
              </dd>
          </dl>
          <ul>
              <li>
                  <span>想看</span>
                  <span>12</span>
              </li>
              <li>
                  <span>看过</span>
                  <span>5</span>
              </li>
          </ul>
      </div>
      <div class="movieList">
          <h2>
              看过电影
          </h2>
          <ul>
              <li v-for="(item , index) in movieList" :key="index">
                  <div class="t">
                      <div class="l">
                          <img v-for="ele in item.iconList" :src="ele.imgs" :key="ele.id" alt="">
                      </div>
                      <div class="l">
                          {{ item.score }}分 , {{ item.evaluate }}
                      </div>
                  </div>
                  <div class="b">
                      <img :src="item.img" alt="">
                      <div class="r">
                          <h3>{{ item.movieName }}</h3>
                          <p>{{ item.movieType }}</p>
                          <p>{{ item.movieDuration }}</p>
                          <p>{{ item.purchaseTime }}</p>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
    </BaseLayer>
  </div>
</template>
<script>
import mockjs from "mockjs";
import back from "@/components/TopBackBar.vue";
import BaseLayer from "@/components/BaseLayer";
import member from "@/assets/imgs/mine/member.png";
import user from "@/assets/imgs/mine/user.png";
import movie1 from "@/assets/imgs/mine/movie1.png";
import movie2 from "@/assets/imgs/mine/movie2.png";
import movie3 from "@/assets/imgs/mine/movie3.png";
import movie4 from "@/assets/imgs/mine/movie4.png";
import starOn from "@/assets/imgs/mine/starOn.png";
import star from "@/assets/imgs/mine/star.png";
import star1 from "@/assets/imgs/mine/star1.png";
export default {
  components: {
    back,
    BaseLayer
  },
  data(){
      return {
          member,
          user,
          starOn,
          star,
          star1,
          movieList:[
              {
                  id:mockjs.Random.guid(),
                  img:movie1,
                  score:9,
                  evaluate:"很好",
                  movieName:"后来的我们",
                  movieType:"剧情",
                  movieDuration:"中国/105分钟",
                  purchaseTime :"购票时间 2017-8-4",
                  iconList:[
                      {
                          id:mockjs.Random.guid(),
                          imgs:starOn
                      },
                       {
                           id:mockjs.Random.guid(),
                          imgs:starOn
                      },
                       {
                           id:mockjs.Random.guid(),
                          imgs:starOn
                      },
                       {
                           id:mockjs.Random.guid(),
                          imgs:starOn
                      },
                       {
                           id:mockjs.Random.guid(),
                          imgs:star1
                      },
                  ]
              },
              {
                  id:mockjs.Random.guid(),
                  img:movie2,
                  score:8,
                  evaluate:"一般",
                  movieName:"帕丁顿熊",
                  movieType:"动画/奇幻",
                  movieDuration:"美国/105分钟",
                  purchaseTime :"购票时间 2017-8-4",
                  iconList:[
                      {
                          id:mockjs.Random.guid(),
                          imgs:starOn
                      },
                       {
                           id:mockjs.Random.guid(),
                          imgs:starOn
                      },
                       {
                           id:mockjs.Random.guid(),
                          imgs:starOn
                      },
                       {
                           id:mockjs.Random.guid(),
                          imgs:starOn
                      },
                       {
                           id:mockjs.Random.guid(),
                          imgs:star
                      },
                  ]
              },
              {
                  id:mockjs.Random.guid(),
                  img:movie2,
                  score:8,
                  evaluate:"一般",
                  movieName:"大鱼海棠",
                  movieType:"动画/奇幻",
                  movieDuration:"中国/105分钟",
                  purchaseTime :"购票时间 2017-8-4",
                  iconList:[
                      {
                          id:mockjs.Random.guid(),
                          imgs:starOn
                      },
                       {
                           id:mockjs.Random.guid(),
                          imgs:starOn
                      },
                       {
                           id:mockjs.Random.guid(),
                          imgs:starOn
                      },
                       {
                           id:mockjs.Random.guid(),
                          imgs:starOn
                      },
                       {
                           id:mockjs.Random.guid(),
                          imgs:star
                      },
                  ]
              }
          ]
      }
  },
  methods: {
      goBack(){
          this.$router.go(-1);
      }
  },
  mounted(){
      console.log(this.movieList)
  }
};
</script>
<style lang="scss">

.userInfos .base-layer-main .scroller-wrapper{
    margin-top: -190px;
    height: calc(100% - 44px);
}
.userInfos .base-layer-main .scroller-wrapper .content{
    padding-top: 0;
}

</style>

<style lang="scss" scoped>
@import "@/assets/style/common/common.scss";
.userInfos {
  height: 100%;
}
.top {
  padding: 18px 20px 0 20px;
  background: linear-gradient(
    150deg,
    rgba(242, 91, 134, 1) 0%,
    rgba(241, 172, 94, 1) 100%
  );
  height: 232px;

  border-bottom-right-radius: 23px;
  border-bottom-left-radius: 23px;
  .goBack{
      display: flex;
      align-items:flex-start;
      justify-content: flex-start;
  }
}
.userInfo{
    position: relative;
    width: $baseCenterWidth;
    margin: 0 auto 0;
    height: 147px;
    background:rgba(51,54,61,1);
    position: relative;
    padding-top: 47px;
    border-radius: 16px;
    margin-top: 40px;
    .userIcon{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -40px;
        left: 0;
        right: 0;
        margin: auto;
        img{
            width: 73px;
            display: block;
            height: 73px;
        }
    }
    dl{
        dt{
            font-size:18px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:25px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 10px;
            .member{
                width:50px;
                height:18px;
                border-radius:12px;
                border:1px solid rgba(251,195,73,1);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 10px;
                font-size:10px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(251,195,73,1);
                    line-height:14px;
                img{
                    width: 12px;
                }
            }
        }
        dd{
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:20px;
            text-align: center;
            opacity: 0.6;
        }
    }
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 23px;
        li{
            width:64px;
            height:37px;
            display: flex;
            padding: 0 30px 0 40px;
            overflow: hidden;
            align-items: center;
            justify-content: space-between;
            border-radius:6px;
            border:1px solid ;
            border-image:linear-gradient(139deg, rgba(242,96,132,1), rgba(241,159,100,1)) 1 1;
        }
        li:first-child{
            margin-right: 12px;
        }
    }
}
.movieList{
    // width: $baseCenterWidth;
    // margin: 0 auto;
    padding: $basePadding;
    background: $baseBgColor;
    padding-bottom: 100px;
    h2{
        font-size:18px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:25px;
        text-align: left;
        padding-top: 33px;
        padding-bottom: 22px;
    }
    ul{
        li{
           
            .t{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                font-size:12px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(251,195,74,1);
                line-height:17px;
                padding-top: 12px;
                padding-bottom: 10px;
                img{
                    width: 11px;
                    margin-right: 5px;
                }
            }
            .b{
                display: flex;
                align-items: center;
                background: rgba(51,54,61,1);
                
                img{
                    widows: 94px;
                }
                .r{
                    flex: 1;
                    padding-left: 27px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: flex-start;
                    text-align: left;
                    h3,p{
                        flex: 1;
                        width: 100%;
                    }
                    h3{
                        font-size:16px;
                        font-family:PingFangSC-Medium;
                        font-weight:500;
                        color:rgba(255,255,255,1);
                        line-height:22px;
                        padding-bottom: 16px;
                    }
                    p{
                        font-size:12px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:17px;
                        padding-bottom: 10px;
                        opacity: 0.5;
                    }
                }
            }
        }
    }
}
</style>

