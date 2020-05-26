// pages/service/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noticeData: []
  },

  navigeNotice() {
    wx.navigateTo({
      url: 'notice/index',
    })
  },
  showDetail(e) {
    wx.navigateTo({
      url: '/pages/service/notice/detail/index?data=' + encodeURIComponent(JSON.stringify(e.currentTarget.dataset.item))
    })
  },

  navigePhone() {
    wx.navigateTo({
      url: 'phone/index',
    })
  },

  navigeWeather() {
    return
    wx.navigateTo({
      url: 'weather/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    this.getNotice()
    this.getBanner()
  },

  getBanner() {
    wx.request({
      url: getApp().globalData.apiUrl + '/user/banner',
      method: 'GET',
      data: {
        pc_id: app.globalData.pc_id,
        type: 3
      },
      header: {
        'content-type': 'application/json', // 默认值
        'token': wx.getStorageSync('token')
      },
      success: (res) => {
        console.log(res)
      }
    })
  },

  getNotice() {
    var _self = this
    wx.request({
      url: app.globalData.apiUrl + '/user/notices',
      method: 'GET',
      data: {
        pc_id: app.globalData.pc_id
      },
      header: {
        'content-type': 'application/json', // 默认值
        'token': wx.getStorageSync('token')
      },
      success(res) {
        console.log(res)
        res.data.data.forEach(item => {
          item.created = _self.format(item.created)
        })
        _self.setData({
          noticeData: res.data.data
        })
        wx.hideLoading({})
      }
    })
  },

  format(shijiancuo) {
    var time = new Date(shijiancuo)
    var m = time.getMonth() + 1
    var d = time.getDate()
    return m + '-' + this.add0(d)
  },

  add0(m) {
    return m < 10 ? '0' + m : m
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