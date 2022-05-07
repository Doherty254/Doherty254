// write a for loop to return prime numbers between 1 and 50

for(let number = 1; number <= 50; number++) {
    let factors = 0
    for(let divisor = 1; divisor <= number; divisor++) {
        if(number % divisor === 0) {
            factors++
        }
    }
    if(factors === 2) {
        console.log(number)
    }

}