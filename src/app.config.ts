export default {
    pages: [
        'pages/login/login',
        'pages/index/index',
        'pages/my/my',
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
    tabBar: {
        custom: true,
        list: [
            {
                text: "学习",
                pagePath: 'pages/index/index'
            },
            {
                text: "我的",
                pagePath: 'pages/my/my'
            },
        ]
    }
}
