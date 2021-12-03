export function miniMaxSum(arr: number[]): number[] {
  const sortArr = arr.sort((a, b) => a - b);
  const total = arr.reduce((a, b) => a + b);

  const counter = 1;
  const maxSum = total - sortArr[0];
  const minSum = total - sortArr[arr.length - counter];

  return [minSum, maxSum];
}
