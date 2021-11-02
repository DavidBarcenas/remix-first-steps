import { reverse } from '../../src/algorithms/reverse-string';

test('should reverse the string', () => {
  expect(reverse('abcdefghijk')).toBe('kjihgfedcba')
})

test('should return the inverted string keeping the symbols in their original position', () => {
  expect(reverse('a,b$c')).toBe('c,b$a')
  expect(reverse('Ab,c,de!$')).toBe('ed,c,bA!$')
})

test('should keep the characters that are not in the regex', () => {
  expect(reverse('Z&hk$6-#P,')).toBe('P#-6$kh&Z,')
})

test('should send an error when the string is empty', () => {
  expect(() => { reverse('      ') }).toThrow(Error)
})