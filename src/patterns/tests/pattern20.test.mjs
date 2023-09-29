import pattern20 from '../pattern20.mjs';

describe('pattern20', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('throws an error when the input is an even number', () => {
    expect(() => pattern20(2)).toThrow(Error);
  });

  it('returns the correct pattern when the input is 3', () => {
    const result = pattern20(3);
    const expected = '*\t\t*\t\n*\t*\t*\t\n*\t\t*\t\n';
    expect(result).toBe(expected);
  });

  it('returns the correct pattern when the input is 5', () => {
    const result = pattern20(5);
    const expected =
      '*\t\t\t\t*\t\n*\t\t\t\t*\t\n*\t\t*\t\t*\t\n*\t*\t\t*\t*\t\n*\t\t\t\t*\t\n';
    expect(result).toBe(expected);
  });

  it('uses the getFloor function to calculate the floor of the input number', () => {
    const getFloor = jest.requireActual('../../utils/getFloor.mjs');
    const spy = jest.spyOn(getFloor, 'default');
    pattern20(3);
    expect(spy).toHaveBeenCalledWith(1.5);
  });
});
