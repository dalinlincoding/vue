<template>
  <div id="scroll" >
  </div>
</template>

<script>
export default {
  data () {
    document.title = "yanlin-上拉加载"
    return {
      loadmore:false
    }
  },
  mounted: function() {
    var that = this ;
    var obj = document.getElementById('scroll');
    var l = true;
    var i =0;
    this._listener = function(){
      var wh = window.scrollY;
      var sh = window.screen.height;
      var bh = obj.offsetTop;
      if(wh+sh>bh){
        // if(l && !that.lastPage){
        //   l=false;
        //   setTimeout(function(){l=true},100)
        //   that.loadMore();
        // }
        if(that.loadmore == false){
          that.loadmore = true;
          that.$emit('loadmore')
        }
      }else{
        if(that.loadmore == true){
          that.loadmore = false;
        }
      }
    }
    if(obj && obj !=undefined){
      window.addEventListener('scroll',this._listener)
    }
  }
}
</script>