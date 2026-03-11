import { capitalize } from "./index.js";
import { reverseString } from "./index.js";

test('checks capitalization', () => {
    expect(capitalize('gaurav')).toBe('Gaurav');
});

test('checks reverse' , () => {
    expect(reverseString('gaurav')).toBe('varuag');
});