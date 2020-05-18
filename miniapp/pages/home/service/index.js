// pages/home/service/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text_count: 0,
    service: '',
    clickTab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  textInp(e) {
    this.setData({
      service: e.detail.value.replace(/\s+/g, ""),
      text_count: /\s+/g.test(e.detail.value) ? e.detail.value.length - 1 : e.detail.value.length
    })
  },

  sureSend() {
    if (this.data.text_count === 0) {
      wx.showToast({
        title: '请输入问题描述',
        icon: "none"
      })
      return
    }
    wx.showLoading({
      title: '提交中'
    })
    setTimeout(() => {
      wx.hideLoading({})
      wx.showToast({
        title: '提交成功'
      })
    }, 1000)
    setTimeout(() => {
      wx.navigateBack({})
    }, 2500)
  },

  chooseTab(e) {
    this.setData({
      clickTab: e.currentTarget.dataset.index
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