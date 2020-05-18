// pages/my/auth/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasInfo: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo) {
      this.setData({
        hasInfo: true
      })
    }
  },

  getUserInfo() {
    var _self = this
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        app.globalData.userInfo = res.userInfo
        _self.setData({
          hasInfo: true
        })
      }
    })
  },

  getPhone(e) {
    console.log(e)
    // app.globalData.phone = res.phone
    this.saveUserInfo()
    wx.setStorageSync('fromUserAuth', 1)
    wx.navigateBack({})
    // wx.switchTab({
    //   url: '../../my/index',
    // })
  },

  saveUserInfo() {
    var params = {
      avatar: app.globalData.userInfo.avatar,
      nick_name: app.globalData.userInfo.nick_name,
      phone: app.globalData.phone
    }
    wx.request({
      url: app.globalData.apiUrl + '/user/modify',
      method: 'GET',
      data: params,
      header: app.globalData.header
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