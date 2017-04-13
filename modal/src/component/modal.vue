<template>
  <div id="modal">
    <div class="show-code" v-if="msgs.type == 1">
      <div class="cover">
      </div>
      <div class="modal-box">
        <i class="close-icon" v-on:click="close()">x</i>
        <p class="title">提示</p>
        <p>{{msgs.text}}</p>
      </div>
    </div>
    <div  v-if="msgs.type == 2">
      <div class="cover" v-on:click="close()">
        <div class="modal-box">
          <i class="close-icon" v-on:click="close()">x</i>
          <p class="title">我是子组件弹窗</p>
          <p>{{msgs.text}}</p>
          <div class="confirm-btn" v-on:click="close()">确定</div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    document.title = "yanlin-vue弹窗组件"
    return {
    }
  },
  props:['msgs'],
  mounted: function() {
    
  },
  methods: {
    close:function(){
      this.msgs.type = 0;
    }
  }
}
</script>

