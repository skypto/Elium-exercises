/*

Avery is at it again.

The group is placing bets on how many times he's going to say the same word.

Write a function that takes a word, and the amount of times he's going to say
that word as a variable.

*/

function mumbling(word, times) {

  var string = ''
  for (var i = 0; i < times; i++) {
    string += word;
  }
  return string
}

/*
With ES6 syntax and string method.
----------------------------------

mumbling = (word, times) => word.repeat(times)

*/

console.log(mumbling('Hi ', 5))
// outputs HiHiHiHiHi
console.log(mumbling('Javascript ', 2))
// outputs Javascript Javascript
