var initData = '张小花'
var onetep1 = '我要苟住'
var onetep2 = '我要组织'
var onetep3 = '我要拼了'
var hanshu = '离自爆还有&天'
var extraLine = [];
Page({
  data: {
    text: initData,
    text1: onetep1,
    text2: onetep2,
    text3: onetep3,
    text5: hanshu
  },//text的内容
  qd: function () {
    wx.navigateTo({
      url: '../setting/sign/sign',
    })
  },
  cz: function () {
    wx.navigateTo({
      url: '../setting/chongzhi/chongzhi',
    })
  },
  fk: function () {
    wx.navigateTo({
      url: '../setting/feedback/feedback',
    })
  },
  gy: function () {
    wx.navigateTo({
      url: '../setting/guanyu/guanyu',
    })
  },
  cj: function () {
    wx.cloud.callFunction({
      // 云函数名称
      name: 'addCollection',
      // 传给云函数的参数
      complete:res=>{
        console.log('callFunction test resulit:',res)
      }
    })
  }
})