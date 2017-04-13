export const services = {
  config:{
    // "apiUrl": "http://fxl.fangxuele.com/fxl/m/api/v2",
    // "wxApiUrl": "http://fxlwx.fangxuele.com/fxlwx2/wechat/api/core",
    // "wxRedirectUrl": "http://m.fangxuele.com/t/#/weixin",
    // "wxAppId": "wx0bb9a5e580336363",
    "apiUrl": "http://m.fangxuele.com:8084/fxl/m/api/v2",
    "wxApiUrl": "http://fxlwxtest.fangxuele.com/fxlwx2/wechat/api/core",
    "wxRedirectUrl": "http://mtest.fangxuele.com/unite",
    "wxAppId": "wxb7b8e20def52e445",
    "wxJssdk":false
  },
  getMyUniteGroupMain:function(data,that,cb){
    that.$http.post(this.config.apiUrl+'/group/getMyUniteGroupMain', data, {
      headers: {

      },
      emulateJSON: true
    }).then(cb)
  },
  getMyUniteGroupList:function(data,that,cb){
    that.$http.post(this.config.apiUrl+'/group/getMyUniteGroupList', data, {
      headers: {

      },
      emulateJSON: true
    }).then(cb)
  },
  createGroup:function(data,that,cb){
    that.$http.post(this.config.apiUrl+'/group/createGroup', data, {
      headers: {

      },
      emulateJSON: true
    }).then(cb)
  },
  getGroupInfo:function(data,that,cb){
    that.$http.post(this.config.apiUrl+'/group/getGroupInfo', data, {
      headers: {

      },
      emulateJSON: true
    }).then(cb)
  },
  joinGroup:function(data,that,cb){
    that.$http.post(this.config.apiUrl+'/group/joinGroup', data, {
      headers: {

      },
      emulateJSON: true
    }).then(cb)
  },
  getAwardList:function(data,that,cb){
    that.$http.post(this.config.apiUrl+'/group/getAwardList', data, {
      headers: {

      },
      emulateJSON: true
    }).then(cb)
  },
  checkLogin:function(that){
    var jsurl = window.location.href;
    var code = this.getParam("code");
    var ser = this;
    console.log(jsurl)
    var wxOauthUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid={appid}&redirect_uri={redirect_url}&response_type=code&scope=snsapi_userinfo&state={STATE}#wechat_redirect";
        wxOauthUrl = wxOauthUrl.replace("{appid}", this.config.wxAppId);
        wxOauthUrl = wxOauthUrl.replace("{redirect_url}", encodeURIComponent(this.config.wxRedirectUrl));
        wxOauthUrl = wxOauthUrl.replace("{STATE}", encodeURIComponent(jsurl));
    if (code === null && !(localStorage.fxlUserInfo && localStorage.fxlUserInfo!=undefined)) {
        window.location.href = wxOauthUrl;
    }else{
      that.$http.post(this.config.wxApiUrl+'/getOAuth2UserInfo',{'code':code}, {
        headers: {

        },
        emulateJSON: true
      }).then(function(response,xml){
          var wxdata =  response.body ;
          if (wxdata.success) {
              wxdata.data.userInfo.clientType = 1;
              that.$http.post(ser.config.apiUrl+'/user/wxLogin',wxdata.data.userInfo, {
                headers: {

                },
                emulateJSON: true
              }).then(function (response, xml) {
                if(response.body.success){
                    window.localStorage.setItem("fxlUserInfo", JSON.stringify(response.body.data.userInfo));
                    window.location.href = ser.getParam('state');
                }else {
                    window.location.href = wxOauthUrl;
                }
              })
            }else {
                  window.location.href = wxOauthUrl;
              }
      })
    }
  },
  getJssdk:function(Info,that,flag){
    var jsurl = window.location.href.split('#')[0];
    var shareInfo = Info;
    // console.log(shareInfo);
    jsurl = encodeURIComponent(jsurl);
    var url = this.config.apiUrl + "/user/getWxJssdk?" +'url=' + jsurl;
    var _ready=false;
    that.$http.jsonp(url, {}, {
      headers: {

      },
      emulateJSON: true
    }).then(function (res) {
      // console.log(res.data);
        if (res.data.success) {
          if (_ready === false) {
            var config = {
                  debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                  appId: res.data.data.jssdkParam.appId, // 必填，公众号的唯一标识
                  timestamp: res.data.data.jssdkParam.timestamp, // 必填，生成签名的时间戳
                  nonceStr: res.data.data.jssdkParam.nonceStr, // 必填，生成签名的随机串
                  signature: res.data.data.jssdkParam.signature,// 必填，签名，见附录1
                  jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem',
                  'showAllNonBaseMenuItem', 'translateVoice', 'startRecord', 'stopRecord', 'onRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice', 'uploadVoice', 'downloadVoice',
                  'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'getNetworkType', 'openLocation', 'getLocation', 'hideOptionMenu', 'showOptionMenu', 'closeWindow',
                  'scanQRCode', 'chooseWXPay', 'openProductSpecificView', 'addCard', 'chooseCard', 'openCard']
                  // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                };
              wx.config(config);
            }
            wx.ready(function(){
              if (wx) {
                //分享到朋友圈
                wx.onMenuShareTimeline({
                    title: shareInfo.title, // 分享标题
                    desc: shareInfo.brief, // 分享描述
                    link: shareInfo.url, // 分享链接
                    imgUrl: shareInfo.imageUrl, // 分享图标
                    success: function () {
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                      }
                    });
                //分享给好友
                wx.onMenuShareAppMessage({
                    title: shareInfo.title, // 分享标题
                    desc: shareInfo.brief, // 分享描述
                    link: shareInfo.url, // 分享链接
                    imgUrl: shareInfo.imageUrl, // 分享图标
                    success: function () {

                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                      }
                    });
                //分享到QQ
                wx.onMenuShareQQ({
                    title: shareInfo.title, // 分享标题
                    desc: shareInfo.brief, // 分享描述
                    link: shareInfo.url, // 分享链接
                    imgUrl: shareInfo.imageUrl, // 分享图标
                    success: function () {

                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                      }
                    });
                //分享到微博
                wx.onMenuShareWeibo({
                    title: shareInfo.title, // 分享标题
                    desc: shareInfo.brief, // 分享描述
                    link: shareInfo.url, // 分享链接
                    imgUrl: shareInfo.imageUrl, // 分享图标
                    success: function () {

                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                      }
                    });
                //分享到QQ空间
                wx.onMenuShareQZone({
                    title: shareInfo.title, // 分享标题
                    desc: shareInfo.brief, // 分享描述
                    link: shareInfo.url, // 分享链接
                    imgUrl: shareInfo.imageUrl, // 分享图标
                    success: function () {

                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                      }
                    });
              } else {
                that.getJssdk(shareInfo,that);
              }
            });

            wx.error(function (err) {
              console.log(err)
            });
          setTimeout(function(){
              
            },300)
          } else {
              console.log(err)
          }
      }, function(res) {
        // 这里是处理错误的回调
        console.log(res);
      });
    },
    getWxUserInfo: function (code,that) {
      var now = new Date();
      now = now.toString().substring(15, 25);
      var str = '/n__time=' + now;
      var url = this.config.wxApiUrl + "/getOAuth2UserInfo?" +
          "code=" + code;
      // $http的post请求方式
      return that.$http.jsonp(url, {}, {
        headers: {

        },
        emulateJSON: true
      })
    },
    getParam:function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
          return unescape(r[2]);
        }else{
          return null;
        }
    }

}
export default {services}