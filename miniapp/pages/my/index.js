// pages/my/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_login: false,
    user_info: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo) {
      this.setData({
        is_login: true,
        user_info: app.globalData.userInfo
      })
    }
  },
  getUserInfo() {
    var _self = this
    if (this.data.is_login) {
      app.globalData.userInfo = null
      _self.setData({
        is_login: false
      })
    } else {
      wx.getUserInfo({
        success: function (res) {
          console.log(res)
          app.globalData.userInfo = res.userInfo
          _self.setData({
            user_info: app.globalData.userInfo,
            is_login: true
          })
        }
      })
    }
  },
  onClickOrder(event) {
    console.log(event.target.dataset.type)
    if (this.data.is_login === false) {
      return wx.showToast({
        title: '请登录账号',
        icon:"none"
      })
    }
    wx.navigateTo({
      url: '/pages/my/order/index' + '?data=' + JSON.stringify(event.currentTarget.dataset.type)
    })
  },
  onClickFix(){
    if (this.data.is_login === false) {
      return wx.showToast({
        title: '请登录账号',
        icon:"none"
      })
    }
    wx.navigateTo({
      url: '/pages/my/fix/index' 
    })
  },

  onClickBill(){
    if (this.data.is_login === false) {
      return wx.showToast({
        title: '请登录账号',
        icon:"none"
      })
    }
    wx.navigateTo({
      url: '/pages/my/bill/index' 
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