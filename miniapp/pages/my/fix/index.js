// pages/my/fix/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
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
      mask: true
    })

    this.getFix()
    // setTimeout(function () {
    //   wx.hideLoading()
    //   wx.showToast({ title: '暂无报修数据', icon: 'none', duration: 2000 })
    // }, 500)
  },

  getFix() {
    wx.request({
      url: app.globalData.apiUrl + '/user/my/repairs',
      method: 'GET',
      data: {
        pc_id: app.globalData.pc_id
      },
      header: {
        'content-type': 'application/json', // 默认值
        'token': wx.getStorageSync('token')
      },
      success: (result) => {
        console.log(result)
        result.data.data.forEach(item => {
          item.created = this.format(item.created)
          item.door_time = this.format(item.door_time)
        })
        this.setData({
          list: result.data.data
        })
        wx.hideLoading({})
      }
    })
  },

  onClickItem(event) {
    console.log(event)
    wx.navigateTo({
      url: '../fix_detail/index?data=' + JSON.stringify(event.currentTarget.dataset.item),
    })
  },

  format(shijiancuo) {
    var time = new Date(shijiancuo)
    var y = time.getFullYear()
    var m = time.getMonth() + 1
    var d = time.getDate()
    var h = time.getHours()
    var mm = time.getMinutes()
    var s = time.getSeconds()
    return y + '-' + m + '-' + this.add0(d) + ' ' + this.add0(h) + ':' + this.add0(mm) + ':' + this.add0(s)
},

add0(m) {
    return m < 10 ? '0' + m : m
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