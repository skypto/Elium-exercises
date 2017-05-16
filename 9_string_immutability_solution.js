/*

Change the first character of the string to a 'J'.

*/

var string = 'O. is on another plane of existence'

/*

Strings are immutable!

This means that you can't simply change a character in the string by doing the following:

string[0] = 'J'

or

string.charAt(0) = 'J'

We need to create a new string.
*/

var originalStringMinusFirstCharacter = string.slice(1, string.length)
var newFirstCharacter = 'J'
var newString = newFirstCharacter + originalStringMinusFirstCharacter

console.log(newString)