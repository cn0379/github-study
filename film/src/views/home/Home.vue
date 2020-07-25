<template>
	<div class="home-main">
		<BaseLayer ref="boxs">
			<template v-slot:header>
				<div class="top-bar">
					<router-link tag="div" :to="{ name: 'cityList' }" class="city-area">
						<span class="city-text">{{ currentCity.name ? currentCity.name : "定位" }}</span>
						<img class="icon icon-arr-down" :src="require('@/assets/imgs/home/arr-down.png')" alt />
					</router-link>
					<div class="search-eara">
						<input type="text" placeholder="搜影片、影院、影人" />
					</div>
					<div @click="goDate" class="date-area">
						<img class="icon" :src="require('@/assets/imgs/home/date.png')" alt />
					</div>
				</div>
			</template>
			<template v-slot:default>
				<div class="section banner-section">
					<swiper class="banner-swiper" :options="bannerSwiperOption" ref="banner">
						<swiper-slide v-for="m in bannerImgs" :key="m.img">
							<img class="img" :src="m.img" alt />
						</swiper-slide>
					</swiper>
					<div class="swiper-pagination"></div>
				</div>
				<div class="content-main">
					<!-- 正在热映 -->
					<div class="section-inther">
						<CommonTitle title="热映影片"></CommonTitle>
						<swiper class="section-swiper" :options="intherMovieOptions" ref="banner">
							<!-- slides -->
							<swiper-slide v-for="m in intherMovieImgs" :key="m.title">
								<router-link tag="div" :to="{ name: 'movieDetail',params:{
									id:m.mId
								} }">
									<img class="img" :src="m.large" alt />
									<p class="title over">{{ m.title }}</p>
								</router-link>
								<router-link to tag="button" class="btn">购票</router-link>
							</swiper-slide>
						</swiper>
					</div>

					<!-- 即将上映 -->
					<div class="section-soon">
						<CommonTitle title="即将上映"></CommonTitle>
						<swiper class="section-swiper" :options="soonMovieOptions" ref="banner">
							<!-- slides -->
							<swiper-slide v-for="m in soonMovieImgs" :key="m.title">
								<router-link tag="div" :to="{ name: 'movieDetail' ,params:{
									id:m.mId
								}}">
									<img class="img" :src="m.large" alt />
									<p class="title over">{{ m.title }}</p>
									<p class="date">
										<span style="display:block;" v-for="(item,index) in m.show_date" :key="index">
											{{ item }}
										</span>
										
									</p>
								</router-link>
							</swiper-slide>
						</swiper>
					</div>

					<!-- 精选预告 -->
					<div class="section-jing">
						<CommonTitle title="精选预告" moreText="更多"></CommonTitle>
						<swiper class="section-swiper" :options="jingMovieOptions" ref="banner">
							<!-- slides -->
							<swiper-slide v-for="(m,index) in jingMovieImgs" :key="m.mId">
								<div :id="'myVideo_' + index" @click="aa">

								</div>
								<!-- <video 
								controls
    								
									v-if="m.movie" 
									:poster="m.movie.large" 
									:id="'myVideo_' + index" 
									class="video-js"
									playsinline="true" webkit-playsinline="true" x5-playsinline="true"
								>
									<source :src="m.video[0]" type="video/mp4" />
								</video> -->
								<p class="desc">{{ m.title }}</p>
							</swiper-slide>
						</swiper>
					</div>
				</div>
			</template>
		</BaseLayer>
	</div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import TopBackBar from "@/components/TopBackBar";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import CommonTitle from "./components/CommonTitle";
import BaseLayer from "@/components/BaseLayer";
import movieApi from "@/api/movie/movie";
import Player from 'xgplayer';
import { in_theaters , coming_soon , selectPreview } from "@/api/movie/all.js"
var thats;
export default {
	name: "Home",
	components: {
		swiper,
		swiperSlide,
		TopBackBar,
		CommonTitle,
		BaseLayer,
	},
	data() {
		return {
			// currentCity:{},
			bannerImgs: [
				{
					img: require("@/assets/imgs/home/banner1.jpg"),
				},
				{
					img: require("@/assets/imgs/home/banner2.jpg"),
				},
				{
					img: require("@/assets/imgs/home/banner3.jpg"),
				},
			],
			intherMovieImgs: [
			],
			//即将上映
			soonMovieImgs: [
				
			],
			jingMovieImgs: [
				
			],
			bannerSwiperOption: {
				slidesPerView: 1.2,
				spaceBetween: 10,
				centeredSlides: true,
				autoplay: true,
				loop: true,
				pagination: {
					el: ".swiper-pagination",
					bulletClass: "my-bullet",
				},
			},
			intherMovieOptions: {
				slidesPerView: 3.5,
				spaceBetween: 14,
			},
			soonMovieOptions: {
				slidesPerView: 2.6,
				spaceBetween: 14,
			},
			jingMovieOptions: {
				slidesPerView: 1.2,
				spaceBetween: 40,
				on: {
					slideChangeTransitionStart: function(){
						thats["player"+this.previousIndex].pause();
					},
				},
			},
		};
	},
	created() {
		thats = this;
		this.in_theaters1();
		this.coming_soon1();
		this.selectPreview1();
		// movieApi.getMovieList("top250").then((res) => {
		// 	console.log(res);
		// });
		// this.currentCity = Object.assign({},this.$store.state.home.localtion) ;
	},
	computed: {
		currentCity() {
			return this.$store.state.home.localtion || {};
		},
	},
	mounted() {
		
		// var _this = this;
		// this.$nextTick(()=>{
		// 	_this.initVideos()
		// })
	},
	methods: {
		aa(){
			console.log(1231)
		},
		initVideos(){
			
			this.jingMovieImgs.forEach((ele,index) =>{
				this['player'+ index] = new Player({
					id:"myVideo_"+index,
					url: ele.video[0],
					fluid: true,
					poster:ele.movie.large,
					controls: false,
				});
			})	
		},
		in_theaters1(){
			in_theaters("in_theaters")
			.then(res =>{
				this.soonMovieImgs = res.data.data.list;
			})
		},
		coming_soon1(){
			coming_soon("coming_soon")
			.then(res =>{
				this.intherMovieImgs = res.data.data.list;
			})
		},
		selectPreview1(){
			selectPreview("selectPreview")
			.then(res =>{
				this.jingMovieImgs = res.data.data;
				var _this = this;
				this.$nextTick(()=>{
					_this.initVideos();
				})
			})
		},
		initVideo() {
			// console.log(this.jingMovieImgs.length)
			// for (var i = 0; i < this.jingMovieImgs.length; i++) {
			// 	let myPlayer = this.$video("myVideo_" + i, {
			// 		//确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
			// 		controls: true,
			// 		//自动播放属性,muted:静音播放
			// 		// autoplay: "muted",
			// 		//建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
			// 		preload: "auto",
			// 		//设置视频播放器的显示宽度（以像素为单位）
			// 		// width: "295px",
			// 		//设置视频播放器的显示高度（以像素为单位）
			// 		// height: "160px"
			// 	});
			// }
		},
		goDate() {},
	},
	directives: {},
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/common/common.scss";

.home-main {
	overflow: hidden;
	height: 100%;
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
		background: $baseBgColor;
		z-index: 1999;
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

		.search-eara {
			flex-grow: 1;
			height: 36px;
			box-sizing: border-box;
			border-radius: 18px;
			background: $baseBgLightColor url("../../assets/imgs/home/search.png") no-repeat 10px center;
			background-size: 17px 17px;
			input {
				border: none;
				outline: none;
				background-color: transparent;
				font-size: 14px;
				color: #fff;
				width: 192px;
				height: 100%;
			}
		}
		.date-area {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 36px;
			height: 36px;
			opacity: 0.7;
			overflow: hidden;
			.icon {
				width: 22px;
				height: 22px;
			}
		}
	}
	::v-deep.scroller-wrapper {
		// height:  calc(100% - 123px);
		.content {
			padding-bottom: 140px;
		}
		.banner-section {
			margin-top: 10px;
			.banner-swiper {
				width: 100%;
				height: 145px;
				.swiper-slide {
					transition: 300ms;
				}
				.swiper-slide:not(.swiper-slide-active) {
					transform: scale(0.9);
				}

				.img {
					width: 100%;
					height: 100%;
					border-radius: 6px;
				}
			}
			// 分页
			.swiper-pagination {
				position: static;
				margin: 8px auto;
				display: flex;
				height: 4px;
				justify-content: center;
				.my-bullet {
					display: block;
					width: 4px;
					height: 4px;
					background: #b2b2b2;
					border-radius: 4px;
					margin: 0 7px;
					transition: all ease 0.2s;
					&.swiper-pagination-bullet-active {
						width: 14px;
						height: 3px;
						background: #fff;
					}
				}
			}
		}

		.content-main {
			width: $baseCenterWidth;
			margin: 0 auto;
			.section-inther {
				.section-swiper {
					text-align: left;
					.swiper-slide {
						.img {
							width: 100%;
							height: 122px;
							border-radius: 6px;
						}
					}
					.title {
						font-size: 12px;
						color: $baseFontColor;
						margin: 8px auto;
						text-align: left;
					}
					.btn {
						width: 50px;
						height: 22px;
						background: linear-gradient(150deg, rgba(242, 91, 134, 1) 0%, rgba(241, 172, 94, 1) 100%);
						box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
						border-radius: 11px;
						color: $baseFontColor;
					}
				}
			}
			.section-soon {
				margin-top: 20px;
				text-align: left;
				.swiper-slide {
					.img {
						width: 120px;
						height: 162px;
						border-radius: 6px;
					}
					.title {
						font-size: 14px;
						line-height: 26px;
					}
					.date {
						font-size: 12px;
						opacity: 0.5;
						line-height: 18px;
					}
				}
			}

			.section-jing {
				margin-top: 20px;
				text-align: left;
				.swiper-slide {
					border-radius: 6px;

					.video-js {
						// width: 295px;
						width: 100%;
						height: 160px;
						border-radius: 6px;
					}
					.desc {
						margin-top: 10px;
						font-size: 12px;
						line-height: 18px;
					}
				}
			}
		}
	}
}
</style>
