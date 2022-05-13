// // selecting an element by tagname
// let title = document.querySelector('h1')

// // selecting an element by its id
// let post = document.querySelector('#post-title')

// // selecting elements using class name
// let languages =document.querySelectorAll('.lang')

// let submitBtn =document.querySelector("input[type='submit']")

// // returns elements content
// title.textContent

// //returns element's content with regards to styles
// title.innerText

// // returns everything within the element including HTML tags
// title.innerHTML

// languages.forEach(language => {
//     language.style.color = 'red'
//     language.style.fontSize = '24px'

// })

//     submitBtn.style.padding = '10px'
//     submitBtn.style.border = '1px solid red'
//     submitBtn.style.color = 'red'
//     submitBtn.style.fontSize = '24px'
//     submitBtn.style.backgroundColor = 'white'

    // creating html elements
    const ul = document.createElement('ul')

    const programmingLanguages = ['Rust','C++','C','Java','Dart','Ruby','Python','Javascript']

    for(let language of programmingLanguages) {
        const li =document.createElement('li')
        li.textContent = language
        li.className = 'lang'
        ul.appendChild(li)

        
        
    }


    
    const body = document.querySelector('body')

    body.appendChild(ul)

    const button =document.createElement('button')

    button.style.padding = '12px 22px'
    button.style.fontSize = '22px'
    button.style.backgroundColor = 'blue'
    button.style.border = '1px solid blue'
    button.style.color = 'white'
    button.textContent = 'Send Message'



    body.appendChild(button)



    

    
    
        
    
    
   




