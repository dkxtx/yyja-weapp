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
    banners: [
      {"pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg"},
      {"pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg"},
      {"pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg"},
      {"pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg"}
    ],
    goods_list:[
      {
        pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
        name:"中兴汽车(天府大道店)",
        tags:["白色浪漫","四重奏","交响乐团","粉红豹","白色浪漫","四重奏","交响乐团","粉红豹","粉红豹"],
        open_time:"周一至周日",
        price:"45.00",
        sold_count:100
      },{
        pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
        name:"中兴汽车(天府大道店)",
        tags:["白色浪漫","四重奏","交响乐团","粉红豹","白色浪漫","四重奏","交响乐团","粉红豹","粉红豹"],
        open_time:"周一至周日",
        price:"45.00",
        sold_count:100
      },{
        pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
        name:"中兴汽车(天府大道店)",
        tags:["白色浪漫","四重奏","交响乐团","粉红豹","白色浪漫","四重奏","交响乐团","粉红豹","粉红豹"],
        open_time:"周一至周日",
        price:"45.00",
        sold_count:100
      },{
        pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
        name:"中兴汽车(天府大道店)",
        tags:["白色浪漫","四重奏","交响乐团","粉红豹","白色浪漫","四重奏","交响乐团","粉红豹","粉红豹"],
        open_time:"周一至周日",
        price:"45.00",
        sold_count:100
      },{
        pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
        name:"中兴汽车(天府大道店)",
        tags:["白色浪漫","四重奏","交响乐团","粉红豹","白色浪漫","四重奏","交响乐团","粉红豹","粉红豹"],
        open_time:"周一至周日",
        price:"45.00",
        sold_count:100
      },{
        pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
        name:"中兴汽车(天府大道店)",
        tags:["白色浪漫","四重奏","交响乐团","粉红豹","白色浪漫","四重奏","交响乐团","粉红豹","粉红豹"],
        open_time:"周一至周日",
        price:"45.00",
        sold_count:100
      }
    ]
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
    console.log(options)
  },
  scroll(){},
  onClickGoods(event){
    console.log(event.currentTarget.dataset.goods)
    wx.navigateTo({
      url:'/pages/home/goods/index'+'?data='+JSON.stringify(event.currentTarget.dataset.goods)
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