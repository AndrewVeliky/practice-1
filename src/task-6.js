export default function getStats(data) {
    if (data.length === 0) {
        return {
            min: null,
            max: null,
            avg: null
        };
    }
    const stats = {
        max: Math.max.apply(Math, data),
        min: Math.min.apply(Math, data),
        avg: data.reduce((a, b) => a + b) / data.length
    };
    return stats;
}
