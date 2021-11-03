const MIN_NUMBER = 0;
const INITIAL_VALUE = 1;

let str = '\n';

export function stairCase(n: number): string {
  if (typeof n !== 'number' || n < MIN_NUMBER) {
    throw new Error('the parameter n must be a number and also positive.');
  }

  for (let i = INITIAL_VALUE; i <= n; i++) {
    for (let k = INITIAL_VALUE; k <= n; k++) {
      str += k > n - i ? '#' : ' ';
    }
    str += '\n';
  }
  return str;
}
