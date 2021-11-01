/**
  Note that $ and , are not moved anywhere.  
  Only subsequence "abc" is reversed
*/

function main(input) {
  if (typeof input !== 'string' || input.trim() === '') {
    throw new Error('The input parameter must be a string and cannot be empty.')
  }

  // if you add or remove symbols, also do it in the regex.
  const symbols = [',', '$', '!']
  const regex = /[$!,]/g

  const word = input.trim()
  const convertWordToArray = word.split('')
  const flipWord = word.replace(regex, '').split('').reverse()

  convertWordToArray.reduce((_, character, i) => {
    if (symbols.includes(character)) {
      flipWord.splice(i, 0, character)
    }
  })

  return flipWord.join('')
}


////////////////////////////////////////////////////////////////////////
// Run Tests!
///////////////////////////////////////////////////////////////////////

const test1 = main("a,b$c") === "c,b$a"
const test2 = main("Ab,c,de!$") === "ed,c,bA!$"
const test3 = main("abcdef") === "fedcba"
const test4 = main("Z&hk$6-#P,") === "P#-6$kh&Z,"

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)