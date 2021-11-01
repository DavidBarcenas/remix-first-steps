/**
  Note that $ and , are not moved anywhere.  
  Only subsequence "abc" is reversed
*/

function main(input) {
  if (typeof input !== 'string' || input.trim() === '') {
    throw new Error('The input parameter has to be a string.')
  }

  const word = input.trim()

  const symbolArray = getSymbols(word)
  const flipString = addSymbolsToYourPosition(word, symbolArray)

  return flipString
}

function getSymbols(word) {
  const convertStringToArray = word.split('')

  const symbolDictionary = [',', '$', '!']
  const symbolPosition = []

  for (let i = 0; i <= convertStringToArray.length; i++) {
    if (symbolDictionary.includes(convertStringToArray[i])) {
      symbolPosition.push([i, convertStringToArray[i]])
    }
  }

  return symbolPosition
}

function addSymbolsToYourPosition(word, symbols) {
  const clearString = word.replace(/\W/g, '')
  const flipString = clearString.split('').reverse()

  for ([key, value] of symbols) {
    flipString.splice(key, 0, value)
  }

  return flipString.join('')
}


////////////////////////////////////////////////////////////////////////
// Run Tests!
///////////////////////////////////////////////////////////////////////

const test1 = main("a,b$c") === "c,b$a"
const test2 = main("Ab,c,de!$") === "ed,c,bA!$"
const test3 = main("abcdef") === "fedcba"

console.log(test1)
console.log(test2)
console.log(test3)