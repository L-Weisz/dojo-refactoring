import { rgbToHex } from "../rgbToHex";

describe('rgbToHex', () => {
  test('should convert RGB color to hexadecimal', () => {
    expect(rgbToHex(255, 255, 255)).toBe('#ffffff');
    expect(rgbToHex(0, 0, 0)).toBe('#000000');
    expect(rgbToHex(255, 0, 0)).toBe('#ff0000');
    expect(rgbToHex(0, 255, 0)).toBe('#00ff00');
    expect(rgbToHex(0, 0, 255)).toBe('#0000ff');
    expect(rgbToHex(17, 34, 51)).toBe('#112233');
  });
});
