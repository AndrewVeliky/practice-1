export default function sumDigits(n) {
    //const sum = n.toString().split("").reduce((a, b) => +a + +b);
    let arr = n.toString().split("");
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        //sum += (+arr[i]);
        //sum += new Number(arr[i]);
        sum += Number.parseInt(arr[i])
    }

    return sum;
}