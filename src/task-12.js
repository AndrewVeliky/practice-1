function updateInventory(arr1, arr2) {
    const arrNew = [];
    const names = {};
    const keys = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i][1] === arr2[j][1]) {
                arr1[i][0] += arr2[j][0];
                names[arr1[i][1]] = arr1[i][0];
            }
            if (!names.hasOwnProperty(arr1[i][1])) {
                names[arr1[i][1]] = arr1[i][0];
            }
            if (!names.hasOwnProperty(arr2[j][1])) {
                names[arr2[j][1]] = arr2[j][0];
            }
        }
    }
    for (const key in names) {
        if ({}.hasOwnProperty.call(names, key)) {
            keys.push(key);
        }
    }

    keys.sort();
    keys.forEach(value => arrNew.push([names[value], value]));

    return arrNew;
}