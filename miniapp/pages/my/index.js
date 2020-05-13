// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_login:true,
    user_info:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success (res) {
        console.log(res)
      },
      fail: () => {},
      complete: (result) => {
        console.log(result)
         const user_info = result;
        this.setData({
          user_info:user_info
        })
      }
    })
  },
  log_in_out(){
    var log_status = this.data.is_login
    log_status = !log_status
    this.setData({
      is_login:log_status
    })
  },
  onClickOrder(event){
    console.log(event.target.dataset.type)
    wx.navigateTo({
      url:'/pages/my/order/index'+'?data='+JSON.stringify(event.currentTarget.dataset.type)
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