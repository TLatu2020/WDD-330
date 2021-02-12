function writeStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function readStorage(key) {
    let item = localStorage.getItem(key);
    return JSON.parse(item);
}

export { writeStorage, readStorage };