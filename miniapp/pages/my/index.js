// pages/my/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    community: app.globalData.community,
    address: '',
    has_house: false,
    is_login: false,
    auth: false,
    user_info: {}
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showLoading({
      title: '加载中',
      icon: 'none'
    })
    this.getUserInfo()
  },

  getUserInfo() {
    wx.request({
      url: app.globalData.apiUrl + '/user/info',
      method: 'GET',
      header: {
        'content-type': 'application/json', // 默认值
        'token': wx.getStorageSync('token')
      },
      success: (result) => {
        console.log('userinfo', result)
        wx.setStorageSync('user_info', result.data.data)
        app.globalData.userInfo = result.data.data
        if (result.data.data.community_name) {
          this.setData({
            address: result.data.data.community_name + result.data.data.room,
            has_house: true
          })
        }
        if (result.data.data.phone) {
          this.setData({
            user_info: result.data.data,
            is_login: true,
            auth: true
          })
        }
        wx.hideLoading({})
      }
    })
  },

  userLogin() {
    if (this.data.is_login) {
      this.setData({
        user_info: {},
        is_login: false
      })
    } else {
      if (!this.data.auth) {
        wx.navigateTo({
          url: 'auth/index',
        })
      } else {
        this.setData({
          user_info: app.globalData.userInfo,
          is_login: true
        })
      }
    }
  },
  onClickOrder(event) {
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