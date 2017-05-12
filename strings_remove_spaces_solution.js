/*

Avery has some stuttering issues. He leaves long awkward pauses between words.

Remove all pauses from his sentences.

*/

function removeSpaces(str) {

  return str.split(' ').join('')

}

console.log(removeSpaces('Hi      Im  Avery'))
console.log(removeSpaces('Javascript          is    sexy'))
