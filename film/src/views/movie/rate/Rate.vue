<template>
	<div class="movie-rate">
		<BaseLayer>
			<template v-slot:header>
				<TopBackBar>
				  傲慢与偏见
				 <template v-slot:img-right>
				  <span></span>
				</template>
				</TopBackBar>
			</template>
			<template v-slot:default>
				<div class="movie-name">《傲慢与偏见》</div>
				<div class="rate-number fc">
					<img :src="star" alt="">
					<img :src="star" alt="">
					<img :src="star" alt="">
					<img :src="star" alt="">
					<img :src="half_star" alt="">
					<p class="number">9.0<span>分</span></p>
				</div>
				<p class="how-many">28.5万人评论</p>
				<ul class="list-percent fj-c">
					<li>
						<div class="pillar fc-e"><div style="height: 56.4%"><p class="percent">56.4%</p></div></div>
						<p class="count">9-10分</p>
					</li>
					<li>
						<div class="pillar fc-e"><div style="height: 29.4%"><p class="percent">29.4%</p></div></div>
						<p class="count">9-10分</p>
					</li>
					<li>
						<div class="pillar fc-e"><div style="height: 12.3%"><p class="percent">12.3%</p></div></div>
						<p class="count">9-10分</p>
					</li>
					<li>
						<div class="pillar fc-e"><div style="height: 1.1%"><p class="percent">1.1%</p></div></div>
						<p class="count">9-10分</p>
					</li>
					<li>
						<div class="pillar fc-e"><div style="height: 0.8%"><p class="percent">0.8%</p></div></div>
						<p class="count">9-10分</p>
					</li>
				</ul>
				<p class="tips">以上数据，实时更新</p>
				<div class="line"></div>
				<div class="df-title">观众评分画像</div>
				<div class="different fc">
					<div class="man u-block fc">
						<img :src="man_img" alt="">
						<span>男性观众</span>
						<span>8.4分</span>
					</div>
					<span>VS</span>
					<div class="woman u-block fc">
						<img :src="woman_img" alt="">
						<span>女性观众</span>
						<span>8.6分</span>
					</div>
				</div>
				<ul class="compared">
					<li class="fa-c">
						<span>95后</span>
						<div class="process"><div style="width: 85%;"></div></div>
						<span>8.5分</span>
					</li>
					<li class="fa-c">
						<span>90后</span>
						<div class="process"><div style="width: 82%;"></div></div>
						<span>8.2分</span>
					</li>
					<li class="fa-c">
						<span>80后</span>
						<div class="process"><div style="width: 86%;"></div></div>
						<span>8.6分</span>
					</li>
					<li class="fa-c">
						<span>70后</span>
						<div class="process"><div style="width: 87%;"></div></div>
						<span>8.7分</span>
					</li>
				</ul>
				<p class="tips">以上数据，每30分钟更新一次</p>
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
				man_img: require("@/assets/imgs/movie/man.png"),
				woman_img: require("@/assets/imgs/movie/woman.png"),
				star: require("@/assets/imgs/movie/star_full.png"),
				half_star: require("@/assets/imgs/movie/star_half.png")
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../assets/style/common/common.scss";
	@import "../../../assets/style/flexable.css";
	.movie-rate{
		height: 100%;
		overflow: hidden;
		.movie-name{
			font-size:18px;
			color: #fff;
			margin-top: 45px;
		}
		.rate-number{
			height: 30px;
			img{
				width: 8px;
				height: 8px;
				margin-right: 4px;
			}
			p{
				font-size: 22px;
				color: $baseFontColor2;
				span{
					font-size: 14px;
				}
			}
		}
		.how-many{
			color: rgba(255,255,255,.56);
		}
		.list-percent{
			li{
				margin-right: 16px;
				&:last-child{
					margin-right: 0;
				}
				.pillar{
					width: 40px;
					height: 135px;
					div{
						position: relative;
						width: 22px;
						background:linear-gradient(180deg,rgba(241,162,99,1) 0%,rgba(242,94,132,1) 100%);
						border-radius:5px;
						.percent{
							position: absolute;
							top: -20px;
							left: -4px;
							margin-bottom: 5px;
							color: #FBC34A;
							line-height: 17px;
						}
					}
				}
				.count{
					margin-top: 10px;
				}
			}
		}
		.tips{
			margin-top: 18px;
			color: rgba(255,255,255,.34);
		}
		.line{
			width: 100%;
			height:6px;
			margin-top: 15px;
			margin-bottom: 19px;
			background:rgba(51,54,61,1);
		}
		.df-title{
			margin: 20px 0;
			font-size: 16px;
			color: #fff;
			letter-spacing: 1px;
		}
		.different{
			height: 36px;
			span{
				font-size: 16px;
				color: #fff;
			}
			.u-block{
				width: 138px;
				height: 100%;
				margin: 0 9px;
				img{
					height: 20px;
					margin-right: 10px;
				}
				span:nth-child(2){
					font-size: 14px;
					margin-right: 5px;
				}
				span:last-child{
					font-size: 12px;
					color: $baseFontColor2;
				}
			}
		}
		.compared{
			padding-left: 38px;
			li{
				height: 20px;
				font-size: 14px;
				span:first-child{
					margin-right: 10px;
				}
				.process{
					width: 160px;
					div{
						height: 12px;
						background:linear-gradient(to left,rgba(241,162,99,1) 0%,rgba(242,94,132,1) 100%);
						border-radius:5px;
					}
				}
				span:last-child{
					color: $baseFontColor2;
				}
			}
		}
	}
</style>
