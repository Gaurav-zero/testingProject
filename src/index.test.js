import { calculator, capitalize } from "./index.js";
import { reverseString } from "./index.js";

test('checks capitalization', () => {
    expect(capitalize('gaurav')).toBe('Gaurav');
});

test('checks reverse' , () => {
    expect(reverseString('gaurav')).toBe('varuag');
});

test('checks calculator object' , () =>{
    expect(calculator.add(2,3)).toBe(5);
    expect(calculator.multiply(2,3)).toBe(6);
    expect(calculator.subtract(2,3)).toBe(-1);
    expect(calculator.divide(2,3)).toBeCloseTo(0.666);
});