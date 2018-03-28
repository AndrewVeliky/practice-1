export default function convertToRoman(n) {
    const roman = new Map([
        [1, "I"],
        [5, "V"],
        [10, "X"],
        [50, "L"],
        [100, "C"],
        [500, "D"],
        [1000, "M"]
    ]);
    const nArr = n.toString().split("");
    const gradesArray = [];
    const converted = [];
    const keys = [...roman.keys()];

    function getRomanKey(normalGrade) {
        let romanKey = "";

        for (let j = 0; j < keys.length; j++) {
            if (keys[j] === normalGrade) {
                romanKey = j;
            }
        }

        return romanKey;
    }

    for (let i = 0; i < nArr.length; i++) {
        gradesArray[i] = +(`1${"0".repeat((nArr.length - i) - 1)}`);
        nArr[i] = new Number(nArr[i]);
        switch (nArr[i]) {
            case 1:
                converted.push(roman.get(keys[getRomanKey(gradesArray[i])]));
                break;
            case 2:
                converted.push(roman.get(keys[getRomanKey(gradesArray[i])]).repeat(nArr[i]));
                break;
            case 3:
                converted.push(roman.get(keys[getRomanKey(gradesArray[i])]).repeat(nArr[i]));
                break;
            case 4:
                converted.push(roman.get(keys[getRomanKey(gradesArray[i])]));
                converted.push(roman.get(keys[getRomanKey(gradesArray[i] * 5)]));
                break;
            case 5:
                converted.push(roman.get(keys[getRomanKey(gradesArray[i] * 5)]));
                break;
            case 6:
                converted.push(roman.get(keys[getRomanKey(gradesArray[i] * 5)]));
                converted.push(roman.get(keys[getRomanKey(gradesArray[i])]));
                break;
            case 7:
                converted.push(roman.get(keys[getRomanKey(gradesArray[i] * 5)]));
                converted.push(roman.get(keys[getRomanKey(gradesArray[i])]).repeat(2));
                break;
            case 8:
                converted.push(roman.get(keys[getRomanKey(gradesArray[i] * 5)]));
                converted.push(roman.get(keys[getRomanKey(gradesArray[i])]).repeat(3));
                break;
            case 9:
                converted.push(roman.get(keys[getRomanKey(gradesArray[i])]));
                converted.push(roman.get(keys[getRomanKey(gradesArray[i] * 10)]));
                break;
            default:
                break;
        }
    }
    return converted.join("");
}