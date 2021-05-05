export const name = 'Sepia';
export const code =
`
for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        let {r, g, b} = get(x, y);
        let chroma = (r + g + b) / 3;
        set(x, y, {
            r: chroma,
            g: chroma / 1.2,
            b: chroma / 1.7
        });
    }
}
`;