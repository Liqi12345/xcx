// pages/b/b.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'abc',
    img:'',
    urls:'',
    length:2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var globalurl = app.globalData.url;
    console.log(app)
    app.a = 5;
    this.setData({
      urls:globalurl
    })
    var that = this;
    wx.request({
      url: 'http://api.bodesports.com/api/v1/Match/GetCurrentMatchList',
      data:{index:1,count:10},
      success:(res)=>{
        var imgurl = res.data.Data[0].Img.substring(26, res.data.Data[0].Img.length);
        console.log(imgurl)
        that.setData({
          img: that.data.urls + imgurl +''
        })
      },
      fail: (err) => {
        console.log(err)
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
  
  },
  navigaterto:function(){
   

   
      wx.reLaunch({
     
    
         url: '../../pages/logs1/logs1?useid=1'
        // url: '../../pages/a/a'
      })
    

  },
  navigaterto1: function () {



    wx.reLaunch({


      url: '../../pages/logs1/logs1?useid=2'
      // url: '../../pages/a/a'
    })


  }
  
})