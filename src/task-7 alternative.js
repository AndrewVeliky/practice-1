//1. forEach
function unique(data) {
    const uniqueArray = [];

    function getElement(element) {
        if (uniqueArray.indexOf(element) === -1) {
            uniqueArray.push(element);
        }
    }
    data.forEach(getElement);
    return uniqueArray;
}

//2.for
function unique(data) {
    const uniqueArray = [];

    for (let i = 0; i < data.length; i++) {
        if (uniqueArray.indexOf(data[i]) === -1) {
            uniqueArray.push(data[i]);
        }
    }
    return uniqueArray;
}