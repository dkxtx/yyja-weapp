// pages/my/switch/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current_community:{},
    house_list: [
      // {
      //   title: "成都_中德英伦城邦",
      //   tag: '家庭成员',
      //   unit: '中德英伦城邦8栋二单元1101',
      //   _id: '123'
      // },
      // {
      //   title: "成都_中德英伦城邦",
      //   tag: '家庭成员',
      //   unit: '中德英伦城邦8栋二单元1101',
      //   _id: '123'
      // }, {
      //   title: "成都_中德英伦城邦",
      //   tag: '家庭成员',
      //   unit: '中德英伦城邦8栋二单元1101',
      //   _id: '123'
      // }, {
      //   title: "成都_中德英伦城邦",
      //   tag: '家庭成员',
      //   unit: '中德英伦城邦8栋二单元1101',
      //   _id: '123'
      // }, {
      //   title: "成都_中德英伦城邦",
      //   tag: '家庭成员',
      //   unit: '中德英伦城邦8栋二单元1101',
      //   _id: '123'
      // }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: app.globalData.apiUrl + '/user/communities',
      method: 'GET',
      header: {
        'content-type': 'application/json', // 默认值
        'token': wx.getStorageSync('token')
      },
      success:(res) => {
        this.setData({
          house_list: res.data.data
        })
        console.log(res)
      }
    })
  },

  changeProperty(e) {
    console.log(e)
    var data = {
      user_community_id: e.currentTarget.dataset.id
    }
    wx.request({
      url: app.globalData.apiUrl + '/user/change/community',
      method: 'POST',
      data: data,
      header: {
        'content-type': 'application/json', // 默认值
        'token': wx.getStorageSync('token')
      },
      success:(res) => {
        console.log(res)
      }
    })
  },
  onClickAdd(){
    wx.navigateTo({
      url: '../communities/index'
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