/*
Create a function isPrime that logs true or false if a
 number is prime. E.g isPrime(9) => false, isPrime(11) => true

*/

function isPrime(n) {
    
    if (n < 2)
return false
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
       return false
        } 
            
        
       
    } 
    return true
}
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(6))
console.log(isPrime(7))
console.log(isPrime(8))
console.log(isPrime(9))
console.log(isPrime(10))
console.log(isPrime(11))
console.log(isPrime(12))
console.log(isPrime(13))
console.log(isPrime(14))
console.log(isPrime(15))