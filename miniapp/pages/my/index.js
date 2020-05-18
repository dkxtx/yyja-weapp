// pages/my/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adress: '',
    has_house: false,
    is_login: false,
    user_info: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("++++onLoad++++++")
    console.log(app.globalData.wxUserInfo)
    if (app.globalData.wxUserInfo && app.globalData.phone) {
      this.setData({
        is_login: true,
        user_info: app.globalData.wxUserInfo
      })
      this.getUserInfo()
    }
  },
  getUserInfo() {
    wx.request({
      url: app.globalData.apiUrl + '/user/info',
      method: 'GET',
      header: app.globalData.header,
      success: (result) => {
        console.log(result)
        wx.setStorageSync('user_info', result.data.data)
        app.globalData.userInfo = result.data.data
        app.globalData.adress = result.data.data.commodity_name + result.data.data.room
        this.setData({
          address: app.globalData.adress
        })
      }
    })
  },
  // onShow: function () {
  //   console.log("++++onShow++++++")
  //   console.log(wx.getStorageSync('fromUserAuth'))
  //   if (wx.getStorageSync('fromUserAuth') == 1) {
  //     this.setData({
  //       user_info: app.globalData.wxUserInfo,
  //       is_login: true
  //     })
  //     wx.removeStorageSync('fromUserAuth')
  //   }
  // },
  userLogin() {
    if (this.data.is_login) {
      this.setData({
        user_info: {},
        is_login: false
      })
    } else {
      if (!app.globalData.wxUserInfo && !app.globalData.phone) {
        wx.navigateTo({
          url: 'auth/index',
        })
      } else {
        this.setData({
          user_info: app.globalData.wxUserInfo,
          is_login: true
        })
      }
    }
  },
  onClickOrder(event) {
    console.log(event.target.dataset.type)
    if (this.data.is_login === false) {
      return wx.showToast({
        title: '请登录账号',
        icon: "none"
      })
    }
    wx.navigateTo({
      url: '/pages/my/order/index' + '?data=' + JSON.stringify(event.currentTarget.dataset.type)
    })
  },
  onClickFix() {
    if (this.data.is_login === false) {
      return wx.showToast({
        title: '请登录账号',
        icon: "none"
      })
    }
    wx.navigateTo({
      url: '/pages/my/fix/index'
    })
  },

  onClickBill() {
    if (this.data.is_login === false) {
      return wx.showToast({
        title: '请登录账号',
        icon: "none"
      })
    }
    wx.navigateTo({
      url: '/pages/my/bill/index'
    })
  },
  onClickSetting() {
    if (this.data.is_login === false) {
      return wx.showToast({
        title: '请登录账号',
        icon: "none"
      })
    }
    wx.navigateTo({
      url: '/pages/my/setting/index' + '?data=' + JSON.stringify(this.data.user_info),
    })
  },
  onClickSwitch() {
    wx.navigateTo({
      url: '/pages/my/switch/index',
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