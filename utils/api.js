function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("util.js")), a = e(require("config.js"));

module.exports = {
    findPage: function(e) {
        e.url = a.default.MainUrl + "/api/advertisement/findPage", t.default.requestWithPost(e);
    },
    wxLogin: function(e) {
        e.url = a.default.MainUrl + "/api/login/wechat", t.default.requestWithPost(e);
    },
    getPhone: function(e) {
        e.url = a.default.MainUrl + "/api/common/getPhone", t.default.requestWithPost(e);
    },
    getWriteUserDetail: function(e) {
        e.url = a.default.MainUrl + "/api/my/userinfo/save", t.default.requestWithPost(e);
    },
    getDemandSave: function(e) {
        e.url = a.default.MainUrl + "/api/demand/save", t.default.requestWithPost(e);
    },
    getAuthCode: function(e) {
        e.url = a.default.MainUrl + "/api/common/getAuthCode", t.default.requestWithPost(e);
    },
    getMyDemand: function(e) {
        e.url = a.default.MainUrl + "/api/my/demand", t.default.requestWithPost(e);
    },
    getMyMessage: function(e) {
        e.url = a.default.MainUrl + "/api/my/message", t.default.requestWithPost(e);
    },
    feedbackSave: function(e) {
        e.url = a.default.MainUrl + "/api/my/feedback/save", t.default.requestWithPost(e);
    },
    getSolution: function(e) {
        e.url = a.default.MainUrl + "/api/solution", t.default.requestWithPost(e);
    },
    getCases: function(e) {
        e.url = a.default.MainUrl + "/api/cases", t.default.requestWithPost(e);
    },
    casesFindPage: function(e) {
        e.url = a.default.MainUrl + "/api/cases/findPage", t.default.requestInternal(e);
    },
    getCasesType: function(e) {
        e.url = a.default.MainUrl + "/api/cases/type", t.default.requestWithPost(e);
    },
    authCode: function(e) {
        e.url = a.default.MainUrl + "/api/common/authCode", t.default.requestWithPost(e);
    },
    caseDetail: function(e) {
        e.url = a.default.MainUrl + "/api/cases/detail", t.default.requestWithPost(e);
    },
    solutionDetail: function(e) {
        e.url = a.default.MainUrl + "/api/solution/detail", t.default.requestWithPost(e);
    },
    cardFindPage: function(e) {
        e.url = a.default.MainUrl + "/blessingCard/api/sxdBlessing/card/findPage", t.default.requestInternal(e);
    },
    blessingContentUpdate: function(e) {
        e.url = a.default.MainUrl + "/blessingCard/api/sxdBlessing/card/blessingContent/update", 
        t.default.requestInternal(e);
    },
    cardSendSave: function(e) {
        e.url = a.default.MainUrl + "/blessingCard/api/sxdBlessing/card/send/save", t.default.requestWithPost(e);
    },
    cardSendFindPage: function(e) {
        e.url = a.default.MainUrl + "/blessingCard/api/sxdBlessing/card/send/findPage", 
        t.default.requestInternal(e);
    },
    cardGetFindPage: function(e) {
        e.url = a.default.MainUrl + "/blessingCard/api/sxdBlessing/card/get/findPage", t.default.requestInternal(e);
    },
    cardGetSave: function(e) {
        e.url = a.default.MainUrl + "/blessingCard/api/sxdBlessing/card/get/save", t.default.requestWithPost(e);
    },
    cardSendDetail: function(e) {
        e.url = a.default.MainUrl + "/blessingCard/api/sxdBlessing/card/send/detail", t.default.requestInternal(e);
    },
    cardGetDetail: function(e) {
        e.url = a.default.MainUrl + "/blessingCard/api/sxdBlessing/card/get/detail", t.default.requestInternal(e);
    },
    cardSendGetFindPage: function(e) {
        e.url = a.default.MainUrl + "/blessingCard/api/sxdBlessing/card/send/get/findPage", 
        t.default.requestInternal(e);
    }
};