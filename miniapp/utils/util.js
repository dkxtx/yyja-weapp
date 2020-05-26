const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const qiniuUpload = (imagePath, success) => {
  console.log('imagePath === ', imagePath)
  //服务器获取 七牛云token
  wx.request({
    url: 'https://miniapp.cihangca.com' + '/admin/qiniutoken',
    data: {},
    header: { 'content-type': 'application/json' },
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: (result) => {
      const token = result.data.token
      wx.uploadFile({
        url: 'https://up-z0.qiniup.com',
        filePath: imagePath[0],
        name: 'file',
        header: {
          "Content-Type": "multipart/form-data"
        },
        formData: {
          token: token
        },
        success: (result) => {
          const data = JSON.parse(result.data)
          success('http://aixingfucdn.mayunio.com/' + data.key)
        },
        fail: () => { },
        complete: () => { }
      });
    },
    fail: () => { },
    complete: () => { }
  });
}

module.exports = {
  formatTime: formatTime,
  qiniuUpload: qiniuUpload
}
