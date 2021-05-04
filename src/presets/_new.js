export const name = 'My preset';
export const code =
`
for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        let {r, g, b} = get(x, y);
        
        set(x, y, {r, g, b});
    }
}
`;