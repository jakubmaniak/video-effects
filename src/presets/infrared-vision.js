export const name = 'Infrared vision';
export const code =
`
for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        let {r, g, b} = get(x, y);
        let chroma = (r + g + b) / 3;
        set(x, y, {
            r: chroma * 1.5,
            g: chroma / 2,
            b: 255 - chroma
        });
    }
}
`;