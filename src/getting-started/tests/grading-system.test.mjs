import printGrades from '../grading-system.mjs';

describe('printGrades', () => {
  it('should return "excellent" for marks above 90', () => {
    expect(printGrades(95)).toBe('excellent');
    expect(printGrades(91)).toBe('excellent');
  });

  it('should return "good" for marks above 80 and less than equal to 90', () => {
    expect(printGrades(85)).toBe('good');
    expect(printGrades(90)).toBe('good');
  });

  it('should return "fair" for marks above 70 and less than equal to 80', () => {
    expect(printGrades(75)).toBe('fair');
    expect(printGrades(80)).toBe('fair');
  });

  it('should return "meets expectation" for marks above 60 and less than equal to 70', () => {
    expect(printGrades(65)).toBe('meets expectation');
    expect(printGrades(70)).toBe('meets expectation');
  });

  it('should return "below par" for marks less than equal to 60', () => {
    expect(printGrades(50)).toBe('below par');
    expect(printGrades(60)).toBe('below par');
  });
});
