export const degToRad = deg => (Math.PI / 180) * deg;

export const getCoords = count => {
    const result = [];
    for (let i = 0; i < count; i++) {
        const rad = degToRad((i * 360) / count - 90);
        // for (let i = 0; i < 10; i++) {
        // const rad = degToRad((i * 360) / 10 - 90);
        result.push([Math.cos(rad), Math.sin(rad)]);
    }
    return result;
};
