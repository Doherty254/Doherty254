let form = document.querySelector('form')
let categories = document.querySelectorAll('li')

const calculateBMI = (e) => {
    e.preventDefault()
    
    let height = Number(document.querySelector('#height').value) / 100
    let weight = Number(document.querySelector('#weight').value)

    let bmi = Number(weight / (height ** 2)).toFixed(1)

    

    let results = document.querySelector('#results')
    results.textContent = `Your BMI is ${bmi}`

    categories.forEach(category => category.style.backgroundColor = 'white')
    
    if(bmi >= 30) {
        categories[3].style.backgroundColor = '#c2bdbd'
    } else if (bmi >= 25) {
        categories[2].style.backgroundColor = '#c2bdbd'
    } else if (bmi >=18.5) {
        categories[1].style.backgroundColor = '#c2bdbd'
    } else
    categories[0].style.backgroundColor = '#c2bdbd'
    form.appendChild(results)
}

form.addEventListener('submit', calculateBMI) 



let tabs = document.querySelectorAll('.tab')

tabs.forEach(tab => {
    tab.addEventListener('click',  (e) => {
        e.preventDefault()
        tabs.forEach(tab => tab.style.backgroundColor = '#fff')
        tab.style.backgroundColor = '#c2bdbd'
        if(tab.getAttribute('id') === 'tab-metric') {
            document.querySelector('#metric').style.display = 'block'
            document.querySelector('#imperial').style.display = 'none'
        } else {
            document.querySelector('#metric').style.display = 'none'
            document.querySelector('#imperial').style.display = 'block'
        }
    })
})
