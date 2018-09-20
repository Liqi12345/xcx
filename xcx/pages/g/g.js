// pages/g/g.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current_width:50,
    num:1
  },
  changeinput(e){
    var text_length = e.detail.cursor;
    if (text_length < 10) {
      this.setData({
        current_width: 50 
      })

    } else{
      this.setData({
        num:text_length / 10
      })

      this.setData({
        current_width:50 * this.data.num + 30
      })
    }
  }
})