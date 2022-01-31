/*!
 * OnePageScroll 1.0.0
 *
 * @license GPLv2+
 *
 * Copyright (C) 2020 by WpMet
 */
! function(e, t, n, o, r) { "function" == typeof define && define.amd ? define((function() { return e.onePageScroll = o(t, n), e.onePageScroll })) : "object" == typeof exports ? module.exports = o(t, n) : t.onePageScroll = o(t, n) }(this, window, document, (function(e, t) {
    "use strict";
    var n = "ops-wrapper",
        o = "." + n,
        r = "ops-responsive",
        i = "ops-notransition",
        a = "ops-destroyed",
        l = "ops-enabled",
        s = "ops-viewing",
        c = "active",
        u = ".active",
        f = "ops-completely",
        d = "ops-section",
        v = "." + d,
        p = ".ops-section.active",
        h = "ops-tableCell",
        g = "." + h,
        m = "ops-auto-height",
        S = "ops-normal-scroll",
        b = "ops-nav",
        w = "#ops-nav",
        y = "ops-show-active",
        E = "ops-slide",
        x = "." + E,
        L = ".ops-slide.active",
        A = "ops-slides",
        T = ".ops-slides",
        k = "ops-slidesContainer",
        O = "." + k,
        M = "ops-table",
        C = "ops-slidesNav",
        N = "." + C,
        H = ".ops-slidesNav a",
        _ = "ops-controlArrow",
        I = "." + _,
        B = "ops-prev",
        R = "ops-controlArrow ops-prev",
        z = ".ops-controlArrow.ops-prev",
        P = "ops-controlArrow ops-next",
        j = ".ops-controlArrow.ops-next";

    function D(t, n) { e.console && e.console[t] && e.console[t]("OnePageScroll: " + n) }

    function V(e, n) { return (n = arguments.length > 1 ? n : t) ? n.querySelectorAll(e) : null }

    function W(e) {
        e = e || {};
        for (var t = 1, n = arguments.length; t < n; ++t) {
            var o = arguments[t];
            if (o)
                for (var r in o) o.hasOwnProperty(r) && ("[object Object]" !== Object.prototype.toString.call(o[r]) ? e[r] = o[r] : e[r] = W(e[r], o[r]))
        }
        return e
    }

    function Y(e, t) { return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className)) }

    function F() { return "innerHeight" in e ? e.innerHeight : t.documentElement.offsetHeight }

    function U() { return e.innerWidth }

    function X(e, t) {
        var n;
        for (n in e = ee(e), t)
            if (t.hasOwnProperty(n) && null !== n)
                for (var o = 0; o < e.length; o++) { e[o].style[n] = t[n] }
        return e
    }

    function $(e, t, n) { for (var o = e[n]; o && !we(o, t);) o = o[n]; return o }

    function K(e, t) { return $(e, t, "previousElementSibling") }

    function q(e, t) { return $(e, t, "nextElementSibling") }

    function J(e) { return e.previousElementSibling }

    function Q(e) { return e.nextElementSibling }

    function G(e) { return e[e.length - 1] }

    function Z(e, t) {
        e = oe(e) ? e[0] : e;
        for (var n = null != t ? V(t, e.parentNode) : e.parentNode.childNodes, o = 0, r = 0; r < n.length; r++) {
            if (n[r] == e) return o;
            1 == n[r].nodeType && o++
        }
        return -1
    }

    function ee(e) { return oe(e) ? e : [e] }

    function te(e) { e = ee(e); for (var t = 0; t < e.length; t++) e[t].style.display = "none"; return e }

    function ne(e) { e = ee(e); for (var t = 0; t < e.length; t++) e[t].style.display = "block"; return e }

    function oe(e) { return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e) }

    function re(e, t) {
        e = ee(e);
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.classList ? o.classList.add(t) : o.className += " " + t
        }
        return e
    }

    function ie(e, t) {
        e = ee(e);
        for (var n = t.split(" "), o = 0; o < n.length; o++) {
            t = n[o];
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.classList ? i.classList.remove(t) : i.className = i.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
            }
        }
        return e
    }

    function ae(e, t) { t.appendChild(e) }

    function le(e, n, o) {
        var r;
        n = n || t.createElement("div");
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            (o && !i || !o) && (r = n.cloneNode(!0), a.parentNode.insertBefore(r, a)), r.appendChild(a)
        }
        return e
    }

    function se(e, t) { le(e, t, !0) }

    function ce(e, t) { for ("string" == typeof t && (t = Ee(t)), e.appendChild(t); e.firstChild !== t;) t.appendChild(e.firstChild) }

    function ue(e) {
        for (var n = t.createDocumentFragment(); e.firstChild;) n.appendChild(e.firstChild);
        e.parentNode.replaceChild(n, e)
    }

    function fe(e, t) { return e && 1 === e.nodeType ? we(e, t) ? e : fe(e.parentNode, t) : null }

    function de(e, t) { pe(e, e.nextSibling, t) }

    function ve(e, t) { pe(e, e, t) }

    function pe(e, t, n) { oe(n) || ("string" == typeof n && (n = Ee(n)), n = [n]); for (var o = 0; o < n.length; o++) e.parentNode.insertBefore(n[o], t) }

    function he() { var n = t.documentElement; return (e.pageYOffset || n.scrollTop) - (n.clientTop || 0) }

    function ge(e) { return Array.prototype.filter.call(e.parentNode.children, (function(t) { return t !== e })) }

    function me(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1 }

    function Se(e) { if ("function" == typeof e) return !0; var t = Object.prototype.toString(e); return "[object Function]" === t || "[object GeneratorFunction]" === t }

    function be(n, o, r) {
        var i;
        r = void 0 === r ? {} : r, "function" == typeof e.CustomEvent ? i = new CustomEvent(o, { detail: r }) : (i = t.createEvent("CustomEvent")).initCustomEvent(o, !0, !0, r), n.dispatchEvent(i)
    }

    function we(e, t) { return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t) }

    function ye(e, t) {
        if ("boolean" == typeof t)
            for (var n = 0; n < e.length; n++) e[n].style.display = t ? "block" : "none";
        return e
    }

    function Ee(e) { var n = t.createElement("div"); return n.innerHTML = e.trim(), n.firstChild }

    function xe(e) {
        e = ee(e);
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n && n.parentElement && n.parentNode.removeChild(n)
        }
    }

    function Le(e, t, n) { for (var o = e[n], r = []; o;)(we(o, t) || null == t) && r.push(o), o = o[n]; return r }

    function Ae(e, t) { return Le(e, t, "nextElementSibling") }

    function Te(e, t) { return Le(e, t, "previousElementSibling") }
    return e.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(t, n) { n = n || e; for (var o = 0; o < this.length; o++) t.call(n, this[o], o, this) }), e.fp_utils = { $: V, deepExtend: W, hasClass: Y, getWindowHeight: F, css: X, until: $, prevUntil: K, nextUntil: q, prev: J, next: Q, last: G, index: Z, getList: ee, hide: te, show: ne, isArrayOrList: oe, addClass: re, removeClass: ie, appendTo: ae, wrap: le, wrapAll: se, wrapInner: ce, unwrap: ue, closest: fe, after: de, before: ve, insertBefore: pe, getScrollTop: he, siblings: ge, preventDefault: me, isFunction: Se, trigger: be, matches: we, toggle: ye, createElementFromHTML: Ee, remove: xe, filter: function(e, t) { Array.prototype.filter.call(e, t) }, untilAll: Le, nextAll: Ae, prevAll: Te, showError: D },
        function(C, _) {
            _ && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(_.licenseKey) || t.domain.indexOf("alvarotrigo.com");
            var $ = V("html, body"),
                ee = V("html")[0],
                oe = V("body")[0];
            if (!Y(ee, l)) {
                var le = {};
                _ = W({ menu: !1, anchors: [], lockAnchors: !1, navigation: !1, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: !1, slidesNavigation: !1, slidesNavPosition: "bottom", scrollBar: !1, hybrid: !0, css3: !0, scrollingSpeed: 700, autoScrolling: !0, fitToSection: !0, fitToSectionDelay: 1e3, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: !1, loopTop: !1, loopHorizontal: !0, continuousVertical: !1, continuousHorizontal: !1, scrollHorizontally: !1, interlockedSlides: !1, dragAndMove: !1, offsetSections: !1, resetSliders: !1, fadingEffect: !1, normalScrollElements: null, scrollOverflow: !1, scrollOverflowReset: !1, scrollOverflowHandler: e.fp_scrolloverflow ? e.fp_scrolloverflow.iscrollHandler : null, scrollOverflowOptions: null, touchSensitivity: 5, touchWrapper: "string" == typeof C ? V(C)[0] : C, bigSectionsDestination: null, keyboardScrolling: !0, animateAnchor: !0, recordHistory: !0, controlArrows: !0, controlArrowColor: "#fff", verticalCentered: !1, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: !1, parallax: !1, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, cards: !1, cardsOptions: { perspective: 100, fadeContent: !0, fadeBackground: !0 }, sectionSelector: ".section", slideSelector: ".slide", v2compatible: !1, afterLoad: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, lazyLoading: !0 }, _);
                var pe, Le, ke, Oe, Me = !1,
                    Ce = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                    Ne = "ontouchstart" in e || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
                    He = "string" == typeof C ? V(C)[0] : C,
                    _e = F(),
                    Ie = U(),
                    Be = !1,
                    Re = !0,
                    ze = !0,
                    Pe = [],
                    je = { m: { up: !0, down: !0, left: !0, right: !0 } };
                je.k = W({}, je.m);
                var De, Ve, We, Ye, Fe, Ue, Xe, $e, Ke, qe = function() {
                        var t;
                        t = e.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" };
                        return t
                    }(),
                    Je = { touchmove: "ontouchmove" in e ? "touchmove" : qe.move, touchstart: "ontouchstart" in e ? "touchstart" : qe.down },
                    Qe = !1;
                try {
                    var Ge = Object.defineProperty({}, "passive", { get: function() { Qe = !0 } });
                    e.addEventListener("testPassive", null, Ge), e.removeEventListener("testPassive", null, Ge)
                } catch (ro) {}
                var Ze, et, tt = W({}, _),
                    nt = !1,
                    ot = !0,
                    rt = ["parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards"];
                Gn(), e.fp_easings = W(e.fp_easings, { easeInOutCubic: function(e, t, n, o) { return (e /= o / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t } }), He && (le.version = "1.0.0", le.setAutoScrolling = ht, le.setRecordHistory = gt, le.setScrollingSpeed = mt, le.setFitToSection = St, le.setLockAnchors = function(e) { _.lockAnchors = e }, le.setMouseWheelScrolling = bt, le.setAllowScrolling = wt, le.setKeyboardScrolling = Et, le.moveSectionUp = xt, le.moveSectionDown = Lt, le.silentMoveTo = At, le.moveTo = Tt, le.moveSlideRight = kt, le.moveSlideLeft = Ot, le.fitToSection = Wt, le.reBuild = Mt, le.setResponsive = Nt, le.getFullpageData = function() { return _ }, le.destroy = function(n) { ht(!1, "internal"), wt(!0), yt(!1), Et(!1), re(He, a), [Fe, Ye, Ve, Ue, Xe, Ke, We].forEach((function(e) { clearTimeout(e) })), e.removeEventListener("scroll", Vt), e.removeEventListener("hashchange", pn), e.removeEventListener("resize", Cn), t.removeEventListener("keydown", gn), t.removeEventListener("keyup", Sn), ["click", "touchstart"].forEach((function(e) { t.removeEventListener(e, Ht) })), ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach((function(e) { t.removeEventListener(e, It, !0) })), n && (Kn(0), V("img[data-src], source[data-src], audio[data-src], iframe[data-src]", He).forEach((function(e) { rn(e, "src") })), V("img[data-srcset]").forEach((function(e) { rn(e, "srcset") })), xe(V("#ops-nav, .ops-slidesNav, .ops-controlArrow")), X(V(v), { height: "", "background-color": "", padding: "" }), X(V(x), { width: "" }), X(He, { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), X($, { overflow: "", height: "" }), ie(ee, l), ie(oe, r), oe.className.split(/\s+/).forEach((function(e) { 0 === e.indexOf(s) && ie(oe, e) })), V(".ops-section, .ops-slide").forEach((function(e) { _.scrollOverflowHandler && _.scrollOverflow && _.scrollOverflowHandler.remove(e), ie(e, "ops-table active " + f), e.getAttribute("data-ops-styles") && e.setAttribute("style", e.getAttribute("data-ops-styles")), Y(e, d) && !nt && e.removeAttribute("data-anchor") })), In(He), [g, O, T].forEach((function(e) { V(e, He).forEach((function(e) { ue(e) })) })), X(He, { "-webkit-transition": "none", transition: "none" }), e.scrollTo(0, 0), [d, E, k].forEach((function(e) { ie(V("." + e), e) }))) }, le.getActiveSection = function() { return new no(V(p)[0]) }, le.getActiveSlide = function() { return tn(V(L, V(p)[0])[0]) }, le.test = { top: "0px", translate3d: "translate3d(0px, 0px, 0px)", translate3dH: function() { for (var e = [], t = 0; t < V(_.sectionSelector, He).length; t++) e.push("translate3d(0px, 0px, 0px)"); return e }(), left: function() { for (var e = [], t = 0; t < V(_.sectionSelector, He).length; t++) e.push(0); return e }(), options: _, setAutoScrolling: ht }, le.shared = { afterRenderActions: Dt, isNormalScrollElement: !1 }, e.onePageScroll_api = le, _.$ && Object.keys(le).forEach((function(e) { _.$.fn.onePageScroll[e] = le[e] })), function() {
                    _.css3 && (_.css3 = function() {
                        var n, o = t.createElement("p"),
                            r = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
                        for (var i in o.style.display = "block", t.body.insertBefore(o, null), r) o.style[i] !== undefined && (o.style[i] = "translate3d(1px,1px,1px)", n = e.getComputedStyle(o).getPropertyValue(r[i]));
                        return t.body.removeChild(o), n !== undefined && n.length > 0 && "none" !== n
                    }());
                    _.scrollBar = _.scrollBar || _.hybrid,
                        function() {
                            if (!_.anchors.length) {
                                var e = "[data-anchor]",
                                    t = V(_.sectionSelector.split(",").join(e + ",") + e, He);
                                t.length && (nt = !0, t.forEach((function(e) { _.anchors.push(e.getAttribute("data-anchor").toString()) })))
                            }
                            if (!_.navigationTooltips.length) {
                                var n = "[data-tooltip]",
                                    o = V(_.sectionSelector.split(",").join(n + ",") + n, He);
                                o.length && o.forEach((function(e) { _.navigationTooltips.push(e.getAttribute("data-tooltip").toString()) }))
                            }
                        }(),
                        function() {
                            X(He, { height: "100%", position: "relative" }), re(He, n), re(ee, l), _e = F(), ie(He, a), re(V(_.sectionSelector, He), d), re(V(_.slideSelector, He), E);
                            for (var e = V(v), o = 0; o < e.length; o++) {
                                var r = o,
                                    i = e[o],
                                    s = V(x, i),
                                    u = s.length;
                                i.setAttribute("data-ops-styles", i.getAttribute("style")), zt(i, r), Pt(i, r), u > 0 ? Rt(i, s, u) : _.verticalCentered && zn(i)
                            }
                            _.fixedElements && _.css3 && V(_.fixedElements).forEach((function(e) { oe.appendChild(e) }));
                            _.navigation && function() {
                                var e = t.createElement("div");
                                e.setAttribute("id", b);
                                var n = t.createElement("ul");
                                e.appendChild(n), ae(e, oe);
                                var o = V(w)[0];
                                re(o, "ops-" + _.navigationPosition), _.showActiveTooltip && re(o, y);
                                for (var r = "", i = 0; i < V(v).length; i++) {
                                    var a = "";
                                    _.anchors.length && (a = _.anchors[i]), r += '<li><a href="#' + a + '"><span class="ops-sr-only">' + jt(i, "Section") + "</span><span></span></a>";
                                    var l = _.navigationTooltips[i];
                                    void 0 !== l && "" !== l && (r += '<div class="ops-tooltip ops-' + _.navigationPosition + '">' + l + "</div>"), r += "</li>"
                                }
                                V("ul", o)[0].innerHTML = r, X(V(w), { "margin-top": "-" + V(w)[0].offsetHeight / 2 + "px" });
                                var s = V("li", V(w)[0])[Z(V(p)[0], v)];
                                re(V("a", s), c)
                            }();
                            void V('iframe[src*="youtube.com/embed/"]', He).forEach((function(e) {
                                var t, n, o;
                                n = "enablejsapi=1", o = (t = e).getAttribute("src"), t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + n)
                            })), _.scrollOverflow && (De = _.scrollOverflowHandler.init(_))
                        }(), wt(!0), yt(!0), ht(_.autoScrolling, "internal"), Hn(), Un(), "complete" === t.readyState && vn();
                    e.addEventListener("load", vn), _.scrollOverflow || Dt();
                    ! function() { for (var e = 1; e < 4; e++) Ke = setTimeout(Bt, 350 * e) }()
                }(), e.addEventListener("scroll", Vt), e.addEventListener("hashchange", pn), e.addEventListener("blur", xn), e.addEventListener("resize", Cn), t.addEventListener("keydown", gn), t.addEventListener("keyup", Sn), ["click", "touchstart"].forEach((function(e) { t.addEventListener(e, Ht) })), _.normalScrollElements && (["mouseenter", "touchstart"].forEach((function(e) { _t(e, !1) })), ["mouseleave", "touchend"].forEach((function(e) { _t(e, !0) }))));
                var it = !1,
                    at = 0,
                    lt = 0,
                    st = 0,
                    ct = 0,
                    ut = 0,
                    ft = (new Date).getTime(),
                    dt = 0,
                    vt = 0,
                    pt = _e;
                return le
            }

            function ht(e, t) {
                e || Kn(0), Qn("autoScrolling", e, t);
                var n = V(p)[0];
                if (_.autoScrolling && !_.scrollBar) X($, { overflow: "hidden", height: "100%" }), gt(tt.recordHistory, "internal"), X(He, { "-ms-touch-action": "none", "touch-action": "none" }), null != n && Kn(n.offsetTop);
                else if (X($, { overflow: "visible", height: "initial" }), gt(!!_.autoScrolling && tt.recordHistory, "internal"), X(He, { "-ms-touch-action": "", "touch-action": "" }), null != n) {
                    var o = nn(n.offsetTop);
                    o.element.scrollTo(0, o.options)
                }
            }

            function gt(e, t) { Qn("recordHistory", e, t) }

            function mt(e, t) { Qn("scrollingSpeed", e, t) }

            function St(e, t) { Qn("fitToSection", e, t) }

            function bt(n) {
                n ? (! function() {
                    var n, o = "";
                    e.addEventListener ? n = "addEventListener" : (n = "attachEvent", o = "on");
                    var r = "onwheel" in t.createElement("div") ? "wheel" : t.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll",
                        i = !!Qe && { passive: !1 };
                    "DOMMouseScroll" == r ? t[n](o + "MozMousePixelScroll", qt, i) : t[n](o + r, qt, i)
                }(), He.addEventListener("mousedown", bn), He.addEventListener("mouseup", wn)) : (t.addEventListener ? (t.removeEventListener("mousewheel", qt, !1), t.removeEventListener("wheel", qt, !1), t.removeEventListener("MozMousePixelScroll", qt, !1)) : t.detachEvent("onmousewheel", qt), He.removeEventListener("mousedown", bn), He.removeEventListener("mouseup", wn))
            }

            function wt(e, t) { void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach((function(t) { Jn(e, t, "m") })) : Jn(e, "all", "m") }

            function yt(e) {
                e ? (bt(!0), function() {
                    if (Ce || Ne) {
                        _.autoScrolling && (oe.removeEventListener(Je.touchmove, Ft, { passive: !1 }), oe.addEventListener(Je.touchmove, Ft, { passive: !1 }));
                        var e = _.touchWrapper;
                        e.removeEventListener(Je.touchstart, $t), e.removeEventListener(Je.touchmove, Ut, { passive: !1 }), e.addEventListener(Je.touchstart, $t), e.addEventListener(Je.touchmove, Ut, { passive: !1 })
                    }
                }()) : (bt(!1), function() {
                    if (Ce || Ne) {
                        _.autoScrolling && (oe.removeEventListener(Je.touchmove, Ut, { passive: !1 }), oe.removeEventListener(Je.touchmove, Ft, { passive: !1 }));
                        var e = _.touchWrapper;
                        e.removeEventListener(Je.touchstart, $t), e.removeEventListener(Je.touchmove, Ut, { passive: !1 })
                    }
                }())
            }

            function Et(e, t) { void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach((function(t) { Jn(e, t, "k") })) : (Jn(e, "all", "k"), _.keyboardScrolling = e) }

            function xt() {
                var e = K(V(p)[0], v);
                e || !_.loopTop && !_.continuousVertical || (e = G(V(v))), null != e && Gt(e, null, !0)
            }

            function Lt() {
                var e = q(V(p)[0], v);
                e || !_.loopBottom && !_.continuousVertical || (e = V(v)[0]), null != e && Gt(e, null, !1)
            }

            function At(e, t) { mt(0, "internal"), Tt(e, t), mt(tt.scrollingSpeed, "internal") }

            function Tt(e, t) {
                var n = Dn(e);
                void 0 !== t ? Vn(e, t) : null != n && Gt(n)
            }

            function kt(e) { Jt("right", e) }

            function Ot(e) { Jt("left", e) }

            function Mt(t) {
                if (!Y(He, a)) {
                    Be = !0, _e = F(), Ie = U();
                    for (var n = V(v), o = 0; o < n.length; ++o) {
                        var r = n[o],
                            i = V(T, r)[0],
                            l = V(x, r);
                        _.verticalCentered && X(V(g, r), { height: Pn(r) + "px" }), X(r, { height: _e + "px" }), l.length > 1 && On(i, V(L, i)[0])
                    }
                    _.scrollOverflow && De.createScrollBarForAll();
                    var s = Z(V(p)[0], v);
                    s && At(s + 1), Be = !1, Se(_.afterResize) && t && _.afterResize.call(He, e.innerWidth, e.innerHeight), Se(_.afterReBuild) && !t && _.afterReBuild.call(He)
                }
            }

            function Ct() { return Y(oe, r) }

            function Nt(e) {
                var t = Ct();
                e ? t || (ht(!1, "internal"), St(!1, "internal"), te(V(w)), re(oe, r), Se(_.afterResponsive) && _.afterResponsive.call(He, e), _.scrollOverflow && De.createScrollBarForAll()) : t && (ht(tt.autoScrolling, "internal"), St(tt.autoScrolling, "internal"), ne(V(w)), ie(oe, r), Se(_.afterResponsive) && _.afterResponsive.call(He, e))
            }

            function Ht(e) {
                var t = e.target;
                t && fe(t, "#ops-nav a") ? Ln.call(t, e) : we(t, ".ops-tooltip") ? mn.call(t) : we(t, I) ? En.call(t, e) : we(t, H) || null != fe(t, H) ? An.call(t, e) : fe(t, _.menu + " [data-menuanchor]") && Tn.call(t, e)
            }

            function _t(e, n) { t["fp_" + e] = n, t.addEventListener(e, It, !0) }

            function It(e) {
                var n = e.type,
                    o = !1,
                    r = _.scrollOverflow,
                    i = "mouseleave" === n ? e.toElement || e.relatedTarget : e.target;
                if (i == t || !i) return yt(!0), void(r && _.scrollOverflowHandler.setIscroll(i, !0));
                ("touchend" === n && (ot = !1, setTimeout((function() { ot = !0 }), 800)), "mouseenter" !== n || ot) && (_.normalScrollElements.split(",").forEach((function(e) {
                    if (!o) {
                        var t = we(i, e),
                            n = fe(i, e);
                        (t || n) && (le.shared.isNormalScrollElement || (yt(!1), r && _.scrollOverflowHandler.setIscroll(i, !1)), le.shared.isNormalScrollElement = !0, o = !0)
                    }
                })), !o && le.shared.isNormalScrollElement && (yt(!0), r && _.scrollOverflowHandler.setIscroll(i, !0), le.shared.isNormalScrollElement = !1))
            }

            function Bt() {
                var e = F(),
                    t = U();
                _e === e && Ie === t || (_e = e, Ie = t, Mt(!0))
            }

            function Rt(e, n, o) {
                var r = 100 * o,
                    i = 100 / o,
                    a = t.createElement("div");
                a.className = A, se(n, a);
                var l = t.createElement("div");
                l.className = k, se(n, l), X(V(O, e), { width: r + "%" }), o > 1 && (_.controlArrows && function(e) {
                    var t = [Ee('<div class="' + R + '"></div>'), Ee('<div class="' + P + '"></div>')];
                    de(V(T, e)[0], t), "#fff" !== _.controlArrowColor && (X(V(j, e), { "border-color": "transparent transparent transparent " + _.controlArrowColor }), X(V(z, e), { "border-color": "transparent " + _.controlArrowColor + " transparent transparent" }));
                    _.loopHorizontal || te(V(z, e))
                }(e), _.slidesNavigation && function(e, t) {
                    ae(Ee('<div class="ops-slidesNav"><ul></ul></div>'), e);
                    var n = V(N, e)[0];
                    re(n, "ops-" + _.slidesNavPosition);
                    for (var o = 0; o < t; o++) ae(Ee('<li><a href="#"><span class="ops-sr-only">' + jt(o, "Slide") + "</span><span></span></a></li>"), V("ul", n)[0]);
                    X(n, { "margin-left": "-" + n.innerWidth / 2 + "px" }), re(V("a", V("li", n)[0]), c)
                }(e, o)), n.forEach((function(e) { X(e, { width: i + "%" }), _.verticalCentered && zn(e) }));
                var s = V(L, e)[0];
                null != s && (0 !== Z(V(p), v) || 0 === Z(V(p), v) && 0 !== Z(s)) ? $n(s, "internal") : re(n[0], c)
            }

            function zt(e, t) { t || null != V(p)[0] || re(e, c), Oe = V(p)[0], X(e, { height: _e + "px" }), _.paddingTop && X(e, { "padding-top": _.paddingTop }), _.paddingBottom && X(e, { "padding-bottom": _.paddingBottom }), "undefined" != typeof _.sectionsColor[t] && X(e, { "background-color": _.sectionsColor[t] }), "undefined" != typeof _.anchors[t] && e.setAttribute("data-anchor", _.anchors[t]) }

            function Pt(e, t) { "undefined" != typeof _.anchors[t] && Y(e, c) && Bn(_.anchors[t], t), _.menu && _.css3 && null != fe(V(_.menu)[0], o) && V(_.menu).forEach((function(e) { oe.appendChild(e) })) }

            function jt(e, t) { return _.navigationTooltips[e] || _.anchors[e] || t + " " + (e + 1) }

            function Dt() {
                var e, t, n = V(p)[0];
                re(n, f), ln(n), an(), cn(n), _.scrollOverflow && _.scrollOverflowHandler.afterLoad(), e = hn(), t = Dn(e.section), e.section && t && (void 0 === t || Z(t) !== Z(Oe)) || !Se(_.afterLoad) || Zt("afterLoad", { activeSection: n, element: n, direction: null, anchorLink: n.getAttribute("data-anchor"), sectionIndex: Z(n, v) }), Se(_.afterRender) && Zt("afterRender")
            }

            function Vt() {
                var e;
                if (!_.autoScrolling || _.scrollBar) {
                    var t = he(),
                        n = function(e) { var t = e > at ? "down" : "up"; return at = e, dt = e, t }(t),
                        o = 0,
                        r = t + F() / 2,
                        i = oe.offsetHeight - F() === t,
                        a = V(v);
                    if (i) o = a.length - 1;
                    else if (t)
                        for (var l = 0; l < a.length; ++l) { a[l].offsetTop <= r && (o = l) } else o = 0;
                    if (function(e) {
                            var t = V(p)[0].offsetTop,
                                n = t + F();
                            if ("up" == e) return n >= he() + F();
                            return t <= he()
                        }(n) && (Y(V(p)[0], f) || (re(V(p)[0], f), ie(ge(V(p)[0]), f))), !Y(e = a[o], c)) {
                        it = !0;
                        var s, u, d = V(p)[0],
                            h = Z(d, v) + 1,
                            g = Rn(e),
                            m = e.getAttribute("data-anchor"),
                            S = Z(e, v) + 1,
                            b = V(L, e)[0],
                            w = { activeSection: d, sectionIndex: S - 1, anchorLink: m, element: e, leavingSection: h, direction: g };
                        b && (u = b.getAttribute("data-anchor"), s = Z(b)), ze && (re(e, c), ie(ge(e), c), Se(_.onLeave) && Zt("onLeave", w), Se(_.afterLoad) && Zt("afterLoad", w), fn(d), ln(e), cn(e), Bn(m, S - 1), _.anchors.length && (pe = m), Yn(s, u, m, S)), clearTimeout(Ue), Ue = setTimeout((function() { it = !1 }), 100)
                    }
                    _.fitToSection && (clearTimeout(Xe), Xe = setTimeout((function() { _.fitToSection && V(p)[0].offsetHeight <= _e && Wt() }), _.fitToSectionDelay))
                }
            }

            function Wt() { ze && (Be = !0, Gt(V(p)[0]), Be = !1) }

            function Yt(e) {
                if (je.m[e]) {
                    var t = "down" === e ? Lt : xt;
                    if (_.scrollOverflow) {
                        var n = _.scrollOverflowHandler.scrollable(V(p)[0]),
                            o = "down" === e ? "bottom" : "top";
                        if (null != n) {
                            if (!_.scrollOverflowHandler.isScrolled(o, n)) return !0;
                            t()
                        } else t()
                    } else t()
                }
            }

            function Ft(e) { _.autoScrolling && Xt(e) && je.m.up && me(e) }

            function Ut(t) {
                var n = fe(t.target, v) || V(p)[0];
                if (Xt(t)) {
                    _.autoScrolling && me(t);
                    var o = Xn(t);
                    ct = o.y, ut = o.x, V(T, n).length && Math.abs(st - ut) > Math.abs(lt - ct) ? !Me && Math.abs(st - ut) > U() / 100 * _.touchSensitivity && (st > ut ? je.m.right && kt(n) : je.m.left && Ot(n)) : _.autoScrolling && ze && Math.abs(lt - ct) > e.innerHeight / 100 * _.touchSensitivity && (lt > ct ? Yt("down") : ct > lt && Yt("up"))
                }
            }

            function Xt(e) { return "undefined" == typeof e.pointerType || "mouse" != e.pointerType }

            function $t(e) {
                if (_.fitToSection && (Ze = !1), Xt(e)) {
                    var t = Xn(e);
                    lt = t.y, st = t.x
                }
            }

            function Kt(e, t) { for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++) n += o[r]; return Math.ceil(n / t) }

            function qt(t) {
                var n = (new Date).getTime(),
                    o = Y(V(".ops-completely")[0], S);
                if (!je.m.down && !je.m.up) return me(t), !1;
                if (_.autoScrolling && !ke && !o) {
                    var r = (t = t || e.event).wheelDelta || -t.deltaY || -t.detail,
                        i = Math.max(-1, Math.min(1, r)),
                        a = "undefined" != typeof t.wheelDeltaX || "undefined" != typeof t.deltaX,
                        l = Math.abs(t.wheelDeltaX) < Math.abs(t.wheelDelta) || Math.abs(t.deltaX) < Math.abs(t.deltaY) || !a;
                    Pe.length > 149 && Pe.shift(), Pe.push(Math.abs(r)), _.scrollBar && me(t);
                    var s = n - ft;
                    if (ft = n, s > 200 && (Pe = []), ze) Kt(Pe, 10) >= Kt(Pe, 70) && l && Yt(i < 0 ? "down" : "up");
                    return !1
                }
                _.fitToSection && (Ze = !1)
            }

            function Jt(e, t) {
                var n = null == t ? V(p)[0] : t,
                    o = V(T, n)[0];
                if (!(null == o || Me || V(x, o).length < 2)) {
                    var r = V(L, o)[0],
                        i = null;
                    if (null == (i = "left" === e ? K(r, x) : q(r, x))) {
                        if (!_.loopHorizontal) return;
                        var a = ge(r);
                        i = "left" === e ? a[a.length - 1] : a[0]
                    }
                    Me = !le.test.isTesting, On(o, i, e)
                }
            }

            function Qt() { for (var e = V(L), t = 0; t < e.length; t++) $n(e[t], "internal") }

            function Gt(e, t, n) {
                if (null != e) {
                    var o, r, i = {
                        element: e,
                        callback: t,
                        isMovementUp: n,
                        dtop: function(e) {
                            var t = e.offsetHeight,
                                n = e.offsetTop,
                                o = n,
                                r = n > dt,
                                i = o - _e + t,
                                a = _.bigSectionsDestination;
                            return t > _e ? (r || a) && "bottom" !== a || (o = i) : (r || Be && null == Q(e)) && (o = i), dt = o, o
                        }(e),
                        yMovement: Rn(e),
                        anchorLink: e.getAttribute("data-anchor"),
                        sectionIndex: Z(e, v),
                        activeSlide: V(L, e)[0],
                        activeSection: V(p)[0],
                        leavingSection: Z(V(p), v) + 1,
                        localIsResizing: Be
                    };
                    if (!(i.activeSection == e && !Be || _.scrollBar && he() === i.dtop && !Y(e, m))) {
                        if (null != i.activeSlide && (o = i.activeSlide.getAttribute("data-anchor"), r = Z(i.activeSlide)), !i.localIsResizing) { var a = i.yMovement; if (void 0 !== n && (a = n ? "up" : "down"), i.direction = a, Se(_.onLeave) && !1 === Zt("onLeave", i)) return }
                        _.autoScrolling && _.continuousVertical && "undefined" != typeof i.isMovementUp && (!i.isMovementUp && "up" == i.yMovement || i.isMovementUp && "down" == i.yMovement) && (i = function(e) { e.isMovementUp ? ve(V(p)[0], Ae(e.activeSection, v)) : de(V(p)[0], Te(e.activeSection, v).reverse()); return Kn(V(p)[0].offsetTop), Qt(), e.wrapAroundElements = e.activeSection, e.dtop = e.element.offsetTop, e.yMovement = Rn(e.element), e }(i)), i.localIsResizing || fn(i.activeSection), _.scrollOverflow && _.scrollOverflowHandler.beforeLeave(), re(e, c), ie(ge(e), c), ln(e), _.scrollOverflow && _.scrollOverflowHandler.onLeave(), ze = le.test.isTesting, Yn(r, o, i.anchorLink, i.sectionIndex),
                            function(e) {
                                if (_.css3 && _.autoScrolling && !_.scrollBar) { jn("translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)", !0), _.scrollingSpeed ? (clearTimeout(Ye), Ye = setTimeout((function() { on(e) }), _.scrollingSpeed)) : on(e) } else {
                                    var t = nn(e.dtop);
                                    le.test.top = -e.dtop + "px", Zn(t.element, t.options, _.scrollingSpeed, (function() { _.scrollBar ? setTimeout((function() { on(e) }), 30) : on(e) }))
                                }
                            }(i), pe = i.anchorLink, Bn(i.anchorLink, i.sectionIndex)
                    }
                }
            }

            function Zt(e, t) {
                var n, o = function(e, t) {
                    var n;
                    n = _.v2compatible ? { afterRender: function() { return [He] }, onLeave: function() { return [t.activeSection, t.leavingSection, t.sectionIndex + 1, t.direction] }, afterLoad: function() { return [t.element, t.anchorLink, t.sectionIndex + 1] }, afterSlideLoad: function() { return [t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex] }, onSlideLeave: function() { return [t.prevSlide, t.anchorLink, t.sectionIndex + 1, t.prevSlideIndex, t.direction, t.slideIndex] } } : { afterRender: function() { return { section: en(V(p)[0]), slide: tn(V(L, V(p)[0])[0]) } }, onLeave: function() { return { origin: en(t.activeSection), destination: en(t.element), direction: t.direction } }, afterLoad: function() { return n.onLeave() }, afterSlideLoad: function() { return { section: en(t.section), origin: tn(t.prevSlide), destination: tn(t.destiny), direction: t.direction } }, onSlideLeave: function() { return n.afterSlideLoad() } };
                    return n[e]()
                }(e, t);
                if (_.v2compatible) { if (!1 === _[e].apply(o[0], o.slice(1))) return !1 } else if (be(He, e, o), !1 === _[e].apply(o[Object.keys(o)[0]], (n = o, Object.keys(n).map((function(e) { return n[e] }))))) return !1;
                return !0
            }

            function en(e) { return e ? new no(e) : null }

            function tn(e) { return e ? new oo(e) : null }

            function nn(t) { var n = {}; return _.autoScrolling && !_.scrollBar ? (n.options = -t, n.element = V(o)[0]) : (n.options = t, n.element = e), n }

            function on(e) {! function(e) { null != e.wrapAroundElements && (e.isMovementUp ? ve(V(v)[0], e.wrapAroundElements) : de(V(v)[V(v).length - 1], e.wrapAroundElements), Kn(V(p)[0].offsetTop), Qt()) }(e), Se(_.afterLoad) && !e.localIsResizing && Zt("afterLoad", e), _.scrollOverflow && _.scrollOverflowHandler.afterLoad(), e.localIsResizing || cn(e.element), re(e.element, f), ie(ge(e.element), f), an(), ze = !0, Se(e.callback) && e.callback() }

            function rn(e, t) { e.setAttribute(t, e.getAttribute("data-" + t)), e.removeAttribute("data-" + t) }

            function an() {
                var e = V(".ops-auto-height")[0] || Ct() && V(".ops-auto-height-responsive")[0];
                _.lazyLoading && e && V(".ops-section:not(.active)").forEach((function(e) {
                    var t, n, o;
                    t = e.getBoundingClientRect(), n = t.top, o = t.bottom, (n + 2 < _e && n > 0 || o > 2 && o < _e) && ln(e)
                }))
            }

            function ln(e) {
                _.lazyLoading && V("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", dn(e)).forEach((function(t) {
                    if (["src", "srcset"].forEach((function(n) {
                            var o = t.getAttribute("data-" + n);
                            null != o && o && (rn(t, n), t.addEventListener("load", (function() { sn(e) })))
                        })), we(t, "source")) {
                        var n = fe(t, "video, audio");
                        n && (n.load(), n.onloadeddata = function() { sn(e) })
                    }
                }))
            }

            function sn(e) { _.scrollOverflow && (clearTimeout(et), et = setTimeout((function() { De.createScrollBar(e) }), 200)) }

            function cn(e) {
                var t = dn(e);
                V("video, audio", t).forEach((function(e) { e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play() })), V('iframe[src*="youtube.com/embed/"]', t).forEach((function(e) { e.hasAttribute("data-autoplay") && un(e), e.onload = function() { e.hasAttribute("data-autoplay") && un(e) } }))
            }

            function un(e) { e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") }

            function fn(e) {
                var t = dn(e);
                V("video, audio", t).forEach((function(e) { e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause() })), V('iframe[src*="youtube.com/embed/"]', t).forEach((function(e) { /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*") }))
            }

            function dn(e) { var t = V(L, e); return t.length && (e = t[0]), e }

            function vn() {
                var e = hn(),
                    t = e.section,
                    n = e.slide;
                t && (_.animateAnchor ? Vn(t, n) : At(t, n))
            }

            function pn() {
                if (!it && !_.lockAnchors) {
                    var e = hn(),
                        t = e.section,
                        n = e.slide,
                        o = void 0 === pe,
                        r = void 0 === pe && void 0 === n && !Me;
                    t && t.length && (t && t !== pe && !o || r || !Me && Le != n) && Vn(t, n)
                }
            }

            function hn() {
                var t, n, o = e.location.hash;
                if (o.length) {
                    var r = o.replace("#", "").split("/"),
                        i = o.indexOf("#/") > -1;
                    t = i ? "/" + r[1] : decodeURIComponent(r[0]);
                    var a = i ? r[2] : r[1];
                    a && a.length && (n = decodeURIComponent(a))
                }
                return { section: t, slide: n }
            }

            function gn(e) {
                clearTimeout($e);
                var n = t.activeElement,
                    o = e.keyCode;
                if (9 === o) ! function(e) {
                    var n = e.shiftKey,
                        o = t.activeElement,
                        r = yn(dn(V(p)[0]));

                    function i(e) { return me(e), r[0] ? r[0].focus() : null }
                    if (function(e) {
                            var n = yn(t),
                                o = n.indexOf(t.activeElement),
                                r = e.shiftKey ? o - 1 : o + 1,
                                i = n[r],
                                a = tn(fe(i, x)),
                                l = en(fe(i, v));
                            return !a && !l
                        }(e)) return;
                    o ? null == fe(o, ".ops-section.active,.ops-section.active .ops-slide.active") && (o = i(e)) : i(e);
                    (!n && o == r[r.length - 1] || n && o == r[0]) && me(e)
                }(e);
                else if (!we(n, "textarea") && !we(n, "input") && !we(n, "select") && "true" !== n.getAttribute("contentEditable") && "" !== n.getAttribute("contentEditable") && _.keyboardScrolling && _.autoScrolling) {
                    [40, 38, 32, 33, 34].indexOf(o) > -1 && me(e), ke = e.ctrlKey, $e = setTimeout((function() {
                        ! function(e) {
                            var n = e.shiftKey,
                                o = t.activeElement,
                                r = we(o, "video") || we(o, "audio");
                            if (!ze && [37, 39].indexOf(e.keyCode) < 0) return;
                            switch (e.keyCode) {
                                case 38:
                                case 33:
                                    je.k.up && xt();
                                    break;
                                case 32:
                                    if (n && je.k.up && !r) { xt(); break }
                                case 40:
                                case 34:
                                    je.k.down && (32 === e.keyCode && r || Lt());
                                    break;
                                case 36:
                                    je.k.up && Tt(1);
                                    break;
                                case 35:
                                    je.k.down && Tt(V(v).length);
                                    break;
                                case 37:
                                    je.k.left && Ot();
                                    break;
                                case 39:
                                    je.k.right && kt()
                            }
                        }(e)
                    }), 150)
                }
            }

            function mn() { be(J(this), "click") }

            function Sn(e) { Re && (ke = e.ctrlKey) }

            function bn(e) { 2 == e.which && (vt = e.pageY, He.addEventListener("mousemove", kn)) }

            function wn(e) { 2 == e.which && He.removeEventListener("mousemove", kn) }

            function yn(e) { return [].slice.call(V('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', e)).filter((function(e) { return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent })) }

            function En() {
                var e = fe(this, v);
                Y(this, B) ? je.m.left && Ot(e) : je.m.right && kt(e)
            }

            function xn() { Re = !1, ke = !1 }

            function Ln(e) {
                me(e);
                var t = Z(fe(this, "#ops-nav li"));
                Gt(V(v)[t])
            }

            function An(e) {
                me(e);
                var t = V(T, fe(this, v))[0];
                On(t, V(x, t)[Z(fe(this, "li"))])
            }

            function Tn(e) {!V(_.menu)[0] || !_.lockAnchors && _.anchors.length || (me(e), Tt(this.getAttribute("data-menuanchor"))) }

            function kn(e) { _.autoScrolling && (ze && (e.pageY < vt && je.m.up ? xt() : e.pageY > vt && je.m.down && Lt()), vt = e.pageY) }

            function On(e, t, n) {
                var o = fe(e, v),
                    r = { slides: e, destiny: t, direction: n, destinyPos: { left: t.offsetLeft }, slideIndex: Z(t), section: o, sectionIndex: Z(o, v), anchorLink: o.getAttribute("data-anchor"), slidesNav: V(N, o)[0], slideAnchor: Fn(t), prevSlide: V(L, o)[0], prevSlideIndex: Z(V(L, o)[0]), localIsResizing: Be };
                r.xMovement = function(e, t) { if (e == t) return "none"; if (e > t) return "left"; return "right" }(r.prevSlideIndex, r.slideIndex), r.direction = r.direction ? r.direction : r.xMovement, r.localIsResizing || (ze = !1), _.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && Se(_.onSlideLeave) && !1 === Zt("onSlideLeave", r) ? Me = !1 : (re(t, c), ie(ge(t), c), r.localIsResizing || (fn(r.prevSlide), ln(t)), !_.loopHorizontal && _.controlArrows && (ye(V(z, o), 0 !== r.slideIndex), ye(V(j, o), null != Q(t))), Y(o, c) && !r.localIsResizing && Yn(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex), function(e, t, n) {
                    var o = t.destinyPos;
                    if (_.css3) {
                        var r = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
                        le.test.translate3dH[t.sectionIndex] = r, X(_n(V(O, e)), qn(r)), Fe = setTimeout((function() { n && Mn(t) }), _.scrollingSpeed)
                    } else le.test.left[t.sectionIndex] = Math.round(o.left), Zn(e, Math.round(o.left), _.scrollingSpeed, (function() { n && Mn(t) }))
                }(e, r, !0))
            }

            function Mn(e) {
                var t, n;
                t = e.slidesNav, n = e.slideIndex, _.slidesNavigation && null != t && (ie(V(u, t), c), re(V("a", V("li", t)[n]), c)), e.localIsResizing || (Se(_.afterSlideLoad) && Zt("afterSlideLoad", e), ze = !0, cn(e.destiny)), Me = !1
            }

            function Cn() { clearTimeout(Ve), Ve = setTimeout((function() { for (var e = 0; e < 4; e++) We = setTimeout(Nn, 200 * e) }), 200) }

            function Nn() {
                if (Hn(), Ce) {
                    var e = t.activeElement;
                    if (!we(e, "textarea") && !we(e, "input") && !we(e, "select")) {
                        var n = F();
                        Math.abs(n - pt) > 20 * Math.max(pt, n) / 100 && (Mt(!0), pt = n)
                    }
                } else Bt()
            }

            function Hn() {
                var t = _.responsive || _.responsiveWidth,
                    n = _.responsiveHeight,
                    o = t && e.innerWidth < t,
                    r = n && e.innerHeight < n;
                t && n ? Nt(o || r) : t ? Nt(o) : n && Nt(r)
            }

            function _n(e) { var t = "all " + _.scrollingSpeed + "ms " + _.easingcss3; return ie(e, i), X(e, { "-webkit-transition": t, transition: t }) }

            function In(e) { return re(e, i) }

            function Bn(e, t) {
                var n;
                n = e, V(_.menu).forEach((function(e) { _.menu && null != e && (ie(V(u, e), c), re(V('[data-menuanchor="' + n + '"]', e), c)) })),
                    function(e, t) { _.navigation && null != V(w)[0] && (ie(V(u, V(w)[0]), c), re(e ? V('a[href="#' + e + '"]', V(w)[0]) : V("a", V("li", V(w)[0])[t]), c)) }(e, t)
            }

            function Rn(e) {
                var t = Z(V(p)[0], v),
                    n = Z(e, v);
                return t == n ? "none" : t > n ? "up" : "down"
            }

            function zn(e) {
                if (!Y(e, M)) {
                    var n = t.createElement("div");
                    n.className = h, n.style.height = Pn(e) + "px", re(e, M), ce(e, n)
                }
            }

            function Pn(e) {
                var t = _e;
                if (_.paddingTop || _.paddingBottom) {
                    var n = e;
                    Y(n, d) || (n = fe(e, v));
                    var o = parseInt(getComputedStyle(n)["padding-top"]) + parseInt(getComputedStyle(n)["padding-bottom"]);
                    t = _e - o
                }
                return t
            }

            function jn(e, t) { t ? _n(He) : In(He), X(He, qn(e)), le.test.translate3d = e, setTimeout((function() { ie(He, i) }), 10) }

            function Dn(e) {
                var t = V('.ops-section[data-anchor="' + e + '"]', He)[0];
                if (!t) {
                    var n = void 0 !== e ? e - 1 : 0;
                    t = V(v)[n]
                }
                return t
            }

            function Vn(e, t) {
                var n = Dn(e);
                if (null != n) {
                    var o = function(e, t) { var n = V('.ops-slide[data-anchor="' + e + '"]', t)[0]; return null == n && (e = void 0 !== e ? e : 0, n = V(x, t)[e]), n }(t, n);
                    Fn(n) === pe || Y(n, c) ? Wn(o) : Gt(n, (function() { Wn(o) }))
                }
            }

            function Wn(e) { null != e && On(fe(e, T), e) }

            function Yn(e, t, n, o) { _.anchors.length && !_.lockAnchors && (e ? (null != n && n, null == t && (t = e), Le = t) : null != e && (Le = t)), Un() }

            function Fn(e) {
                if (!e) return null;
                var t = e.getAttribute("data-anchor"),
                    n = Z(e);
                return null == t && (t = n), t
            }

            function Un() {
                var e = V(p)[0],
                    t = V(L, e)[0],
                    n = Fn(e),
                    o = Fn(t),
                    r = String(n);
                t && (r = r + "-" + o), r = r.replace("/", "-").replace("#", "");
                var i = new RegExp("\\b\\s?ops-viewing-[^\\s]+\\b", "g");
                oe.className = oe.className.replace(i, ""), re(oe, "ops-viewing-" + r)
            }

            function Xn(e) { var t = []; return t.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, Ne && Xt(e) && _.scrollBar && "undefined" != typeof e.touches && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t }

            function $n(e, t) { mt(0, "internal"), void 0 !== t && (Be = !0), On(fe(e, T), e), void 0 !== t && (Be = !1), mt(tt.scrollingSpeed, "internal") }

            function Kn(e) {
                var t = Math.round(e);
                if (_.css3 && _.autoScrolling && !_.scrollBar) jn("translate3d(0px, -" + t + "px, 0px)", !1);
                else if (_.autoScrolling && !_.scrollBar) X(He, { top: -t + "px" }), le.test.top = -t + "px";
                else {
                    var n = nn(t);
                    eo(n.element, n.options)
                }
            }

            function qn(e) { return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e } }

            function Jn(e, t, n) { "all" !== t ? je[n][t] = e : Object.keys(je[n]).forEach((function(t) { je[n][t] = e })) }

            function Qn(e, t, n) { _[e] = t, "internal" !== n && (tt[e] = t) }

            function Gn() {
                Y(ee, l) ? D("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (_.continuousVertical && (_.loopTop || _.loopBottom) && (_.continuousVertical = !1, D("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !_.scrollOverflow || !_.scrollBar && _.autoScrolling || D("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !_.continuousVertical || !_.scrollBar && _.autoScrolling || (_.continuousVertical = !1, D("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), _.scrollOverflow && null == _.scrollOverflowHandler && (_.scrollOverflow = !1, D("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it.")), rt.forEach((function(e) { _[e] && D("warn", "extensions require one-page-scroll.extensions.min.js. Requested: " + e) })), _.anchors.forEach((function(e) {
                    var t = [].slice.call(V("[name]")).filter((function(t) { return t.getAttribute("name") && t.getAttribute("name").toLowerCase() == e.toLowerCase() })),
                        n = [].slice.call(V("[id]")).filter((function(t) { return t.getAttribute("id") && t.getAttribute("id").toLowerCase() == e.toLowerCase() }));
                    if (n.length || t.length) {
                        D("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                        var o = n.length ? "id" : "name";
                        (n.length || t.length) && D("error", '"' + e + '" is is being used by another element `' + o + "` property")
                    }
                })))
            }

            function Zn(t, n, o, r) {
                var i = function(t) { return t.self != e && Y(t, A) ? t.scrollLeft : !_.autoScrolling || _.scrollBar ? he() : t.offsetTop }(t),
                    a = n - i,
                    l = 0;
                Ze = !0;
                var s = function() {
                    if (Ze) {
                        var c = n;
                        l += 20, o && (c = e.fp_easings[_.easing](l, i, a, o)), eo(t, c), l < o ? setTimeout(s, 20) : void 0 !== r && r()
                    } else l < o && r()
                };
                s()
            }

            function eo(t, n) {!_.autoScrolling || _.scrollBar || t.self != e && Y(t, A) ? t.self != e && Y(t, A) ? t.scrollLeft = n : t.scrollTo(0, n) : t.style.top = n + "px" }

            function to(e, t) { this.anchor = e.getAttribute("data-anchor"), this.item = e, this.index = Z(e, t), this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1, this.isFirst = !this.index }

            function no(e) { to.call(this, e, v) }

            function oo(e) { to.call(this, e, x) }
            Gn()
        }
})),
function(e, t) {
    "use strict";
    e.fn.onePageScroll = function(n) {
        n = e.extend({}, n, { $: e });
        new t(this[0], n)
    }
}(window.jQuery, window.onePageScroll),
function(e, t) {
    "use strict";
    e.fn.setNavTooltip = function(e) { return e && this.find(".nav_tooltip").text(e).show().next().show(), this };
    var n = {
        init: function() {
            elementorguest.isEditMode() || e(".elementor").each((function() {
                var o = JSON.parse(this.dataset.elementorSettings);
                if (o.ekit_onepagescroll) {
                    var r = e(this).find(".elementor-section-wrap").eq(0),
                        i = r.children(),
                        a = 0;
                    if (i.addClass((function() { var e = this.dataset.settings ? JSON.parse(this.dataset.settings) : ""; return e.ekit_has_onepagescroll_dot && a++, e.ekit_has_onepagescroll ? "section" : "section ops-normal-scroll" })), o.config = {}, o.ekit_onepagescroll_nav && "0" != o.ekit_onepagescroll_nav) {
                        var l = t.elements.$body.find(".onepage_scroll_nav li");
                        o.config.menu = ".onepage_scroll_nav", o.config.anchors = n.getAnchors(i, l), o.isNavMove = o.ekit_onepagescroll_nav.split("-"), o.isNavMove = o.isNavMove[o.isNavMove.length - 1], "move" === o.isNavMove && n.setNavMove(a, o.ekit_onepagescroll_nav_pos)
                    }
                    r.onePageScroll(o.config)
                }
            }))
        },
        getAnchors: function(t, n) {
            var o, r = n.parent(),
                i = n,
                a = [];
            return n.remove(), t.each((function(t) {
                var n = e(this).data("settings"),
                    l = n ? n.ekit_has_onepagescroll_dot : "";
                a.push("section_" + (t + 1)), l && (o = n.ekit_onepagescroll_tooltip_text, i.clone().appendTo(r).attr("data-menuanchor", a[t]).children().attr("href", "#" + a[t]).setNavTooltip(o))
            })), o = t.data("settings").ekit_onepagescroll_tooltip_text, n.setNavTooltip(o), a
        },
        setNavMove: function(e, n) {
            var o = t.elements.$body.find(".onepage_scroll_nav li"),
                r = "",
                i = "top" === n || "bottom" === n ? o.outerWidth(!0) : o.outerHeight(!0);
            r += '<style id="ops_nav">', r += '.onepage_scroll_nav li:last-child:before { content: " "; }', n = "top" === n || "bottom" === n ? "X" : "Y";
            for (var a = 1; a < e; a++) r += ".onepage_scroll_nav li.active:nth-child(" + a + ") ~ li:last-child:before { transform: translate" + n + "(" + i * (a - 1) + "px); }";
            r += ".onepage_scroll_nav li.active:last-child:before { transform: translate" + n + "(" + i * (e - 1) + "px); }", r += "</style>", console.log("Test: 1"), t.elements.$head.append(r)
        }
    };
    e(window).on("elementor/guest/init", n.init)
}(jQuery, window.elementorguest);
rontend);