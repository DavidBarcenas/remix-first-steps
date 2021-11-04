/**
 * The staircase must have a base and a height equal to n
 */

const MIN_NUMBER = 0;
const INITIAL_VALUE = 1;

export function stairCase(n: number): string {
  let str = '\n';

  if (typeof n !== 'number' || n < MIN_NUMBER) {
    throw new Error('the parameter n must be a number and also positive.');
  }

  for (let vertical = INITIAL_VALUE; vertical <= n; vertical++) {
    for (let horizontal = INITIAL_VALUE; horizontal <= n; horizontal++) {
      str += horizontal > n - vertical ? '#' : ' ';
    }
    str += '\n';
  }
  return str;
}
