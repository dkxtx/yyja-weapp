// pages/my/communities/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    communities:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    var data = {
      pc_id:1
    }
    wx.request({
      url: getApp().globalData.apiUrl + '/user/pc/communities',
      method: 'GET',
      data: data,
      header: {
        'content-type': 'application/json', // 默认值
        'token': wx.getStorageSync('token')
      },
      success:(res) => {
        this.setData({
          communities:res.data.data
        })
        wx.hideLoading()
        console.log(this.data.communities)
      }
    })
  },
  onClickCommunity(event){
    console.log(event.currentTarget.dataset.item)
    wx.navigateTo({
      url:'/pages/my/house/index'+'?data='+JSON.stringify(event.currentTarget.dataset.item)
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