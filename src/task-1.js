export default function isTriangle(a, b, c) {
    const result = (c < a + b && a < c + b && b < c + a);
    return result;
}
