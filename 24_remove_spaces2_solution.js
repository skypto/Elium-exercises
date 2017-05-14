/*
Poor Avery, as you noticed, now he didn't leave any space between his words.

Make sure there's proper spacing in his sentences.
*/

function removeAllSpacesButOne(str) {

  var stringArray = str.split('')

  var newStringArray = []

  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i] !== ' ' && stringArray[i + 1] === ' ') {
      newStringArray.push(stringArray[i])
      newStringArray.push(stringArray[i + 1])
    } if (stringArray[i] !== ' ' && stringArray[i + 1] !== ' ') {
      newStringArray.push(stringArray[i])
    }
  }

  return newStringArray.join('')
}

console.log(removeAllSpacesButOne('Hi      Im  Avery'))
// outputs
console.log(removeAllSpacesButOne('Javascript          is    sexy'))
// outputs
