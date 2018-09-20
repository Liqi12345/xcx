// pages/c/c.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tips: [{inputValue: '0'},{inputValue: '1'}],
  },
  onUnload: function () {
    var pages = getCurrentPages();
    var prev = pages[pages.length - 2];
    prev.setData({
      text: '返回'
    })
  },
  
  bindKeyInput: function (event) {
    var index = event.currentTarget.dataset.id;
    var val = event.detail.value;
  
    var a = "tips[" + index + "].inputValue";
    this.setData({
      ["tips[" + index + "].inputValue"]: val
    })
    console.log(this.data.tips[0].inputValue)
     //console.log(tips[0].inputValue)




  }


})