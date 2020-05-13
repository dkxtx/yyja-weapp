// pages/home/stores/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    store_list:[{
      pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
      name:"中兴汽车(天府大道店)",
      tags:["天府大道/银泰城","洗车修车"],
      activities:["洗车券7折","全车美容立减99"],
      distance:"100m"
    },
    {
      pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
      name:"中兴汽车(天府大道店)",
      tags:["天府大道/银泰城","洗车修车"],
      activities:["洗车券7折","全车美容立减99"],
      distance:"100m"
    },
    {
      pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
      name:"中兴汽车(天府大道店)",
      tags:["天府大道/银泰城","洗车修车"],
      activities:["洗车券7折","全车美容立减99"],
      distance:"100m"
    },
    {
      pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
      name:"中兴汽车(天府大道店)",
      tags:["天府大道/银泰城","洗车修车"],
      activities:["洗车券7折","全车美容立减99"],
      distance:"100m"
    },
    {
      pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
      name:"中兴汽车(天府大道店)",
      tags:["天府大道/银泰城","洗车修车"],
      activities:["洗车券7折","全车美容立减99"],
      distance:"100m"
    },
    {
      pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
      name:"中兴汽车(天府大道店)",
      tags:["天府大道/银泰城","洗车修车"],
      activities:["洗车券7折","全车美容立减99"],
      distance:"100m"
    },
    {
      pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
      name:"中兴汽车(天府大道店)",
      tags:["天府大道/银泰城","洗车修车"],
      activities:["洗车券7折","全车美容立减99"],
      distance:"100m"
    },
    {
      pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
      name:"中兴汽车(天府大道店)",
      tags:["天府大道/银泰城","洗车修车"],
      activities:["洗车券7折","全车美容立减99"],
      distance:"100m"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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