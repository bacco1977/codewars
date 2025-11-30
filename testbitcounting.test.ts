import { countBits } from './bitcounting';
import { describe, test, expect } from '@jest/globals';


describe('countBits', () => {
  test('handles zero', () => {
    expect(countBits(0)).toBe(0);
  });

  test('counts bits for a single power of two', () => {
    expect(countBits(8)).toBe(1); // 1000
  });

  test('counts multiple ones', () => {
    expect(countBits(1234)).toBe(5); // 10011010010
  });

  test('counts the maximum 32-bit value', () => {
    expect(countBits(0xffffffff)).toBe(32);
  });

  test('handles repeated values consistently', () => {
    expect(countBits(7)).toBe(3);
    expect(countBits(7)).toBe(3);
  });

  test('handles large number', () => {
    expect(countBits(6286433952654045)).toBe(31);
   
  });
});
