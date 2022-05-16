let form = document.querySelector('form')
let tasks = document.querySelector('#tasks')

// delete a task
const deleteTask =  (e) => {
    let task = e.target.parentElement
    tasks.removeChild(task)
}

// create a new task *called function
const addTask = (e) => {
    e.preventDefault()
    let task = document.createElement('div')
    task.className = 'task'
    let p = document.createElement('p')
    p.textContent = document.querySelector('#new-task').value
    let button = document.createElement('button')
    button.className = 'icon'
    button.textContent = 'delete'
    button.addEventListener('click', deleteTask)
    task.appendChild(p)
    task.appendChild(button)
    tasks.appendChild(task)
    form.reset()
}

form.addEventListener('submit', addTask)