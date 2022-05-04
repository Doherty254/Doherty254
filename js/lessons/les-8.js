// logical operators: AND(&&), OR(||)

// Logical OR

let color = 'Purple'

if(color === 'green' || color === 'Green' || color === "GREEN") {
    console.log('GO');
} else if(color === 'yellow' || color === 'Yellow' || color === "YELLOW") {
    console.log('GET READY')
} else if(color === 'red' || color === 'Red' || color === "RED") {
    console.log('STOP')
} else {
    console.log('ERROR! INVALID COLOR')
}