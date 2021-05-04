export const name = 'Noctovision';
export const code =
`
for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        let {r, g, b} = get(x, y);
        let chroma = (r + g + b) / 3;
        let noise = Math.random() * 50;
        set(x, y, {
            r: noise,
            g: noise + chroma / 1.5 + 16 * Math.sin(chroma / 28),
            b: noise
        });
    }
}
`;