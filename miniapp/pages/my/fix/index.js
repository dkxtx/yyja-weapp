// pages/my/fix/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      // {
      //   pics:['https://qyd-rental.oss-cn-beijing.aliyuncs.com/bikes/1573639242323.%E5%B0%8F%E5%AE%9D%E9%A9%AC.png','https://qyd-rental.oss-cn-beijing.aliyuncs.com/bikes/1573639242323.%E5%B0%8F%E5%AE%9D%E9%A9%AC.png','https://qyd-rental.oss-cn-beijing.aliyuncs.com/bikes/1573639242323.%E5%B0%8F%E5%AE%9D%E9%A9%AC.png'],
      //   title:"张涌泉的报修，马桶堵了，嗙臭",
      //   time:"2020-05-18 10:30",
      //   is_fixed:true
      // }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    
    setTimeout(function () {
      wx.hideLoading()
      wx.showToast({title: '暂无报修数据',icon: 'none',duration: 2000})
    }, 500)
  },
  onClickItem(event){
    console.log(event)
    wx.navigateTo({
      url: '../fix_detail/index?data='+JSON.stringify(event.currentTarget.dataset.item),
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