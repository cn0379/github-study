<template>
	<div class="movie-common">
		<BaseLayer>
			<template v-slot:header>
				<TopBackBar>
				  
				 <template v-slot:img-right>
				  <span></span>
				</template>
				</TopBackBar>
			</template>
			<template v-slot:default>
				<div class="common-content">
					<ul class="nav fx">
						<li>简介</li>
						<li class="act">影评<span>999+</span></li>
						<li>讨论</li>
						<li>更多</li>
					</ul>
					<div class="audience fc-b">
						<span>观众热评</span>
						<span class="fc">写影评</span>
					</div>
					<ul class="movie-tags fx">
						<li>全部</li>
						<li>最新</li>
						<li class="obviously">陪伴是最长情的告白 <span>1902</span></li>
						<li class="obviously">爱狗人士必看 <span>1902</span></li>
						<li>好评 <span>5412</span></li>
						<li>差评 <span>69</span></li>
						<li>点映 <span>79</span></li>
						<li>购票 <span>5790</span></li>
						<li>影评达人 <span>13</span></li>
						<li>同城 <span>69</span></li>
					</ul>
					<p class="more-down"><img :src="arrow_down" alt=""></p>
					<ul class="person-common">
						<li v-for="(p,i) in personCommonLs" :key="i">
							<div class="user-msg fc-b">
								<div class="fj-b">
									<img :src="p.avatar" alt="">
									<div>
										<p>{{p.uname}}</p>
										<div class="stars fa-c">
											<img :src="star" alt="">
											<img :src="star" alt="">
											<img :src="star" alt="">
											<img :src="star" alt="">
											<img :src="half-star" alt="">
											{{p.rate}}
										</div>								
									</div>
								</div>
								<div class="more fx"><span></span><span></span><span></span></div>
							</div>
							<p class="common-text">{{p.commonText}}</p>
							<div class="remark fc-b">
								<span>{{p.time}}</span>
								<div class="fa-c">
									<img :src="zan" alt="">
									<span>{{p.zan}}</span>
									<img :src="msg" alt="">
									<span>{{p.msg}}</span>
								</div>
							</div>
						</li>
					</ul>
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
				arrow_down: require("@/assets/imgs/home/arr-down.png"),
				star: require("@/assets/imgs/movie/star_full.png"),
				half_star: require("@/assets/imgs/movie/star_half.png"),
				msg: require("@/assets/imgs/movie/common.png"),
				zan: require("@/assets/imgs/movie/zan.png"),
				personCommonLs: [
					{
						avatar: require("@/assets/imgs/movie/avatar.png"),
						uname: "yujia2754",
						rate: "9.0",
						commonText: "2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人 选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的 爱情电影《小岛之恋》上映…",
						time: "05-17 09:34",
						zan: "56",
						msg: "1"
					},
					{
						avatar: require("@/assets/imgs/movie/avatar.png"),
						uname: "yujia2754",
						rate: "9.0",
						commonText: "2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人 选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的 爱情电影《小岛之恋》上映…",
						time: "05-17 09:34",
						zan: "56",
						msg: "1"
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../assets/style/common/common.scss";
	@import "../../../assets/style/flexable.css";
	.movie-common{
		height: 100%;
		overflow: hidden;
		.common-content{
			width: $baseCenterWidth;
			margin: 0 auto;
			.nav{
				li{
					position: relative;
					margin-right: 27px;
					font-size: 14px;
					color: rgba(255,255,255,.51);
					span{
						font-size: 8px;
						color: rgba(255,255,255,.51);
						// transform: translateY(-15px);
						position: relative;
						top: -4px;
						left: 4px;
					}
					&.act{
						color: #fff;
						&::after{
							position: absolute;
							bottom: -6px;
							left: 0;
							width: 29px;
							height: 3px;
							content: "";
							background:linear-gradient(135deg,rgba(241,100,129,1) 0%,rgba(241,144,108,1) 100%);
						}
					}
				}
			}
			.audience{
				margin-top: 26px;
				margin-bottom: 20px;
				font-size: 18px;
				color: #fff;
				span:last-child{
					width:54px;
					height:25px;
					font-size: 12px;
					background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
					box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
					border-radius:13px;
				}
			}
			.movie-tags{
				flex-wrap: wrap;
				li{
					margin-right: 15px;
					margin-bottom: 15px;
					padding: 3px 10px;
					color: #fff;
					background:rgba(51,54,61,1);
					border-radius:10px;
					span{
						font-size: 10px;
						color: rgba(255,255,255,.49);
					}
					&.obviously{
						background-color: $baseBgColor;
						border-radius:10px 0px 10px 10px;
						border:1px solid rgba(242,123,119,0.28);
					}
				}
			}
		}
		.more-down{
			margin-bottom: 38px;
		}
		.person-common{
			li{
				margin-bottom: 26px;
				.user-msg{
					img{
						width: 50px;
						height: 50px;
						margin-right: 14px;
					}
					p{
						margin-top: 6px;
						margin-bottom: 10px;
						font-size: 14px;
						color: #fff;
					}
					.stars{
						font-size: 10px;
						color: $baseFontColor2;
						img{
							width: 10px;
							height: 10px;
							margin-right: 4px;
							&:last-child{
								margin-right: 10px;
							}
						}
					}
					.more{
						span{
							width:3px;
							height:3px;
							margin-right: 4px;
							border-radius: 50%;
							background:rgba(255,255,255,.78);
							&:last-child{
								margin-right: 0;
							}
						}
					}
				}
				.common-text{
					margin-top: 8px;
					color:rgba(255,255,255,1);
					text-align: left;
					line-height:18px;
					overflow : hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
				}
				.remark{
					margin-top: 11px;
					color: rgba(255,255,255,.5);
					div{
						img{
							height: 18px;
							margin-left: 11px;
						}
						span{
							margin-left: 6px;
						}
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
