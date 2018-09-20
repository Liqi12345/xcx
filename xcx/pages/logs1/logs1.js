var app = getApp();


// pages/logs1/logs1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    text:'跳转'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.a)
    this.id = typeof options.useid != 'undefined'?  options.useid : '3';
    this.setData({
      id:this.id
    })
    
  },
  scan:function(){
    wx.scanCode({
      success:(res)=>{
        console.log(res)
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
    console.log(8)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(9)
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
      wx.stopPullDownRefresh({
        success: function (res) {
          console.log(res)

        },
        fail: function (err) {
          console.log(err)
        },
        complete: function () {
          console.log(5)
        } 
    })
    // wx.stopPullDownRefresh()

  },
  

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if(res.form == 'button'){
      console.log(res.target)
    }
    return{
      title:'测试',
      path:'pages/index/index',
      imageUrl:'../../image/06.png'
    }
  },
   onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  navigaterto:function(){
    if(this.data.id == 1){
      wx.redirectTo({
        url: '../../pages/a/a'
      })
    }else{
      wx.navigateTo({
        url: '../../pages/c/c'
      })
    }
    
  },
  so:function(){
    // wx.request({
    //   url: 'http://api.bodesports.com/api/v1/Match/GetRecommendMatchItem',
    //   method:'GET', //默认值
    //   data:{
    //     index:1,
    //     count:5
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {  //成功的回调
    //     console.log(res)
    //   },
    //   fail: function (err) {  //失败的回调

    //     console.log(err)
    //   },
    //   complete:function(){  //成功失败都经过的回调

    //   }
    // })

    
    //console.log(1)
    wx.chooseImage({
      success: function (res) {
        console.log(res)
        var tempFilePaths = res.tempFilePaths
        var uploadTask = wx.uploadFile({
          url: 'http://api.bodesports.com/api/v1/Uploader/UploadImg', //仅为示例，非真实的接口地址
          method:'POST',
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            console.log(data)
          }
        })

        uploadTask.onProgressUpdate((res) => {
          console.log('上传进度', res.progress)
          console.log('已经上传的数据长度', res.totalBytesSent)
          if (res.totalBytesExpectedToSend > 700000) { //预期需要上传的数据总长度
            uploadTask.abort()
          }
          console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
        })

      }
    })
    

  }
})