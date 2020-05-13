// pages/home/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,

        banners: [{
            "pic": "../../images/img-banner2@2x.png"
        }],
        categories: [{
            "_id": "1",
            "icon": "/images/icon_jfgl@2x.png",
            "title": "缴费管理"
        },
        {
            "_id": "2",
            "icon": "",
            "title": "投诉报修"
        },
        {
            "_id": "3",
            "icon": "",
            "title": "在线服务"
        },
        {
            "_id": "4",
            "icon": "",
            "title": "问卷调查"
        },
        {
            "_id": "5",
            "icon": "",
            "title": "周边商家"
        },
        ],
        newsData: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.getSystemInfo({
            success: (result) => {
                const width = result.windowWidth;
                const height = width * 0.32;
                this.setData({
                    bannerWidth: width,
                    bannerHeight: height
                })
            },
            fail: () => { },
            complete: () => { }
        });
        wx.login({
            success: (res) => {
                console.log(res)
                wx.request({
                    url: 'http://192.168.50.224:9001/user/wxlogin',
                    method: 'POST',
                    data: {
                        code: res.code
                    },
                    header: {
                        'content-type': 'application/json' // 默认值
                    },
                    success: (result) => {
                        wx.setStorageSync('token', result.data.data.token)
                        this.getNews()
                        console.log(result)
                    }
                })
            }
        })
    },

    getNews() {
        wx.request({
            url: 'http://192.168.50.224:9001/user/news',
            method: 'GET',
            data: {
                pc_id: 1
            },
            header: {
                'content-type': 'application/json', // 默认值
                'token': wx.getStorageSync('token')
            },
            success: (result) => {
                result.data.data.forEach(item => {
                    item.created = this.format(item.created)
                })
                this.setData({
                    newsData: result.data.data
                })
                console.log(result)
            }
        })
    },

    format(shijiancuo) {
        var time = new Date(shijiancuo)
        var y = time.getFullYear()
        var m = time.getMonth() + 1
        var d = time.getDate()
        return y + '-' + m + '-' + this.add0(d)
    },

    add0(m) {
        return m < 10 ? '0' + m : m
    },

    // 跳转周边商家
    storeAction() {
        wx.navigateTo({
            url: '/pages/home/stores/index'
        })
    },

    // 跳转周边商家
    payAction() {
        wx.navigateTo({
            url: '/pages/home/pay/index'
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})