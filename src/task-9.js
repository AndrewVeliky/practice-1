export default function merge(data) {
    const result = {};

    for (let i = 0; i < data.length; i++) {
        for (const key in data[i]) {
            if (!result.hasOwnProperty(key)) {
                result[key] = [data[i][key]];
            } else {
                result[key].push(data[i][key]);
            }
        }
    }
    return result;
}
