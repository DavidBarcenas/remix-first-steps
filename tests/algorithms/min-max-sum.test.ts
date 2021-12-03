/* eslint-disable no-magic-numbers */
import { miniMaxSum } from '../../src/algorithms/min-max-sum';

test('the minimum sum must be 10, the maximum sum must be 14', () => {
  expect(miniMaxSum([1, 2, 3, 4, 5])).toEqual([10, 14])
})

test('the minimum sum must be 411, the maximum sum must be 481', () => {
  expect(miniMaxSum([48, 14, 53, 4, 43, 10, 59, 71, 65, 31, 74, 13])).toEqual([411, 481])
})

test('the minimum sum must be 1602, the maximum sum must be 1794', () => {
  const numArray = [81, 199, 42, 29, 10, 93, 14, 123, 132, 193, 59, 105, 63, 187, 176, 67, 7, 16, 19, 96, 90]
  expect(miniMaxSum(numArray)).toEqual([1602, 1794])
})

test('the minimum sum must be 10379, the maximum sum must be 10864', () => {
  const numArray = [308, 313, 25, 179, 152, 274, 408, 138, 174, 5, 129, 10, 56, 135, 203, 91, 63, 163, 478, 490, 304, 62, 197, 221, 296, 93, 240, 361, 321, 23, 64, 345, 250, 403, 81, 213, 261, 441, 224, 107, 39, 439, 145, 238, 102, 232, 324, 322, 242, 485]
  expect(miniMaxSum(numArray)).toEqual([10379, 10864])
})
