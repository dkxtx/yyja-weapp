// pages/home/store/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    store:{},
    banners: [],
    goods_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (result) => {
          const width = result.windowWidth;
          const height = width * 0.32;
          this.setData({
              bannerWidth: width,
              bannerHeight: height
          })
      },
      fail: () => {},
      complete: () => {}
    });
    var store_data = JSON.parse(options.data)
    var banner_data = []
    banner_data.push(store_data.logo)
    this.setData({
      store:store_data,
      banners:banner_data
    })

    console.log(this.data.store)
  },
  getGoodsList(){
    wx.request({
      url: getApp().globalData.apiUrl+'/user/store/commodities',
      method: 'GET',
      data: {
        store_id: this.data.store.id
      },
      header: {
          'content-type': 'application/json', // 默认值
          'token': wx.getStorageSync('token')
      },
      success: (result) => {
          console.log(result)
      }
    })
  },
  scroll(){},
  onClickGoods(event){
    console.log(event.currentTarget.dataset.goods)
    wx.navigateTo({
      url:'/pages/home/goods/index'+'?data='+JSON.stringify(event.currentTarget.dataset.goods)
    })
  },
  onClickCall(){
    wx.makePhoneCall({
      phoneNumber: this.data.store.phone 
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