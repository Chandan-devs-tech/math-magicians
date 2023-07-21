// Import the 'calculate' function from a utility module
import calculate from '../calculate';
describe('The calculate function', () => {
  test('should handle the AC (All Clear) button correctly', () => {
    const initialState = { total: '20', next: '3', operation: '-' };
    const result = calculate(initialState, 'AC');
    const expectedState = { total: null, next: null, operation: null };
    expect(result).toEqual(expectedState);
  });
  test('should handle number buttons correctly', () => {
    const initialState = { total: '20', next: '9', operation: '+' };
    const result2 = calculate(initialState, '5');
    const expectedState = { total: '20', next: '95', operation: '+' };
    expect(result2).toEqual(expectedState);
  });
  test('should perform addition correctly', () => {
    const initialState = { total: '21', next: '100', operation: '+' };
    const result3 = calculate(initialState, '=');
    const expectedState = { total: '121', next: null, operation: null };
    expect(result3).toEqual(expectedState);
  });
});