<template>
  <div id="home">
    <h2>延琳笔记</h2>
    <h3>vue上拉加载组件</h3>
    <p></p><p></p><p></p>
    <h3>I'm a list</h3>
    
    <ul class="group-list" v-if='groupList.length>0'>
      <li v-for="(group,index) in groupList"  v-bind:class="">
        <div>
          <span>第{{ index+1 }}团</span>
          <br/>
          <span>团主：{{group.ownerName}}</span><span>图案号：{{group.groupNumber}}</span>
        </div>
      </li>
    </ul>
    <scroll v-on:loadmore="loadMore"></scroll>
    <div class="loading" v-if='showLoading'>
      <span>正在加载&nbsp;.&nbsp;.&nbsp;.&nbsp;.</span>
    </div>
    <div class="total" v-if='params.lastPage'>------您共有{{ params.total }}团------</div>
  </div>
</template>

<script>
import scroll from './scroll.vue'
export default {
  data () {
    document.title = "放学了－拼团"
    return {
      myGroupEventInfo: {},
      groupListAll:[
        {
          "ownerName" : "yanlin",
          "groupNumber" : "10002",
        }, {
          "ownerName" : "延琳",
          "groupNumber" : "134820",
        }, {
          "ownerName" : "yanlin",
          "groupNumber" : "128594",
        }, {
          "ownerName" : "妍琳",
          "groupNumber" : "43589",
        }, {
          "ownerName" : "yanlin",
          "groupNumber" : "85304",
        }, {
          "ownerName" : "延琳",
          "groupNumber" : "134820",
        }, {
          "ownerName" : "yanlin",
          "groupNumber" : "128594",
        }, {
          "ownerName" : "妍琳",
          "groupNumber" : "43589",
        }, {
          "ownerName" : "yanlin",
          "groupNumber" : "85304",
        }, {
          "ownerName" : "延琳",
          "groupNumber" : "134820",
        }, {
          "ownerName" : "yanlin",
          "groupNumber" : "128594",
        }, {
          "ownerName" : "妍琳",
          "groupNumber" : "43589",
        }, {
          "ownerName" : "yanlin",
          "groupNumber" : "85304",
        }, {
          "ownerName" : "延琳",
          "groupNumber" : "134820",
        }, {
          "ownerName" : "yanlin",
          "groupNumber" : "128594",
        }, {
          "ownerName" : "妍琳",
          "groupNumber" : "43589",
        }, {
          "ownerName" : "yanlin",
          "groupNumber" : "85304",
        }
      ],
      params:{
        lastPage:false,
        total:'',
        offset:0,
        pageSize:10
      },
      groupList:[],
      showcount:false,
      showLoading:false
    }
  },
  components:{scroll},
  mounted: function() {
    this.groupList = this.groupListAll.slice(0, this.params.pageSize) 
    this.params.offset = this.params.pageSize;
    this.params.lastPage = this.params.pageSize >= this.groupListAll.length
    this.params.total = this.groupListAll.length
    window.scrollBy(0,0);
  },
  methods: {
    loadMore:function(){
      if(!this.params.lastPage){
        this.showLoading = true;
        this.params.lastPage = true;
        var that = this;
        setTimeout(function(){
          that.showLoading = false;
          that.params.lastPage = that.params.offset+that.params.pageSize > that.params.total;
          var nxOffset = that.params.lastPage ? that.params.total:that.params.offset+that.pageSize;
          var groupList = that.groupListAll.slice(that.params.offset-1, nxOffset) 
          that.params.offset = nxOffset;
          for(var i in groupList){
            that.groupList.push(groupList)
          }
        },2000)
      }
    }
  }
}
</script>

<style lang="scss">
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