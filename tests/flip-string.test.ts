import { main } from "../src/algorithms/flip-string"

test('should reverse the string', () => {
  expect(main('abcdefghijk')).toBe('kjihgfedcba')
})

test('should return the inverted string keeping the symbols in their original position', () => {
  expect(main('a,b$c')).toBe('c,b$a')
  expect(main('Ab,c,de!$')).toBe('ed,c,bA!$')
})

test('should keep the characters that are not in the regex', () => {
  expect(main('Z&hk$6-#P,')).toBe('P#-6$kh&Z,')
})

test('should send an error when the string is empty', () => {
  expect(() => { main('      ') }).toThrow(Error)
})