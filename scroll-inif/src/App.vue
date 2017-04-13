<template>
  <div id="app">
    <!-- <img class="banner" src="./assets/banner.png"> -->
    <router-view class="view"  ></router-view>
    
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    document.title = "yanlin-弹窗"
    return {
      msgs:{},
    }
  },
  components: {},
  mounted: function() {
  },
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
</style>
