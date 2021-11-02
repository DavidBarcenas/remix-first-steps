import { stairCase } from '../../src/algorithms/stair-case';

test('should return a 6-level ladder aligned to the right', () => {
  const levels = 6;

  let output = '\n'
  output += '     #\n'
  output += '    ##\n'
  output += '   ###\n'
  output += '  ####\n'
  output += ' #####\n'
  output += '######\n'

  expect(stairCase(levels)).toBe(output)
})