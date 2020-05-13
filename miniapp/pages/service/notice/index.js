// pages/service/notice/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noticeTitle: [
      {
        title: '【2020】中德(英伦联邦)通字第040号',
        content: '关于绿化消杀的温馨提示',
        date: '04月28日',
        _id: '123'
      },
      {
        title: '【2020】中德(英伦联邦)通字第040号',
        content: '关于绿化消杀的温馨提示',
        date: '04月28日',
        _id: '456'
      }
    ]
  },

  showDetail(e) {
    wx.navigateTo({
      url: 'detail/index?id=' + e.currentTarget.dataset.id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.login({
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
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