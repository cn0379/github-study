<template>
	<div class="movie-main">
		<BaseLayer>
			<template v-slot:header>
				<div class="top-bar">
					<router-link tag="div" :to="{name:'cityList'}" class="city-area">
						<span class="city-text">{{city}}</span>
						<img class="icon icon-arr-down" :src="require('@/assets/imgs/home/arr-down.png')" alt>
					</router-link>
					<div class="center fx">
						<div class="fc" :class="{act: nowPlay}" v-on:click="nowPlay = true">正在热映</div>
						<div class="fc" :class="{act: !nowPlay}" v-on:click="nowPlay = false">即将上映</div>
					</div>
					<div class="date-area fc">
						<img class="icon" :src="require('@/assets/imgs/movie/search-icon.png')" alt>
					</div>
				</div>
			</template>
			<template v-slot:default>
				<!-- 正在热映 -->
				<ul class="m-content fd-c" v-show="nowPlay" v-if="movieLs.length !=0">
				
					<li class="fj-b movie-list" v-for="(m,i) in movieLs" :key="i">
						<router-link :to="{name: 'movieDetail',params:{
							id:m.mId
						}}">
							<div class="poster"><img :src="m.large" alt></div>
						</router-link>
						<div class="information" >
							<p class="title">{{m.title}}</p>
							<p class="intro rate" v-if="m.rating_average">萤火虫评分 <span>{{m.rating_average}}</span></p>
							<p class="intro want" v-if="m.want"><span>{{m.want + "万"}}</span>人想看</p>
							<p class="info one-line" v-if="m.director">导演:{{m.director.join()}}</p>
							<p class="info one-line" v-if="m.scriptwriter">主演:{{m.scriptwriter.join()}}</p>
							<div class="describe fx">
								<div class="today fc" v-if="m.thot">今日最热</div>
								<div class="week fc" v-if="m.whot">一周最热</div>
								<div class="optimal fc" v-if="m.perfect">口碑最佳</div>
							</div>
						</div>
						<div class="btn fc" :class="{will: !m.year}">{{ m.year | btnName }}</div>	
					</li>
					
				</ul>
				<!-- 即将上映 -->
				<div class="m-content" v-if="willMovieLs.length !=0" v-show="!nowPlay">
					<!-- 预告 -->
					<p class="will-title">热门预告片</p>
					<div class="trailer">
						<swiper class="trailer-swiper" :options="trailerOptions" ref="trailer">
							<swiper-slide v-for="(t,i) in willMovieLs" :key="i">
								<div>
									<img :src="t.large" alt>
									<p class="t-title one-line">{{t.title}}</p>
									<p class="t-time">{{t.year}}</p>
								</div>
							</swiper-slide>
						</swiper>
					</div>
					<!-- 日期排片 -->
					<p class="will-title" >即将上映</p>
					<div class="plan">
						<div class="date-wrap" ref="dateWrap">
							<ul class="date-list fx" ref="dateTab">
								<li class="date-item fc">2月2日</li>
								<li class="date-item fc act">2月3日</li>
								<li class="date-item fc">2月4日</li>
								<li class="date-item fc">2月5日</li>
								<li class="date-item fc">2月6日</li>
							</ul>
						</div>
						<ul class="fd-c" v-if="willMovieLs.length != 0">
							<li class="fj-b movie-list" v-for="(m,i) in willMovieLs" :key="i">
								<div class="poster"><img :src="m.large" alt></div>
								<div class="information">
									<p class="title">{{m.title}}</p>
									<p class="intro rate" v-if="m.rate">萤火虫评分 <span>{{m.rating_average}}</span></p>
									<p class="intro want" v-if="m.want"><span>{{m.want + "万"}}</span>人想看</p>
									<p class="info one-line" v-if="m.director">导演:{{m.director.join()}}</p>
									<p class="info one-line" v-if="m.scriptwriter">主演:{{m.scriptwriter.join()}}</p>
									<div class="describe fx">
										<div class="today fc" v-if="m.thot">今日最热</div>
										<div class="week fc" v-if="m.whot">一周最热</div>
										<div class="optimal fc" v-if="m.perfect">口碑最佳</div>
									</div>
								</div>
								<div class="btn fc" :class="{will: !m.status}">{{m.status?"购票":"预售"}}</div>
							</li>
						</ul>
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
	import { coming_soon , in_theaters } from "@/api/movie/all.js"
	export default {
		name: 'Movie',
		components: {
			swiper,
			swiperSlide,
			BaseLayer
		},
		filters: {
			btnName(val){
				if(val < new Date().getFullYear()) return "购票"
				return "预售"
			}
		},
		data() {
			return {
				city: "郑州",
				nowPlay: true,
				movieLs: [{
						img: require("@/assets/imgs/home/m1.jpg"),
						title: "傲慢与偏见",
						intro: "影火虫评分 9.1",
						director: ["赞恩.阿尔.拉菲亚"],
						starr: ["赞恩.阿尔.拉菲亚"],
						status: 1, // 1 购票, 0 预售,
						thot: true,
						whot: true,
						rate: 9.1
					},
					{
						img: require("@/assets/imgs/home/m1.jpg"),
						title: "傲慢与偏见",
						intro: "影火虫评分 9.1",
						director: ["赞恩.阿尔.拉菲亚"],
						starr: ["赞恩.阿尔.拉菲亚"],
						status: 1, // 1 购票, 0 预售
						want: 16.4
					},
					{
						img: require("@/assets/imgs/home/m1.jpg"),
						title: "傲慢与偏见",
						intro: "影火虫评分 9.1",
						director: ["赞恩.阿尔.拉菲亚"],
						starr: ["赞恩.阿尔.拉菲亚"],
						status: 0, // 1 购票, 0 预售
						perfect: true,
						want: 15.3
					},
					{
						img: require("@/assets/imgs/home/m1.jpg"),
						title: "傲慢与偏见",
						intro: "影火虫评分 9.1",
						director: ["赞恩.阿尔.拉菲亚"],
						starr: ["赞恩.阿尔.拉菲亚"],
						status: 0, // 1 购票, 0 预售
						want: 16.4
					},
					{
						img: require("@/assets/imgs/home/m1.jpg"),
						title: "傲慢与偏见",
						intro: "影火虫评分 9.1",
						director: ["赞恩.阿尔.拉菲亚"],
						starr: ["赞恩.阿尔.拉菲亚"],
						status: 1, // 1 购票, 0 预售
						want: 16.4
					}
				],
				trailerLs:[],
				willMovieLs: [],
				trailerOptions: {
					slidesPerView: 1.1,
				}
			}
		},
		created() {
			// console.log(BScroll);
			//   this.$nextTick(() => {
			//     this.personScroll();
			//   });
			this.in_theaters1();
			this.coming_soon1();
		},
		methods: {
			in_theaters1(){
				in_theaters("in_theaters")
				.then(res =>{
					this.movieLs = res.data.data.list;
				})
			},
			coming_soon1(){
				coming_soon("coming_soon")
				.then(res =>{
					this.willMovieLs = res.data.data.list;
				})
			},
			personScroll() {
				// 默认有六个li子元素，每个子元素的宽度为120px
				let width = 5 * 98;
				console.log(this.$refs.dateTab)
				// this.$refs.dateTab.style.width = width + "px";
				// this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
				this.$nextTick(() => {
					if (!this.scroll) {
						this.scroll = new BScroll(this.$refs.dateWrap, {
							startX: 0,
							click: true,
							scrollX: true,
							// 忽略竖直方向的滚动
							scrollY: false,
							eventPassthrough: "vertical"
						});
					} else {
						this.scroll.refresh();
					}
				});
			}
		}
	}
</script>

<style lang='scss' scoped>
	@import "../../assets/style/common/common.scss";
	@import "../../assets/style/flexable.css";

	.movie-main {
		height: 100%;
		overflow: hidden;

		.top-bar {
			position: fixed;
			display: flex;
			width: 100%;
			left: 0;
			top: 0;
			justify-content: space-between;
			height: $baseTopHeight;
			align-items: center;
			box-sizing: border-box;
			padding: $basePadding;
			color: $baseFontColor;
			background: $baseBgLightColor;
			;
			z-index: 1999;

			.city-area {
				display: flex;
				align-items: center;
				height: 36px;
				padding: 0 4px;
				font-size: 14px;

				.icon.icon-arr-down {
					width: 12px;
					height: 6px;
					margin: auto 6px;
				}
			}

			.city-area {
				display: flex;
				align-items: center;
				height: 36px;
				padding: 0 4px;

				.icon.icon-arr-down {
					width: 12px;
					height: 6px;
					margin: auto 4px;
				}
			}

			.center {
				width: 164px;
				height: 25px;
				border: 1px solid transparent;
				background-image: linear-gradient(314deg, rgba(241, 158, 101, 1), rgba(242, 105, 127, 1));
				border-radius: 6px;

				div {
					width: 50%;
					height: 100%;
					font-size: 14px;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					background-color: $baseBgColor;
					color: rgba(150, 147, 147, 1);

					&:first-child {
						border-radius: 6px 0 0 6px;
					}

					&:last-child {
						border-radius: 0 6px 6px 0;
					}

					&.act {
						color: rgba(245, 245, 245, 1);
						background: linear-gradient(150deg, rgba(242, 91, 134, 1) 0%, rgba(241, 172, 94, 1) 100%);
					}
				}
			}

			.date-area {
				width: 36px;
				height: 36px;

				.icon {
					width: 17px;
					height: 17px;
				}
			}
		}

		::v-deep.scroller-wrapper {
			.m-content {
				padding-bottom: 100px;

				li.movie-list {
					position: relative;
					width: $baseCenterWidth;
					height: 146px;
					margin-top: 25px;
					background-color: $baseBgLightColor;
					box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.04);
					border-radius: 6px;

					.poster {
						position: relative;

						img {
							width: 105px;
							height: 156px;
							transform: translateY(-10px);
							border-radius: 6px;
						}

						&::after {
							position: absolute;
							top: 50%;
							left: 50%;
							width: 38px;
							height: 38px;
							margin-top: -19px;
							margin-left: -19px;
							content: "";
							background: url("../../assets/imgs/movie/play.png") no-repeat center;
						}
					}

					.information {
						width: 222px;
						height: 100%;
						box-sizing: border-box;
						padding-top: 15px;

						p {
							text-align: left;
						}

						.title {
							font-size: 16px;
							font-family: PingFangSC-Medium;
							font-weight: 500;
							color: rgba(255, 255, 255, 1);
							line-height: 16px;
						}

						.intro {
							margin-top: 10px;
							margin-bottom: 10px;
							font-size: 14px;
							font-family: PingFangSC-Medium;
							font-weight: 500;
							line-height: 21px;

							span {
								font-size: 15px;
								color: #FBC34A;
							}

							.rate {
								span {
									margin-left: 2px;
								}
							}

							.want {
								span {
									margin-right: 2px;
								}
							}
						}

						.info {
							font-size: 12px;
							font-family: PingFangSC-Regular;
							font-weight: 400;
							line-height: 16px;
						}

						.describe {
							margin-top: 10px;
							font-size: 12px;

							div {
								width: 48px;
								height: 17px;
								border-radius: 3px;
								margin-left: 6px;

								&:first-child {
									margin-left: 0;
								}

								&.today {
									color: #FBC34A;
									border: 1px solid rgba(251, 195, 74, 1)
								}

								&.week {
									color: #F26C7E;
									border: 1px solid rgba(242, 108, 126, 1);
								}

								&.optimal {
									color: #3C4CAC;
									border: 1px solid rgba(60, 76, 172, 1);
								}
							}
						}
					}

					.btn {
						position: absolute;
						top: 66px;
						right: 14px;
						width: 54px;
						height: 25px;
						background: linear-gradient(150deg, rgba(242, 91, 134, 1) 0%, rgba(241, 172, 94, 1) 100%);
						box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
						border-radius: 6px;

						&.will {
							background: linear-gradient(150deg, rgba(98, 75, 163, 1) 0%, rgba(203, 68, 152, 1) 100%);
							box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
						}
					}
				}

				// 即将上映的电影页的样式
				.will-title {
					margin-top: 30px;
					font-size: 18px;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: $baseFontColor;
					text-align: left;
					padding-left: 20px;
					line-height: 18px;
				}

				.trailer {
					margin-top: 20px;
					height: 185px;

					.trailer-swiper {
						height: 100%;

						.swiper-slide {
							position: relative;
							height: 100%;

							div {
								margin-left: 20px;
								width: 318px;

								img {
									width: 100%;
									height: 100%;
								}

								.t-title {
									position: absolute;
									bottom: 11px;
									left: 9px;
									width: 85%;
									font-size: 14px;
								}

								.t-time {
									position: absolute;
									bottom: 14px;
									right: 5px;
									font-size: 12px;
								}
							}
						}
					}
				}

				.plan {
					.date-wrap {
						margin-top: 11px;

						.date-list {
							.date-item {
								width: 86px;
								height: 30px;
								margin-left: 16px;
								font-size: 14px;
								font-family: PingFangSC-Regular;
								font-weight: 400;
								color: rgba(150, 147, 147, 1);
								border-radius: 15px;
								border: 2px solid rgba(151, 151, 151, 1);

								&.act {
									color: $baseFontColor;
									background: linear-gradient(150deg, rgba(242, 91, 134, 1) 0%, rgba(241, 172, 94, 1) 100%);
									box-shadow: 0px 0px 10px 0px rgba(242, 109, 125, 0.4);
									border-color: transparent;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
