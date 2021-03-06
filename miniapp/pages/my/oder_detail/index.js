// pages/my/oder_detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order:{
      _id:"1",
      status:3,
      order_no:"342908q3492103fdsa",
      create_at:"2020-05-13 15:30:20",
      shipping_time:"2020-05-13 15:30:20",
      shipping_name:"顺丰快递",
      shipping_no:"sfno3428902432123",
      store:{
        name:"好利来(华府大道店)",
        pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
      },
      goods:{
        name:"6英寸奶油蛋糕",
        pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
        price:45.2,
        count:2,
        tags:["白色浪漫","四重奏","交响乐团","粉红豹","白色浪漫","四重奏","交响乐团","粉红豹","粉红豹"]
      },
      address:{
        provinceName:"四川省",
        cityName:"成都市",
        countyName:"武侯区",
        detailInfo:"中德英伦联邦1栋二单元1301",
        userName:"大口吸",
        telNumber:"13800138000"
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.data)
  },
  onClickPay(){
    wx.showToast({
      title: '去付款',
      icon:'none'
    })
  },
  onClickTake(){
    wx.showToast({
      title: '确认收货',
      icon:'none'
    })
  },
  onClickStore(){
    wx.navigateTo({
      url: '/pages/home/store/index',
    })
  },
  onClickGoods(){
    wx.navigateTo({
      url: '/pages/home/goods/index',
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