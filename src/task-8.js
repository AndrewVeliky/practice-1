export default function getTopLetter(str) {
    const myMap = new Map();

    for (let i = 0; i < str.length; i++) {
        let counter = 0;

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                counter++;
            }
        }

        myMap.set(counter, str[i]);
    }

    const arr = [...myMap.keys()];

    return myMap.get(Math.max.apply(null, arr));
}
