import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'

Vue.use(Router)

export default new Router({

//   mode: 'history',
  base: process.env.BASE_URL,
 
  routes: [{
            path: '/home',
            name: 'home',
            meta: {
                footShow: true,
                keepAlive:true
            },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Home
        },
        {
            path: '/home/cityList',
            name: 'cityList',
            component: () => import( /* webpackChunkName: "cityList" */ '@/views/home/cityList/CityList.vue'),
        },
        {
            path: '/movie',
            name: 'movie',
            meta: {
                footShow: true,
                keepAlive:true
            },
            component: () => import( /* webpackChunkName: "movie" */ '@/views/movie/Movie.vue'),
        },
        {
            path: '/ticket',
            name: 'ticket',
            meta: {
                footShow: true,
                keepAlive:true
            },
            component: () => import( /* webpackChunkName: "ticket" */ '@/views/ticket/Ticket.vue'),
        },
        {
            path: '/cinema',
            name: 'cinema',
            meta: {
                footShow: true,
                keepAlive:true
            },
            component: () => import( /* webpackChunkName: "cinema" */ '@/views/cinema/Cinema.vue'),
        },
        // 影院详情
        {
            path: '/cinema/address',
            name: 'address',
            meta: {
                footShow: false
            },
            component: () => import( /* webpackChunkName: "cinema" */ '@/views/cinema/CinemaMap')
        },
        {
            path: '/cinema/cinemaDetail',
            name: 'cinemaDetail',
            meta: {
                footShow: false
            },
            component: () => import( /* webpackChunkName: "cinema" */ '@/views/cinema/CinemaDetail')
        },
        {
            path: '/cinema/movie',
            name: 'movie',
            meta: {
                footShow: false
            },
            component: () => import( /* webpackChunkName: "cinema" */ '@/views/cinema/CinemaSeat')
        },
        {
          // 电影详情
          path: "/movie/:id",
          name: 'movieDetail',
          component: () => import("@/views/movie/detail/MovieDetail.vue"),
          meta: { footShow:false}
        },
        {
          // 票房详情
          path: "/movie/boxOffice",
          name: "boxOffice",
          component: () => import("@/views/movie/box-office/BoxOffice.vue"),
          
        },
        {
          // 电影评分
          path: "/movie/rate",
          name: "rate",
          component: () => import("@/views/movie/rate/Rate.vue"),
          
        },
        {
          // 电影评论
          path: "/movie/common",
          name: "common",
          component: () => import("@/views/movie/common/Common.vue"),
          
        },
        {
          // 演员详情
          path: "/movie/actor",
          name: "actor",
          component: () => import("@/views/movie/actor/Actor.vue"),
          
        },
        {
            path: '/cinema/order',
            name: 'order',
            meta: {
                footShow: false
            },
            component: () => import( /* webpackChunkName: "cinema" */ '@/views/cinema/CinemaOrder')
        },
        {
            path: '/main',
            name: 'main',
            meta: {
                footShow: true,
                keepAlive:true
            },
            component: () => import( /* webpackChunkName: "main" */ '@/views/main/Main.vue')
        },
        // 用户设置
        {
            path: '/main/settings',
            name: 'settings',
            component: resolve => require(["@/views/main/page/userSettings/userSettings.vue"], resolve),
            meta: {
                footShow: false
            },
        },
        {
            path: '/main/userInfo',
            name: 'userInfo',
            component: resolve => require(["@/views/main/page/userInfo/userInfo.vue"], resolve),
            meta: {
                footShow: false
            },
        },
        {
          path: '/main/orderList/:id',
          name: 'orderList',
          component: resolve => require(["@/views/main/page/orderList/orderList.vue"], resolve),
          meta: {
              footShow: false
          },
        },
        {
            path: '/main/message',
            name: 'message',
            component: resolve => require(["@/views/main/page/message/message.vue"], resolve),
            meta: {
                footShow: false
            },
        },
        {
            path: '/main/messageList',
            name: 'messageList',
            component: resolve => require(["@/views/main/page/message/messageList.vue"], resolve),
            meta: {
                footShow: false
            },
        },
        {
          path: '/main/tickets',
          name: 'tickets',
          component: resolve => require(["@/views/main/page/tickets/tickets.vue"], resolve),
          meta: {
              footShow: false
          },
        },
        {
          path: '/main/card',
          name: 'card',
          component: resolve => require(["@/views/main/page/card/card.vue"], resolve),
          meta: {
              footShow: false
          },
        },
        {
          path: '/main/coupon',
          name: 'coupon',
          component: resolve => require(["@/views/main/page/coupon/coupon.vue"], resolve),
          meta: {
              footShow: false
          },
        },
        {
            path: '*',
            redirect: '/home'
        }



    ]
})