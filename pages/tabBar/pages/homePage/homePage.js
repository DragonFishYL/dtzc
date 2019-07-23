var a, e = getApp().globalData.api, t = getApp().globalData.util;

Page({
    data: {
        userInfo: "",
        bannerImages: [ {
            img: "/images/home_banner1.png"
        }, {
            img: "/images/home_banner2.png"
        }, {
            img: "/images/home_banner3.png"
        } ],
        bannerCurrent: 0,
        solutionList: [ 1, 2, 3, 4, 5, 6 ],
        caseList: [],
        serviceList: [ "/images/logo1.png", "/images/logo2.png", "/images/logo3.png", "/images/logo4.png", "/images/logo5.png", "/images/logo6.png", "/images/logo7.png", "/images/logo8.png", "/images/logo9.png" ],
        feedbackCurrent: 0,
        feedbackList: [ {
            content: "设计水准非常高，服务也很到位，一轮提案就通过根本不用修改，我是一个追求设计品质的人要求特别多且复杂，项目经理第一时间沟通，非常干脆利落的知道了我的需求并作出分析，并且按照我的想法作出了很高水准的设计。我们都很满意！",
            img: "/images/uc_icon.png",
            name: "UC浏览器",
            job: "产品运营部"
        }, {
            content: "我们选择了少先队团队帮助策划线上营销H5活动，创意策划和开发效果很满意，不用自己招聘全职营销&技术团队，降低项目成本，感谢少先队团队耐心的沟通、及时的反馈与帮助，团队很专业。",
            img: "/images/qhkj_icon.png",
            name: "千核科技",
            job: "市场部"
        }, {
            content: "少先队科技为我们提供一体化的技术解决方案，帮助我们完成产品快速迭代、互联网转型和数字化运营，体现了高质量的服务品质。",
            img: "/images/oupai_icon.png",
            name: "欧派家居",
            job: "电商运营部"
        } ]
    },
    onLoad: function(e) {
        getApp().globalData.mta.Page.init(), a = this;
    },
    onShow: function() {
        this.getFindPage(), this.getSolution(), this.getCases(), t.getUserInfo({
            success: function(e) {
                console.log(e), a.setData({
                    userInfo: e
                });
            },
            fail: function(e) {
                a.setData({
                    userInfo: ""
                });
            }
        });
    },
    solutionError: function(a) {
        if (console.log("图片加载失败：", a), "error" == a.type) {
            var e = a.currentTarget.dataset.errorindex, t = this.data.solutionList;
            t[e].logo = "/images/plan_icon_default.png", this.setData({
                solutionList: t
            });
        }
    },
    bannerClick: function(a) {
        var e = a.currentTarget.dataset.index, t = a.currentTarget.dataset.type;
        console.log(a), getApp().globalData.mta.Event.stat("homebanner", {
            item: e
        });
        var n = a.currentTarget.dataset.src;
        0 == t ? wx.navigateTo({
            url: n
        }) : 1 == t ? wx.navigateToMiniProgram({
            appId: n
        }) : 2 == t && n.length > 0 && wx.navigateTo({
            url: "/pages/my/pages/webView/webView?src=" + n
        });
    },
    getFindPage: function() {
        e.findPage({
            data: {
                pageNumber: 1,
                pageSize: 10
            },
            success: function(e) {
                console.log(e), 0 == e.data.code && a.setData({
                    bannerImages: e.data.data.list
                });
            }
        });
    },
    getSolution: function() {
        wx.showNavigationBarLoading(), e.getSolution({
            data: {
                limitSize: 6
            },
            success: function(e) {
                wx.hideNavigationBarLoading(), 0 == e.data.code && a.setData({
                    solutionList: e.data.data.list
                });
            }
        });
    },
    getCases: function() {
        wx.showNavigationBarLoading(), e.casesFindPage({
            data: {
                pageSize: 6
            },
            success: function(e) {
                if (wx.hideNavigationBarLoading(), 0 == e.data.code) {
                    var t = e.data.data.list;
                    a.setData({
                        caseList: t
                    });
                }
            }
        });
    },
    submitDemandClick: function() {
        getApp().globalData.mta.Event.stat("homesumbitreqbtn", {}), getApp().globalData.mta.Event.stat("tijiaoxuqiu", {
            submitdemandbtn: "首页_提交需求"
        }), wx.navigateTo({
            url: "/pages/home/pages/submitDemandOnePage/submitDemandOnePage"
        });
    },
    immediatelysubmitDemandClick: function() {
        getApp().globalData.mta.Event.stat("hometrybtn", {}), getApp().globalData.mta.Event.stat("tijiaoxuqiu", {
            submitdemandbtn: "首页_即刻体验"
        }), wx.navigateTo({
            url: "/pages/home/pages/submitDemandOnePage/submitDemandOnePage"
        });
    },
    planClick: function() {
        getApp().globalData.mta.Event.stat("homesolutionbtn", {}), wx.navigateTo({
            url: "/pages/home/pages/planPage/planPage"
        });
    },
    planItemClick: function(a) {
        var e = a.currentTarget.dataset.index, t = this.data.solutionList[e];
        getApp().globalData.mta.Event.stat("homesolutionitem", {
            title: t.title
        }), wx.navigateTo({
            url: "/pages/home/pages/planDetailPage/planDetailPage?id=" + t.id
        });
    },
    caseItemClick: function(a) {
        var e = a.currentTarget.dataset.index, t = this.data.caseList[e];
        getApp().globalData.mta.Event.stat("homecaseitem", {
            title: t.name
        }), wx.navigateTo({
            url: "/pages/home/pages/caseDetailPage/caseDetailPage?id=" + t.id
        });
    },
    caseClick: function() {
        getApp().globalData.mta.Event.stat("homeourcasebtn", {}), wx.navigateTo({
            url: "/pages/home/pages/casePage/casePage"
        });
    },
    moreCaseClick: function() {
        getApp().globalData.mta.Event.stat("homemorecasebtn", {}), wx.navigateTo({
            url: "/pages/home/pages/casePage/casePage"
        });
    },
    bannerchange: function(a) {
        var e = a.detail.current;
        this.setData({
            bannerCurrent: e
        });
    },
    feedbackchange: function(a) {
        var e = a.detail.current;
        this.setData({
            feedbackCurrent: e
        });
    },
    feedbackLeftClick: function() {
        var a = this.data.feedbackCurrent;
        (a -= 1) < 0 ? a = 0 : a >= this.data.feedbackList.length && (a = this.data.feedbackList.length - 1), 
        this.setData({
            feedbackCurrent: a
        });
    },
    feedbackRightClick: function() {
        var a = this.data.feedbackCurrent;
        (a += 1) < 0 ? a = 0 : a >= this.data.feedbackList.length && (a = this.data.feedbackList.length - 1), 
        this.setData({
            feedbackCurrent: a
        });
    },
    getUserInfo: function(a) {
        console.log(a);
        var n = a.detail.encryptedData, i = a.detail.iv;
        if (i) {
            var o = this;
            t.showLoading("登录中..."), wx.login({
                success: function(a) {
                    var s = {
                        code: a.code,
                        encryptedData: n,
                        iv: i
                    };
                    console.log("微信登录：", s), e.wxLogin({
                        data: s,
                        success: function(a) {
                            console.log("微信登录res：", a);
                            var e = a.data.code;
                            if (t.hideLoading(), 0 == e) {
                                var n = a.data.data;
                                o.setData({
                                    userInfo: n
                                }), t.setUserInfo(n, function(a) {
                                    console.log("缓存成功：", a);
                                });
                            } else t.showToast("登录失败");
                        }
                    });
                }
            });
        } else t.showToast("登录失败");
    },
    onShareAppMessage: function() {
        return {
            title: "有想法，我们用技术帮你实现。",
            imageUrl: "/images/share_cover.png",
            success: function(a) {},
            fail: function(a) {}
        };
    }
});