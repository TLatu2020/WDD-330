function qs(selector) {
    return document.querySelector(selector);
}


function qsAll(selector) {
    return document.querySelectorAll(selector);
}


function onEnter(elementSelector, callback) {
    const element = qs(elementSelector);
    element.addEventListener("click", callback);

}

function setCallbacks(selector, callback) {
    const elements = qsAll(selector);
    Array.from(elements).forEach(ele => {
        onEnter('#' + ele.id, callback);
    });
}

export { qs, setCallbacks, onEnter };