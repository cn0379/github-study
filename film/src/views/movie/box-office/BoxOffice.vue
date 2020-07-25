<template>
	<div class="box-office">
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
				<div class="box-office fx">
					<div class="today">
						<p>2</p>
						<p>今日票房排行</p>
					</div>
					<div class="first-week">
						<p>暂无</p>
						<p>首周票房排行 (万)</p>
					</div>
					<div class="want">
						<p>2660</p>
						<p>今日票房排行</p>
					</div>
				</div>
				<div class="line"></div>
				<div class="all c-block">
					<p class="title">总票房</p>
					<p class="area fj-b">
						<span>地区</span>
						<span>每周末票房</span>
						<span>总票房</span>
					</p>
					<p class="country fj-b">
						<span>中国</span>
						<span>暂无数据</span>
						<span>501万元</span>
					</p>
				</div>
				<div class="line"></div>
				<div class="c-block">
					<p class="title">
						<span>日票房明细</span>
						<span class="right">单位:万元</span>
					</p>
					<div class="date">
						<div class="specific fj-b">
							<span>日期</span>
							<p class="fj-b msg-title">
								<span>当日票房</span>
								<span>票房占比</span>
								<span>排片占比</span>
								<span>场次人次</span>
							</p>
						</div>
					</div>
					<div class="specific fj-b">
						<div class="time act">
							<p>2018-05-18</p>
							<p>周六上映首日</p>
						</div>
						<p class="fj-b">
							<span>538.6</span>
							<span>8.3%</span>
							<span>21.3%</span>
							<span>3</span>
						</p>
					</div>
					<div class="specific fj-b">
						<div class="time">
							<p>2018-05-17</p>
							<p>周五零点场</p>
						</div>
						<p class="fj-b">
							<span>-&emsp;-</span>
							<span>-&emsp;-</span>
							<span>0.0%</span>
							<span>0</span>
						</p>
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
	
	export default{
		name: "BoxOffice",
		components: {
			swiper,
			swiperSlide,
			BaseLayer,
			TopBackBar
		},
		data(){
			return {
				right_back: require("@/assets/imgs/icons/arr-left.png")
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../assets/style/common/common.scss";
	@import "../../../assets/style/flexable.css";
	.box-office{
		height: 100%;
		overflow: hidden;
		.box-office{
			margin-top: 25px;
			div{
				width: 33.33%;
				&.first-week{
					p:first-child{
						color: #fff;
					}
				}
				p:first-child{
					font-size:18px;
					color: $baseFontColor2;
					margin-bottom: 5px;
				}
				p:last-child{
					font-size:12px;
					color:rgba(255,255,255,.45);
				}
			}
		}
		.line{
			width: 100%;
			height:6px;
			margin-top: 9px;
			margin-bottom: 19px;
			background:rgba(51,54,61,1);
		}
		.title{
			font-size:16px;
			line-height: 18px;
			color: #fff;
			text-align: left;
			.right{
				float: right;
				font-size: 12px;
				line-height: 18px;
				color: rgba(255,255,255,.45);
			}
		}
		.c-block{
			width: $baseCenterWidth;
			margin: 0 auto;
		}
		.all{
			font-size: 12px;
			.area{
				margin-top: 28px;
				color: rgba(255,255,255,.45);
			}
			.country{
				margin-top: 22px;
				margin-bottom: 18px;
				color: rgba(255,255,255,.83);
			}
		}
		.date{
			margin-top: 30px;
			color: rgba(255,255,255,.45);
		}
		.specific{
			margin-top: 20px;
			.time{
				font-size: 12px;
				color:rgba(222,222,222,1);
				text-align: left;
				line-height: 16px;
				&.act{
					p:first-child{
						color: #C01212;
					}
					p:last-child{
						color: #FBC34A;
					}
				}
			}
			p{
				span{
					width: 48px;
					margin-left: 15px;
				}
			}
		}
	}
</style>
