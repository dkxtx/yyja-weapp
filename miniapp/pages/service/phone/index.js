// pages/service/phone/index.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    adress: app.globalData.adress,
    propertyPhone: '028-87726688',
    phoneData: [
      {
        title: '华阳街道办',
        phone: '028-88667788'
      },
      {
        title: '家电维修',
        phone: '028-88667788'
      },
      {
        title: '外卖配送',
        phone: '028-88667788'
      }
    ]
  },

  makePhone(e) {
    // console.log(e.currentTarget.dataset.phone)
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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