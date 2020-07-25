export default {
    data(){
        return {
            bg:require('@/assets/imgs/mine/bg.png'),
            evaluate:require('@/assets/imgs/mine/evaluate.png'),
            hb:require('@/assets/imgs/mine/hb.png'),
            mony:require('@/assets/imgs/mine/mony.png'),
            pay:require('@/assets/imgs/mine/pay.png'),
            refund:require('@/assets/imgs/mine/refund.png'),
            settings:require('@/assets/imgs/mine/settings.png'),
            user:require('@/assets/imgs/mine/user.png'),
            message:require('@/assets/imgs/mine/message.png'),
            orderList:[
                {
                    name:"未消费",
                    imgs:require('@/assets/imgs/mine/mony.png'),
                    urls:0
                },
                {
                    name:"待付款",
                    imgs:require('@/assets/imgs/mine/pay.png'),
                    urls:1
                },
                {
                    name:"待评价",
                    imgs:require('@/assets/imgs/mine/evaluate.png'),
                    urls:2
                },
                {
                    name:"退款",
                    imgs:require('@/assets/imgs/mine/refund.png'),
                    urls:3
                },
            ],
            menuList:[
                {
                    name:"影城会员卡",
                    link : "/main/card"
                },
                {
                    name:"优惠券",
                    link : "/main/coupon"
                },
                {
                    name:"我的收藏",
                    link : ""
                },
                {
                    name:"帮助与反馈",
                    link : ""
                },
            ]
        }
    }
}