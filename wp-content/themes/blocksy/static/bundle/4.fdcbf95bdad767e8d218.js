(window.blocksyJsonP = window.blocksyJsonP || []).push([
    [4], {
        20: function(e, t, n) {
            var o, r, i;
            r = [t], void 0 === (i = "function" == typeof(o = function(e) {
                "use strict";

                function t(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }
                Object.defineProperty(e, "__esModule", { value: !0 });
                var n = !1;
                if ("undefined" != typeof window) {
                    var o = {get passive() { n = !0 } };
                    window.addEventListener("testPassive", null, o), window.removeEventListener("testPassive", null, o)
                }

                function r(e) { return l.some((function(t) { return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e)) })) }

                function i(e) { var t = e || window.event; return !!r(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1) }

                function c() { setTimeout((function() { void 0 !== f && (document.body.style.paddingRight = f, f = void 0), void 0 !== s && (document.body.style.overflow = s, s = void 0) })) }
                var a = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && 1 < window.navigator.maxTouchPoints),
                    l = [],
                    u = !1,
                    d = -1,
                    s = void 0,
                    f = void 0;
                e.disableBodyScroll = function(e, o) {
                    if (a) {
                        if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                        if (e && !l.some((function(t) { return t.targetElement === e }))) {
                            var c = { targetElement: e, options: o || {} };
                            l = [].concat(t(l), [c]), e.ontouchstart = function(e) { 1 === e.targetTouches.length && (d = e.targetTouches[0].clientY) }, e.ontouchmove = function(t) {
                                var n, o, c, a;
                                1 === t.targetTouches.length && (o = e, a = (n = t).targetTouches[0].clientY - d, r(n.target) || (o && 0 === o.scrollTop && 0 < a || (c = o) && c.scrollHeight - c.scrollTop <= c.clientHeight && a < 0 ? i(n) : n.stopPropagation()))
                            }, u || (document.addEventListener("touchmove", i, n ? { passive: !1 } : void 0), u = !0)
                        }
                    } else {
                        v = o, setTimeout((function() {
                            if (void 0 === f) {
                                var e = !!v && !0 === v.reserveScrollBarGap,
                                    t = window.innerWidth - document.documentElement.clientWidth;
                                e && 0 < t && (f = document.body.style.paddingRight, document.body.style.paddingRight = t + "px")
                            }
                            void 0 === s && (s = document.body.style.overflow, document.body.style.overflow = "hidden")
                        }));
                        var m = { targetElement: e, options: o || {} };
                        l = [].concat(t(l), [m])
                    }
                    var v
                }, e.clearAllBodyScrollLocks = function() { a ? (l.forEach((function(e) { e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null })), u && (document.removeEventListener("touchmove", i, n ? { passive: !1 } : void 0), u = !1), l = [], d = -1) : (c(), l = []) }, e.enableBodyScroll = function(e) {
                    if (a) {
                        if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                        e.ontouchstart = null, e.ontouchmove = null, l = l.filter((function(t) { return t.targetElement !== e })), u && 0 === l.length && (document.removeEventListener("touchmove", i, n ? { passive: !1 } : void 0), u = !1)
                    } else(l = l.filter((function(t) { return t.targetElement !== e }))).length || c()
                }
            }) ? o.apply(t, r) : o) || (e.exports = i)
        },
        36: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "handleClick", (function() { return X })), n.d(t, "mount", (function() { return Z }));
            var o = n(20);
            const r = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1);
            var i = function(e) { r ? Object(o.clearAllBodyScrollLocks)() : (document.body.style.overflow = "", document.body.style.removeProperty("--scrollbar-width")) },
                c = function(e) { for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n]; return t },
                a = function(e) { return Array.isArray(e) ? e : [e] },
                l = function() { return document && c(document.querySelectorAll("[data-no-focus-lock]")).some((function(e) { return e.contains(document.activeElement) })) },
                u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
                d = function(e) {
                    return a(e).filter(Boolean).reduce((function(e, t) {
                        var n = t.getAttribute("data-focus-lock");
                        return e.push.apply(e, n ? function e(t) {
                            for (var n = t.length, o = 0; o < n; o += 1)
                                for (var r = function(n) { if (o !== n && t[o].contains(t[n])) return { v: e(t.filter((function(e) { return e !== t[n] }))) } }, i = 0; i < n; i += 1) { var c = r(i); if ("object" === (void 0 === c ? "undefined" : u(c))) return c.v }
                            return t
                        }(c(function e(t) { return t.parentNode ? e(t.parentNode) : t }(t).querySelectorAll('[data-focus-lock="' + n + '"]:not([data-focus-lock-disabled="disabled"])'))) : [t]), e
                    }), [])
                },
                s = function(e) { return e === document.activeElement },
                f = function(e) { var t = document && document.activeElement; return !(!t || t.dataset && t.dataset.focusGuard) && d(e).reduce((function(e, n) { return e || n.contains(t) || function(e) { return t = c(e.querySelectorAll("iframe")), n = s, !!t.filter((function(e) { return e === n }))[0]; var t, n }(n) }), !1) },
                m = function(e, t) {
                    var n = e.tabIndex - t.tabIndex,
                        o = e.index - t.index;
                    if (n) { if (!e.tabIndex) return 1; if (!t.tabIndex) return -1 }
                    return n || o
                },
                v = function(e, t, n) { return c(e).map((function(e, t) { return { node: e, index: t, tabIndex: n && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex } })).filter((function(e) { return !t || e.tabIndex >= 0 })).sort(m) },
                p = ["button:enabled:not([readonly])", "select:enabled:not([readonly])", "textarea:enabled:not([readonly])", "input:enabled:not([readonly])", "a[href]", "area[href]", "iframe", "object", "embed", "[tabindex]", "[contenteditable]", "[autofocus]"],
                g = p.join(","),
                y = g + ", [data-focus-guard]",
                h = function(e, t) { return e.reduce((function(e, n) { return e.concat(c(n.querySelectorAll(t ? y : g)), n.parentNode ? c(n.parentNode.querySelectorAll(p.join(","))).filter((function(e) { return e === n })) : []) }), []) },
                b = function e(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []; return n.push(t), t.parentNode && e(t.parentNode, n), n },
                w = function(e, t) { for (var n = b(e), o = b(t), r = 0; r < n.length; r += 1) { var i = n[r]; if (o.indexOf(i) >= 0) return i } return !1 },
                S = function(e) { return c(e).filter((function(e) { return function e(t) { return !t || t === document || t.nodeType === Node.DOCUMENT_NODE || !((n = window.getComputedStyle(t, null)) && n.getPropertyValue && ("none" === n.getPropertyValue("display") || "hidden" === n.getPropertyValue("visibility"))) && e(t.parentNode); var n }(e) })).filter((function(e) { return function(e) { return !(("INPUT" === e.tagName || "BUTTON" === e.tagName) && ("hidden" === e.type || e.disabled)) }(e) })) },
                E = function(e, t) { return v(S(h(e, t)), !0, t) },
                L = function(e) { return S((t = e.querySelectorAll("[data-autofocus-inside]"), c(t).map((function(e) { return h([e]) })).reduce((function(e, t) { return e.concat(t) }), []))); var t },
                A = function(e) { return "INPUT" === e.tagName && "radio" === e.type },
                O = function(e, t) { return t.filter(A).filter((function(t) { return t.name === e.name })).filter((function(e) { return e.checked }))[0] || e },
                k = function(e, t) { return e.length > 1 && A(e[t]) && e[t].name ? e.indexOf(O(e[t], e)) : t },
                x = function(e) { return e[0] && e.length > 1 && A(e[0]) && e[0].name ? O(e[0], e) : e[0] },
                q = function(e) { return e && e.dataset && e.dataset.focusGuard },
                C = function(e) { return !q(e) },
                P = function(e, t, n) {
                    var o = a(e),
                        r = a(t),
                        i = o[0],
                        c = null;
                    return r.filter(Boolean).forEach((function(e) {
                        c = w(c || e, e) || c, n.filter(Boolean).forEach((function(e) {
                            var t = w(i, e);
                            t && (c = !c || t.contains(c) ? t : w(t, c))
                        }))
                    })), c
                },
                T = function(e, t) {
                    var n = document && document.activeElement,
                        o = d(e).filter(C),
                        r = P(n || e, e, o),
                        i = E(o).filter((function(e) { var t = e.node; return C(t) }));
                    if (i[0] || (i = (c = o, v(S(h(c)), !1)).filter((function(e) { var t = e.node; return C(t) })))[0]) {
                        var c, a, l, u, s, f = E([r]).map((function(e) { return e.node })),
                            m = (a = f, l = i, u = new Map, l.forEach((function(e) { return u.set(e.node, e) })), a.map((function(e) { return u.get(e) })).filter(Boolean)),
                            p = m.map((function(e) { return e.node })),
                            g = function(e, t, n, o, r) {
                                var i = e.length,
                                    c = e[0],
                                    a = e[i - 1],
                                    l = q(n);
                                if (!(e.indexOf(n) >= 0)) {
                                    var u = t.indexOf(n),
                                        d = t.indexOf(o || u),
                                        s = e.indexOf(o),
                                        f = u - d,
                                        m = t.indexOf(c),
                                        v = t.indexOf(a),
                                        p = k(e, 0),
                                        g = k(e, i - 1);
                                    return -1 === u || -1 === s ? e.indexOf(r && r.length ? x(r) : x(e)) : !f && s >= 0 ? s : u <= m && l && Math.abs(f) > 1 ? g : u >= m && l && Math.abs(f) > 1 ? p : f && Math.abs(f) > 1 ? s : u <= m ? g : u > v ? p : f ? Math.abs(f) > 1 ? s : (i + s + f) % i : void 0
                                }
                            }(p, f, n, t, p.filter((s = function(e) { return e.reduce((function(e, t) { return e.concat(L(t)) }), []) }(o), function(e) { return !!e.autofocus || e.dataset && !!e.dataset.autofocus || s.indexOf(e) >= 0 })));
                        return void 0 === g ? g : m[g]
                    }
                },
                j = 0,
                I = !1,
                N = function(e, t) {
                    var n, o = T(e, t);
                    if (!I && o) {
                        if (j > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), I = !0, void setTimeout((function() { I = !1 }), 1);
                        j++, (n = o.node).focus(), n.contentWindow && n.contentWindow.focus(), j--
                    }
                },
                B = 0,
                D = null,
                M = function() { return document && document.activeElement === document.body || l() },
                _ = function(e) {
                    B = e, e && function() {
                        var e = !1;
                        if (B) {
                            var t = B;
                            M() || (t && !f(t) && (e = N(t, D)), D = document.activeElement)
                        }
                    }()
                },
                F = [],
                W = function(e) { return !!_((t = F, t.filter((function(e) { return e })).slice(-1)[0])) && (e && e.preventDefault(), !0); var t },
                R = { on: function(e) { 0 === F.length && document.addEventListener("focusin", W), F.indexOf(e) < 0 && (F.push(e), W()) }, off: function(e) { F = F.filter((function(t) { return t !== e })), W(), 0 === F.length && document.removeEventListener("focusin", W) } },
                G = n(0),
                U = n.n(G);
            const $ = e => {
                if (!e) return;
                const t = e.querySelector(".ct-toggle-dropdown-mobile");
                e.classList.contains("dropdown-active") ? (t.setAttribute("aria-expanded", "false"), t.setAttribute("aria-label", ct_localizations.expand_submenu), ((e, t) => {
                    const n = e.querySelector("ul");
                    requestAnimationFrame(() => {
                        const e = n.getBoundingClientRect().height;
                        n.style.height = e + "px", n.classList.add("is-animating"), requestAnimationFrame(() => { n.style.height = "0px", V(n, () => { n.classList.remove("is-animating"), n.removeAttribute("style"), t() }) })
                    })
                })(e, () => { e.classList.toggle("dropdown-active"), [...e.querySelectorAll(".menu-item-has-children.dropdown-active, .page_item_has_children.dropdown-active")].map(e => e.classList.remove("dropdown-active")) })) : (t.setAttribute("aria-expanded", "true"), t.setAttribute("aria-label", ct_localizations.collapse_submenu), [...e.parentNode.children].map(e => e.classList.contains("dropdown-active") && $(e)), e.classList.toggle("dropdown-active"), (e => {
                    const t = e.querySelector("ul");
                    requestAnimationFrame(() => {
                        const e = t.getBoundingClientRect().height;
                        t.style.height = "0px", t.classList.add("is-animating"), requestAnimationFrame(() => { t.style.height = e + "px", V(t, () => { t.classList.remove("is-animating"), t.removeAttribute("style") }) })
                    })
                })(e))
            };

            function V(e, t) {
                const n = o => { o.target === e && (e.removeEventListener("transitionend", n), t()) };
                e.addEventListener("transitionend", n)
            }

            function z(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, o)
                }
                return n
            }

            function H(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? z(Object(n), !0).forEach((function(t) { J(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function J(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            let Y = R;
            window.ctguest && window.ctguest.focusLock ? Y = ctguest.focusLock : (window.ctguest = window.ctguest || {}, window.ctguest.focusLock = Y);
            const K = e => {
                    e = H({ onClose: () => {}, container: null, focus: !0 }, e), [...document.querySelectorAll(`[data-toggle-panel*="${e.container.id}"]`), ...document.querySelectorAll(`[href*="${e.container.id}"]`)].map(e => { e.setAttribute("aria-expanded", "true") }), e.focus && setTimeout(() => { e.container.querySelector("input") && e.container.querySelector("input").focus() }, 200), e.container.querySelector(".ct-panel-content") && e.container.querySelector(".ct-panel-content").addEventListener("click", t => { Array.from(e.container.querySelectorAll("select")).map(e => e.selectr && e.selectr.events.dismiss(t)) }), e.clickOutside && e.container.querySelector(".ct-panel-content") && e.container.addEventListener("click", e.handleContainerClick);
                    const t = n => {
                        const { keyCode: o, target: r } = n;
                        27 === o && (n.preventDefault(), document.body.hasAttribute("data-panel") && Q(e), document.removeEventListener("keyup", t))
                    };
                    document.addEventListener("keyup", t);
                    let n = e.container && e.container.querySelector(".ct-toggle-close");
                    n && (n.addEventListener("click", t => { t.preventDefault(), Q(e) }, { once: !0 }), n.hasEnterListener || (n.hasEnterListener = !0, n.addEventListener("keyup", t => { 13 == t.keyCode && (t.preventDefault(), Q(e)) }))), (e.computeScrollContainer || e.container.querySelector(".ct-panel-content")) && (! function(e) {
                        if (r) Object(o.disableBodyScroll)(e, { allowTouchMove: e => !!e.closest(".select2-container") });
                        else {
                            let e = window.innerWidth - document.documentElement.clientWidth;
                            e > 0 && document.body.style.setProperty("--scrollbar-width", e + "px"), document.body.style.overflow = "hidden"
                        }
                    }(e.computeScrollContainer ? e.computeScrollContainer() : e.container.querySelector(".ct-panel-content")), setTimeout(() => { Y.on(e.container.querySelector(".ct-panel-content").parentNode) })), window.addEventListener("click", e.handleWindowClick, { capture: !0 }), U.a.trigger("ct:modal:opened", e.container), [...e.container.querySelectorAll(".ct-toggle-dropdown-mobile")].map(e => {
                        (e => {
                            if (e.hasListener) return;
                            e.hasListener = !0;
                            let t = e.previousElementSibling.getAttribute("href");
                            t && "#" !== t || e.previousElementSibling.addEventListener("click", t => { t.preventDefault(), t.stopPropagation(), $(e.closest(".menu-item-has-children, .page_item_has_children")) }), e.addEventListener("click", t => { t.preventDefault(), t.stopPropagation(), $(e.closest(".menu-item-has-children, .page_item_has_children")) })
                        })(e)
                    })
                },
                Q = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (e = H({ onClose: () => {}, container: null }, e), t = H({ closeInstant: !1 }, t), !document.body.hasAttribute("data-panel")) return e.container.classList.remove("active"), void e.onClose();
                    [...document.querySelectorAll(`[data-toggle-panel*="${e.container.id}"]`), ...document.querySelectorAll(`[href*="${e.container.id}"]`)].map(e => { e.setAttribute("aria-expanded", "false") }), e.container.classList.remove("active"), t.closeInstant ? (document.body.removeAttribute("data-panel"), U.a.trigger("ct:modal:closed", e.container), i(e.computeScrollContainer ? e.computeScrollContainer() : e.container.querySelector(".ct-panel-content"))) : (document.body.dataset.panel = "out", e.container.addEventListener("transitionend", () => { setTimeout(() => { document.body.removeAttribute("data-panel"), U.a.trigger("ct:modal:closed", e.container), i(e.computeScrollContainer ? e.computeScrollContainer() : e.container.querySelector(".ct-panel-content")), Y.off(e.container.querySelector(".ct-panel-content").parentNode) }, 300) }, { once: !0 })), window.removeEventListener("click", e.handleWindowClick, { capture: !0 }), e.container.removeEventListener("click", e.handleContainerClick), e.onClose()
                },
                X = (e, t) => {
                    e && e.preventDefault && e.preventDefault(), t = H({
                        onClose: () => {},
                        container: null,
                        focus: !1,
                        clickOutside: !0,
                        isModal: !1,
                        computeScrollContainer: null,
                        closeWhenLinkInside: !1,
                        handleContainerClick: e => {
                            let n = e.target.closest(".ct-panel-content"),
                                o = [...t.container.querySelectorAll(".ct-panel-content")].indexOf(e.target) > -1;
                            t.isModal && !o && n || !t.isModal && (o || n) || e.target.closest('[class*="select2-container"]') || window.getSelection().toString().length > 0 || document.body.hasAttribute("data-panel") && Q(t)
                        },
                        handleWindowClick: e => { t.container.contains(e.target) || e.target === document.body || event.target.closest('[class*="select2-container"]') || document.body.hasAttribute("data-panel") && Q(t) }
                    }, t), K(t), t.closeWhenLinkInside && (t.container.hasListener || (t.container.hasListener = !0, t.container.addEventListener("click", e => { e.target && e.target.matches("a") && Q(t, { closeInstant: "#" !== e.target.getAttribute("href")[0] }) })))
                };
            U.a.on("ct:offcanvas:force-close", e => Q(e));
            const Z = (e, t) => {
                let { event: n, focus: o = !1 } = t;
                X(n, { isModal: !0, container: document.querySelector(e.dataset.togglePanel || e.hash), clickOutside: !0, focus: o })
            }
        }
    }
]);
!0, focus: o
})
}
}
}]);