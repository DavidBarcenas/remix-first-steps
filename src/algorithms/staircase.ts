/**
 * The staircase must have a base and a height equal to n
 */


export function stairCase(n: number): string {
  const MIN_NUMBER = 0;
  const INITIAL_VALUE = 1;

  let str = '\n';

  if (typeof n !== 'number' || n < MIN_NUMBER) {
    throw new Error('The parameter n must be a number and also positive.');
  }

  for (let i = n - INITIAL_VALUE; i >= MIN_NUMBER; i--) {
    str += ' '.repeat(i).concat('#'.repeat(n - i))
    str += '\n'
  }
  
  return str;
}
