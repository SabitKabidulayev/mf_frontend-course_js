let tasks = []
if (localStorage.tasks) {
    tasks = JSON.parse(localStorage.tasks)
}

for (task of tasks) {
    addTask(task)
}

const textInput = document.querySelector('input')
const form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault()

    tasks.push(textInput.value)
    localStorage.tasks = JSON.stringify(tasks)

    addTask(textInput.value)
})

function addTask (task) {
    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    li.innerText = task
    ul.appendChild(li)
}