// pages/my/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    orders:[
      {
        _id:"1",
        status:1,
        store:{
          name:"好利来(华府大道店)",
          pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
        },
        goods:{
          name:"6英寸奶油蛋糕",
          pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
          price:45,
          count:1,
          tags:["白色浪漫","四重奏","交响乐团","粉红豹","白色浪漫","四重奏","交响乐团","粉红豹","粉红豹"]
        }
      },
      {
        _id:"2",
        status:2,
        store:{
          name:"好利来(华府大道店)",
          pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
        },
        goods:{
          name:"6英寸奶油蛋糕",
          pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
          price:45,
          count:1,
          tags:["白色浪漫","四重奏","交响乐团","粉红豹","白色浪漫","四重奏","交响乐团","粉红豹","粉红豹"]
        }
      },{
        _id:"3",
        status:3,
        store:{
          name:"好利来(华府大道店)",
          pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
        },
        goods:{
          name:"6英寸奶油蛋糕",
          pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
          price:45,
          count:1,
          tags:["白色浪漫","四重奏","交响乐团","粉红豹","白色浪漫","四重奏","交响乐团","粉红豹","粉红豹"]
        }
      },
      {
        _id:"4",
        status:4,
        store:{
          name:"好利来(华府大道店)",
          pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
        },
        goods:{
          name:"6英寸奶油蛋糕",
          pic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588678118188&di=e6324de6845cad96c5541b8e16189613&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb597965516a3068eb3141cfc97010d6dccf985da.jpg",
          price:45,
          count:1,
          tags:["白色浪漫","四重奏","交响乐团","粉红豹","白色浪漫","四重奏","交响乐团","粉红豹","粉红豹"]
        }
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
    var list = []
    list = this.data.orders
    this.setData({
      orders:list
    })
    console.log(this.data.orders)
  },
  onClickOrder(event){
    console.log(event)
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