// pages/home/news/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    wx.request({
      url: getApp().globalData.apiUrl + '/user/news',
      method: 'GET',
      data: {
          pc_id: app.globalData.pc_id
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
          wx.hideLoading()
      }, fail: (err) => {
          wx.hideLoading()
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
  onClickNews(event){
    wx.setStorageSync('news',event.currentTarget.dataset.news)
    wx.navigateTo({
      url:'/pages/home/new_detail/index'
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