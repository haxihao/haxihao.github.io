import { defineSiteConfig } from "valaxy"

export default defineSiteConfig({
    lang: "zh-CN",
    url: "https://haxihao.github.io/",
    title: "哈希豪的小站",
    subtitle: "和有趣的人，做有趣的事",
    description: "哈希豪的什么什么···",
    author: {
        name: "哈希豪",
        email: "1214110654@qq.com",
        avatar: "/haxihao.jpg",
        status: {
            emoji: "佛",
            message: "佛系···佛系学习···佛系生活···"
        }
    },
    lastUpdated: true,
    favicon: "/favicon.ico",
    social: [
        {
            name: "RSS",
            link: "/atom.xml",
            icon: "i-ri-rss-line",
            color: "orange",
        },
        {
            name: "微信公众号-【哈希豪】",
            icon: "i-ri-wechat-2-line",
            color: "#1AAD19"
        }
    ],
    frontmatter: {
        time_warning:false
    },
    license: {
        enabled: false,
    },
    sponsor: {
        enable: true,
        title: "这小子可以，赏他个鸡腿！",
        description: "这小子可以，赏他个鸡腿！",
        methods: [
            {
                name: "微信支付",
                url: "/weixin.png",
                color: "#2DC100",
                icon: "i-ri-wechat-pay-line",
            },
            {
                name: "支付宝",
                url: "/zhifubao.png",
                color: "#00A3EE",
                icon: "i-ri-alipay-line",
            }, {
                name: "QQ 支付",
                url: "/qq.png",
                color: "#12B7F5",
                icon: "i-ri-qq-line",
            },
        ],
    },
    statistics: {
        enable: true
    }
})