export const name = 'Binoculars';
export const code =
`
let radius = 120;
let leftCX = width/2 - radius/1.2;
let rightCX = width/2 + radius/1.2;
let leftCY = rightCY = height/2;

for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        let leftR = (x - leftCX)**2 + (y - leftCY)**2;
        let rightR = (x - rightCX)**2 + (y - rightCY)**2;

        if (leftR > radius**2 && rightR > radius**2) {
            set(x, y, { r: 0, g: 0, b: 0 });
        }
    }
}
`;