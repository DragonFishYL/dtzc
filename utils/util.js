function o() {
    wx.switchTab({
        url: "/pages/tabBar/pages/myPage/myPage"
    });
}

function e() {
    wx.hideLoading();
}

function n() {
    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "请稍后";
    wx.showToast({
        title: o,
        icon: "none",
        mask: !0,
        duration: 2e3
    });
}

require("config.js");

var t = function(o) {
    return (o = o.toString())[1] ? o : "0" + o;
}, s = function(t) {
    wx.request({
        url: t.url,
        data: t.data,
        method: t.method,
        header: t.header,
        success: function(s) {
            wx.stopPullDownRefresh(), 116 == s.data.code ? (console.log(s), e(), n("登录失效"), 
            wx.removeStorageSync("userInfo"), setTimeout(function() {
                o();
            }, 1500)) : t.success(s);
        },
        fail: function(o) {
            e(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), console.log("请求失败：", o), 
            "function" == typeof t.fail && t.fail(o);
        },
        complete: function(o) {
            "function" == typeof t.complete && t.complete(o);
        }
    });
};

module.exports = {
    formatTime: function(o) {
        return [ o.getFullYear(), o.getMonth() + 1, o.getDate() ].map(t).join("-");
    },
    showModal: function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        wx.showModal({
            title: "提示",
            content: o,
            confirmColor: "#2E6DFF",
            showCancel: !1,
            success: function(o) {}
        });
    },
    showLoading: function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "请稍后";
        wx.canIUse("showLoading") && wx.showLoading({
            title: o,
            mask: !0
        });
    },
    hideLoading: e,
    showToast: n,
    hideToast: function() {
        wx.hideToast();
    },
    json2Form: function(o) {
        var e = [];
        for (var n in o) e.push(encodeURIComponent(n) + "=" + encodeURIComponent(o[n]));
        return e.join("&");
    },
    getUserInfo: function(o) {
        wx.getStorage({
            key: "userInfo",
            success: function(e) {
                var n = e.data;
                if (n.token && "null" != n.token) o.success(e.data); else try {
                    wx.removeStorageSync("userInfo"), o.success(e.data);
                } catch (o) {}
            },
            fail: function(e) {
                console.log("获取用户信息失败");
                try {
                    wx.removeStorageSync("userInfo"), "function" == typeof o.fail && o.fail(e);
                } catch (o) {}
            }
        });
    },
    setUserInfo: function(o, e) {
        wx.setStorage({
            key: "userInfo",
            data: o,
            success: function(o) {
                e(o);
            },
            fail: function(o) {
                console.log("缓存失败：", o);
            }
        });
    },
    formatTimeYMD: function(o, e) {
        var n = [ "Y", "M", "D", "h", "m", "s" ], s = [], c = new Date(1 * o);
        s.push(c.getFullYear()), s.push(t(c.getMonth() + 1)), s.push(t(c.getDate())), s.push(t(c.getHours())), 
        s.push(t(c.getMinutes())), s.push(t(c.getSeconds()));
        for (var a in s) e = e.replace(n[a], s[a]);
        return e;
    },
    strlen: function(o, e, n) {
        for (var t = 0, s = 0, c = 0, a = 0, r = 0; r < o.length; r++) console.log("字符的code:", o.charCodeAt(r)), 
        t < e && (o.charCodeAt(r) > 127 || 94 == o.charCodeAt(r) ? (t += 2, c++) : (t++, 
        a++), s = r);
        c += Math.floor(a / 2);
        var i = o.replace(/[\r\n]/g, ""), u = e;
        c >= e / 2 && (u = s + 1), n(i.substring(0, s + 1), c, u);
    },
    authorizedUser: function(o) {
        var e = this;
        wx.showModal({
            title: "警告",
            cancelText: "不授权",
            cancelColor: "#4B4B49",
            confirmText: "授权",
            confirmColor: "#2E6DFF",
            content: "若不授权微信登陆，则无法使用少先队科技功能；点击重新获取授权，则可重新使用；若点击不授权，后期还使用小程序，需在微信【发现】--【小程序】--左滑删除【少先队科技】，重新搜索授权登陆，方可使用。",
            success: function(n) {
                n.confirm ? (console.log("用户点击授权"), wx.openSetting({
                    success: function(e) {
                        console.log("打开授权设置", e), o(e);
                    }
                })) : n.cancel && (e.hideLoading(), e.showToast("登录失败"), console.log("用户点击不授权"));
            }
        });
    },
    showModalConfirm: function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        wx.showModal({
            title: "提示",
            content: o,
            showCancel: !1,
            confirmText: "我知道了",
            confirmColor: "#2E6DFF",
            success: function(o) {
                console.log("我知道了");
            }
        });
    },
    iscanIUse: o,
    getTimeStr: function(o) {
        var e = 0, n = 0, o = o;
        e = parseInt(o / 60), o < 60 || (o < 3600 ? (e = parseInt(o / 60), o %= 60) : (e = parseInt(o / 60), 
        o %= 60, n = parseInt(e / 60), e %= 60));
        return n > 0 ? n + "时" + e + "分" + o + "秒" : e > 0 ? e + "分" + o + "秒" : o + "秒";
    },
    requestInternal: s,
    requestWithPost: function(o) {
        o.method = "POST", o.header = {
            "content-type": "application/x-www-form-urlencoded"
        }, s(o);
    }
};