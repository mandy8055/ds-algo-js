import towerOfHanoi from '../towerOfHanoi.mjs';

describe('towerOfHanoi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it('should not log anything when n is 0', () => {
    towerOfHanoi(0, 'A', 'B', 'C');
    expect(consoleLogSpy).not.toHaveBeenCalled();
  });

  it('should log correct steps for n=1', () => {
    towerOfHanoi(1, 'A', 'B', 'C');
    expect(consoleLogSpy).toHaveBeenCalledWith('1[A->B]');
  });

  it('should log correct steps for n=2', () => {
    towerOfHanoi(2, 'A', 'B', 'C');
    expect(consoleLogSpy).toHaveBeenCalledWith('1[A->C]');
    expect(consoleLogSpy).toHaveBeenCalledWith('2[A->B]');
    expect(consoleLogSpy).toHaveBeenCalledWith('1[C->B]');
  });

  it('should log correct steps for n=3', () => {
    towerOfHanoi(3, 'A', 'B', 'C');
    expect(consoleLogSpy).toHaveBeenCalledWith('1[A->B]');
    expect(consoleLogSpy).toHaveBeenCalledWith('2[A->C]');
    expect(consoleLogSpy).toHaveBeenCalledWith('1[B->C]');
    expect(consoleLogSpy).toHaveBeenCalledWith('3[A->B]');
    expect(consoleLogSpy).toHaveBeenCalledWith('1[C->A]');
    expect(consoleLogSpy).toHaveBeenCalledWith('2[C->B]');
    expect(consoleLogSpy).toHaveBeenCalledWith('1[A->B]');
  });
});
