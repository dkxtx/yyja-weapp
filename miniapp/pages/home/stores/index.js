// pages/home/stores/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:"",
    longitude:"",
    store_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      type: 'wgs84',
      success (res) {},
      fail: () => {},
      complete: (result) => {
        this.setData({
          latitude:result.latitude,
          longitude:result.longitude
        })
        this.dataLoad()
      }
    })
  },
  dataLoad(){
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
          this.data.store_list.forEach(element => {
            element.distance_display = this.distance(this.data.latitude,this.data.longitude,element.latitude,element.longitude)
          })
          console.log(this.data.store_list)
          var list = this.data.store_list
          this.setData({
            store_list:list
          })
      }
    })
  },
  distance: function (la1, lo1, la2, lo2) {
    var La1 = la1 * Math.PI / 180.0;
    var La2 = la2 * Math.PI / 180.0;
    var La3 = La1 - La2;
    var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
    s = s * 6378.137;
    s = Math.round(s * 10000) / 10000;
    s = s.toFixed(2);
    return s;
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