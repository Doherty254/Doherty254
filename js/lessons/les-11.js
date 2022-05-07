// functions

// regular functions

function sayHello(name) {
    if(name) {
        return `Hello, ${name}.`
    } else {
    return 'Hello World'
    }

}

sayHello('Dickson') //Hello, Dickson
sayHello()          //hello, world

// arrow function

const greet = (name) => {
    return `Hello, ${name}.`

}

console.log(greet('Dickson'))
console.log(greet('Angelina'))


// create a function sum to print sum of 2 numbers passed
// function sum(num1,num2) {
//     // return typeof arguments[0])
//     // return typeof arguments[1])
//     // if(arguments[1]){
//     //     if (typeof arguments[0]==='string' || typeof arguments[1]==='string'){
//     //         return 'one of your arguments is not a number')
//     //     } else {
//     //         return num1 + num2)
//     //     }
//     // }else{
//     //     return 'supply a second arg')
//     // }
//     if(typeof num1 === 'number' && typeof num2 === 'number') {
//         return num1 + num2)
//     } else {
//         if(isNaN(num1)) {
//             return `Error: ${num1} is not a numebr type`)
//         }
//         if(isNaN(num2)) {
//             return `Error: ${num2} is not a numebr type`)
//         }
//     }
// }

function sum() {
    if(arguments.length >=2) {
        
        let total = 0
        for(let argument of arguments) {
            if(typeof argument === 'number') {
                total += argument
            } else {
                return `Error. ${argument} is number type `
                
            }
        }
        return total

    } else {
        return'Error. At least 2 arguments of number type expected'
    }
   
}

console.log(sum(2,3))        // 5
console.log(sum(8,12))      // 20
console.log(sum(1,2,3,4,5))
console.log(sum(4,3,5))
console.log(sum(45,3,5,2,7,87,1))
console.log(sum(23,'azron')) //*have an error to tell that this argument is not a number error
console.log(sum('eggs',1092))
console.log(sum(5))            //error



// sum(1,2,3)
// sum(44,5,2,4,4)



