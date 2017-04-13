<template>
  <div id="app">
    <modal :msgs='msgs'></modal>
    <!-- <img class="banner" src="./assets/banner.png"> -->
    <router-view class="view" v-on:msg="getMsg" ></router-view>
    <div class="footer">
      
      <a v-on:click="popInstruction()">
        <div class=footer-nav>
          父组件弹窗
        </div>
      </a>
    </div>
    
  </div>
</template>

<script>
import modal from './component/modal.vue'
export default {
  name: 'app',
  data () {
    document.title = "yanlin-弹窗"
    return {
      msgs:{},
    }
  },
  components: {modal},
  mounted: function() {
  },
  methods:{
    popInstruction:function(){
      this.msgs={
        text:'弹窗1',
        type:1,
      };
      
    },
    getMsg:function(msg){
      this.msgs=msg;
    }
  }
}
</script>

<style lang="scss">
body {
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
}
*{
  box-sizing: border-box;
}
html{
  height:100%
}
html,body{
  margin:0;
  min-height: 100%;
  width:100%;
  max-width: 800px;
  overflow:scroll;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  overflow: hidden;
}
.banner{
  width:100%
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
.footer-nav {
    display: inline-block;
    text-decoration: underline;
    color: #222;
}

.footer {
    display: flex;
    bottom: 0;
    position: fixed;
    width: 100%;
    padding: 18px;
    background: rgba(249,249,249,0.9);
    font-size: 18px;
}

.footer a {
    flex: 1;
    text-decoration: underline;
}
.close-icon{
    width: 22px;
    height: 22px;
    border-radius: 11px;
    border: 1px solid #cacaca;
    display: inline-block;
    color: #cacaca;
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 22px;
    font-style: normal;
    line-height: 18px;
    text-align: center;
    padding: 0 0 0 1px;
}
.modal-box{
  width:80%;
  margin:120px 10%;
  background:#fff;
  color:#222;
  overflow:auto;
  border-radius: 10px;
  z-index: 9999;
  position: fixed;
  padding: 20px 0 30px;
}

#home {
  padding: 26px 0;
  text-align: center;
}

h3 {
    margin: 2px;
    font-size: 15px;
    color: #222;
}

h3 span {
    color: #ff2a2a;
}
h5{
  color:#999;
  font-size: 15px; 
  margin:21px 0 13px;
}
.primary-btn{
  width:195px;
  height:49px;
  font-size: 18px;
  font-weight: 700;
  color:#fff;
  border-radius: 25px;
  border:0 ;
  background: #ff2a2a;
  margin: 0 auto;
  line-height: 49px;
  position: relative;
}
hr {
    margin: 15px 0;
    color: #f0f0f0;
    border: #f0f0f0 solid;
    border-width: 1px 0 0 0;
}
.group-member-list{
  width:100%;
  padding:0 30px;
  overflow:auto;
}
.group-member-list .member-meta{
  width:33%;
  padding:30px 0 18px;
  float:left;
  text-align: center;
  position: relative;
}
.group-member-list .member-meta img{
  width:80%;
  max-width: 66px;
  max-height: 66px;
  border-radius: 50%;
}
#add-count{
    position: relative;
    color: #ff2a2a;
    display:none;
}
.ani{
  display:block!important;
  animation:anim .6s ease forwards;
  -webkit-animation:anim .6s ease forwards;
}

@keyframes anim {
    0% {
        opacity: 0;
        top:-65px;
        transform:scale(1,1)
    }
    20% {
        opacity: 1;
    }
    80% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        top:-110px;
        transform:scale(1.5,1.5)
    }
}

@-webkit-keyframes anim {
    0% {
        opacity: 0;
        top:-65px;
        transform:scale(1,1)
    }
    20% {
        opacity: 1;
    }
    80% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        top:-110px;
        transform:scale(1.5,1.5)
    }
}
.set-img {
    height: 66px;
    width: 66px;
    border-radius: 50%;
    border: 1px solid #fe6e27;
    padding: 9px 9px;
    box-sizing: border-box;
    font-size: 18px;
    color: #fe6e27;
    margin:0 auto;
}
.member-meta .name {
    color: #ff2a2a;
    font-size: 12px;
}
.group-list li:nth-child(2n) {
    background: #f0f0f0;
}
.group-list li:nth-child(2n) .name {
    color:#555;
}
.group-list li{
  padding-top:14px;
  position: relative;
}
.cover img {
    width: 65%;
    margin: 40px 30px 0 0;
    float: right;
}
.loading {
  width:100px;
  margin:0 auto;
  text-align: left
}
.loading span{
  display:inline-block;
  animation:load 2s linear infinite;
  -webkit-animation:load 2s linear infinite;
  white-space: nowrap;
  overflow:hidden;
}
.cover {
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.7);
    z-index: 999;
    top: 0;
    left: 0;
}
.code-img {
    z-index: 9999;
    position: absolute;
    width: 100%;
    top: 0;
    margin-top: 24%;
}

.show-code h3 {
    color: #fff;
    font-size: 20px;
}
.total {
    margin-bottom: 50px;
}

@keyframes load {
    0% {
        width:65px
    }
    100% {
        width:100px
    }
}

@-webkit-keyframes load {
    0% {
        width:65px
    }
    100% {
        width:100px
    }
}
.show-code h1 {
    color: #fac700;
    font-size: 30px;
    margin-bottom: 10%;
}
.head-icon {
    border-radius: 50%;
    margin: 20px;
}
img.is-winning{
    position: absolute;
    width: 18%;
    top: 8px;
    right: 20px;
}
span.is-winning {
    display: inline-block;
    background: #fbae38;
    color: #fff;
    padding: 0 5px;
    border-radius: 15px;
    transform: scale(0.4,0.4);
    height: 34px;
    width: 70px;
    font-size: 24px;
    line-height: 34px;
    position: absolute;
    bottom: 30px;
    right: 0px;
}
</style>
