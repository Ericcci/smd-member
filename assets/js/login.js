/*!
 * JKXY:zhuhuayu
 * email:294242589@qq.com
 * 极客学院前端组
 */
!function (n) {
    function t(e) {
        if (o[e]) return o[e].exports;
        var r = o[e] = {i: e, l: !1, exports: {}};
        return n[e].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }

    var o = {};
    t.m = n, t.c = o, t.i = function (n) {
        return n
    }, t.d = function (n, o, e) {
        t.o(n, o) || Object.defineProperty(n, o, {configurable: !1, enumerable: !0, get: e})
    }, t.n = function (n) {
        var o = n && n.__esModule ? function () {
            return n.default
        } : function () {
            return n
        };
        return t.d(o, "a", o), o
    }, t.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, t.p = "", t(t.s = 5)
}([function (n, t, o) {
    "use strict";
    o.d(t, "a", function () {
        return s
    });
    var e = "https:" == document.location.protocol ? "https://" : "http://",
        r = window.location.host.substring(window.location.host.indexOf(".")), i = e + "fuwu" + r, s = {
            nc: "", nc_appkey: "", nc_scene: "", nc_token: "", nc_option: "", alInit: function (n, t, o) {
                var e = s;
                e.nc = new noCaptcha, e.nc_appkey = "FFFF000000000167A3A6", e.nc_scene = "login", e.nc_token = [e.nc_appkey, (new Date).getTime(), Math.random()].join(":"), e.nc_option = {
                    renderTo: t,
                    appkey: e.nc_appkey,
                    scene: e.nc_scene,
                    token: e.nc_token,
                    callback: function (n) {
                        o(n)
                    }
                }, e.nc.init(e.nc_option), e.alcodeShow(n)
            }, alReload: function (n) {
                var t = s;
                t.nc.reload(), t.alcodeShow(n)
            }, alcodeShow: function (n) {
                $.ajax({
                    type: "get",
                    url: i + '/api/third/1/aliyun/captcha-show?params={"jike_scene":"' + n + '"}&callback=?',
                    dataType: "jsonp",
                    success: function (n) {
                    },
                    error: function () {
                        console.log("网络出错了，过会再试！")
                    }
                })
            }
        }
}, function (n, t, o) {
    "use strict";

    function e(n, t) {
        if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    o.d(t, "a", function () {
        return s
    });
    var r = function () {
        function n(n, t) {
            for (var o = 0; o < t.length; o++) {
                var e = t[o];
                e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
            }
        }

        return function (t, o, e) {
            return o && n(t.prototype, o), e && n(t, e), t
        }
    }(), i = {
        isNonEmpty: function (n, t) {
            if ("" === n) return t
        }, limitLength: function (n, t, o, e) {
            if (n.length > o || n.length < t) return e
        }, isMobile: function (n, t) {
            if (!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0-9]|17[0-9])\d{8}$/.test(n)) return t
        }, isEmail: function (n, t) {
            if (!/^[A-Z_a-z0-9-\.]+@([A-Z_a-z0-9-]+\.)+[a-z0-9A-Z]{2,4}$/.test(n)) return t
        }, isPassword: function (n, t) {
            if (!/^.*[A-Za-z0-9_\.-]+.*$/.test(n)) return t
        }, enoughRegex: function (n, t) {
            if (new RegExp("(?=.{6,}).*", "g").test(n)) return t
        }, mediumRegex: function (n, t) {
            if (new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g").test(n)) return t
        }, strongRegex: function (n, t) {
            if (new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g").test(n)) return t
        }
    }, s = function () {
        function n() {
            e(this, n), this.cache = []
        }

        return r(n, [{
            key: "add", value: function (n, t) {
                for (var o, e = this, r = 0; o = t[r++];) !function (t) {
                    var o = t.strategy.split(":"), r = t.errorMsg;
                    e.cache.push(function () {
                        var t = o.shift();
                        return o.unshift(n.value), o.push(r), i[t].apply(n, o)
                    })
                }(o)
            }
        }, {
            key: "start", value: function () {
                for (var n, t = 0; n = this.cache[t++];) {
                    var o = n();
                    if (o) return o
                }
            }
        }]), n
    }()
}, function (n, t, o) {
    "use strict";
    o.d(t, "a", function () {
        return i
    });
    var e = window.location.host.substring(window.location.host.indexOf(".")), r = "//passport" + e,
        i = '\n    <div class="passport-popup" id="login-popup" popmark="own">\n        <div class="layout-inner">\n            <div class="hd">\n                <h2>欢迎来到极客学院，请登录</h2>\n                <i class="close"></i>\n            </div>\n            <div class="bd">\n                <div class="quikely"><span>快速登录</span></div>\n                <div class="links">\n                    <a href="' + r + '/connect/qq"  data-pl="qq"><i class="passport-icon icon-tencent"></i></a>\n                    <a href="' + r + '/connect/weibo"  data-pl="weibo"><i class="passport-icon icon-weibo"></i></a>\n                    <a href="' + r + '/connect/weixin"  data-pl="weixin"><i class="passport-icon icon-weixin"></i></a>\n                    <a href="' + r + '/connect/eoe"  data-pl="eoe"><i class="passport-icon icon-eoe"></i></a>\n                </div>\n                <a class="phonedtm" href="' + r + '/sso/login?d=2">手机动态码登录<i></i></a>\n                <div class="passport-sign">\n                    <div class="main-form main-form-sign">\n                        <div class="passport-tab" id="login-tabs">\n                            <div class="tabbed">\n                                <div class="tab-group" style="display: block;">\n                                    <form class="passport-form passport-form-sign" id="login-form-popup">\n                                        <div class="form-item">\n                                            <div class="form-cont">\n                                                <input type="text" name="uname" class="passport-txt xl w-full" tabindex="1" placeholder="手机 / 用户名 / 邮箱"/>\n                                            </div>\n                                        </div>\n                                        <div class="form-item">\n                                            <div class="form-cont">\n                                                <input type="password" name="password" class="passport-txt xl w-full" tabindex="2" placeholder="输入6~32位密码"/>\n                                            </div>\n                                        </div>\n                                        <div class="form-item form-imgcode mb-25" id="yzmbox">\n                                            <div class="form-cont">\n                                                <div class="layout-inner3" style="width:100%">\n                                                    <div class="" id="regVerifyId"></div>\n                                                    <div class="al-verify-text" id="regVerifyText">请滑动验证</div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class="form-item form-sevenday">\n                                            <div class="form-cont clearfix">\n                                                <label><input type="checkbox" class="passport-sevenday" />7天内自动登录</label>\n                                                <a href="' + r + '/sso/forget" class="forget-link" >忘记密码</a>\n                                            </div>\n                                        </div>\n                                        <div class="form-item">\n                                            <div class="form-cont">\n                                                <input type="button" id="login-pop-submit" class="passport-btn passport-btn-def xl w-full" tabindex="4" value="登录"  />\n                                            </div>\n                                        </div>\n                                        <div class="form-item">\n                                             <div class="form-cont login_pop_python" dataval="1" id="login_pop_python"></div>\n                                        </div>\n                                    </form>\n                                    <div class="regphone">没有账号？<a href="' + r + '/sso/reg_phone">新用户注册</a></div>\n                                    <div class="getfreevideo"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n'
}, function (n, t, o) {
    "use strict";
    o.d(t, "a", function () {
        return s
    });
    var e = window.location.host.substring(window.location.host.indexOf(".")), r = "//passport" + e, i = "//help" + e,
        s = '<div class="passport-popup" id="register-popup">\n    <div class="layout-inner">\n        <div class="hd">\n            <h2>欢迎注册极客学院</h2>\n            <i class="close"></i>\n        </div>\n        <div class="bd">\n            <div class="passport-sign">\n                <div class="main-form">\n                    <form class="passport-form passport-form-sign" id="register-form-popup" action="">\n                        <div class="form-item">\n                            <div class="form-cont">\n                                <input type="text" name="phone" autocomplete="off" class="passport-txt xl w-full" tabindex="1" placeholder="请输入手机号" />\n                            </div>\n                        </div>\n                        <div class="form-item">\n                            <div class="form-cont">\n                                <input type="password" name="password" class="passport-txt xl w-full" tabindex="2" placeholder="输入6~32位密码" autocomplete="off">\n                                <ul class="passport-safely" id="safely">\n                                    <li class="danger">弱</li>\n                                    <li class="general">中</li>\n                                    <li class="safe">高</li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class="form-item form-imgcode">\n                            <div class="form-cont">\n                                <div class="layout-inner3" style="width:100%">\n                                    <div class="" id="regVerifyId"></div>\n                                    <div class="al-verify-text" id="regVerifyText">请滑动验证</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="form-item form-mcode mb-25">\n                            <div class="form-cont">\n                                <input type="text" name="verify_code" class="passport-txt xl w-full" tabindex="4" placeholder="动态码"/>\n                                <div class="btn-getcode">\n                                    <button type="button" class="passport-btn js-getcode" >获取动态码</button>\n                                </div>\n                                <div class="passport-sms getVoice" style="display: none;">未收到短信？使用<a href="javascript:;" class="js-getvoice" >语音动态码</a></div>\n                                <div class="passport-sms reVoice" style="display: none;"><span class="js-revoice"></span>，请注意接听来电</div>\n                            </div>\n                        </div>\n                        <div class="form-item form-treaty">\n                            <div class="form-cont">\n                                <input type="checkbox" name="treaty" checked="checked" value="treaty" />\n                                <a href="' + i + '/service.html" target="_blank" class="treaty">极客学院用户协议</a>\n                            </div>\n                        </div>\n                        <div class="form-item">\n                            <div class="form-cont">\n                                <input type="button" id="register-pop-submit" class="passport-btn passport-btn-def xl w-full" tabindex="5" value="注册"  />\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class="aside">\n                    <div class="passport-goto">已有帐号<a href="javascript:;" tabindex="6" class="diaLoginBtnTab" >立即登录</a></div>\n                    <div class="reg_pop_python" id="reg_pop_python"></div>\n                    <div class="passport-third">\n                        <header class="hd">\n                            <div class="layout-inner">\n                                <h3>快速登录</h3>\n                            </div>\n                        </header>\n                    <div class="links">\n                        <a href="' + r + '/connect/qq"  data-pl="qq"><i class="passport-icon icon-tencent"></i></a>\n                        <a href="' + r + '/connect/weibo" data-pl="weibo"><i class="passport-icon icon-weibo"></i></a>\n                        <a href="' + r + '/connect/weixin"  data-pl="weixin"><i class="passport-icon icon-weixin"></i></a>\n                        <a href="' + r + '/connect/eoe" data-pl="eoe"><i class="passport-icon icon-eoe"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>'
}, function (n, t, o) {
    var e = o(6);
    "string" == typeof e && (e = [[n.i, e, ""]]);
    o(8)(e, {});
    e.locals && (n.exports = e.locals)
}, function (n, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var e = o(0), r = o(1), i = o(3), s = o(2), a = o(4),
        p = (o.n(a), "https:" == document.location.protocol ? "https://" : "http://"),
        c = document.location.host.split("."), l = window.location.host.substring(window.location.host.indexOf(".")),
        f = {
            PASSPORTREG: "passport-reg",
            PASSPORTLOGIN: "passport-login",
            PASSPORTDYNAMICLOGIN: "dynamic-login",
            GLOBALREG: "global-alert-reg",
            GLOBALLOGIN: "global-alert-login"
        }, u = p + "passport" + l, d = u + "/submit/login?client=", h = u + "/submit/login_phoneV2?client=",
        g = u + "/sso/smsV2?client=", m = u + "/sso/voiceV2?client=", b = u + "/check/phone?client=",
        v = u + "/submit/reg_phoneV2?client=", x = {
            lock: !0,
            scene: "",
            csessionid: "",
            sig: "",
            token: "",
            value: "",
            isAlert: "passport" !== c[0],
            init: function () {
                this.checkType()
            },
            bindRegister: function () {
                $("#register-form").find('input[name="treaty"]').on("click", this.treatyValidator), $("#register-form").find('input[name="verify_code"]').on("blur", this.emptyValidatorEvent).on("focus", this.clearInputError), $("#register-form").find('input[name="phone"]').on("blur", this.phoneValidatorEvent).on("focus", this.clearInputError), $("#register-form").find('input[name="password"]').on("blur", this.passwordValidatorEvent).on("focus", this.clearInputError).on("keyup", this.passwordSafe), $("#register-form").find(".js-getcode").on("click", this.getSMS), $("#register-form").find(".js-getvoice").on("click", this.getSMS), $("#register").on("click", this.registerEvent), $(".links>a").on("click", this.otherlogin)
            },
            bindLogin: function () {
                $("#login-form").find('input[name="uname"]').on("blur", this.emptyValidatorEvent).on("focus", this.clearInputError), $("#login-form").find('input[name="password"]').on("blur", this.emptyValidatorEvent).on("focus", this.clearInputError), $("#login").on("click", this.passportLogin), $(".tabs li").on("click", this.checkFrom), $("#fastlogin-form").find('input[name="phone"]').on("blur", this.phoneValidatorEvent).on("focus", this.clearInputError), $("#fastlogin-form").find('input[name="verify_code"]').on("blur", this.emptyValidatorEvent).on("focus", this.clearInputError), $("#fastlogin-form").find(".js-getcode").on("click", this.getSMS), $("#fastlogin-form").find(".js-getvoice").on("click", this.getSMS), $("#fastlogin").on("click", this.phoneLogin), $(".links>a").on("click", this.otherlogin)
            },
            bindAlertRegister: function () {
                $("#register-form-popup").find('input[name="treaty"]').on("click", this.treatyValidator), $("#register-form-popup").find('input[name="verify_code"]').on("blur", this.emptyValidatorEvent).on("focus", this.clearInputError), $("#register-form-popup").find('input[name="phone"]').on("blur", this.phoneValidatorEvent).on("focus", this.clearInputError), $("#register-form-popup").find('input[name="password"]').on("blur", this.passwordValidatorEvent).on("focus", this.clearInputError).on("keyup", this.passwordSafe), $("#register-form-popup").find(".js-getcode").on("click", this.getSMS), $("#register-form-popup").find(".js-getvoice").on("click", this.getSMS), $("#register-pop-submit").on("click", this.registerEvent)
            },
            bindAlertLogin: function () {
                $("#login-form-popup").find('input[name="uname"]').on("blur", this.emptyValidatorEvent).on("focus", this.clearInputError), $("#login-form-popup").find('input[name="password"]').on("blur", this.emptyValidatorEvent).on("focus", this.clearInputError), $("#login-pop-submit").on("click", this.passportLogin)
            },
            bindAlert: function () {
                $(".diaRegBtn, .regnow, #regnow, #diaregBtn").on("click", this.globalAlertRegTpl), $(".diaLoginBtn, .loginnow, #loginnow, #diaLoginBtn").on("click", this.globalAlertLogTpl), $("body").on("click", ".diaRegBtnTab", this.globalAlertRegTpl), $("body").on("click", ".diaLoginBtnTab", this.globalAlertLogTpl), $("body").on("click", ".LoginAndRegister-Mask .close", this.closeMask)
            },
            aliCB: function (n) {
                x.csessionid = n.csessionid, x.sig = n.sig, x.token = n.token, x.value = n.value, $(".al-verify-text").css("color", "#999")
            },
            checkType: function () {
                x.isAlert ? (x.addScript("body", "link", "g.alicdn.com/sd/ncpc/nc.css?t=20170228"), x.addScript("body", "script", "g.alicdn.com/sd/ncpc/nc.js?t=20170228", function () {
                    x.bindAlert()
                })) : this.checkScene()
            },
            addScript: function (n, t, o, e) {
                var r = document.getElementsByTagName(n).item(0), i = document.createElement(t),
                    s = "https:" == document.location.protocol ? "https://" : "http://";
                i.type = "script" == t ? "text/javascript" : "text/css", "script" == t ? i.src = s + o : i.href = s + o, r.appendChild(i), i.onload = i.onreadystatechange = function () {
                    "function" == typeof e && e()
                }
            },
            checkScene: function () {
                if (window.location.pathname.indexOf("reg_phone") > -1) {
                    var n = x.scene = f.PASSPORTREG;
                    e.a.alInit(n, "#regVerifyId", x.aliCB), x.bindRegister()
                } else x.checkDynamic(), x.bindLogin()
            },
            checkDynamic: function () {
                var n = 2 == x.getQuery("d");
                n && ($(".tabs>ul>li:eq(1)").addClass("active").siblings().removeClass("active"), $(".tabbed>.tab-group:eq(1)").show().siblings().hide());
                var t = n ? "#dVerifyId" : "#verifyId", o = n ? f.PASSPORTDYNAMICLOGIN : f.PASSPORTLOGIN;
                x.scene = o, e.a.alInit(o, t, x.aliCB), x.showRememberPhone()
            },
            checkFrom: function (n) {
                var t = $(this).index();
                $(this).addClass("active").siblings().removeClass("active"), $(".tabbed>.tab-group:eq(" + t + ")").show().siblings().hide();
                var o = 0 == t ? "#verifyId" : "#dVerifyId", r = 0 == t ? f.PASSPORTLOGIN : f.PASSPORTDYNAMICLOGIN;
                x.scene = r, x.aliCB({}), e.a.alInit(r, o, x.aliCB), x.showRememberPhone()
            },
            showRememberPhone: function () {
                var n = $.cookie("hold_phone");
                x.scene == f.PASSPORTDYNAMICLOGIN && n && $("#fastlogin-form").find('input[name="phone"]').val(n)
            },
            elementConverter: function (n) {
                return n.currentTarget ? n.currentTarget : n
            },
            emptyValidatorEvent: function (n) {
                n = x.elementConverter(n);
                var t;
                switch ($(n).attr("name")) {
                    case"uname":
                        t = "请输入账号";
                        break;
                    case"password":
                        t = "请输入密码";
                        break;
                    case"verify_code":
                        t = "请输入验证码"
                }
                var o = new r.a;
                o.add(n, [{strategy: "isNonEmpty", errorMsg: t}]);
                var t = o.start();
                return !!t && (x.inputError(n, t), !0)
            },
            phoneValidatorEvent: function (n) {
                n = x.elementConverter(n);
                var t = new r.a;
                t.add(n, [{strategy: "isNonEmpty", errorMsg: "请输入手机号码"}, {strategy: "isMobile", errorMsg: "手机格式不正确"}]);
                var o = t.start();
                return o ? (x.inputError(n, o), !0) : (x.scene !== f.PASSPORTREG && x.scene !== f.GLOBALREG || $.post(b + x.getClient() + "&jsoncallback=?", {phone: n.value}, function (t) {
                    1 != t.status && x.inputError(n, "手机已经注册")
                }, "jsonp").error(function () {
                    x.msgBox(0, o + "：网络出错了，过会再试！")
                }), !1)
            },
            passwordValidatorEvent: function (n) {
                n = x.elementConverter(n);
                var t = new r.a;
                t.add(n, [{strategy: "isNonEmpty", errorMsg: "请输入密码"}, {
                    strategy: "limitLength:6:32",
                    errorMsg: "密码长度在6-32个字符之间"
                }]);
                var o = t.start();
                return !!o && (x.inputError(n, o), !0)
            },
            passwordSafe: function () {
                var n = ["safely-danger", "safely-general", "safely-safe"], t = n[0] + " " + n[1] + " " + n[2], o = new r.a;
                o.add(this, [{strategy: "strongRegex", errorMsg: "2"}, {strategy: "mediumRegex", errorMsg: "1"}]);
                var e = o.start();
                e = e || 0, $("#safely").removeClass(t).addClass(n[e])
            },
            treatyValidator: function () {
                var n = $(this).prop("checked");
                console.log(n), n ? ($(this).removeClass("passport-error-input"), $(this).siblings(".passport-error-text").remove()) : x.inputError(this, "请同意用户协议")
            },
            inputError: function (n, t) {
                $(n).addClass("passport-error-input");
                var o = '<div class="passport-note passport-error-text"><span>' + t + "</span></div>";
                $(n).after(o)
            },
            clearInputError: function () {
                $(this).removeClass("passport-error-input"), $(this).siblings(".passport-error-text").remove()
            },
            getSMS: function () {
                var n, t = this, o = x.scene === f.PASSPORTREG || x.scene === f.GLOBALREG;
                switch (x.scene) {
                    case f.PASSPORTREG:
                        n = "#register-form";
                        break;
                    case f.GLOBALREG:
                        n = "#register-form-popup";
                        break;
                    case f.PASSPORTDYNAMICLOGIN:
                        n = "#fastlogin-form"
                }
                var e = $(n).find('input[name="phone"]')[0], r = $(n).find('input[name="password"]')[0],
                    i = x.phoneValidatorEvent(e);
                if (x.csessionid || $(".al-verify-text").css("color", "red"), o && x.passwordValidatorEvent(r)) return !1;
                if (i || !x.lock || !x.csessionid) return !1;
                x.lock = !1;
                var s = {
                    phone: e.value,
                    nc_csessionid: x.csessionid,
                    nc_sig: x.sig,
                    nc_token: x.token,
                    nc_scene: "login",
                    jike_scene: x.scene,
                    type: o ? 4 : 5
                }, a = "语音动态码" == $(this).text(), p = a ? m : g, c = a ? "语音" : "短信";
                o ? x.postRequest(b, {phone: e.value}, "手机", function () {
                    x.getSMSEvent(a, t, p, s, c)
                }) : x.getSMSEvent(a, t, p, s, c)
            },
            getSMSEvent: function (n, t, o, e, r) {
                function i() {
                    var n = 60, t = setInterval(function () {
                        n > 1 ? (n--, a.text(n + "s后重新获取")) : (clearInterval(t), s())
                    }, 1e3)
                }

                function s() {
                    x.lock = !0, $(".getVoice").show(), $(".reVoice").hide(), $(t).parents(".passport-form").find('input[name="phone"]').removeAttr("readonly"), $(".js-getcode").text("重新发送").removeClass("passport-btn-def disabled").on("click", x.getSMS), $(".js-getvoice").removeClass("disabled").on("click", x.getSMS)
                }

                if ($(t).parents(".passport-form").find('input[name="phone"]').attr({readonly: "readonly"}), $(".js-getcode").addClass("disabled").off("click"), $(".js-getvoice").addClass("disabled").off("click"), n) {
                    $(".js-revoice").text("发送中~"), $(".getVoice").hide(), $(".reVoice").show();
                    var a = $(".js-revoice");
                    x.postRequest(o, e, r, i, s)
                } else {
                    $(t).addClass("passport-btn-def").text("短信发送中");
                    var a = $(t);
                    x.postRequest(o, e, r, i, s)
                }
            },
            postRequest: function (n, t, o, r, i) {
                $.post(n + x.getClient() + "&jsoncallback=?", t, function (n) {
                    x.lock = !0, 1 != n.status ? (x.msgBox(0, n.msg), e.a.alReload(x.scene), x.aliCB({}), "function" == typeof i && i(n)) : "function" == typeof r && r(n)
                }, "jsonp").error(function () {
                    x.msgBox(0, o + "：网络出错了，过会再试！"), e.a.alReload(x.scene), x.aliCB({})
                })
            },
            registerEvent: function (n) {
                n.preventDefault();
                var t = x.isAlert ? "#register-form-popup" : "#register-form", o = $(t).find('input[name="phone"]')[0],
                    e = $(t).find('input[name="password"]')[0], r = $(t).find('input[name="verify_code"]')[0],
                    i = $(t).find('input[name="treaty"]').prop("checked"), s = x.emptyValidatorEvent(r),
                    a = x.phoneValidatorEvent(o), p = x.passwordValidatorEvent(e);
                if (x.csessionid || $(".al-verify-text").css("color", "red"), a || p || s || !x.lock || !x.csessionid || !i) return !1;
                x.lock = !1;
                var c = {
                    referer: document.referrer,
                    phone: o.value,
                    password: e.value,
                    verify_code: r.value,
                    csessionid: x.csessionid,
                    sig: x.sig,
                    token: x.token,
                    scene: "login",
                    jike_scene: x.scene,
                    treaty: "treaty"
                };
                x.postRequest(v, c, "注册", function (n) {
                    document.location.href = n.jumpUrl
                })
            },
            passportLogin: function (n) {
                n.preventDefault();
                var t = $(this), o = x.isAlert ? "#login-form-popup" : "#login-form", e = $(o).find('input[name="uname"]'),
                    r = $(o).find('input[name="password"]'), i = $(".passport-sevenday").prop("checked") ? 7 : 0,
                    s = x.emptyValidatorEvent(e), a = x.emptyValidatorEvent(r);
                if (s || a || !x.lock) return !1;
                if (!x.csessionid) return $(".al-verify-text").css("color", "red"), !1;
                x.lock = !1, x.scene === f.GLOBALLOGIN ? t.val("登录中") : t.text("登录中");
                var p = {
                    expire: i,
                    uname: e.val(),
                    password: r.val(),
                    csessionid: x.csessionid,
                    token: x.token,
                    scene: "login",
                    jike_scene: x.scene,
                    sig: x.sig,
                    referer: document.referrer
                };
                x.postRequest(d, p, "登录", function (n) {
                    document.location.href = n.jumpUrl
                }, function () {
                    x.scene === f.GLOBALLOGIN ? t.val("登录") : t.text("登录")
                })
            },
            phoneLogin: function (n) {
                n.preventDefault();
                var t = $(this);
                x.csessionid || $(".al-verify-text").css("color", "red");
                var o = $("#fastlogin-form").find('input[name="phone"]')[0],
                    e = $("#fastlogin-form").find('input[name="verify_code"]')[0], r = x.phoneValidatorEvent(o),
                    i = x.emptyValidatorEvent(e);
                if (r || i || !x.lock || !x.csessionid) return !1;
                x.lock = !1, t.text("登录中");
                var s = {
                    phone: o.value,
                    Dcsessionid: x.csessionid,
                    Dsig: x.sig,
                    Dtoken: x.token,
                    Dscene: "login",
                    Djike_scene: x.scene,
                    verify_code: e.value
                };
                x.postRequest(h, s, "登录", function (n) {
                    x.rememberPhone(o.value), document.location.href = n.jumpUrl
                }, function () {
                    t.text("登录")
                })
            },
            rememberPhone: function (n) {
                var t = $("#remember").prop("checked") ? 7 : 0, o = l;
                $.cookie("hold_phone", n, {expires: t, path: "/", domain: o})
            },
            msgBox: function () {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = arguments[1],
                    o = arguments[2], e = arguments[3], r = ["waring-failure", "waring-success", "waring-sub"],
                    t = t || "亲爱的VIP，这是来自极客学院小雪的 Hello~", i = r[n], s = "warning";
                $("body").append('<div class="web-dia-tip ' + i + '" id="' + s + '" >' + t + "</div>");
                var a = $("#" + s).width() / 2, o = parseInt(o) ? parseInt(o) : 1500;
                $("#" + s).css("marginLeft", -a), $("#" + s).animate({top: "0px", opacity: 1}, 300, function () {
                    $("#" + s).delay(o).animate({top: "-50px", opacity: 0}, 500, function () {
                        $("#" + s).remove(), "function" == typeof e && e()
                    })
                })
            },
            getQuery: function (n) {
                var t = window.location.search.match(new RegExp("[?&]" + n + "=([^&]+)", "i"));
                return null == t || t.length < 1 ? "" : t[1]
            },
            getClient: function () {
                var n = navigator.userAgent.toLowerCase(), t = "ipad" == n.match(/ipad/i),
                    o = "iphone os" == n.match(/iphone os/i), e = "midp" == n.match(/midp/i),
                    r = "rv:1.2.3.4" == n.match(/rv:1.2.3.4/i), i = "ucweb" == n.match(/ucweb/i),
                    s = "android" == n.match(/android/i), a = "windows ce" == n.match(/windows ce/i),
                    p = "windows mobile" == n.match(/windows mobile/i);
                return t || o || e || r || i || s || a || p ? "m" : "www"
            },
            otherlogin: function () {
                var n = l, t = $(this).index(), o = ["qq", "sina", "weixin", "eoe"];
                $.cookie("otherlogin", o[t], {expires: 1, path: "/", domain: n})
            },
            globalAlertRegTpl: function (n) {
                if ("function" == typeof noCaptcha) {
                    n.preventDefault();
                    var t = '<div class="LoginAndRegister-Mask">' + i.a + "</div>";
                    $(".LoginAndRegister-Mask").remove(), $("body").append(t);
                    var o = x.scene = f.GLOBALREG;
                    e.a.alInit(o, "#regVerifyId", x.aliCB), x.bindAlertRegister()
                }
            },
            globalAlertLogTpl: function (n) {
                if ("function" == typeof noCaptcha) {
                    n.preventDefault();
                    var t = '<div class="LoginAndRegister-Mask">' + s.a + "</div>";
                    $(".LoginAndRegister-Mask").remove(), $("body").append(t);
                    var o = x.scene = f.GLOBALLOGIN;
                    e.a.alInit(o, "#regVerifyId", x.aliCB), x.bindAlertLogin(), x.loginPopSlug()
                }
            },
            closeMask: function () {
                $(".LoginAndRegister-Mask").remove()
            },
            loginPopSlug: function () {
                var n = ($("#login_pop_python").attr("dataval"), {
                    ua: encodeURIComponent(navigator.userAgent),
                    uid: $.cookie("uid") || "",
                    jkxyid_v2: $.cookie("jkxyid_v2")
                }), t = "https:" == document.location.protocol ? "https://" : "http://";
                $.ajax({
                    type: "get",
                    url: t + "ad.jikexueyuan.com/v1/code_slot_slug/eventloginregpopdown/delivery?params=" + JSON.stringify(n),
                    data: "",
                    dataType: "json",
                    success: function (n) {
                        var t = "";
                        200 == n.code && "成功" == n.msg && n.data.forEach(function (n) {
                            if (37 == n.code_slot_id && n.creatives.length > 0) {
                                var o = 1 == n.creatives[0].target ? "_blank" : "",
                                    e = "" !== n.creatives[0].url ? n.creatives[0].url : "javascript:;";
                                t = '<a href="' + e + '" target="' + o + '">\n                                            <img src="' + n.creatives[0].img + '" style="width:370px; height:75px;"/>\n                                        </a>', $("#login_pop_python").attr("dataval", "2")
                            }
                        }), $("#login_pop_python").html(t)
                    },
                    error: function () {
                        console.error("Get login ad fail!")
                    }
                })
            }
        };
    $(function () {
        x.init()
    })
}, function (n, t, o) {
    t = n.exports = o(7)(void 0), t.push([n.i, '@charset "utf-8";\n.nc-container .imgCaptcha .imgCaptcha_text {\n  width: 110px;\n}\n.nc-container .imgCaptcha .imgCaptcha_text input {\n  border: 1px solid #ccc;\n}\n#regVerifyId {\n  box-sizing: content-box;\n  width: 260px;\n  float: left;\n}\n#regVerifyText {\n  box-sizing: content-box;\n  width: 100px;\n  float: right;\n  height: 34px;\n  text-align: center;\n  line-height: 34px;\n  color: #999;\n}\n.nc-container .nc_scale .clickCaptcha .clickCaptcha_text {\n  float: right;\n  height: 0;\n  line-height: 0;\n}\n.nc_iconfont.nc_btn_2 {\n  top: 15px;\n  right: -11px;\n}\n.nc-container .nc_scale .clickCaptcha {\n  transform: scale(0.8);\n  -webkit-transform: scale(0.8);\n  -moz-transform: scale(0.8);\n  top: 10px;\n  height: 250px;\n}\n#regVerifyId .nc_scale {\n  width: auto;\n}\n.nc-container .imgCaptcha .imgCaptcha_text {\n  position: absolute;\n  background: transparent!important;\n}\n.nc-container .nc_scale .clickCaptcha {\n  top: 10px!important;\n}\n.LoginAndRegister-Mask {\n  min-width: 775px;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 9999;\n}\n#register-popup,\n#login-popup {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 9999;\n}\n#register-popup {\n  width: 755px;\n  height: 443px;\n  margin-left: -377px;\n  margin-top: -221px;\n}\n#login-popup {\n  width: 450px;\n  height: 650px;\n  margin-left: -225px;\n  margin-top: -290px;\n}\n.user-select-none {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.clear {\n  clear: both !important;\n}\n.float-left {\n  float: left !important;\n}\n.float-right {\n  float: right !important;\n}\n.disabled:hover,\n.disabled:hover a {\n  cursor: default !important;\n  cursor: not-allowed !important;\n}\n/* color */\n.passport-light-color {\n  /* 浅色 */\n  color: #999999 !important;\n}\n.passport-tip-color {\n  /* 提示色 */\n  color: #fd6505 !important;\n}\n.passport-warn-color {\n  /* 警告色 */\n  color: #ff0000 !important;\n}\n.passport-success-color {\n  /* 成功色 */\n  color: #339734 !important;\n}\n/* mask */\n.passport-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 900;\n  width: 100%;\n  height: 100%;\n  background: #000000;\n  opacity: 0.4;\n}\n/* control base */\n.passport-placeholder {\n  color: #999999 !important;\n}\n.passport-empty-input,\n.passport-empty-input:focus,\n.passport-empty-input:hover {\n  background: #ffffff !important;\n  border: 1px solid #ff6711 !important;\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n}\n.passport-error-input,\n.passport-error-input:focus,\n.passport-error-input:hover {\n  background: #ffffff !important;\n  border: 1px solid #ff6711 !important;\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n}\n.passport-empty-txt {\n  color: #ff0000 !important;\n}\n.passport-error-txt {\n  color: #ff0000 !important;\n}\n.passport-success-txt {\n  color: #35b558 !important;\n}\n/* note */\n.passport-note {\n  color: #666666;\n  vertical-align: middle;\n}\nspan.passport-note {\n  padding-left: 5px;\n}\ndiv.passport-note {\n  padding: 5px 0 0;\n  line-height: 1.8;\n}\n.passport-note strong {\n  padding: 0 5px;\n  color: #ff0000;\n}\n.passport-note b {\n  padding: 0 5px;\n  color: #333333;\n}\n/* button */\n.passport-btn {\n  height: 26px;\n  padding: 0 15px;\n  font-size: 12px;\n  border: 1px solid #eaeaea;\n  -webkit-transition: background-color 0.8s, border-color 0.8s;\n  -moz-transition: background-color 0.8s, border-color 0.8s;\n  transition: background-color 0.8s, border-color 0.8s;\n  background: #eaeaea;\n  border-color: #eaeaea;\n  color: #666666 !important;\n  /* 以下样式针对非 input、button 的其他标签 */\n  display: inline-block;\n  line-height: 24px;\n  text-align: center;\n  text-decoration: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.passport-btn .icon {\n  margin-right: 5px;\n}\n.passport-btn:hover {\n  background: #eeeeee;\n  color: #999999 !important;\n}\n.passport-btn:active {\n  background: #eeeeee;\n  color: #999999 !important;\n}\n.passport-btn:hover {\n  text-decoration: none;\n}\n.passport-btn:not(button) .icon {\n  position: relative;\n  top: -1px;\n}\n.passport-btn.disabled,\n.passport-btn[disabled],\n.passport-btn.disabled:hover,\n.passport-btn[disabled]:hover,\n.passport-btn.disabled:focus,\n.passport-btn[disabled]:focus,\n.passport-btn.disabled:active,\n.passport-btn[disabled]:active {\n  -webkit-transition: none;\n  -moz-transition: none;\n  transition: none;\n  background: #eeeeee !important;\n  border: 1px solid #e7e7e7 !important;\n  color: #999999 !important;\n  cursor: default !important;\n  cursor: not-allowed !important;\n}\n/* button theme */\n.passport-btn-def {\n  background: #35b558;\n  border-color: #35b558;\n  color: #ffffff !important;\n}\n.passport-btn-def:hover {\n  background: #51cc73;\n  border-color: #51cc73;\n  color: #ffffff !important;\n}\n.passport-btn-def:active {\n  background: #51cc73;\n  border-color: #51cc73;\n  color: #ffffff !important;\n}\n.passport-btn-primary {\n  background: #2d85ca;\n  border-color: #2d85ca;\n  color: #ffffff !important;\n}\n.passport-btn-primary:hover {\n  background: #529dd8;\n  border-color: #529dd8;\n  color: #ffffff !important;\n}\n.passport-btn-primary:active {\n  background: #529dd8;\n  border-color: #529dd8;\n  color: #ffffff !important;\n}\n/* button height */\n.passport-btn.xl {\n  /* extra large */\n  height: 40px;\n  padding: 0 30px;\n  font-size: 18px;\n  line-height: 38px;\n}\n/* button width */\n.passport-btn.w-full {\n  width: 100%;\n  padding: 0 !important;\n}\n/* button padding */\n/* button file */\n.passport-txt[disabled],\n.passport-txt[disabled]:hover,\n.passport-txt[disabled]:focus,\n.passport-txt[disabled]:active {\n  background: #f8f8f8 !important;\n  border-color: #f1f1f1 !important;\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n  cursor: default !important;\n  cursor: not-allowed !important;\n}\n/* input text */\n.passport-txt {\n  width: 100px;\n  height: 26px;\n  padding: 5px 5px;\n  font-size: 12px;\n  line-height: 16px;\n  border: 1px solid #e4e4e4;\n  border-color: #e4e4e4;\n  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -moz-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.passport-txt[readonly="readonly"],\n.passport-txt[readonly="readonly"]:hover,\n.passport-txt[readonly="readonly"]:focus {\n  border-color: #e4e4e4 !important;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.passport-txt:hover {\n  border-color: #cccccc;\n  -webkit-box-shadow: 0 0 5px #ffffff;\n  box-shadow: 0 0 5px #ffffff;\n}\n.passport-txt:focus {\n  border-color: #35b558;\n  -webkit-box-shadow: 0 0 5px #51cc73;\n  box-shadow: 0 0 5px #51cc73;\n}\n/* text radius */\n.passport-txt.txt-radius {\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n}\n/* text height */\n.passport-txt.xl {\n  height: 40px;\n  padding: 11px 11px;\n  font-size: 14px;\n  line-height: 18px;\n}\n/* text width */\n.passport-txt.w-lg {\n  width: 100%;\n}\n.passport-txt.w-full {\n  width: 100%;\n}\n/* tel text */\n/* tel height*/\n/* txt section */\n/* file */\n/* select */\n/* select height */\n/* select width */\n/* textarea */\n/* icon */\n.passport-icon {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n}\n.passport-tab > .tabs ul:after {\n  display: table;\n  clear: both;\n  content: " ";\n}\n.passport-tab > .tabs li {\n  float: left;\n  cursor: pointer;\n}\n.passport-tab > .tabbed > .tab-group {\n  display: none;\n}\n.passport-popup {\n  -webkit-text-size-adjust: 100%;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  /* checkbox & radio */\n  /* 18x18 */\n  /* 32x32 */\n  /* 38x38 */\n  /* 48x48 */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 990;\n  padding: 40px;\n  background: #fff;\n  color: #999999;\n  font: normal 12px/1.4 Verdana, "Lantinghei SC", "Hiragino Sans GB", \'Microsoft YaHei\', Helvetica, arial, simsun, sans-serif;\n  line-height: 1.4;\n}\n.passport-popup *,\n.passport-popup *:after,\n.passport-popup *:before {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\n.passport-popup button,\n.passport-popup input,\n.passport-popup select,\n.passport-popup textarea {\n  color: inherit;\n  font-family: inherit;\n  font-size: 100%;\n  font-weight: inherit;\n}\n.passport-popup label {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: pointer;\n}\n.passport-popup h2,\n.passport-popup h3 {\n  font-size: 100%;\n}\n.passport-popup ul {\n  list-style: none;\n  padding-left: 0px;\n}\n.passport-popup img {\n  vertical-align: middle;\n  border: 0;\n}\n.passport-popup input,\n.passport-popup button {\n  outline: 0;\n}\n.passport-popup a {\n  color: #35b558;\n  text-decoration: none;\n}\n.passport-popup a:hover {\n  color: #51cc73;\n  text-decoration: none;\n}\n.passport-popup input,\n.passport-popup button,\n.passport-popup .passport-btn,\n.passport-popup select,\n.passport-popup textarea {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.passport-popup input,\n.passport-popup button,\n.passport-popup .passport-btn,\n.passport-popup select,\n.passport-popup label {\n  vertical-align: middle;\n}\n.passport-popup button,\n.passport-popup input[type="button"],\n.passport-popup input[type="submit"],\n.passport-popup input[type="reset"] {\n  line-height: normal !important;\n  cursor: pointer;\n}\n.passport-popup input[type="checkbox"],\n.passport-popup input[type="radio"] {\n  width: 13px;\n  height: 13px;\n  margin: 0 5px 0 2px;\n  cursor: pointer;\n}\n.passport-popup input[type="checkbox"][disabled],\n.passport-popup input[type="radio"][disabled],\n.passport-popup input[type="checkbox"][disabled]:hover,\n.passport-popup input[type="radio"][disabled]:hover,\n.passport-popup input[type="checkbox"][disabled]:focus,\n.passport-popup input[type="radio"][disabled]:focus,\n.passport-popup input[type="checkbox"][disabled]:active,\n.passport-popup input[type="radio"][disabled]:active {\n  cursor: default !important;\n  cursor: not-allowed !important;\n}\n.passport-popup .icon-refresh {\n  width: 18px;\n  height: 18px;\n  background-position: 0 -38px;\n}\n.passport-popup .icon-phone,\n.passport-popup .icon-letter {\n  width: 32px;\n  height: 32px;\n  background-position: -49px -58px;\n}\n.passport-popup .icon-letter {\n  background-position: -83px -58px;\n}\n.passport-popup .icon-tencent,\n.passport-popup .icon-weibo,\n.passport-popup .icon-weixin,\n.passport-popup .icon-eoe {\n  width: 55px;\n  height: 55px;\n  background-position: 0 -65px;\n}\n.passport-popup a:hover .icon-tencent {\n  background-position: 0 -1px;\n}\n.passport-popup .icon-weibo {\n  background-position: -81px -65px;\n}\n.passport-popup a:hover .icon-weibo {\n  background-position: -81px -1px;\n}\n.passport-popup .icon-weixin {\n  background-position: -162px -65px;\n}\n.passport-popup a:hover .icon-weixin {\n  background-position: -162px -1px;\n}\n.passport-popup .icon-eoe {\n  background-position: -243px -65px;\n}\n.passport-popup a:hover .icon-eoe {\n  background-position: -243px -1px;\n}\n.passport-popup .icon-success {\n  width: 48px;\n  height: 48px;\n  background-position: 0 -58px;\n}\n.passport-popup:after {\n  display: table;\n  clear: both;\n  content: " ";\n}\n.passport-popup .close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n  background: url("//sp1.jikexueyuan.com/static/images/popup_def_close.png") no-repeat center center / 14px 14px;\n}\n.passport-popup > .layout-inner {\n  position: relative;\n  float: left;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n}\n.passport-popup > .layout-inner > .hd {\n  height: 40px;\n  padding: 0 30px 0 8px;\n  line-height: 40px;\n  cursor: default ;\n}\n.passport-popup > .layout-inner > .hd h2 {\n  color: #000;\n  width: 300px;\n  float: left;\n  margin: 0px;\n  display: inline-block;\n  font-size: 18px;\n  font-weight: normal;\n}\n.passport-popup > .layout-inner > .hd p {\n  font-size: 12px;\n  color: #999;\n  margin-top: 10px;\n}\n#warning {\n  position: fixed;\n  top: -40px;\n  left: 50%;\n  z-index: 60000;\n  opacity: 0;\n  padding: 4px 20px;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #fff;\n  text-align: center;\n}\n.waring-success {\n  background: #35b558;\n}\n.waring-failure {\n  background: #ff5c00;\n}\n.waring-sub {\n  background: #2d85ca;\n}\n.passport-step {\n  padding: 8px 6px;\n}\n.passport-step li {\n  position: relative;\n  top: 0;\n  left: 0;\n  float: left;\n  width: 100px;\n  margin-left: 90px;\n  padding-top: 35px;\n  text-align: center;\n}\n.passport-step li.first {\n  margin-left: 0;\n}\n.passport-step li .disc {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  z-index: 20;\n  display: block;\n  width: 30px;\n  height: 30px;\n  margin-left: -15px;\n  background-color: #b9b9b9;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  border-radius: 50%;\n  color: #fff;\n  font: 16px/30px arial;\n  cursor: default;\n}\n.passport-step li .strip {\n  position: absolute;\n  top: 13px;\n  left: -120px;\n  z-index: 10;\n  display: block;\n  width: 150px;\n  height: 3px;\n  background-color: #b9b9b9;\n}\n.passport-step p {\n  color: #666;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  white-space: nowrap;\n}\n.passport-step .now .disc,\n.passport-step .now .strip,\n.passport-step .past .disc,\n.passport-step .past .strip {\n  background-color: #35b558;\n}\n.passport-safely {\n  margin-top: 10px;\n}\n.passport-safely li {\n  float: left;\n  width: 60px;\n  height: 14px;\n  margin-right: 4px;\n  background-color: #ddd;\n  color: #fff;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  cursor: default;\n}\n.passport-safely.safely-danger .danger {\n  background-color: #da4619;\n}\n.passport-safely.safely-general .danger,\n.passport-safely.safely-general .general {\n  background-color: #ff5c00;\n}\n.passport-safely.safely-safe li {\n  background-color: #35b558;\n}\n.clearfix:after,\n.passport-step:after,\n.passport-safely:after,\n.passport-sign:after,\n.passport-form .form-imgcode .form-cont:after {\n  display: table;\n  clear: both;\n  content: " ";\n}\n.passport-icon {\n  background-image: url("//sp1.jikexueyuan.com/static/images/fouricon.png");\n  background-size: 298px 120px;\n}\n.passport-icon2 {\n  background-image: url("//sp1.jikexueyuan.com/static/images/passport.png");\n  background-size: 155px 106px;\n}\n.passport-sign {\n  /*  height: 400px;*/\n  /*padding: 25px 0 0 0;*/\n  background-color: #fff;\n}\n.passport-sign .main-form,\n.passport-sign .aside {\n  float: left;\n  /*  padding: 0 25px;*/\n}\n#register-popup .main-form {\n  width: 385px;\n  border-right: 2px solid #fafafa;\n  padding-right: 20px;\n}\n#login-popup .main-form {\n  width: 370px;\n}\n.passport-sign .main-form h2 {\n  color: #333;\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: normal;\n  line-height: 20px;\n}\n/*.passport-sign .main-form.main-form-sign {\n  min-height: 350px;\n}*/\n.passport-sign .aside {\n  width: 290px;\n}\n.LoginAndRegister-Mask .passport-sign .passport-goto {\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-left: 20px;\n  color: #999;\n  font-size: 16px;\n}\n.passport-sign .passport-third .hd {\n  height: 16px;\n  font-size: 12px;\n  text-align: center;\n  width: 240px;\n  margin: 0 auto;\n}\n.passport-sign .passport-third .hd .layout-inner {\n  margin-bottom: 7px;\n  border-bottom: 2px solid #f2f2f2;\n}\n.layout-inner .quikely {\n  border-bottom: 1px solid #e4e4e4;\n  text-align: center;\n  height: 10px;\n  margin: 15px 0 10px 0;\n}\n.layout-inner .quikely span {\n  padding: 5px;\n  background: #fff;\n}\n/*.passport-sign .passport-third .hd .layout-inner h3 {\n  font-size: 18px;\n  width: 300px;\n  float: left;\n}*/\n.passport-sign .passport-third .hd h3 {\n  width: 106px;\n  margin: 0 auto -8px;\n  background-color: #fff;\n  font-weight: 400;\n  line-height: 16px;\n}\n.passport-popup .links {\n  margin: 0 auto;\n  padding-top: 20px;\n  text-align: center;\n}\n.passport-popup .links a {\n  display: inline-block;\n  margin: 0 8px;\n}\n.passport-popup .links a:last-child {\n  margin-right: 0;\n}\n/*.passport-sign .passport-ad {\n  width: 240px;\n  height: 60px;\n  margin-top: 80px;\n}*/\n.passport-sign .passport-tab .tabs {\n  margin-bottom: 15px;\n}\n.passport-sign .passport-tab .tabs ul {\n  border-bottom: 2px solid #e4e4e4;\n}\n.passport-sign .passport-tab .tabs li {\n  float: left;\n  width: 50%;\n  height: 32px;\n  margin-bottom: -2px;\n  text-align: center;\n  font-size: 16px;\n}\n.passport-sign .passport-tab .tabs li.active {\n  color: #35b558;\n  border-bottom: 2px solid #35b558;\n}\n.passport-form .form-item {\n  margin-bottom: 12px;\n}\n.passport-form .form-cont {\n  position: relative;\n  line-height: 26px;\n}\n.passport-form .js-placeholder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 40px;\n  padding: 11px;\n  font-size: 12px;\n  line-height: 18px;\n  text-align: left;\n}\n.passport-form .passport-txt {\n  position: relative;\n  z-index: 10;\n  color: #666;\n  font-size: 12px;\n}\n.passport-form .passport-txt.placeholder {\n  background-color: rgba(0, 0, 0, 0);\n}\n.passport-form .passport-note {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 40px;\n  z-index: 20;\n  padding: 0;\n  background-color: rgba(0, 0, 0, 0);\n  color: #fff;\n  line-height: 26px;\n}\n.passport-form .passport-note span {\n  display: block;\n  height: 26px;\n  margin: 7px 7px 0 0;\n  padding: 0 5px;\n  background-color: #ff5c00;\n  -webkit-border-radius: 2px;\n  -moz-border-radius: 2px;\n  border-radius: 2px;\n}\n.passport-form .form-imgcode .layout-inner3 {\n  position: relative;\n  float: left;\n  width: 100%;\n}\n.passport-form .form-imgcode .layout-inner {\n  position: relative;\n  float: left;\n  width: 240px;\n}\n.passport-form .form-imgcode .imgcode {\n  float: right;\n}\n.passport-form .form-imgcode .imgcode img {\n  width: 100px;\n  height: 40px;\n  cursor: pointer;\n}\n.passport-form .form-imgcode .imgcode .passport-icon {\n  cursor: pointer;\n}\n.passport-form .form-mcode .btn-getcode {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n}\n.passport-form .form-mcode .btn-getcode .passport-btn {\n  text-overflow: initial;\n  width: 90px;\n  height: 26px;\n  margin: 7px 7px 0 0;\n  padding: 0;\n  -webkit-border-radius: 2px;\n  -moz-border-radius: 2px;\n  border-radius: 2px;\n}\n.passport-form .form-mcode .passport-note {\n  right: 97px;\n}\n.passport-form .passport-sms {\n  position: absolute;\n  top: 100%;\n  left: 0;\n}\n.passport-form .passport-sms a {\n  color: #2d85ca;\n}\n.passport-form .passport-sms a:hover {\n  color: #529dd8;\n}\n.passport-form .passport-sms a.disabled,\n.passport-form .passport-sms a.disabled:hover {\n  color: #999;\n}\n.passport-form-sign .form-treaty .passport-note span {\n  margin: 0;\n}\n.passport-form-sign .form-treaty .form-cont {\n  line-height: 20px;\n}\n.passport-form-sign .treaty {\n  color: #999;\n}\n.passport-form-sign .treaty:hover {\n  color: #35b558;\n}\n.passport-form-sign .form-sevenday label {\n  float: left;\n}\n.passport-form-sign .form-sevenday .forget-link {\n  float: right;\n  color: #999;\n}\n.passport-form-sign .form-sevenday .forget-link:hover {\n  color: #35b558;\n}\n.passport-forget {\n  padding: 25px 0;\n  background-color: #fff;\n  min-height: 400px;\n}\n.passport-forget .passport-into {\n  padding-top: 95px;\n}\n.passport-forget .passport-into .passport-btn {\n  display: block;\n  width: 250px;\n  height: 54px;\n  margin: 0 auto 50px;\n  -webkit-border-radius: 2px;\n  -moz-border-radius: 2px;\n  border-radius: 2px;\n  font-size: 16px;\n  text-align: left;\n  line-height: 52px;\n}\n.passport-forget .passport-into .passport-btn .passport-icon {\n  margin-right: 25px;\n}\n.passport-forget .passport-step {\n  margin: 40px auto 20px;\n  width: 492px;\n}\n.passport-forget .passport-form {\n  width: 300px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.passport-forget .passport-form .form-submit {\n  margin-top: 30px;\n}\n.passport-forget .passport-form .form-item {\n  margin-bottom: 18px;\n}\n.passport-form-email .form-text,\n.passport-form-phone .form-text,\n.passport-form-email .form-code-text,\n.passport-form-phone .form-code-text {\n  width: 500px;\n  margin: 0 -100px;\n  text-align: center;\n}\n.passport-form-email .form-text p,\n.passport-form-phone .form-text p,\n.passport-form-email .form-code-text p,\n.passport-form-phone .form-code-text p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-bottom: 20px;\n}\n.passport-form-email .form-text big,\n.passport-form-phone .form-text big,\n.passport-form-email .form-code-text big,\n.passport-form-phone .form-code-text big {\n  font-size: 14px;\n}\n.passport-form-email .form-email,\n.passport-form-phone .form-email {\n  font-size: 14px;\n}\n.passport-form-email .form-email p,\n.passport-form-phone .form-email p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.passport-form-email .form-email em,\n.passport-form-phone .form-email em {\n  color: #35b558;\n}\n.passport-form-phone .form-code-text {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  text-align: left;\n}\n.passport-form-phone .form-code-text .passport-icon {\n  position: absolute;\n  right: 0;\n  left: 0;\n  margin-left: -60px;\n}\n.passport-form-phone .passport-voice {\n  color: #2d85ca;\n}\n.passport-form-phone .passport-voice:hover {\n  color: #529dd8;\n}\n.mb-25 {\n  margin-bottom: 25px !important;\n}\n.passport-popup .close-event {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n  background: url("//sp1.jikexueyuan.com/static/images/popup_def_close.png") no-repeat center center / 14px 14px;\n}\n.hide {\n  display: none;\n}\n.passport-popup .regphone {\n  font-size: 16px;\n  text-align: center;\n  color: #000;\n  margin-top: 30px;\n}\n.passport-popup .regphone a:hover {\n  text-decoration: underline;\n}\n.passport-popup .getfreevideo {\n  margin-top: 10px;\n  font-size: 14px;\n  text-align: center;\n  color: #000;\n}\n#register-registe-bindPhone {\n  border-top: 5px solid #35B558;\n}\n#registe-bindPhone .instructions {\n  display: block;\n  margin: 20px 0 20px 0;\n  padding: 10px 0;\n  color: #000;\n  border-top: 1px solid #35B558;\n  border-bottom: 1px solid #35B558;\n  font-size: 14px;\n  line-height: 22px;\n}\n.passport-popup .phonedtm {\n  display: block;\n  text-align: right;\n  margin: 30px 0px 10px 0px;\n  color: #999;\n}\n.passport-popup .phonedtm i {\n  float: right;\n  width: 15px;\n  height: 15px;\n  display: inline-block;\n  overflow: hidden;\n  background: url("//sp1.jikexueyuan.com/static/images/feg-icon.png");\n  background-position: -15px 0px;\n  background-size: 30px 30px;\n}\n.passport-popup .phonedtm:hover i {\n  background-position: -15px -15px;\n}\n#verifyId {\n  box-sizing: content-box;\n}\n.nc-error-txt {\n  color: #ff5c00;\n  text-align: right;\n  line-height: 34px;\n}\n.reg_pop_python {\n  width: 280px;\n  height: 100px;\n  margin-bottom: 20px;\n  margin-left: 20px;\n}\n', ""])
}, function (n, t, o) {
    (function (t) {
        function o(n, t) {
            var o = n[1] || "", r = n[3];
            if (!r) return o;
            if (t) {
                var i = e(r);
                return [o].concat(r.sources.map(function (n) {
                    return "/*# sourceURL=" + r.sourceRoot + n + " */"
                })).concat([i]).join("\n")
            }
            return [o].join("\n")
        }

        function e(n) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + new t(JSON.stringify(n)).toString("base64") + " */"
        }

        n.exports = function (n) {
            var t = [];
            return t.toString = function () {
                return this.map(function (t) {
                    var e = o(t, n);
                    return t[2] ? "@media " + t[2] + "{" + e + "}" : e
                }).join("")
            }, t.i = function (n, o) {
                "string" == typeof n && (n = [[null, n, ""]]);
                for (var e = {}, r = 0; r < this.length; r++) {
                    var i = this[r][0];
                    "number" == typeof i && (e[i] = !0)
                }
                for (r = 0; r < n.length; r++) {
                    var s = n[r];
                    "number" == typeof s[0] && e[s[0]] || (o && !s[2] ? s[2] = o : o && (s[2] = "(" + s[2] + ") and (" + o + ")"), t.push(s))
                }
            }, t
        }
    }).call(t, o(11).Buffer)
}, function (n, t, o) {
    function e(n, t) {
        for (var o = 0; o < n.length; o++) {
            var e = n[o], r = h[e.id];
            if (r) {
                r.refs++;
                for (var i = 0; i < r.parts.length; i++) r.parts[i](e.parts[i]);
                for (; i < e.parts.length; i++) r.parts.push(l(e.parts[i], t))
            } else {
                for (var s = [], i = 0; i < e.parts.length; i++) s.push(l(e.parts[i], t));
                h[e.id] = {id: e.id, refs: 1, parts: s}
            }
        }
    }

    function r(n) {
        for (var t = [], o = {}, e = 0; e < n.length; e++) {
            var r = n[e], i = r[0], s = r[1], a = r[2], p = r[3], c = {css: s, media: a, sourceMap: p};
            o[i] ? o[i].parts.push(c) : t.push(o[i] = {id: i, parts: [c]})
        }
        return t
    }

    function i(n, t) {
        var o = m(n.insertInto);
        if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var e = x[x.length - 1];
        if ("top" === n.insertAt) e ? e.nextSibling ? o.insertBefore(t, e.nextSibling) : o.appendChild(t) : o.insertBefore(t, o.firstChild), x.push(t); else {
            if ("bottom" !== n.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            o.appendChild(t)
        }
    }

    function s(n) {
        n.parentNode.removeChild(n);
        var t = x.indexOf(n);
        t >= 0 && x.splice(t, 1)
    }

    function a(n) {
        var t = document.createElement("style");
        return n.attrs.type = "text/css", c(t, n.attrs), i(n, t), t
    }

    function p(n) {
        var t = document.createElement("link");
        return n.attrs.type = "text/css", n.attrs.rel = "stylesheet", c(t, n.attrs), i(n, t), t
    }

    function c(n, t) {
        Object.keys(t).forEach(function (o) {
            n.setAttribute(o, t[o])
        })
    }

    function l(n, t) {
        var o, e, r;
        if (t.singleton) {
            var i = v++;
            o = b || (b = a(t)), e = f.bind(null, o, i, !1), r = f.bind(null, o, i, !0)
        } else n.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (o = p(t), e = d.bind(null, o, t), r = function () {
            s(o), o.href && URL.revokeObjectURL(o.href)
        }) : (o = a(t), e = u.bind(null, o), r = function () {
            s(o)
        });
        return e(n), function (t) {
            if (t) {
                if (t.css === n.css && t.media === n.media && t.sourceMap === n.sourceMap) return;
                e(n = t)
            } else r()
        }
    }

    function f(n, t, o, e) {
        var r = o ? "" : e.css;
        if (n.styleSheet) n.styleSheet.cssText = w(t, r); else {
            var i = document.createTextNode(r), s = n.childNodes;
            s[t] && n.removeChild(s[t]), s.length ? n.insertBefore(i, s[t]) : n.appendChild(i)
        }
    }

    function u(n, t) {
        var o = t.css, e = t.media;
        if (e && n.setAttribute("media", e), n.styleSheet) n.styleSheet.cssText = o; else {
            for (; n.firstChild;) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(o))
        }
    }

    function d(n, t, o) {
        var e = o.css, r = o.sourceMap, i = void 0 === t.convertToAbsoluteUrls && r;
        (t.convertToAbsoluteUrls || i) && (e = y(e)), r && (e += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
        var s = new Blob([e], {type: "text/css"}), a = n.href;
        n.href = URL.createObjectURL(s), a && URL.revokeObjectURL(a)
    }

    var h = {}, g = function (n) {
        var t;
        return function () {
            return void 0 === t && (t = n.apply(this, arguments)), t
        }
    }(function () {
        return window && document && document.all && !window.atob
    }), m = function (n) {
        var t = {};
        return function (o) {
            return void 0 === t[o] && (t[o] = n.call(this, o)), t[o]
        }
    }(function (n) {
        return document.querySelector(n)
    }), b = null, v = 0, x = [], y = o(9);
    n.exports = function (n, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        t = t || {}, t.attrs = "object" == typeof t.attrs ? t.attrs : {}, void 0 === t.singleton && (t.singleton = g()), void 0 === t.insertInto && (t.insertInto = "head"), void 0 === t.insertAt && (t.insertAt = "bottom");
        var o = r(n);
        return e(o, t), function (n) {
            for (var i = [], s = 0; s < o.length; s++) {
                var a = o[s], p = h[a.id];
                p.refs--, i.push(p)
            }
            if (n) {
                e(r(n), t)
            }
            for (var s = 0; s < i.length; s++) {
                var p = i[s];
                if (0 === p.refs) {
                    for (var c = 0; c < p.parts.length; c++) p.parts[c]();
                    delete h[p.id]
                }
            }
        }
    };
    var w = function () {
        var n = [];
        return function (t, o) {
            return n[t] = o, n.filter(Boolean).join("\n")
        }
    }()
}, function (n, t) {
    n.exports = function (n) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!n || "string" != typeof n) return n;
        var o = t.protocol + "//" + t.host, e = o + t.pathname.replace(/\/[^\/]*$/, "/");
        return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (n, t) {
            var r = t.trim().replace(/^"(.*)"$/, function (n, t) {
                return t
            }).replace(/^'(.*)'$/, function (n, t) {
                return t
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return n;
            var i;
            return i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? o + r : e + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")"
        })
    }
}, function (n, t) {
    var o;
    o = function () {
        return this
    }();
    try {
        o = o || Function("return this")() || (0, eval)("this")
    } catch (n) {
        "object" == typeof window && (o = window)
    }
    n.exports = o
}, function (n, t, o) {
    "use strict";
    (function (n) {
        function e() {
            return i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function r(n, t) {
            if (e() < t) throw new RangeError("Invalid typed array length");
            return i.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(t), n.__proto__ = i.prototype) : (null === n && (n = new i(t)), n.length = t), n
        }

        function i(n, t, o) {
            if (!(i.TYPED_ARRAY_SUPPORT || this instanceof i)) return new i(n, t, o);
            if ("number" == typeof n) {
                if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                return c(this, n)
            }
            return s(this, n, t, o)
        }

        function s(n, t, o, e) {
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? u(n, t, o, e) : "string" == typeof t ? l(n, t, o) : d(n, t)
        }

        function a(n) {
            if ("number" != typeof n) throw new TypeError('"size" argument must be a number');
            if (n < 0) throw new RangeError('"size" argument must not be negative')
        }

        function p(n, t, o, e) {
            return a(t), t <= 0 ? r(n, t) : void 0 !== o ? "string" == typeof e ? r(n, t).fill(o, e) : r(n, t).fill(o) : r(n, t)
        }

        function c(n, t) {
            if (a(t), n = r(n, t < 0 ? 0 : 0 | h(t)), !i.TYPED_ARRAY_SUPPORT) for (var o = 0; o < t; ++o) n[o] = 0;
            return n
        }

        function l(n, t, o) {
            if ("string" == typeof o && "" !== o || (o = "utf8"), !i.isEncoding(o)) throw new TypeError('"encoding" must be a valid string encoding');
            var e = 0 | m(t, o);
            n = r(n, e);
            var s = n.write(t, o);
            return s !== e && (n = n.slice(0, s)), n
        }

        function f(n, t) {
            var o = t.length < 0 ? 0 : 0 | h(t.length);
            n = r(n, o);
            for (var e = 0; e < o; e += 1) n[e] = 255 & t[e];
            return n
        }

        function u(n, t, o, e) {
            if (t.byteLength, o < 0 || t.byteLength < o) throw new RangeError("'offset' is out of bounds");
            if (t.byteLength < o + (e || 0)) throw new RangeError("'length' is out of bounds");
            return t = void 0 === o && void 0 === e ? new Uint8Array(t) : void 0 === e ? new Uint8Array(t, o) : new Uint8Array(t, o, e), i.TYPED_ARRAY_SUPPORT ? (n = t, n.__proto__ = i.prototype) : n = f(n, t), n
        }

        function d(n, t) {
            if (i.isBuffer(t)) {
                var o = 0 | h(t.length);
                return n = r(n, o), 0 === n.length ? n : (t.copy(n, 0, 0, o), n)
            }
            if (t) {
                if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || H(t.length) ? r(n, 0) : f(n, t);
                if ("Buffer" === t.type && W(t.data)) return f(n, t.data)
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }

        function h(n) {
            if (n >= e()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + e().toString(16) + " bytes");
            return 0 | n
        }

        function g(n) {
            return +n != n && (n = 0), i.alloc(+n)
        }

        function m(n, t) {
            if (i.isBuffer(n)) return n.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(n) || n instanceof ArrayBuffer)) return n.byteLength;
            "string" != typeof n && (n = "" + n);
            var o = n.length;
            if (0 === o) return 0;
            for (var e = !1; ;) switch (t) {
                case"ascii":
                case"latin1":
                case"binary":
                    return o;
                case"utf8":
                case"utf-8":
                case void 0:
                    return G(n).length;
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return 2 * o;
                case"hex":
                    return o >>> 1;
                case"base64":
                    return Z(n).length;
                default:
                    if (e) return G(n).length;
                    t = ("" + t).toLowerCase(), e = !0
            }
        }

        function b(n, t, o) {
            var e = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === o || o > this.length) && (o = this.length), o <= 0) return "";
            if (o >>>= 0, t >>>= 0, o <= t) return "";
            for (n || (n = "utf8"); ;) switch (n) {
                case"hex":
                    return L(this, t, o);
                case"utf8":
                case"utf-8":
                    return $(this, t, o);
                case"ascii":
                    return T(this, t, o);
                case"latin1":
                case"binary":
                    return B(this, t, o);
                case"base64":
                    return S(this, t, o);
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return I(this, t, o);
                default:
                    if (e) throw new TypeError("Unknown encoding: " + n);
                    n = (n + "").toLowerCase(), e = !0
            }
        }

        function v(n, t, o) {
            var e = n[t];
            n[t] = n[o], n[o] = e
        }

        function x(n, t, o, e, r) {
            if (0 === n.length) return -1;
            if ("string" == typeof o ? (e = o, o = 0) : o > 2147483647 ? o = 2147483647 : o < -2147483648 && (o = -2147483648), o = +o, isNaN(o) && (o = r ? 0 : n.length - 1), o < 0 && (o = n.length + o), o >= n.length) {
                if (r) return -1;
                o = n.length - 1
            } else if (o < 0) {
                if (!r) return -1;
                o = 0
            }
            if ("string" == typeof t && (t = i.from(t, e)), i.isBuffer(t)) return 0 === t.length ? -1 : y(n, t, o, e, r);
            if ("number" == typeof t) return t &= 255, i.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(n, t, o) : Uint8Array.prototype.lastIndexOf.call(n, t, o) : y(n, [t], o, e, r);
            throw new TypeError("val must be string, number or Buffer")
        }

        function y(n, t, o, e, r) {
            function i(n, t) {
                return 1 === s ? n[t] : n.readUInt16BE(t * s)
            }

            var s = 1, a = n.length, p = t.length;
            if (void 0 !== e && ("ucs2" === (e = String(e).toLowerCase()) || "ucs-2" === e || "utf16le" === e || "utf-16le" === e)) {
                if (n.length < 2 || t.length < 2) return -1;
                s = 2, a /= 2, p /= 2, o /= 2
            }
            var c;
            if (r) {
                var l = -1;
                for (c = o; c < a; c++) if (i(n, c) === i(t, -1 === l ? 0 : c - l)) {
                    if (-1 === l && (l = c), c - l + 1 === p) return l * s
                } else -1 !== l && (c -= c - l), l = -1
            } else for (o + p > a && (o = a - p), c = o; c >= 0; c--) {
                for (var f = !0, u = 0; u < p; u++) if (i(n, c + u) !== i(t, u)) {
                    f = !1;
                    break
                }
                if (f) return c
            }
            return -1
        }

        function w(n, t, o, e) {
            o = Number(o) || 0;
            var r = n.length - o;
            e ? (e = Number(e)) > r && (e = r) : e = r;
            var i = t.length;
            if (i % 2 != 0) throw new TypeError("Invalid hex string");
            e > i / 2 && (e = i / 2);
            for (var s = 0; s < e; ++s) {
                var a = parseInt(t.substr(2 * s, 2), 16);
                if (isNaN(a)) return s;
                n[o + s] = a
            }
            return s
        }

        function k(n, t, o, e) {
            return J(G(t, n.length - o), n, o, e)
        }

        function E(n, t, o, e) {
            return J(q(t), n, o, e)
        }

        function A(n, t, o, e) {
            return E(n, t, o, e)
        }

        function _(n, t, o, e) {
            return J(Z(t), n, o, e)
        }

        function R(n, t, o, e) {
            return J(F(t, n.length - o), n, o, e)
        }

        function S(n, t, o) {
            return 0 === t && o === n.length ? Q.fromByteArray(n) : Q.fromByteArray(n.slice(t, o))
        }

        function $(n, t, o) {
            o = Math.min(n.length, o);
            for (var e = [], r = t; r < o;) {
                var i = n[r], s = null, a = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                if (r + a <= o) {
                    var p, c, l, f;
                    switch (a) {
                        case 1:
                            i < 128 && (s = i);
                            break;
                        case 2:
                            p = n[r + 1], 128 == (192 & p) && (f = (31 & i) << 6 | 63 & p) > 127 && (s = f);
                            break;
                        case 3:
                            p = n[r + 1], c = n[r + 2], 128 == (192 & p) && 128 == (192 & c) && (f = (15 & i) << 12 | (63 & p) << 6 | 63 & c) > 2047 && (f < 55296 || f > 57343) && (s = f);
                            break;
                        case 4:
                            p = n[r + 1], c = n[r + 2], l = n[r + 3], 128 == (192 & p) && 128 == (192 & c) && 128 == (192 & l) && (f = (15 & i) << 18 | (63 & p) << 12 | (63 & c) << 6 | 63 & l) > 65535 && f < 1114112 && (s = f)
                    }
                }
                null === s ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, e.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), e.push(s), r += a
            }
            return P(e)
        }

        function P(n) {
            var t = n.length;
            if (t <= K) return String.fromCharCode.apply(String, n);
            for (var o = "", e = 0; e < t;) o += String.fromCharCode.apply(String, n.slice(e, e += K));
            return o
        }

        function T(n, t, o) {
            var e = "";
            o = Math.min(n.length, o);
            for (var r = t; r < o; ++r) e += String.fromCharCode(127 & n[r]);
            return e
        }

        function B(n, t, o) {
            var e = "";
            o = Math.min(n.length, o);
            for (var r = t; r < o; ++r) e += String.fromCharCode(n[r]);
            return e
        }

        function L(n, t, o) {
            var e = n.length;
            (!t || t < 0) && (t = 0), (!o || o < 0 || o > e) && (o = e);
            for (var r = "", i = t; i < o; ++i) r += N(n[i]);
            return r
        }

        function I(n, t, o) {
            for (var e = n.slice(t, o), r = "", i = 0; i < e.length; i += 2) r += String.fromCharCode(e[i] + 256 * e[i + 1]);
            return r
        }

        function C(n, t, o) {
            if (n % 1 != 0 || n < 0) throw new RangeError("offset is not uint");
            if (n + t > o) throw new RangeError("Trying to access beyond buffer length")
        }

        function O(n, t, o, e, r, s) {
            if (!i.isBuffer(n)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > r || t < s) throw new RangeError('"value" argument is out of bounds');
            if (o + e > n.length) throw new RangeError("Index out of range")
        }

        function z(n, t, o, e) {
            t < 0 && (t = 65535 + t + 1);
            for (var r = 0, i = Math.min(n.length - o, 2); r < i; ++r) n[o + r] = (t & 255 << 8 * (e ? r : 1 - r)) >>> 8 * (e ? r : 1 - r)
        }

        function U(n, t, o, e) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var r = 0, i = Math.min(n.length - o, 4); r < i; ++r) n[o + r] = t >>> 8 * (e ? r : 3 - r) & 255
        }

        function M(n, t, o, e, r, i) {
            if (o + e > n.length) throw new RangeError("Index out of range");
            if (o < 0) throw new RangeError("Index out of range")
        }

        function j(n, t, o, e, r) {
            return r || M(n, t, o, 4, 3.4028234663852886e38, -3.4028234663852886e38), X.write(n, t, o, e, 23, 4), o + 4
        }

        function V(n, t, o, e, r) {
            return r || M(n, t, o, 8, 1.7976931348623157e308, -1.7976931348623157e308), X.write(n, t, o, e, 52, 8), o + 8
        }

        function Y(n) {
            if (n = D(n).replace(nn, ""), n.length < 2) return "";
            for (; n.length % 4 != 0;) n += "=";
            return n
        }

        function D(n) {
            return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "")
        }

        function N(n) {
            return n < 16 ? "0" + n.toString(16) : n.toString(16)
        }

        function G(n, t) {
            t = t || 1 / 0;
            for (var o, e = n.length, r = null, i = [], s = 0; s < e; ++s) {
                if ((o = n.charCodeAt(s)) > 55295 && o < 57344) {
                    if (!r) {
                        if (o > 56319) {
                            (t -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        if (s + 1 === e) {
                            (t -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        r = o;
                        continue
                    }
                    if (o < 56320) {
                        (t -= 3) > -1 && i.push(239, 191, 189), r = o;
                        continue
                    }
                    o = 65536 + (r - 55296 << 10 | o - 56320)
                } else r && (t -= 3) > -1 && i.push(239, 191, 189);
                if (r = null, o < 128) {
                    if ((t -= 1) < 0) break;
                    i.push(o)
                } else if (o < 2048) {
                    if ((t -= 2) < 0) break;
                    i.push(o >> 6 | 192, 63 & o | 128)
                } else if (o < 65536) {
                    if ((t -= 3) < 0) break;
                    i.push(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128)
                } else {
                    if (!(o < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    i.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, 63 & o | 128)
                }
            }
            return i
        }

        function q(n) {
            for (var t = [], o = 0; o < n.length; ++o) t.push(255 & n.charCodeAt(o));
            return t
        }

        function F(n, t) {
            for (var o, e, r, i = [], s = 0; s < n.length && !((t -= 2) < 0); ++s) o = n.charCodeAt(s), e = o >> 8, r = o % 256, i.push(r), i.push(e);
            return i
        }

        function Z(n) {
            return Q.toByteArray(Y(n))
        }

        function J(n, t, o, e) {
            for (var r = 0; r < e && !(r + o >= t.length || r >= n.length); ++r) t[r + o] = n[r];
            return r
        }

        function H(n) {
            return n !== n
        }

        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
        var Q = o(12), X = o(13), W = o(14);
        t.Buffer = i, t.SlowBuffer = g, t.INSPECT_MAX_BYTES = 50, i.TYPED_ARRAY_SUPPORT = void 0 !== n.TYPED_ARRAY_SUPPORT ? n.TYPED_ARRAY_SUPPORT : function () {
            try {
                var n = new Uint8Array(1);
                return n.__proto__ = {
                    __proto__: Uint8Array.prototype, foo: function () {
                        return 42
                    }
                }, 42 === n.foo() && "function" == typeof n.subarray && 0 === n.subarray(1, 1).byteLength
            } catch (n) {
                return !1
            }
        }(), t.kMaxLength = e(), i.poolSize = 8192, i._augment = function (n) {
            return n.__proto__ = i.prototype, n
        }, i.from = function (n, t, o) {
            return s(null, n, t, o)
        }, i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
            value: null,
            configurable: !0
        })), i.alloc = function (n, t, o) {
            return p(null, n, t, o)
        }, i.allocUnsafe = function (n) {
            return c(null, n)
        }, i.allocUnsafeSlow = function (n) {
            return c(null, n)
        }, i.isBuffer = function (n) {
            return !(null == n || !n._isBuffer)
        }, i.compare = function (n, t) {
            if (!i.isBuffer(n) || !i.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
            if (n === t) return 0;
            for (var o = n.length, e = t.length, r = 0, s = Math.min(o, e); r < s; ++r) if (n[r] !== t[r]) {
                o = n[r], e = t[r];
                break
            }
            return o < e ? -1 : e < o ? 1 : 0
        }, i.isEncoding = function (n) {
            switch (String(n).toLowerCase()) {
                case"hex":
                case"utf8":
                case"utf-8":
                case"ascii":
                case"latin1":
                case"binary":
                case"base64":
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, i.concat = function (n, t) {
            if (!W(n)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === n.length) return i.alloc(0);
            var o;
            if (void 0 === t) for (t = 0, o = 0; o < n.length; ++o) t += n[o].length;
            var e = i.allocUnsafe(t), r = 0;
            for (o = 0; o < n.length; ++o) {
                var s = n[o];
                if (!i.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(e, r), r += s.length
            }
            return e
        }, i.byteLength = m, i.prototype._isBuffer = !0, i.prototype.swap16 = function () {
            var n = this.length;
            if (n % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < n; t += 2) v(this, t, t + 1);
            return this
        }, i.prototype.swap32 = function () {
            var n = this.length;
            if (n % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < n; t += 4) v(this, t, t + 3), v(this, t + 1, t + 2);
            return this
        }, i.prototype.swap64 = function () {
            var n = this.length;
            if (n % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < n; t += 8) v(this, t, t + 7), v(this, t + 1, t + 6), v(this, t + 2, t + 5), v(this, t + 3, t + 4);
            return this
        }, i.prototype.toString = function () {
            var n = 0 | this.length;
            return 0 === n ? "" : 0 === arguments.length ? $(this, 0, n) : b.apply(this, arguments)
        }, i.prototype.equals = function (n) {
            if (!i.isBuffer(n)) throw new TypeError("Argument must be a Buffer");
            return this === n || 0 === i.compare(this, n)
        }, i.prototype.inspect = function () {
            var n = "", o = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (n = this.toString("hex", 0, o).match(/.{2}/g).join(" "), this.length > o && (n += " ... ")), "<Buffer " + n + ">"
        }, i.prototype.compare = function (n, t, o, e, r) {
            if (!i.isBuffer(n)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0), void 0 === o && (o = n ? n.length : 0), void 0 === e && (e = 0), void 0 === r && (r = this.length), t < 0 || o > n.length || e < 0 || r > this.length) throw new RangeError("out of range index");
            if (e >= r && t >= o) return 0;
            if (e >= r) return -1;
            if (t >= o) return 1;
            if (t >>>= 0, o >>>= 0, e >>>= 0, r >>>= 0, this === n) return 0;
            for (var s = r - e, a = o - t, p = Math.min(s, a), c = this.slice(e, r), l = n.slice(t, o), f = 0; f < p; ++f) if (c[f] !== l[f]) {
                s = c[f], a = l[f];
                break
            }
            return s < a ? -1 : a < s ? 1 : 0
        }, i.prototype.includes = function (n, t, o) {
            return -1 !== this.indexOf(n, t, o)
        }, i.prototype.indexOf = function (n, t, o) {
            return x(this, n, t, o, !0)
        }, i.prototype.lastIndexOf = function (n, t, o) {
            return x(this, n, t, o, !1)
        }, i.prototype.write = function (n, t, o, e) {
            if (void 0 === t) e = "utf8", o = this.length, t = 0; else if (void 0 === o && "string" == typeof t) e = t, o = this.length, t = 0; else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0, isFinite(o) ? (o |= 0, void 0 === e && (e = "utf8")) : (e = o, o = void 0)
            }
            var r = this.length - t;
            if ((void 0 === o || o > r) && (o = r), n.length > 0 && (o < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            e || (e = "utf8");
            for (var i = !1; ;) switch (e) {
                case"hex":
                    return w(this, n, t, o);
                case"utf8":
                case"utf-8":
                    return k(this, n, t, o);
                case"ascii":
                    return E(this, n, t, o);
                case"latin1":
                case"binary":
                    return A(this, n, t, o);
                case"base64":
                    return _(this, n, t, o);
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return R(this, n, t, o);
                default:
                    if (i) throw new TypeError("Unknown encoding: " + e);
                    e = ("" + e).toLowerCase(), i = !0
            }
        }, i.prototype.toJSON = function () {
            return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
        };
        var K = 4096;
        i.prototype.slice = function (n, t) {
            var o = this.length;
            n = ~~n, t = void 0 === t ? o : ~~t, n < 0 ? (n += o) < 0 && (n = 0) : n > o && (n = o), t < 0 ? (t += o) < 0 && (t = 0) : t > o && (t = o), t < n && (t = n);
            var e;
            if (i.TYPED_ARRAY_SUPPORT) e = this.subarray(n, t), e.__proto__ = i.prototype; else {
                var r = t - n;
                e = new i(r, void 0);
                for (var s = 0; s < r; ++s) e[s] = this[s + n]
            }
            return e
        }, i.prototype.readUIntLE = function (n, t, o) {
            n |= 0, t |= 0, o || C(n, t, this.length);
            for (var e = this[n], r = 1, i = 0; ++i < t && (r *= 256);) e += this[n + i] * r;
            return e
        }, i.prototype.readUIntBE = function (n, t, o) {
            n |= 0, t |= 0, o || C(n, t, this.length);
            for (var e = this[n + --t], r = 1; t > 0 && (r *= 256);) e += this[n + --t] * r;
            return e
        }, i.prototype.readUInt8 = function (n, t) {
            return t || C(n, 1, this.length), this[n]
        }, i.prototype.readUInt16LE = function (n, t) {
            return t || C(n, 2, this.length), this[n] | this[n + 1] << 8
        }, i.prototype.readUInt16BE = function (n, t) {
            return t || C(n, 2, this.length), this[n] << 8 | this[n + 1]
        }, i.prototype.readUInt32LE = function (n, t) {
            return t || C(n, 4, this.length), (this[n] | this[n + 1] << 8 | this[n + 2] << 16) + 16777216 * this[n + 3]
        }, i.prototype.readUInt32BE = function (n, t) {
            return t || C(n, 4, this.length), 16777216 * this[n] + (this[n + 1] << 16 | this[n + 2] << 8 | this[n + 3])
        }, i.prototype.readIntLE = function (n, t, o) {
            n |= 0, t |= 0, o || C(n, t, this.length);
            for (var e = this[n], r = 1, i = 0; ++i < t && (r *= 256);) e += this[n + i] * r;
            return r *= 128, e >= r && (e -= Math.pow(2, 8 * t)), e
        }, i.prototype.readIntBE = function (n, t, o) {
            n |= 0, t |= 0, o || C(n, t, this.length);
            for (var e = t, r = 1, i = this[n + --e]; e > 0 && (r *= 256);) i += this[n + --e] * r;
            return r *= 128, i >= r && (i -= Math.pow(2, 8 * t)), i
        }, i.prototype.readInt8 = function (n, t) {
            return t || C(n, 1, this.length), 128 & this[n] ? -1 * (255 - this[n] + 1) : this[n]
        }, i.prototype.readInt16LE = function (n, t) {
            t || C(n, 2, this.length);
            var o = this[n] | this[n + 1] << 8;
            return 32768 & o ? 4294901760 | o : o
        }, i.prototype.readInt16BE = function (n, t) {
            t || C(n, 2, this.length);
            var o = this[n + 1] | this[n] << 8;
            return 32768 & o ? 4294901760 | o : o
        }, i.prototype.readInt32LE = function (n, t) {
            return t || C(n, 4, this.length), this[n] | this[n + 1] << 8 | this[n + 2] << 16 | this[n + 3] << 24
        }, i.prototype.readInt32BE = function (n, t) {
            return t || C(n, 4, this.length), this[n] << 24 | this[n + 1] << 16 | this[n + 2] << 8 | this[n + 3]
        }, i.prototype.readFloatLE = function (n, t) {
            return t || C(n, 4, this.length), X.read(this, n, !0, 23, 4)
        }, i.prototype.readFloatBE = function (n, t) {
            return t || C(n, 4, this.length), X.read(this, n, !1, 23, 4)
        }, i.prototype.readDoubleLE = function (n, t) {
            return t || C(n, 8, this.length), X.read(this, n, !0, 52, 8)
        }, i.prototype.readDoubleBE = function (n, t) {
            return t || C(n, 8, this.length), X.read(this, n, !1, 52, 8)
        }, i.prototype.writeUIntLE = function (n, t, o, e) {
            if (n = +n, t |= 0, o |= 0, !e) {
                O(this, n, t, o, Math.pow(2, 8 * o) - 1, 0)
            }
            var r = 1, i = 0;
            for (this[t] = 255 & n; ++i < o && (r *= 256);) this[t + i] = n / r & 255;
            return t + o
        }, i.prototype.writeUIntBE = function (n, t, o, e) {
            if (n = +n, t |= 0, o |= 0, !e) {
                O(this, n, t, o, Math.pow(2, 8 * o) - 1, 0)
            }
            var r = o - 1, i = 1;
            for (this[t + r] = 255 & n; --r >= 0 && (i *= 256);) this[t + r] = n / i & 255;
            return t + o
        }, i.prototype.writeUInt8 = function (n, t, o) {
            return n = +n, t |= 0, o || O(this, n, t, 1, 255, 0), i.TYPED_ARRAY_SUPPORT || (n = Math.floor(n)), this[t] = 255 & n, t + 1
        }, i.prototype.writeUInt16LE = function (n, t, o) {
            return n = +n, t |= 0, o || O(this, n, t, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & n, this[t + 1] = n >>> 8) : z(this, n, t, !0), t + 2
        }, i.prototype.writeUInt16BE = function (n, t, o) {
            return n = +n, t |= 0, o || O(this, n, t, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[t] = n >>> 8, this[t + 1] = 255 & n) : z(this, n, t, !1), t + 2
        }, i.prototype.writeUInt32LE = function (n, t, o) {
            return n = +n, t |= 0, o || O(this, n, t, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[t + 3] = n >>> 24, this[t + 2] = n >>> 16, this[t + 1] = n >>> 8, this[t] = 255 & n) : U(this, n, t, !0), t + 4
        }, i.prototype.writeUInt32BE = function (n, t, o) {
            return n = +n, t |= 0, o || O(this, n, t, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[t] = n >>> 24, this[t + 1] = n >>> 16, this[t + 2] = n >>> 8, this[t + 3] = 255 & n) : U(this, n, t, !1), t + 4
        }, i.prototype.writeIntLE = function (n, t, o, e) {
            if (n = +n, t |= 0, !e) {
                var r = Math.pow(2, 8 * o - 1);
                O(this, n, t, o, r - 1, -r)
            }
            var i = 0, s = 1, a = 0;
            for (this[t] = 255 & n; ++i < o && (s *= 256);) n < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1), this[t + i] = (n / s >> 0) - a & 255;
            return t + o
        }, i.prototype.writeIntBE = function (n, t, o, e) {
            if (n = +n, t |= 0, !e) {
                var r = Math.pow(2, 8 * o - 1);
                O(this, n, t, o, r - 1, -r)
            }
            var i = o - 1, s = 1, a = 0;
            for (this[t + i] = 255 & n; --i >= 0 && (s *= 256);) n < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1), this[t + i] = (n / s >> 0) - a & 255;
            return t + o
        }, i.prototype.writeInt8 = function (n, t, o) {
            return n = +n, t |= 0, o || O(this, n, t, 1, 127, -128), i.TYPED_ARRAY_SUPPORT || (n = Math.floor(n)), n < 0 && (n = 255 + n + 1), this[t] = 255 & n, t + 1
        }, i.prototype.writeInt16LE = function (n, t, o) {
            return n = +n, t |= 0, o || O(this, n, t, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & n, this[t + 1] = n >>> 8) : z(this, n, t, !0), t + 2
        }, i.prototype.writeInt16BE = function (n, t, o) {
            return n = +n, t |= 0, o || O(this, n, t, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[t] = n >>> 8, this[t + 1] = 255 & n) : z(this, n, t, !1), t + 2
        }, i.prototype.writeInt32LE = function (n, t, o) {
            return n = +n, t |= 0, o || O(this, n, t, 4, 2147483647, -2147483648), i.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & n, this[t + 1] = n >>> 8, this[t + 2] = n >>> 16, this[t + 3] = n >>> 24) : U(this, n, t, !0), t + 4
        }, i.prototype.writeInt32BE = function (n, t, o) {
            return n = +n, t |= 0, o || O(this, n, t, 4, 2147483647, -2147483648), n < 0 && (n = 4294967295 + n + 1), i.TYPED_ARRAY_SUPPORT ? (this[t] = n >>> 24, this[t + 1] = n >>> 16, this[t + 2] = n >>> 8, this[t + 3] = 255 & n) : U(this, n, t, !1), t + 4
        }, i.prototype.writeFloatLE = function (n, t, o) {
            return j(this, n, t, !0, o)
        }, i.prototype.writeFloatBE = function (n, t, o) {
            return j(this, n, t, !1, o)
        }, i.prototype.writeDoubleLE = function (n, t, o) {
            return V(this, n, t, !0, o)
        }, i.prototype.writeDoubleBE = function (n, t, o) {
            return V(this, n, t, !1, o)
        }, i.prototype.copy = function (n, t, o, e) {
            if (o || (o = 0), e || 0 === e || (e = this.length), t >= n.length && (t = n.length), t || (t = 0), e > 0 && e < o && (e = o), e === o) return 0;
            if (0 === n.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (o < 0 || o >= this.length) throw new RangeError("sourceStart out of bounds");
            if (e < 0) throw new RangeError("sourceEnd out of bounds");
            e > this.length && (e = this.length), n.length - t < e - o && (e = n.length - t + o);
            var r, s = e - o;
            if (this === n && o < t && t < e) for (r = s - 1; r >= 0; --r) n[r + t] = this[r + o]; else if (s < 1e3 || !i.TYPED_ARRAY_SUPPORT) for (r = 0; r < s; ++r) n[r + t] = this[r + o]; else Uint8Array.prototype.set.call(n, this.subarray(o, o + s), t);
            return s
        }, i.prototype.fill = function (n, t, o, e) {
            if ("string" == typeof n) {
                if ("string" == typeof t ? (e = t, t = 0, o = this.length) : "string" == typeof o && (e = o, o = this.length), 1 === n.length) {
                    var r = n.charCodeAt(0);
                    r < 256 && (n = r)
                }
                if (void 0 !== e && "string" != typeof e) throw new TypeError("encoding must be a string");
                if ("string" == typeof e && !i.isEncoding(e)) throw new TypeError("Unknown encoding: " + e)
            } else "number" == typeof n && (n &= 255);
            if (t < 0 || this.length < t || this.length < o) throw new RangeError("Out of range index");
            if (o <= t) return this;
            t >>>= 0, o = void 0 === o ? this.length : o >>> 0, n || (n = 0);
            var s;
            if ("number" == typeof n) for (s = t; s < o; ++s) this[s] = n; else {
                var a = i.isBuffer(n) ? n : G(new i(n, e).toString()), p = a.length;
                for (s = 0; s < o - t; ++s) this[s + t] = a[s % p]
            }
            return this
        };
        var nn = /[^+\/0-9A-Za-z-_]/g
    }).call(t, o(10))
}, function (n, t, o) {
    "use strict";

    function e(n) {
        var t = n.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        return "=" === n[t - 2] ? 2 : "=" === n[t - 1] ? 1 : 0
    }

    function r(n) {
        return 3 * n.length / 4 - e(n)
    }

    function i(n) {
        var t, o, r, i, s, a = n.length;
        i = e(n), s = new f(3 * a / 4 - i), o = i > 0 ? a - 4 : a;
        var p = 0;
        for (t = 0; t < o; t += 4) r = l[n.charCodeAt(t)] << 18 | l[n.charCodeAt(t + 1)] << 12 | l[n.charCodeAt(t + 2)] << 6 | l[n.charCodeAt(t + 3)], s[p++] = r >> 16 & 255, s[p++] = r >> 8 & 255, s[p++] = 255 & r;
        return 2 === i ? (r = l[n.charCodeAt(t)] << 2 | l[n.charCodeAt(t + 1)] >> 4, s[p++] = 255 & r) : 1 === i && (r = l[n.charCodeAt(t)] << 10 | l[n.charCodeAt(t + 1)] << 4 | l[n.charCodeAt(t + 2)] >> 2, s[p++] = r >> 8 & 255, s[p++] = 255 & r), s
    }

    function s(n) {
        return c[n >> 18 & 63] + c[n >> 12 & 63] + c[n >> 6 & 63] + c[63 & n]
    }

    function a(n, t, o) {
        for (var e, r = [], i = t; i < o; i += 3) e = (n[i] << 16) + (n[i + 1] << 8) + n[i + 2], r.push(s(e));
        return r.join("")
    }

    function p(n) {
        for (var t, o = n.length, e = o % 3, r = "", i = [], s = 0, p = o - e; s < p; s += 16383) i.push(a(n, s, s + 16383 > p ? p : s + 16383));
        return 1 === e ? (t = n[o - 1], r += c[t >> 2], r += c[t << 4 & 63], r += "==") : 2 === e && (t = (n[o - 2] << 8) + n[o - 1], r += c[t >> 10], r += c[t >> 4 & 63], r += c[t << 2 & 63], r += "="), i.push(r), i.join("")
    }

    t.byteLength = r, t.toByteArray = i, t.fromByteArray = p;
    for (var c = [], l = [], f = "undefined" != typeof Uint8Array ? Uint8Array : Array, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0, h = u.length; d < h; ++d) c[d] = u[d], l[u.charCodeAt(d)] = d;
    l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63
}, function (n, t) {
    t.read = function (n, t, o, e, r) {
        var i, s, a = 8 * r - e - 1, p = (1 << a) - 1, c = p >> 1, l = -7, f = o ? r - 1 : 0, u = o ? -1 : 1,
            d = n[t + f];
        for (f += u, i = d & (1 << -l) - 1, d >>= -l, l += a; l > 0; i = 256 * i + n[t + f], f += u, l -= 8) ;
        for (s = i & (1 << -l) - 1, i >>= -l, l += e; l > 0; s = 256 * s + n[t + f], f += u, l -= 8) ;
        if (0 === i) i = 1 - c; else {
            if (i === p) return s ? NaN : 1 / 0 * (d ? -1 : 1);
            s += Math.pow(2, e), i -= c
        }
        return (d ? -1 : 1) * s * Math.pow(2, i - e)
    }, t.write = function (n, t, o, e, r, i) {
        var s, a, p, c = 8 * i - r - 1, l = (1 << c) - 1, f = l >> 1,
            u = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = e ? 0 : i - 1, h = e ? 1 : -1,
            g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (p = Math.pow(2, -s)) < 1 && (s--, p *= 2), t += s + f >= 1 ? u / p : u * Math.pow(2, 1 - f), t * p >= 2 && (s++, p /= 2), s + f >= l ? (a = 0, s = l) : s + f >= 1 ? (a = (t * p - 1) * Math.pow(2, r), s += f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, r), s = 0)); r >= 8; n[o + d] = 255 & a, d += h, a /= 256, r -= 8) ;
        for (s = s << r | a, c += r; c > 0; n[o + d] = 255 & s, d += h, s /= 256, c -= 8) ;
        n[o + d - h] |= 128 * g
    }
}, function (n, t) {
    var o = {}.toString;
    n.exports = Array.isArray || function (n) {
        return "[object Array]" == o.call(n)
    }
}]);