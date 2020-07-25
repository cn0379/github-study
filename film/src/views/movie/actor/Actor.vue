<template>
	<div class="movie-actor">
		<BaseLayer>
			<template v-slot:header>
				<TopBackBar></TopBackBar>
			</template>
			<template v-slot:default>
				<div class="actor-content">
					<img :src="avatar" alt="" class="avatar">
					<p class="actor-name">凯拉·奈特莉</p>
					<p class="actor-en">Satomi lshihara</p>
					<div class="focusme fc">关注</div>
					<p class="how-much">138585人关注</p>
					<p class="section-name">简介</p>
					
					<p class="introduce">
						2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人 选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的爱 情电影《小岛之恋》上映；4月5日，参演的喜剧电影《我的爷爷 》上映，在片中饰演五代家的独生女五代珠子，她则凭借该片获 得了第27届日本…
						<span>查看更多 ></span>
					</p>
					
					<p class="section-name">个人简介</p>
					<ul class="person-works">
						<li class="fx" v-for="(m,i) in personalMovieLs" :key="i">
							<img :src="m.img" alt="">
							<div>
								<p>{{m.name}}</p>
								<p>评分 <span>{{m.rate}}</span></p>
								<p>演员 {{m.actor}}</p>
								<p>上映时间 {{m.time}}</p>
							</div>
						</li>
					</ul>
					
					<p class="section-name">相册</p>
					<div class="fj-b">
						<div>
							<img :src="actor_1" alt="">
							<div class="fj-b" style="margin-top: 6px;">
								<img :src="actor_2" alt="">
								<img :src="actor_3" alt="">
							</div>
						</div>
						<img :src="actor_4" alt="">
					</div>
				</div>
			</template>
		</BaseLayer>
	</div>
</template>

<script>
	import "swiper/dist/css/swiper.css";
	import {swiper,	swiperSlide	} from "vue-awesome-swiper";
	import BaseLayer from '@/components/BaseLayer';
	import Bscroll from 'better-scroll';
	import TopBackBar from "@/components/TopBackBar";
	export default {
		name: "MovieRate",
		components: {
			swiper,
			swiperSlide,
			BaseLayer,
			TopBackBar
		},
		data(){
			return {
				avatar: require("@/assets/imgs/movie/avatar.png"),
				actor_1: require("@/assets/imgs/movie/actor_1.png"),
				actor_2: require("@/assets/imgs/movie/actor_2.png"),
				actor_3: require("@/assets/imgs/movie/actor_3.png"),
				actor_4: require("@/assets/imgs/movie/actor_4.png"),
				personalMovieLs: [
					{
						img: require("@/assets/imgs/home/m1.jpg"),
						name: "忍者之国",
						rate: "9.0",
						actor: "大野智",
						time: "2017年7月1日"
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../assets/style/common/common.scss";
	@import "../../../assets/style/flexable.css";
	.movie-actor{
		height: 100%;
		overflow: hidden;
		.actor-content{
			width: $baseCenterWidth;
			margin: 0 auto;
			.avatar{
				display: block;
				margin: 30px auto 12px;
				width: 85px;
				height: 85px;
			}
			.actor-name{
				margin-bottom: 7px;
				font-size: 20px;
			}
			.focusme{
				width:48px;
				height:24px;
				margin: 10px auto;
				font-size: 14px;
				color: #fff;
				background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
				box-shadow:0px 4px 16px 0px rgba(0,0,0,0.5);
				border-radius:11px;
			}
			.section-name{
				margin-top: 27px;
				margin-bottom: 10px;
				font-size: 16px;
				text-align: left;
			}
			.introduce{
				color: rgba(255,255,255,.38);
				text-align: left;
				line-height:18px;
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 5;
				-webkit-box-orient: vertical;
				span{
					font-size: 14px;
					color: $baseFontColor2;
				}
			}
			.person-works{
				li{
					img{
						width:100px;
						height:140px;
						border-radius:6px;
					}
					div{
						margin-left: 16px;
						p{
							margin-bottom: 16px;
							text-align: left;
							font-size: 14px;
							&:first-child{
								margin-top: 17px;
								font-size: 18px;
								color: #fff;
							}
							&:nth-child(2){
								span{
									color: $baseFontColor2;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
