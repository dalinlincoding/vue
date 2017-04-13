<template>
  <div id="invite">
    <div v-on:click="pop()">
      弹出
    </div>
  </div>
</template>

<script>
import Pub from '../public.js'
export default {
  data () {
    document.title = "放学了－拼团"
    return {
    }
  },
  mounted: function() {
     
  },
  methods: {
    pop:function(){
      var msg =  {
        text:'弹窗2',
        type:2,
      }
      this.$emit('msg',msg);
    }
  }
}
</script>

<style lang="scss">
#invite{
  padding:120px 0 0;
}
.confirm-btn {
    width: 100px;
    height: 36px;
    line-height: 36px;
    color: #fff;
    background: #ff2a2a;
    margin: 20px auto 0;
    border-radius: 10px;
}
</style>