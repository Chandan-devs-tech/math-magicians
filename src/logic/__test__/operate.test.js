import operate from '../operate';
describe('Operate Function', () => {
  test('should perform addition correctly', () => {
    const result = operate(15, 9, '+');
    expect(result).toEqual('24');
  });
  test('should perform multiplication correctly', () => {
    const result2 = operate(11, 11, 'x');
    expect(result2).toEqual('121');
  });
  test('should perform subtraction correctly', () => {
    const result3 = operate(10, 25, '-');
    expect(result3).toEqual('-15');
  });
  test('should perform division correctly', () => {
    const result4 = operate(10, 2, '÷');
    expect(result4).toEqual('5');
  });
  test('should return the remainder correctly', () => {
    const result5 = operate(9, 5, '%');
    expect(result5).toEqual('4');
  });
});