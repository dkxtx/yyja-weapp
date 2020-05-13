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
        newsData:[],
        banners: [{
            "pic": "/images/img-banner2@2x.png"
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
        ]
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
                    url: getApp().globalData.apiUrl+'/user/wxlogin',
                    method: 'POST',
                    data: {
                        code: res.code
                    },
                    header: {
                        'content-type': 'application/json' // 默认值
                    },
                    success: (result) => {
                        wx.setStorageSync('token', result.data.data.token)
                        console.log(result)
                        this.getNews()
                    }
                })
            }
        })
    },
    getNews(){
        wx.showLoading({
            title: '加载中',
            mask:true
          })
          wx.request({
            url: getApp().globalData.apiUrl+'/user/news',
            method: 'GET',
            data: {
                pc_id: 1
            },
            header: {
                'content-type': 'application/json', // 默认值
                'token': wx.getStorageSync('token')
            },
            success: (result) => {
                console.log(result)
                this.setData({
                  newsData:result.data.data
                })
                wx.hideLoading()
            },fail:(err) => {
              wx.hideLoading()
            }
          })
    },

    // 跳转周边商家
    storeAction() {
        // if (wx.getStorageSync('auth')) {
            wx.navigateTo({
                url: '/pages/home/stores/index'
            })
        // } else {
        //     wx.navigateTo({
        //         url: '/pages/auth/index'
        //     })
        // }
    },

    // 跳转物业缴费
    payAction() {
        if (wx.getStorageSync('auth')) {
            wx.navigateTo({
                url: '/pages/home/pay/index'
            })
        } else {
            wx.navigateTo({
                url: '/pages/auth/index'
            })
        }

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