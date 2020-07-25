<template>
	<div class="movie-detail">
		<BaseLayer>
			<template v-slot:header></template>
			<template v-slot:default>
				<div class="detail-info">
						<p class="movie-title">{{ info.title }} &nbsp;({{info.year}})<span>{{ info.longtime }}</span></p>
					<div class="en-title">Pride & Prejudice</div>
					<div class="rate fj-b">
						<div class="fx" v-if="info.rating_average">
							<ul class="star fx">
								<li 
								v-for="(item,index) in (parseInt(info.rating_average/2))"
								:key="index"
								><img :src="star_full" alt></li>
								<li 
									v-if="info.rating_average%2 != 0"
								><img :src="star_half" alt></li>
								<!-- <li><img :src="star_half" alt></li> -->
							</ul>
							<p><span>{{ info.rating_average }}</span> /10</p>
						</div>
						<div class="opera fx">
							<img :src="common_img" alt="">
							<img :src="star_outline" alt="">
						</div>
					</div>
					<ul class="detail-nav fx">
						<li class="act">简介</li>
						<li>影评</li>
						<li>讨论</li>
						<li>更多</li>
					</ul>
					<div class="intro-text">
					{{ info.summary }}
					<span>查看更多 ></span>
					</div>
					<p class="detail-title">演职人员</p>
					<div class="actors">
					  <swiper class="actor-swiper" :options="actorSwiperOption" ref="actor">
					    <swiper-slide v-for="(actor,i) in info.players" :key="i">
					      <img :src="actor.avatar" alt>
								<p class="one-line actor-name">{{actor.name}}</p>
								<p class="one-line actor-role">{{actor.role}}</p>
					    </swiper-slide>
					  </swiper>
					</div>
					<p class="extra-msg" v-if="info.players">全部{{ info.players.length }}位演员</p>
					<p class="detail-title">视频</p>
					
					<swiper v-if="info.comments" class="video-swiper" :options="actorVideoOption" ref="actorVideo">
						<swiper-slide v-for="(v,i) in info.comments.list" :key="i">
							<div class="video-img">
								<img :src="v.avatar" alt="">
								<p class="type fc">{{v.star_title}}</p>
								<p class="time fx"><img :src="sm_play" alt=""> {{v.time}}</p>
							</div>
							<p class="two-line">{{v.content}}</p>
						</swiper-slide>
					</swiper>
				
					<p class="extra-msg" v-if="info.comments">全部{{info.comments.list.length}}个视频</p>
					<p class="detail-title">票房</p>
					<div class="box-office fx">
						<div class="today">
							<p>2</p>
							<p>今日票房</p>
						</div>
						<div class="first-week">
							<p>暂无</p>
							<p>首周票房</p>
						</div>
						<div class="want">
							<p>2660</p>
							<p>今日票房排行</p>
						</div>
					</div>
					<router-link tag="div" :to="{name: 'boxOffice'}" class="extra-msg">票房详情</router-link>
					
				</div>
				<div class="bottom-btn fc">特惠选座</div>
			</template>
		</BaseLayer>
	</div>
</template>

<script>
	import "swiper/dist/css/swiper.css";
	import {swiper,	swiperSlide	} from "vue-awesome-swiper";
	import BaseLayer from '@/components/BaseLayer';
	import Bscroll from 'better-scroll';
	import { subject } from "@/api/movie/all.js"
	export default{
		name: "MovieDetail",
		components: {
			swiper,
			swiperSlide,
			BaseLayer
		},
		created(){
			subject(`subject?mId=${this.$route.params.id}`)
			.then(res =>{
				console.log(res);
				this.info = res.data.data
			})
		},
		data(){
			return {
				info:{},
				nowPlay: false,
				star_full: require("@/assets/imgs/movie/star_full.png"),
				star_half: require("@/assets/imgs/movie/star_half.png"),
				star_outline: require("@/assets/imgs/movie/star_outline.png"),
				common_img: require("@/assets/imgs/movie/common.png"),
				sm_play: require("@/assets/imgs/movie/little-play.png"),
				actorLs: [
					{
						img: require("@/assets/imgs/movie/actor.png"),
						name: "凯拉·奈特莉",
						role: "饰珍·班内特",
					},
					{
						img: require("@/assets/imgs/movie/actor.png"),
						name: "凯拉·奈特莉",
						role: "饰珍·班内特",
					},
					{
						img: require("@/assets/imgs/movie/actor.png"),
						name: "凯拉·奈特莉",
						role: "饰珍·班内特",
					},
					{
						img: require("@/assets/imgs/movie/actor.png"),
						name: "凯拉·奈特莉",
						role: "饰珍·班内特",
					},
					{
						img: require("@/assets/imgs/movie/actor.png"),
						name: "凯拉·奈特莉",
						role: "饰珍·班内特",
					}
				],
				actorSwiperOption: {
					slidesPerView: 3.2,
					spaceBetween: 15
				},
				actorsVideoLs: [
					{
						url: require("@/assets/imgs/movie/actor.png"),
						type: '特别推荐',
						intro: '《傲慢与偏见》：百年经典的绝美呈现， 一次现实与理想的爱情碰撞',
						time: '03：34'
					},
					{
						url: require("@/assets/imgs/movie/actor.png"),
						type: '精选预告',
						intro: '《傲慢与偏见》：百年经典的绝美呈现， 一次现实与理想的爱情碰撞',
						time: '03：34'
					}
				],
				actorVideoOption: {
					slidesPerView: 1.5,
					spaceBetween: 15
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../assets/style/common/common.scss";
	@import "../../../assets/style/flexable.css";
	.movie-detail{
		height: 100%;
		overflow: hidden;
		.detail-info{
			width: $baseCenterWidth;
			margin: 0 auto;
			.movie-title{
				margin-top: 30px;
				font-size:20px;
				font-family:PingFangSC-Medium;
				font-weight:500;
				color: $baseFontColor;
				text-align: left;
				span{
					margin-left: 15px;
					font-size:12px;
					font-family:PingFangSC-Regular;
					font-weight:400;
					color:rgba(241,116,121,1);
				}
			}
			.en-title{
				font-size:14px;
				font-family:PingFangSC-Regular;
				font-weight:400;
				color:rgba(255,255,255,.56);
				margin-top: 15px;
				text-align: left;
			}
			.rate{
				margin-top: 10px;
				.star{
					li{
						margin-right: 10px;
						img{
							width: 22px;
							height: 22px;
						}
					}
				}
				p{
					padding-left: 4px;
					font-size: 12px;
					color: rgba(255,255,255,.51);
					line-height: 22px;
					span{
						font-size: 22px;
						color: $baseFontColor2;
					}
				}
				.opera{
					img{
						height: 17px;
						margin-left: 17px;
					}
				}
			}
			.detail-nav{
				margin-top: 30px;
				li{
					position: relative;
					margin-right: 29px;
					font-size:14px;
					font-weight:400;
					&.act::after{
						position: absolute;
						bottom: -6px;
						left: 0;
						width: 100%;
						height:3px;
						content: "";
						background:linear-gradient(135deg,rgba(241,100,129,1) 0%,rgba(241,144,108,1) 100%);
					}
				}
			}
			.intro-text{
				position: relative;
				margin-top: 12px;
				margin-bottom: 30px;
				font-size:12px;
				color: rgba(255,255,255,.29);
				line-height: 18px;
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 4;
				-webkit-box-orient: vertical;
				span{
					position: absolute;
					bottom: 0;
					right: 0;
					color: $baseFontColor2;
					font-size:14px;
					background-color: $baseBgColor;
				}
			}
			.detail-title{
				font-size: 18px;
				color: $baseFontColor;
				margin-bottom: 15px;
				text-align: left;
			}
			.extra-msg{
				font-size: 14px;
				color: $baseFontColor2;
				margin-top: 15px;
				margin-bottom: 30px;
			}
			.actors{
				.actor-swiper{
					.swiper-slide{
						width: 100px;
						img{
							width: 100%;
							height: 140px;
							margin-bottom: 10px;
							border-radius: 6px;
						}
						p{
							text-align: left;
						}
						.actor-name{
							font-size:14px;
							margin-bottom: 6px;
						}
						.actor-role{
							font-size:12px;
							color: rgba(255,255,255,.64)
						}
					}
				}
			}
			.video-swiper{
				.swiper-slide{
					.video-img{
						position: relative;
						width: 200px;
						height: 120px;
						img{
							width: 100%;
							height: 100%;
							border-radius: 6px;
						}
						.time{
							position: absolute;
							bottom: 10px;
							left: 10px;
							font-size: 8px;
							line-height: 10px;
							img{
								width: 10px;
								height: 10px;
								margin-right: 2px;
							}
						}
						.type{
							position: absolute;
							top: 9px;
							left: 10px;
							font-size: 8px;
							padding: 3px;
							border-radius: 2px;
							background-color: rgba(51,54,61,1);
						}
					}
					.two-line{
						margin-top: 10px;
						font-size: 12px;
						line-height: 18px;
						text-align: left;
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
				}
			}
			.box-office{
				div{
					width: 33.33%;
					p:first-child{
						font-size:18px;
						color: #fff;
						margin-bottom: 5px;
					}
					p:last-child{
						font-size:12px;
						color:rgba(255,255,255,.45);
					}
				}
			}
		}
		.bottom-btn{
			width: 100%;
			height: 44px;
			font-size: 18px;
			background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
			box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
		}
	}
</style>
