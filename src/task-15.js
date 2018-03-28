function myReplace(str, before, after) {
    const strArr = str.split(" ");

    strArr.splice(strArr.indexOf(before), 1, after);

    return strArr.join(" ");
}