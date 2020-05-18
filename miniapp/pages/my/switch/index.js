// pages/my/switch/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasHose: false,
    userInfo: app.globalData.userInfo,
    current_community: {},
    house_list: [],
    community: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },  /**

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showLoading({
      title: '加载中',
      icon: 'none'
    })
    this.getInfo()
    this.getCommunity()
  },

  getInfo() {
    wx.request({
      url: app.globalData.apiUrl + '/user/info',
      method: 'GET',
      header: {
        'content-type': 'application/json', // 默认值
        'token': wx.getStorageSync('token')
      },
      success: (result) => {
        if (result.data.data.commodity_name) {
          this.setData({
            community: result.data.data,
            hasHose: true
          })
        }
      }
    })
  },

  getCommunity() {
    wx.request({
      url: app.globalData.apiUrl + '/user/communities',
      method: 'GET',
      header: {
        'content-type': 'application/json', // 默认值
        'token': wx.getStorageSync('token')
      },
      success: (res) => {
        this.setData({
          house_list: res.data.data
        })
        wx.hideLoading({})
        console.log(res)
      }
    })
  },

  changeProperty(e) {
    console.log(e)
    this.data.house_list.forEach(item => {
      if (item.user_community_id === e.currentTarget.dataset.id) {
        app.globalData.community = item
        this.setData({
          community: item
        })
      }
    })
    var data = {
      user_community_id: e.currentTarget.dataset.id
    }
    wx.request({
      url: app.globalData.apiUrl + '/user/change/community',
      method: 'POST',
      data: data,
      header: {
        'content-type': 'application/json', // 默认值
        'token': wx.getStorageSync('token')
      },
      success: (res) => {
        console.log(res)
        this.setData({
          hasHose: true
        })
        wx.showToast({
          title: '选择成功',
          icon: 'none',
          duration: 3000
        })
        setTimeout(() => {
          wx.navigateBack({})
        }, 3000);
      }
    })
  },
  onClickAdd() {
    wx.navigateTo({
      url: '../communities/index'
    })
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