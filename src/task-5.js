export default function trim(text, maxLength) {
    if (maxLength <= 0) {
        throw new RangeError();
    } else if (maxLength < text.length) {
        return `${text.slice(0, maxLength - 1)}\u2026`;
    }
    return text;
}
