// pages/home/guarantee/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    guarantee: '',
    text_count: 0,
    chooseDate: '',
    startDate: '',
    endDate: '',
    chooseTime: '08:00',
    name: '',
    phone: '',
    fileList: [],
    imgData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      chooseDate: this.format(new Date()),
      startDate: this.format(new Date()),
      endDate: this.format(Date.now() + (7 * 24 * 60 * 60 * 1000))
    })
  },

  dateChange(e) {
    this.setData({
      chooseDate: e.detail.value
    })
  },

  timeChange(e) {
    this.setData({
      chooseTime: e.detail.value
    })
  },

  format(shijiancuo) {
    var time = new Date(shijiancuo)
    var y = time.getFullYear()
    var m = time.getMonth() + 1
    var d = time.getDate()
    return y + '-' + m + '-' + this.add0(d)
  },

  add0(m) {
    return m < 10 ? '0' + m : m
  },

  textInp(e) {
    this.setData({
      guarantee: e.detail.value.replace(/\s+/g, ""),
      text_count: /\s+/g.test(e.detail.value) ? e.detail.value.length - 1 : e.detail.value.length
    })
  },

  writeName(e) {
    this.setData({
      name: e.detail.value.replace(/\s+/g, ""),
    })
  },

  writePhone(e) {
    this.setData({
      phone: e.detail.value.replace(/\s+/g, ""),
    })
  },

  uploadReader(e) {
    this.data.imgData.push(e.detail.file.path)
    let fileItem = {
      url: e.detail.file.path
    }
    this.data.fileList.push(fileItem)
    this.setData({
      fileList: this.data.fileList
    })
  },

  deletePhoto(e) {
    this.data.imgData.splice(e.currentTarget.dataset.index, 1)
    this.data.fileList.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      fileList: this.data.fileList
    })
  },

  sureSend() {
    if (this.data.text_count === 0) {
      wx.showToast({
        title: '请输入问题详情',
        icon: "none"
      })
      return
    }
    if (this.data.imgData.length === 0) {
      wx.showToast({
        title: '至少上传一张图片',
        icon: "none"
      })
      return
    }
    if (this.data.name === '' || this.data.phone === '') {
      wx.showToast({
        title: '请完善报修人信息',
        icon: "none"
      })
      return
    }
    let reg = /^1[3456789]\d{9}$/
    if (!reg.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的电话号码',
        icon: "none"
      })
      return
    }
    let guarantDate = this.data.chooseDate.replace(/-/g, '/') + ' ' + this.data.chooseTime
    const formData = {
      pc_id: 1,
      community_id: wx.getStorageSync('user_info').commodity_id,
      content: this.data.guarantee,
      name: this.data.name,
      phone: this.data.phone,
      door_time: new Date(guarantDate).getTime() / 1000,
      images: this.data.imgData
    }
    wx.showLoading({
      title: '提交中'
    })
    wx.request({
      url: app.globalData.apiUrl + '/user/repair/create',
      method: 'POST',
      data: formData,
      header: {
        'content-type': 'application/json', // 默认值
        'token': wx.getStorageSync('token')
      },
      success: (result) => {
        if (result.data.code !== 200) {
          wx.hideLoading({})
          wx.showToast({
            title: '网络异常'
          })
          return
        }
        wx.hideLoading({})
        wx.showToast({
          title: '提交成功'
        })
        setTimeout(() => {
          wx.navigateBack({})
        }, 2000)
      }
    })
    // setTimeout(() => {
    //   wx.hideLoading({})
    //   wx.showToast({
    //     title: '提交成功'
    //   })
    // }, 1000)
    // setTimeout(() => {
    //   wx.navigateBack({})
    // }, 2500)
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