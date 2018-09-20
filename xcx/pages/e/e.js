Component({
  data:{
    val:'我是e传给d的值'
  },
  methods:{
    cs1:function(e){
      console.log('cs1',e)
      
    },

    ddd: function (e) {
      console.log('d', e),
      this.setData({
        val: e.detail.aa
      })
    },
  }
})