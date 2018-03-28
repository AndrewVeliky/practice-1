export default function getNthItem(a, n) {
    const S = [0];
    for (let i = 1; i <= n; i++) {
        S.push(a - 2 * S[i - 1]);
    }

    return S[n];
}
