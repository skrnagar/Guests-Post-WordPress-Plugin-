(window.blocksyJsonP = window.blocksyJsonP || []).push([
[10], {
28: function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "mount", (function() { return a }));
    var o = n(13),
        r = n.n(o),
        i = n(6),
        s = n(0),
        l = n.n(s);
    r.a.imagesLoaded = (t, e) => e(), r.a.Button.prototype.hide = () => {};
    const a = t => {
        let e = t.previousElementSibling;
        if (!t) return;
        let n = t.dataset.pagination;
        if (n.indexOf("simple") > -1) return;
        if (n.indexOf("next_prev") > -1) return;
        if (!t.querySelector(".next")) return;
        if (t.infiniteScroll) return;
        let o = new r.a(e, { checkLastPage: ".next", path: ".next", append: c(e), button: "load_more" === n ? t.querySelector(".ct-load-more") : null, outlayer: null, scrollThreshold: "infinite_scroll" === n && 400, onInit() { this.on("load", e => { t.querySelector(".ct-load-more-helper").classList.remove("ct-loading"), setTimeout(() => { l.a.trigger("ct:images:lazyload:update"), l.a.trigger("ct:infinite-scroll:load"), l.a.trigger("blocksy:guest:init"), l.a.trigger("blocksy:parallax:init"), window.jQuery && jQuery(document.body).trigger("wc_price_based_country_ajax_geolocation") }, 100) }), this.on("append", () => Object(i.a)(e)), this.on("request", () => { t.querySelector(".ct-load-more-helper").classList.add("ct-loading") }), this.on("last", () => { t.classList.add(t.querySelector(".ct-last-page-text") ? "ct-last-page" : "ct-last-page-no-info") }) } });
        t.infiniteScroll = o
    };

    function c(t) {
        [...t.parentNode.children].indexOf(t);
        if (t.closest(".ct-posts-shortcode")) { let e = [...t.parentNode.parentNode.children].indexOf(t.parentNode); return t.classList.contains("products") ? `.ct-posts-shortcode:nth-child(${e+1}) .products > li` : `.ct-posts-shortcode:nth-child(${e+1}) .entries > *` }
        return t.classList.contains("products") ? "#main .products > li" : ".entries > *"
    }
}
}
]);]);