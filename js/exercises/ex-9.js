/*
Create a function lengthOfArray that logs the length of an array.
 E.g lengthOfArray([‘blue’, ‘red’, ‘black’]) => 3
Note: DO NOT USE length property.
*/

function lengthOfArray(array) {
    let count = 0
    for(let ele of array) {
        count++
    }
    console.log(count)
}

lengthOfArray(['blue', 'black', 'orange', 'red'])
lengthOfArray([1,2,3,4,5,6,7,8,9,10])

console.log('========================================')

console.log(['blue', 'black', 'orange', 'red'].length)
console.log([1,2,3,4,5,6,7,8,9,10].length)