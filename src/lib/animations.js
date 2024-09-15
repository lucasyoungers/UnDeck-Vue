const closed = "0px"

function getElementStyle(el) {
    return {
        height: el.style.height,
        width: el.style.width,
        position: el.style.position,
        visibility: el.style.visibility,
        overflow: el.style.overflow,
        paddingTop: el.style.paddingTop,
        paddingBottom: el.style.paddingBottom,
        borderTopWidth: el.style.borderTopWidth,
        borderBottomWidth: el.style.borderBottomWidth,
        marginTop: el.style.marginTop,
        marginBottom: el.style.marginBottom
    }
}

function prepareElement(el, initialStyle) {
    const { width } = getComputedStyle(el)
    el.style.width = width
    el.style.position = "absolute"
    el.style.visibility = "hidden"
    el.style.height = ""
    const { height } = getComputedStyle(el)
    el.style.width = initialStyle.width
    el.style.position = initialStyle.position
    el.style.visibility = initialStyle.visibility
    el.style.height = closed
    el.style.overflow = "hidden"
    return (initialStyle.height && initialStyle.height !== closed)
        ? initialStyle.height
        : height
}

function getEnterKeyframes(height, initialStyle) {
    return [
        {
            height: closed,
            opacity: 0,
            paddingTop: closed,
            paddingBottom: closed,
            borderTopWidth: closed,
            borderBottomWidth: closed,
            marginTop: closed,
            marginBottom: closed,
        },
        {
            height,
            opacity: 1,
        },
    ];
}

function animateTransition(el, initialStyle, callback, keyframes, options) {
    const animation = el.animate(keyframes, options)
    // Set height to 'auto' to restore it after animation
    el.style.height = initialStyle.height
    animation.onfinish = () => {
        el.style.overflow = initialStyle.overflow
        callback()
    }
}

export function enterTransition(el, callback) {
    const initialStyle = getElementStyle(el)
    const height = prepareElement(el, initialStyle)
    const keyframes = getEnterKeyframes(height, initialStyle)
    const options = { duration: 100, easing: "ease-in-out" }
    animateTransition(el, initialStyle, callback, keyframes, options)
}

export function leaveTransition(el, callback) {
    const initialStyle = getElementStyle(el)
    const { height } = getComputedStyle(el)
    el.style.height = height
    el.style.overflow = "hidden"
    const keyframes = getEnterKeyframes(height, initialStyle).reverse()
    const options = { duration: 100, easing: "ease-in-out" }
    animateTransition(el, initialStyle, callback, keyframes, options)
}