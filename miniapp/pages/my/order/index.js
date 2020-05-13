// pages/my/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    orders:[]
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
      wx.showToast({title: '暂无订单数据',icon: 'none',duration: 2000})
    }, 500)
    switch (options.data) {
      case "0":
        this.setData({
          active:0
        })
        break;
      case "1":
        this.setData({
          active:1
        })
      break;
      case "2":
        this.setData({
          active:2
        })
      break;
      case "3":
        this.setData({
          active:3
        })
      break;
      case "4":
        this.setData({
          active:4
        })
      break;
      default:
        break;
    }
  },

  onChange(event){
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    setTimeout(function () {
      wx.hideLoading()
      wx.showToast({title: '暂无订单数据',icon: 'none',duration: 2000})
    }, 500)
    if (this.data.orders.length === 0) {
      return wx.showToast({
        title: "暂无订单数据",
        icon: 'none',
      });
    }
    
  },
  onClickOrder(event){
    console.log(event)
    console.log(event.target.dataset)
    wx.navigateTo({
      url:'/pages/my/oder_detail/index'+'?data='+JSON.stringify(event.currentTarget.dataset.id)
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