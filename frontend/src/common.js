function randomRange(min, max) { 
    return Math.random() * (max - min) + min;
}


function randomNegative() {
    return Math.random() < 0.5 ? -1 : 1; 
}


function jsonToURI(obj) {
    let params = new URLSearchParams(obj);
    return params.toString();
}


function createURI(url, obj){
    let params = '';
    if (obj != undefined){
        params = jsonToURI(obj);
    }
    return `${url}?${params}`;
}


export { randomRange, randomNegative, jsonToURI, createURI }
