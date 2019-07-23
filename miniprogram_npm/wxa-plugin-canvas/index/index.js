var t = Object.assign || function(t) {
    for (var i = 1; i < arguments.length; i++) {
        var e = arguments[i];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
}, i = {
    drawBlock: function(t) {
        var i = t.text, e = t.width, o = void 0 === e ? 0 : e, s = t.height, n = t.x, h = t.y, r = t.paddingLeft, a = void 0 === r ? 0 : r, c = t.paddingRight, x = void 0 === c ? 0 : c, d = t.borderWidth, l = t.backgroundColor, u = t.borderColor, f = t.borderRadius, g = void 0 === f ? 0 : f, P = t.opacity, v = void 0 === P ? 1 : P, p = 0, w = 0, m = 0;
        if (void 0 !== i) {
            var b = this._getTextWidth("string" == typeof i.text ? i : i.text);
            p = b > o ? b : o, p += a + a;
            var y = i.textAlign, I = void 0 === y ? "left" : y;
            i.text;
            m = s / 2 + h, w = "left" === I ? n + a : "center" === I ? p / 2 + n : n + p - x;
        } else p = o;
        l && (this.ctx.save(), this.ctx.setGlobalAlpha(v), this.ctx.setFillStyle(l), g > 0 ? (this._drawRadiusRect(n, h, p, s, g), 
        this.ctx.fill()) : this.ctx.fillRect(this.toPx(n), this.toPx(h), this.toPx(p), this.toPx(s)), 
        this.ctx.restore()), d && (this.ctx.save(), this.ctx.setGlobalAlpha(v), this.ctx.setStrokeStyle(u), 
        this.ctx.setLineWidth(this.toPx(d)), g > 0 ? (this._drawRadiusRect(n, h, p, s, g), 
        this.ctx.stroke()) : this.ctx.strokeRect(this.toPx(n), this.toPx(h), this.toPx(p), this.toPx(s)), 
        this.ctx.restore()), i && this.drawText(Object.assign(i, {
            x: w,
            y: m
        }));
    },
    drawText: function(i) {
        var e = this, o = i.x, s = i.y, n = (i.fontSize, i.color, i.baseLine), h = (i.textAlign, 
        i.text);
        i.opacity, i.width, i.lineNum, i.lineHeight;
        if ("[object Array]" === Object.prototype.toString.call(h)) {
            var r = {
                x: o,
                y: s,
                baseLine: n
            };
            h.forEach(function(i) {
                r.x += i.marginLeft || 0;
                var o = e._drawSingleText(Object.assign(i, t({}, r)));
                r.x += o + (i.marginRight || 0);
            });
        } else this._drawSingleText(i);
    },
    drawImage: function(t) {
        var i = t.imgPath, e = t.x, o = t.y, s = t.w, n = t.h, h = t.sx, r = t.sy, a = t.sw, c = t.sh, x = t.borderRadius, d = void 0 === x ? 0 : x, l = t.borderWidth, u = void 0 === l ? 0 : l, f = t.borderColor;
        this.ctx.save(), d > 0 ? (this._drawRadiusRect(e, o, s, n, d), this.ctx.clip(), 
        this.ctx.drawImage(i, this.toPx(h), this.toPx(r), this.toPx(a), this.toPx(c), this.toPx(e), this.toPx(o), this.toPx(s), this.toPx(n)), 
        u > 0 && (this.ctx.setStrokeStyle(f), this.ctx.setLineWidth(this.toPx(u)), this.ctx.stroke())) : this.ctx.drawImage(i, this.toPx(h), this.toPx(r), this.toPx(a), this.toPx(c), this.toPx(e), this.toPx(o), this.toPx(s), this.toPx(n)), 
        this.ctx.restore();
    },
    drawLine: function(t) {
        var i = t.startX, e = t.startY, o = t.endX, s = t.endY, n = t.color, h = t.width;
        this.ctx.save(), this.ctx.beginPath(), this.ctx.setStrokeStyle(n), this.ctx.setLineWidth(this.toPx(h)), 
        this.ctx.moveTo(this.toPx(i), this.toPx(e)), this.ctx.lineTo(this.toPx(o), this.toPx(s)), 
        this.ctx.stroke(), this.ctx.closePath(), this.ctx.restore();
    },
    downloadResource: function() {
        var t = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [];
        return this.drawArr = [], i.forEach(function(i, o) {
            return e.push(t._downloadImageAndInfo(i, o));
        }), Promise.all(e);
    },
    initCanvas: function(t, i, e) {
        var o = this;
        return new Promise(function(s) {
            o.setData({
                pxWidth: o.toPx(t),
                pxHeight: o.toPx(i),
                debug: e
            }, s);
        });
    }
}, e = {
    _drawRadiusRect: function(t, i, e, o, s) {
        var n = s / 2;
        this.ctx.beginPath(), this.ctx.moveTo(this.toPx(t + n), this.toPx(i)), this.ctx.lineTo(this.toPx(t + e - n), this.toPx(i)), 
        this.ctx.arc(this.toPx(t + e - n), this.toPx(i + n), this.toPx(n), 2 * Math.PI * .75, 2 * Math.PI * 1), 
        this.ctx.lineTo(this.toPx(t + e), this.toPx(i + o - n)), this.ctx.arc(this.toPx(t + e - n), this.toPx(i + o - n), this.toPx(n), 0, 2 * Math.PI * .25), 
        this.ctx.lineTo(this.toPx(t + n), this.toPx(i + o)), this.ctx.arc(this.toPx(t + n), this.toPx(i + o - n), this.toPx(n), 2 * Math.PI * .25, 2 * Math.PI * .5), 
        this.ctx.lineTo(this.toPx(t), this.toPx(i + n)), this.ctx.arc(this.toPx(t + n), this.toPx(i + n), this.toPx(n), 2 * Math.PI * .5, 2 * Math.PI * .75);
    },
    _getTextWidth: function(t) {
        var i = this, e = [];
        "[object Object]" === Object.prototype.toString.call(t) ? e.push(t) : e = t;
        var o = 0;
        return e.forEach(function(t) {
            var e = t.fontSize, s = t.text, n = t.marginLeft, h = void 0 === n ? 0 : n, r = t.marginRight, a = void 0 === r ? 0 : r;
            i.ctx.setFontSize(i.toPx(e)), o += i.ctx.measureText(s).width + h + a;
        }), this.toRpx(o);
    },
    _drawSingleText: function(t) {
        var i = this, e = t.x, o = t.y, s = t.fontSize, n = t.color, h = t.baseLine, r = t.textAlign, a = void 0 === r ? "left" : r, c = t.text, x = t.opacity, d = void 0 === x ? 1 : x, l = t.textDecoration, u = void 0 === l ? "none" : l, f = t.width, g = t.lineNum, P = void 0 === g ? 1 : g, v = t.lineHeight, p = void 0 === v ? 0 : v;
        this.ctx.save(), this.ctx.beginPath(), this.ctx.setGlobalAlpha(d), this.ctx.setFontSize(this.toPx(s)), 
        this.ctx.setFillStyle(n), this.ctx.setTextBaseline(h), this.ctx.setTextAlign(a);
        var w = this.toRpx(this.ctx.measureText(c).width), m = [];
        if (w > f) {
            for (var b = +(w / c.length).toFixed(2), y = f / b, I = 0; I <= c.length; I += y) {
                var T = c.slice(I, I + y);
                if ("" !== T && m.push(T), m.length === P) break;
            }
            if (m.length * y < c.length) {
                var S = this.ctx.measureText("...").width, R = Math.ceil(S / b), k = new RegExp(".{" + R + "}$");
                m[m.length - 1] = m[m.length - 1].replace(k, "...");
            }
            w = f;
        } else m.push(c);
        if (m.forEach(function(t, n) {
            i.ctx.fillText(t, i.toPx(e), i.toPx(o + (p || s) * n));
        }), this.ctx.restore(), "none" !== u) {
            var _ = o;
            "line-through" === u && (_ = o), this.ctx.save(), this.ctx.moveTo(this.toPx(e), this.toPx(_)), 
            this.ctx.lineTo(this.toPx(e) + this.toPx(w), this.toPx(_)), this.ctx.setStrokeStyle(n), 
            this.ctx.stroke(), this.ctx.restore();
        }
        return w;
    }
}, o = {
    _downloadImageAndInfo: function(t, i) {
        var e = this;
        return new Promise(function(o, s) {
            var n = t.x, h = t.y, r = t.url, a = t.zIndex, c = r;
            e._downImage(c, i).then(function(t) {
                return e._getImageInfo(t, i);
            }).then(function(s) {
                var r = s.imgPath, c = s.imgInfo, x = void 0, d = void 0, l = t.borderRadius || 0, u = t.width, f = t.height, g = e.toRpx(c.width), P = e.toRpx(c.height);
                g / P <= u / f ? (x = 0, d = (P - g / u * f) / 2) : (d = 0, x = (g - P / f * u) / 2), 
                e.drawArr.push({
                    type: "image",
                    borderRadius: l,
                    borderWidth: t.borderWidth,
                    borderColor: t.borderColor,
                    zIndex: void 0 !== a ? a : i,
                    imgPath: r,
                    sx: x,
                    sy: d,
                    sw: g - 2 * x,
                    sh: P - 2 * d,
                    x: n,
                    y: h,
                    w: u,
                    h: f
                }), o();
            }).catch(function(t) {
                return s(t);
            });
        });
    },
    _downImage: function(t) {
        var i = this;
        return new Promise(function(e, o) {
            /^http/.test(t) && !new RegExp(wx.env.USER_DATA_PATH).test(t) ? wx.downloadFile({
                url: i._mapHttpToHttps(t),
                success: function(t) {
                    200 === t.statusCode ? e(t.tempFilePath) : o(t.errMsg);
                },
                fail: function(t) {
                    o(t);
                }
            }) : e(t);
        });
    },
    _getImageInfo: function(t, i) {
        return new Promise(function(e, o) {
            wx.getImageInfo({
                src: t,
                success: function(o) {
                    e({
                        imgPath: t,
                        imgInfo: o,
                        index: i
                    });
                },
                fail: function(t) {
                    o(t);
                }
            });
        });
    },
    toPx: function(t) {
        return t * this.factor;
    },
    toRpx: function(t) {
        return t / this.factor;
    },
    _mapHttpToHttps: function(t) {
        if (t.indexOf(":") < 0) return t;
        var i = t.split(":");
        return 2 === i.length && "http" === i[0] ? (i[0] = "https", i[0] + ":" + i[1]) : t;
    }
};

Component({
    properties: {},
    created: function() {
        var t = wx.getSystemInfoSync().screenWidth;
        this.factor = t / 750;
    },
    methods: Object.assign({
        getHeight: function(i) {
            var e = function(t) {
                var i = t.lineHeight || t.fontSize;
                return "top" === t.baseLine ? i : "middle" === t.baseLine ? i / 2 : 0;
            }, o = [];
            (i.blocks || []).forEach(function(t) {
                o.push(t.y + t.height);
            }), (i.texts || []).forEach(function(i) {
                var s = void 0;
                "[object Array]" === Object.prototype.toString.call(i.text) ? i.text.forEach(function(n) {
                    s = e(t({}, n, {
                        baseLine: i.baseLine
                    })), o.push(i.y + s);
                }) : (s = e(i), o.push(i.y + s));
            }), (i.images || []).forEach(function(t) {
                o.push(t.y + t.height);
            }), (i.lines || []).forEach(function(t) {
                o.push(t.startY), o.push(t.endY);
            });
            var s = o.sort(function(t, i) {
                return i - t;
            }), n = 0;
            return s.length > 0 && (n = s[0]), i.height < n || !i.height ? n : i.height;
        },
        create: function(t) {
            var i = this;
            this.ctx = wx.createCanvasContext("canvasid", this);
            var e = this.getHeight(t);
            this.initCanvas(t.width, e, t.debug).then(function() {
                t.backgroundColor && (i.ctx.save(), i.ctx.setFillStyle(t.backgroundColor), i.ctx.fillRect(0, 0, i.toPx(t.width), i.toPx(e)), 
                i.ctx.restore());
                var o = t.texts, s = void 0 === o ? [] : o, n = (t.images, t.blocks), h = void 0 === n ? [] : n, r = t.lines, a = void 0 === r ? [] : r, c = i.drawArr.concat(s.map(function(t) {
                    return t.type = "text", t.zIndex = t.zIndex || 0, t;
                })).concat(h.map(function(t) {
                    return t.type = "block", t.zIndex = t.zIndex || 0, t;
                })).concat(a.map(function(t) {
                    return t.type = "line", t.zIndex = t.zIndex || 0, t;
                }));
                c.sort(function(t, i) {
                    return t.zIndex - i.zIndex;
                }), c.forEach(function(t) {
                    "image" === t.type ? i.drawImage(t) : "text" === t.type ? i.drawText(t) : "block" === t.type ? i.drawBlock(t) : "line" === t.type && i.drawLine(t);
                });
                var x = 0;
                "android" === wx.getSystemInfoSync().platform && (x = 300), i.ctx.draw(!1, function() {
                    setTimeout(function() {
                        wx.canvasToTempFilePath({
                            canvasId: "canvasid",
                            success: function(t) {
                                i.triggerEvent("success", t.tempFilePath);
                            },
                            fail: function(t) {
                                i.triggerEvent("fail", t);
                            }
                        }, i);
                    }, x);
                });
            }).catch(function(t) {
                wx.showToast({
                    icon: "none",
                    title: t.errMsg || "生成失败"
                }), console.error(t);
            });
        }
    }, i, e, o)
});