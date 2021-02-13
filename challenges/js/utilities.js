function qs(selector) {
    return document.querySelector(selector);
}


function qsAll(selector) {
    return document.querySelectorAll(selector);
}


function onTouch(elementSelector, callback) {
    const element = qs(elementSelector);
    element.addEventListener("click", callback);
    element.addEventListener("touchend", callback)
}

function setCallbacks(selector, callback) {
    const elements = qsAll(selector);
    Array.from(elements).forEach(ele => {
        onTouch('#' + ele.id, callback);
    });
}

export { qs, setCallbacks, onTouch };

// function selecting(selector) {
//     return document.querySelector(selector);
// }

// function onEnter(querySelector, callback) {
//     let e = selecting(querySelector);

//     e.addEventListener('click', callback);
// }

// export { selecting, onEnter };