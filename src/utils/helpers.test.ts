import { mockRandom } from 'jest-mock-random';
import { getResult } from './helpers';

describe('getResult function', () => {
  it('will always return pizza if random number is < 0.5', () => {
    mockRandom(0.4);
    expect(getResult('pizza', 'pasta')).toBe('pizza');
  });

  it('will always return pasta if random number is >= 0.5', () => {
    mockRandom(0.7);
    expect(getResult('pizza', 'pasta')).toBe('pasta');
  });

  it('will return false if second argument is empty', () => {
    expect(getResult('pizza', '')).toBe(false);
  });
});
