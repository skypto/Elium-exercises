/*

Write a method, that will get an integer array as parameter
and will process every number from this array.
If the number has an integer square root, take this, otherwise square the number.

*/

function squareRootOrSquare(arr) {

  var newArray = []

  for (var i = 0; i < arr.length; i++) {
    if (Math.sqrt(arr[i]) % 1 === 0) newArray.push(Math.sqrt(arr[i]))
    else newArray.push(Math.pow(arr[i], 2))
  }

  return newArray

}

/*

ES6, map method and ternary operator
------------------------------------

function squareRootOrSquare(arr) {

  return arr.map( x => {
    return (Math.sqrt(x) % 1 === 0) ? Math.sqrt(x) : x*x
  })

}

*/

console.log(squareRootOrSquare([4,3,9,7,2,1]))
// outputs [ 2, 9, 3, 49, 4, 1 ]
