import { defineValaxyConfig } from "valaxy"
import type { UserThemeConfig } from "valaxy-theme-yun"
import { addonLive2d } from 'valaxy-addon-live2d'
import { addonMeting } from 'valaxy-addon-meting'
import { addonWaline } from 'valaxy-addon-waline'

// add icons what you will need
const safelist = [
    "i-ri-home-2-line",
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({

    siteConfig: {
        // 启用评论
        comment: {
            enable: true
        },
    },

    addons: [
        // 看板娘
        addonLive2d({
            enableLive2D: ['XiaoYun'],
            live2DCollection: {
                XiaoYun: {
                    message: '云游君的小云 ~',
                    models: ['https://cdn.jsdelivr.net/npm/@yunyoujun/live2d@latest/小云.model3.json'],
                }
            },
            widthLimit: 170,
            skipHello: true
        }),
        // 音乐播放器
        addonMeting({
            global: true,
            /** @see https://github.com/metowolf/MetingJS */
            props: {
                id: '310527305',
                server: 'netease',
                type: 'playlist',
                mini: true,
                autoplay: false,
                order: "random",
                volume: 1,
            },
            options: {
                animationIn: true,
                autoHidden: true
            }
        }),
        addonWaline({
            serverURL: '接口还没好，哈哈哈',
        }),
    ],

    // site config see site.config.ts
    theme: "yun",

    themeConfig: {

        // toc title
        outlineTitle: "On this page",

        // 主题色
        colors: {
            primary: "#0078E7"
        },

        // 首页标语
        banner: {
            enable: true,
            title: ["我", "是", "哈希豪"],
            cloud: {
                enable: true
            }
        },

        // 公告
        notice: {
            enable: true,
            content: "我想，做个有趣的人"
        },

        // 烟花
        fireworks: {
            enable: true,
            colors: ["#66A7DD", "#3E83E1", "#214EC2"]
        },

        // 页面
        pages: [
            {
                name: "我的小伙伴们",
                url: "/links/",
                icon: "i-ri-genderless-line",
                color: "dodgerblue",
            },
            {
                name: "女装的样子",
                url: "/girls/",
                icon: "i-ri-women-line",
                color: "hotpink",
            },
        ],

        // 底部
        footer: {
            since: 2024,
            icon: {
                enable: true,
                name: "i-ri-game-line",
                url: "/game/",
                title: "游戏开发中···"
            },
            powered: false,
            beian: {
                enable: true,
                icp: "哈ICP备1214110654QQ号"
            }
        }
    },

    unocss: { safelist }
})