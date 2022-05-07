/*
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.

*/

function tellFortune(numeberOfChildren,partner,location,job) {
    console.log(`You will be a ${job} in ${location}, and married to ${partner} with ${numeberOfChildren} kids.`)
}

tellFortune(3, 'Tricky', 'Nakuru', 'Software Engineer')
tellFortune(5, 'Daisy', 'Kwale', 'Teacher')
tellFortune(2, 'Maih', 'Soy', 'Business Man')