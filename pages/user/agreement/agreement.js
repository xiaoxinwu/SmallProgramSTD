// pages/user/agreement/agreement.js
const app = getApp();

const action = require('../../../api/action.js')
const util = require('../../../utils/util.js')
const ob = require('../../../utils/observer.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    html: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    action.getzcxy().then(res=>{
      this.setData({
        html: res
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

})