// pages/my/auth/index.js
var app = getApp();
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
    console.log(app.globalData.wxUserInfo)
    if (app.globalData.wxUserInfo) {
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
        app.globalData.wxUserInfo = res.userInfo
        _self.setData({
          hasInfo: true
        })
      },
      fail: (err) => {
        wx.showToast({
          title: '获取您的信息用于展示个人中心信息',
          icon: 'none'
        })
        console.log(err)
      }
    })
  },

  getPhone(e) {
    console.log(e)
    if (!e.detail.hasOwnProperty('encryptedData')) {
      wx.showToast({
        title: '请使用手机号进行登录',
        icon: 'none'
      })
      return
    }
    wx.login({
      success: (res) => {
        let data = {
          encrypted_data: e.detail.encryptedData,
          iv: e.detail.iv,
          code: res.code
        }
        wx.request({
          url: app.globalData.apiUrl + '/user/phone/dncrypt',
          method: 'POST',
          data: data,
          header: {
            'content-type': 'application/json', // 默认值
            'token': wx.getStorageSync('token')
          },
          success: (result) => {
            console.log(result)
            app.globalData.phone = result.data.data.phone
            this.saveUserInfo()
          }
        })
      }
    })
    wx.setStorageSync('fromUserAuth', 1)
  },

  saveUserInfo() {
    console.log(app.globalData)
    var params = {
      avatar: app.globalData.wxUserInfo.avatarUrl,
      nick_name: app.globalData.wxUserInfo.nickName,
      phone: app.globalData.phone
    }
    wx.request({
      url: app.globalData.apiUrl + '/user/modify',
      method: 'POST',
      data: params,
      header: {
        'content-type': 'application/json', // 默认值
        'token': wx.getStorageSync('token')
      },
      success: (res) => {
        console.log(res)
        wx.showToast({
          title: '登录成功',
          icon: 'none'
        })
        wx.switchTab({
          url: '../index',
        })
      }
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