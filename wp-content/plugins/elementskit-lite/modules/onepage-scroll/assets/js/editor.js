! function(e) {
    "use strict";
    var n, t = {
        init: function() { n = elementor.$previewContents.find("#onepage_scroll_nav_wrap"), elementor.settings.page.addChangeCallback("ekit_onepagescroll", t.updateMarkup), elementor.settings.page.addChangeCallback("ekit_onepagescroll_nav", t.updateMarkup), elementor.settings.page.addChangeCallback("ekit_onepagescroll_nav_pos", t.updateMarkup), elementor.settings.page.addChangeCallback("ekit_onepagescroll_nav_icon", t.updateMarkup), t.updateMarkup() },
        updateMarkup: function() {
            e.post(window.ajaxurl, { action: "generate_navigation_markup", navStyle: elementorguest.getPageSettings("ekit_onepagescroll_nav"), navPos: elementorguest.getPageSettings("ekit_onepagescroll_nav_pos"), navIcon: elementorguest.getPageSettings("ekit_onepagescroll_nav_icon") }, (function(t) {
                if (t.length > 7) {
                    var a = n.html(t).find("li"),
                        o = a.parent();
                    e.each(elementor.elements.models, (function(e) { this.attributes.settings.attributes.ekit_has_onepagescroll_dot && 0 !== e && a.clone().appendTo(o) }))
                }
            }))
        }
    };
    e(window).on("init", t.init)
}(jQuery);
(jQuery);