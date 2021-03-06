// pages/home/goods/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (result) => {
          const width = result.windowWidth;
          const height = width;
          console.log(width)
          console.log(height)
          this.setData({
              bannerWidth: width,
              bannerHeight: height
          })
      },
      fail: () => {},
      complete: () => {}
    });
    var goods = wx.getStorageSync('goods')
    goods.detail = goods.detail.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ')
    this.setData({
      goods:goods
    })
    wx.removeStorageSync('goods')
    console.log(goods)
  },

  scroll(){

  },

  onClickBuy(event){
    wx.setStorageSync('goods',this.data.goods)
    wx.navigateTo({
      url:'/pages/home/submit/index'
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