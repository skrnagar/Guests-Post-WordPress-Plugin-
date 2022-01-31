export const mountElementorIntegration = () => {
    if (!window.elementorguest) {
        return
    }

    setTimeout(() => {
        elementorguest.elements.$document.off(
            'click',
            elementorguest.utils.anchors.getSettings('selectors.links'),
            elementorguest.utils.anchors.handleAnchorLinks
        )
    }, 1000)
}