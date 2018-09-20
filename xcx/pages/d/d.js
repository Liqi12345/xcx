// components/component-tag-name.js
Component({
  properties: {
    parametod:{
      type:String,
      value:1,
      observer: function (newval, oldval, changedPath){
        console.log(newval, oldval, changedPath)
      }
    }
  },
  data:{

  },
  methods: {
    ontap: function () {
      // this.triggerEvent('clicks', {}) // 只会触发 pageEventListener2
      // this.triggerEvent('clicks', {}, { bubbles: true }) // 会依次触发 pageEventListener2 、 pageEventListener1
      this.triggerEvent('clicks', {aa:5}, { bubbles: true, composed: true }) // 会依次触发 pageEventListener2 、 anotherEventListener 、 pageEventListener1


      this.triggerEvent('myclick', { aa:8 }, { bubbles: true, composed: true }) 

    },
    cs:function(e){
      console.log('cs',e)
    }
  
  }
})