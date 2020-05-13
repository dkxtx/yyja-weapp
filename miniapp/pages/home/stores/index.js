// pages/home/stores/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    store_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: getApp().globalData.apiUrl+'/user/stores',
      method: 'GET',
      data: {
          pc_id: 1
      },
      header: {
          'content-type': 'application/json', // 默认值
          'token': wx.getStorageSync('token')
      },
      success: (result) => {
          console.log(result)
          this.setData({
            store_list:result.data.data
          })
      }
  })
  },

  onClickStore (event) {
    var $this = this;
    console.log(event.currentTarget.dataset.store)
    wx.navigateTo({
      url:'/pages/home/store/index'+'?data='+JSON.stringify(event.currentTarget.dataset.store)
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