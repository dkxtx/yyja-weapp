// pages/my/setting/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_info:{},
    local_user_info:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
      mask:true
    })
    wx.request({
      url: getApp().globalData.apiUrl + '/user/info',
      method: 'GET',
      header: {
        'content-type': 'application/json', // 默认值
        'token': wx.getStorageSync('token')
      },
      success: (result) => {
        wx.hideLoading({
          complete: (res) => {},
        })
        console.log('userinfo', result)
        this.setData({
          user_info:result.data.data
        })
        console.log(this.data.user_info)
        // wx.setStorageSync('user_info', result.data.data)
        // app.globalData.userInfo = result.data.data
        // if (result.data.data.commodity_name) {
        //   this.setData({
        //     address: result.data.data.commodity_name + result.data.data.room,
        //     has_house: true
        //   })
        // }
        // if (result.data.data.phone) {
        //   this.setData({
        //     user_info: result.data.data,
        //     is_login: true,
        //     auth: true
        //   })
        // }
        wx.hideLoading({})
      }
    })
    // var local_user_info = wx.getStorageSync('user_info')
    // this.setData({
    //   user_info:JSON.parse(options.data),
    //   local_user_info:local_user_info
    // })
    // console.log(this.data.user_info)
    // console.log(this.data.local_user_info)

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