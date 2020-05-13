// pages/home/pay/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '中德英伦联邦1栋二单元1301',
    icon1: '@/images/icon-wdxq@2x.png',
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    showDetail: false,
    no_pay_data: [
      {
        start_date: '2020年6月',
        fee: 398,
        check: true,
        detail: [
          {
            fee_title: '代收垃圾处理费',
            fee: 18,
            check: true
          },
          {
            fee_title: '代收垃圾处理费',
            fee: 380,
            check: true
          }
        ]
      },
      {
        start_date: '2020年6月',
        fee: 398,
        check: true,
        detail: [
          {
            fee_title: '代收垃圾处理费',
            fee: 18,
            check: true
          },
          {
            fee_title: '代收垃圾处理费',
            fee: 380,
            check: true
          }
        ]
      },
      {
        start_date: '2020年6月',
        fee: 398,
        check: true,
        detail: [
          {
            fee_title: '代收垃圾处理费',
            fee: 18,
            check: true
          },
          {
            fee_title: '代收垃圾处理费',
            fee: 380,
            check: true
          }
        ]
      },
      {
        start_date: '2020年6月',
        fee: 398,
        check: true,
        detail: [
          {
            fee_title: '代收垃圾处理费',
            fee: 18,
            check: true
          },
          {
            fee_title: '代收垃圾处理费',
            fee: 380,
            check: true
          }
        ]
      },
      {
        start_date: '2020年6月',
        fee: 398,
        check: true,
        detail: [
          {
            fee_title: '代收垃圾处理费',
            fee: 18,
            check: true
          },
          {
            fee_title: '代收垃圾处理费',
            fee: 380,
            check: true
          }
        ]
      },
      {
        start_date: '2020年6月',
        fee: 398,
        check: true,
        detail: [
          {
            fee_title: '代收垃圾处理费',
            fee: 18,
            check: true
          },
          {
            fee_title: '代收垃圾处理费',
            fee: 380,
            check: true
          }
        ]
      },
      {
        start_date: '2020年6月',
        fee: 398,
        check: false
      },
      {
        start_date: '2020年6月',
        fee: 398,
        check: false
      }
    ],
    checkAll: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          winHeight: res.windowHeight,
          winWidth: res.windowWidth
        })
      }
    })
  },

  // 点击切换
  clickChange() {
    this.setData({
      currentTab: this.data.currentTab === 0 ? 1 : 0
    })
  },

  // 滑动切换
  slideChange(e) {
    console.log(e)
    this.setData({
      currentTab: e.detail.current
    })
  },

  // 打开未缴费详情
  openDetail() {
    this.setData({
      showDetail: !this.data.showDetail
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