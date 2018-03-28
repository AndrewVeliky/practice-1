function getStatsV2_0(data) {
    const result = data.length === 0 ? {
        min: null,
        max: null,
        avg: null
    } : {
        max: Math.max.apply(Math, data),
        min: Math.min.apply(Math, data),
        avg: data.reduce((a, b) => a + b) / data.length
    };
    return result;
}