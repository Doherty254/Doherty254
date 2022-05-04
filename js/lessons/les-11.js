// functions

// regular functions

function sayHello(name) {
    if(name) {
        console.log(`Hello, ${name}.`)
    } else {
    console.log('Hello World')
    }

}

sayHello('Dickson') //Hello, Dickson
sayHello()          //hello, world


// create a function sum to print sum of 2 numbers passed
function sum(num1,num2) {
    console.log(num1 + num2)
}

sum(2,3)        // 5
sum(8,12)       // 20

sum(23,'azron')   //*have an error to tell that this argument is not a number error
sum(5)            //error



sum(1,2,3)
sum(44,5,2,4,4)