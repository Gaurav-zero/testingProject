import { capitalize } from "./index.js";

test('checks capitalization', () => {
    expect(capitalize('gaurav')).toBe('Gaurav');
});