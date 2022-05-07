/*
Create an array to hold your top choices (colors, presidents, whatever).
 For each choice, log to the screen a string like: "My #1 choice is blue."
Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
 picking the right suffix for the number based on what it is

*/

const countries = [
    'Kenya', 'Ethiopia', 'Tunisia', 'Angola',
     'Japan', 'Fiji', 'Mozambiuqe', 'Egypt'
]


for (let country of countries) {
    // console.log(`My #${countries.indexOf(country) + 1} choice is ${country}.`)
    if(countries.indexOf(country) === 0) {
        console.log(`My 1st choice is ${country}.`)
    } else if (countries.indexOf(country) === 1) {
        console.log(`My 2nd choice is ${country}.`)
    } else if (countries.indexOf(country) === 1) {
        console.log(`My 3rd choice is ${country}.`)
    } else  {
        console.log(`My ${countries.indexOf(country) + 1}th choice is ${country}.`)

    }   
}

console.log('============================================================')

 for(let index = 0; index < countries.length; index++) {
     console.log(`My #${index + 1} choice is ${countries[index]}.`)
 }

