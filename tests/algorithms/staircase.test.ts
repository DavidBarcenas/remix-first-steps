import { stairCase } from '../../src/algorithms/staircase';

test('should return a 2-level staircase aligned to the right', () => {
  const levels = 2;

  let output = '\n'
  output += ' #\n'
  output += '##\n'

  expect(stairCase(levels)).toBe(output)
})

test('should return a 6-level staircase aligned to the right', () => {
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

test('should return a 15-level staircase aligned to the right', () => {
  const levels = 15;

  let output = '\n'
  output += '              #\n'
  output += '             ##\n'
  output += '            ###\n'
  output += '           ####\n'
  output += '          #####\n'
  output += '         ######\n'
  output += '        #######\n'
  output += '       ########\n'
  output += '      #########\n'
  output += '     ##########\n'
  output += '    ###########\n'
  output += '   ############\n'
  output += '  #############\n'
  output += ' ##############\n'
  output += '###############\n'

  expect(stairCase(levels)).toBe(output)
})