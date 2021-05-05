export const name = 'Daylight';
export const code =
`
for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        let {g, b} = get(x, y);
        
        set(x, y, {
            g: g * 1.08,
            b: b * 1.20
        });
    }
}
`;