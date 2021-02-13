function readFromLS(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data) || [];
}

function writeToLS(key, data) {
    const dataSerialized = JSON.stringify(data);
    localStorage.setItem(key, dataSerialized);
}

export { writeToLS, readFromLS }


// function writeStorage(key, data) {
//     localStorage.setItem(key, JSON.stringify(data));
// }

// function readStorage(key) {
//     let item = localStorage.getItem(key);
//     return JSON.parse(item);
// }

// export { writeStorage, readStorage };