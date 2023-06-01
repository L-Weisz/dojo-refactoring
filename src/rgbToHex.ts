export function rgbToHex(r: number, g: number, b: number): string {
    let hex = "#";
    if(r < 16) {
        hex += "0" + r.toString(16);
    } else {
        hex += r.toString(16);
    }

    if(g < 16) {
        hex += "0" + g.toString(16);
    } else {
        hex += g.toString(16);
    }

    if(b < 16) {
        hex += "0" + b.toString(16);
    } else {
        hex += b.toString(16);
    }
    return hex;
}
