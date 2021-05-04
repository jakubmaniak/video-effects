export const name = 'Red-Turquoise';
export const code =
`
for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        let {r, g, b} = get(x, y);
        let wavg = (r + g/2 + b/2) / 2;
        set(x, y, {
            r: 255 - wavg,
            g: wavg,
            b: wavg
        });
    }
}
`;