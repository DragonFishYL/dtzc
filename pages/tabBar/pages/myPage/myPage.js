var t, a = getApp().globalData.api, o = getApp().globalData.util;

Page({
    data: {
        userInfo: "",
        phone: "",
        isPhone: !1,
        subtitle: "暂无说明",
        code: ""
    },
    onLoad: function(a) {
        getApp().globalData.mta.Page.init(), t = this, wx.login({
            success: function(a) {
                console.log(a), t.setData({
                    code: a.code
                });
            }
        });
    },
    onShow: function() {
        o.getUserInfo({
            success: function(a) {
                console.log(a);
                var o = "";
                a.company || a.job ? !a.company && a.job ? o = a.job : a.company && !a.job ? o = a.company : a.company && a.job && (o = a.company + "·" + a.job) : o = "暂无说明", 
                t.setData({
                    userInfo: a,
                    subtitle: o
                });
            },
            fail: function(a) {
                console.log("获取用户信息失败：", a), t.setData({
                    userInfo: "",
                    subtitle: "暂无说明"
                });
            }
        });
    },
    getUserInfo: function(t) {
        console.log(t);
        var e = t.detail.encryptedData, n = t.detail.iv;
        if (n) {
            var s = this;
            o.showLoading("登录中..."), wx.login({
                success: function(t) {
                    var c = {
                        code: t.code,
                        encryptedData: e,
                        iv: n
                    };
                    console.log("微信登录：", c), a.wxLogin({
                        data: c,
                        success: function(t) {
                            console.log("微信登录res：", t);
                            var a = t.data.code;
                            if (o.hideLoading(), 0 == a) {
                                var e = t.data.data;
                                s.setData({
                                    userInfo: e
                                }), o.setUserInfo(e, function(t) {
                                    console.log("缓存成功：", t);
                                });
                            } else o.showToast("登录失败");
                        }
                    });
                }
            });
        } else o.showToast("登录失败");
    },
    headClick: function(t) {
        getApp().globalData.mta.Event.stat("perdetailbtn", {}), wx.navigateTo({
            url: "/pages/my/pages/myDataPage/myDataPage"
        });
    },
    needsClick: function() {
        getApp().globalData.mta.Event.stat("permyrequirmentbtn", {});
    },
    messageClick: function() {
        getApp().globalData.mta.Event.stat("permessagebtn", {});
    },
    helpClick: function() {
        getApp().globalData.mta.Event.stat("perhelpbtn", {});
    },
    feedbackClick: function() {
        getApp().globalData.mta.Event.stat("perfeedbackbtn", {});
    },
    contactClick: function() {
        getApp().globalData.mta.Event.stat("percontactusbtn", {});
    },
    showModalConfirm: function() {
        o.showModalConfirm("请登录");
    }
});