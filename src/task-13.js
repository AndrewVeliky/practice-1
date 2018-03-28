function sym(args) {
    const arr = [...args, ...arguments[1]];
    const differenceArray = [];

    function countElements(element, array) {
        let elementCount = 0;
        let idx = array.indexOf(element);
        while (idx !== -1) {
            elementCount++;
            idx = array.indexOf(element, idx + 1);
        }
        return elementCount;
    }

    for (let j = 0; j < arr.length; j++) {
        if (countElements(arr[j], arr) === 1) {
            differenceArray.push(arr[j]);
        }
    }

    return differenceArray;
}