// pages/my/house/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    community:{},
    real_name:'',
    room:"",
    role:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      community:JSON.parse(options.data)
    })
  },
  onChangeName(event){
    this.setData({
      real_name:event.detail
    })
  },
  onChangeRoom(event){
    this.setData({
      room:event.detail
    })
  },
  onChange(event) {
    this.setData({
      role:event.detail
    });
  },
  onClickSubmit(){
    console.log(this.data.real_name)
    if (this.data.real_name == '' || !this.data.real_name || this.data.real_name == null  || this.data.real_name == undefined) {
     return wx.showToast({
        title: '请输入真实姓名',
        icon:"none"
      })
    }
    if (this.data.room == "" || !this.data.room || this.data.room == null  || this.data.room == undefined) {
      return wx.showToast({
        title: '请输入楼栋单元门牌号',
        icon:"none"
      })
    }
    if (this.data.role === 0 || !this.data.role || this.data.role == null  || this.data.role == undefined) {
      return wx.showToast({
        title: '请选择身份',
        icon:"none"
      })
    }
    const data = {
      community_id:this.data.community.id,
      role:parseInt(this.data.role),
      real_name:this.data.real_name,
      room:this.data.room
    }
    console.log(data)
    wx.showLoading({
      title: '加载中',
      mask:true
    })
  
    wx.request({
      url: getApp().globalData.apiUrl + '/user/setting/community',
      method: 'POST',
      data: data,
      header: {
        'content-type': 'application/json', // 默认值
        'token': wx.getStorageSync('token')
      },
      success:(res) => {        
        wx.hideLoading()
        console.log(res)
        if (res.data.code == 200) {
          return wx.showToast({
            title: "添加成功",
            icon:"none"
          })
        }else{
          return wx.showToast({
            title: res.data.msg,
            icon:"none"
          })
        }
      }
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