


let age, gender;

age = 4
gender = 'male'

if(age >=18 && gender === 'male'){
    console.log('This is a man!')
} else if (age >=18 && gender === 'female') {
    console.log('This is a woman!')
} else if(age <18 && gender === 'male') {
    console.log('This is a boy!')
} else {
    console.log('This is a girl!')
}