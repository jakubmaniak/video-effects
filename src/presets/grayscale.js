export const name = 'Grayscale';
export const code =
`
fps(24);

for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        let {r, g, b} = get(x, y);
        let chroma = (r + g + b) / 3;
        set(x, y, {r: chroma, g: chroma, b: chroma});
    }
}
`;