// pages/other/store-order-detail/store-order-detail.js
const app = getApp();

const action = require('../../../api/action.js')
const util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderId: '',
    order: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      orderId: options.id
    })
    this.initPage()
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

  initPage() {
    action.storeOrderDetail({
      orderId: this.data.orderId
    }).then(res => {
      let order = res.data;
      order.statusText = util.getStatusText(order.orderStatus)
      this.setData({
        order: order
      })
    })
  },

  //收货
  postReceiving(e) {
    let orderno = e.currentTarget.dataset.orderno;
    action.storeOrderReceive({
      orderNo: orderno
    }).then(res => {
      wx.showToast({
        title: '收货完成',
      })
    })
  }

  
})