var t = require("utils/mta_analysis.js");

App({
    onLaunch: function(a) {
        t.App.init({
            appID: "500604485",
            lauchOpts: a,
            eventID: "500604486",
            statPullDownFresh: !0,
            statShareApp: !0,
            statReachBottom: !0
        });
    },
    globalData: {
        util: require("utils/util.js"),
        api: require("utils/api.js"),
        mta: t
    }
});