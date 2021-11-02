/**
  Note that $ and , are not moved anywhere.  
  Only subsequence "abc" is reversed
*/

export function reverse(input: string) {
  if (typeof input !== 'string' || input.trim() === '') {
    throw new Error('The input parameter must be a string and cannot be empty.');
  }

  // if you add or remove symbols, also do it in the regex.
  const symbols = [',', '$', '!'];
  const regex = /[$!,]/g;
  const deleteCount = 0;

  const word = input.trim();
  const convertWordToArray = word.split('');
  const reverseWord = word.replace(regex, '').split('').reverse();

  convertWordToArray.map((char, i): void => {
    if (symbols.includes(char)) {
      reverseWord.splice(i, deleteCount, char);
    }
  });

  return reverseWord.join('');
}
