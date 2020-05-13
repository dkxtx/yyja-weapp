// pages/home/submit/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected_address:{},
    item:{
      pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
        name:"中兴汽车(天府大道店)",
        tags:["白色浪漫","四重奏","交响乐团","粉红豹","白色浪漫","四重奏","交响乐团","粉红豹","粉红豹"],
        open_time:"周一至周日",
        price:45.00,
        sold_count:100
    },
    goods_count:1,
    total_amount:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getAddr()
   this.data.total_amount = this.data.item.price*this.data.goods_count
   var current_total_amount = 0
   var current_price = this.data.item.price
   var current_goods_count = this.data.goods_count
   current_total_amount = current_price*current_goods_count
   this.setData({
     total_amount:current_total_amount
   })
  },
  getAddr(){
    wx.chooseAddress({
      success (res) {},
      fail: () => {},
      complete: (result) => {
        console.log(result)
         const address = result;
        this.setData({
          selected_address: address
        })
      }
    })
  },
  onClickMinus(){
    console.log("------")
    if (this.data.goods_count === 1) {
      return wx.showToast({
        title: '购买数量不能小于1',
        icon:"none"
      })
    }
    var current_goods_count = this.data.goods_count
    current_goods_count -= 1

    var current_total_amount = 0
    var current_price = this.data.item.price
    current_total_amount = current_price*current_goods_count

    this.setData({
      goods_count:current_goods_count,
      total_amount:current_total_amount
    })
  },
  onClickPlus(){
    console.log("+++++++")
    var current_goods_count = this.data.goods_count
    current_goods_count += 1
    var current_total_amount = 0
    var current_price = this.data.item.price
    current_total_amount = current_price*current_goods_count

    this.setData({
      goods_count:current_goods_count,
      total_amount:current_total_amount
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