function selecting(selector) {
    return document.querySelector(selector);
}

function onEnter(querySelector, callback) {
    let e = selecting(querySelector);

    e.addEventListener('click', callback);
}

export { selecting, onEnter };