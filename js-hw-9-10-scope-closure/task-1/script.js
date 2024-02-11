const tasks = [
    'task1',
    'task2',
    'task3'
]

const tasksList = document.querySelector('#tm-list')

const tasksElements = tasks.map ((task, index) => {
    const li = document.createElement('li')
    li.classList.add('list-group-item')

    const div = document.createElement('div')

    const input = document.createElement('input')
    input.classList.add('form-check-input', 'me-1')
    input.type = 'checkbox'
    input.setAttribute('id', `checkbox${index}`)

    const label = document.createElement('label')
    label.classList.add('form-check-label')
    label.setAttribute('for', `checkbox${index}`)
    label.innerText = task

    const button = document.createElement('button')
    button.setAttribute('type', `button`)
    button.classList.add('btn', 'btn-danger')
    button.innerText = 'Delete'

    div.append(input, label)
    li.append(div, button)
    
    return li
})

tasksList.append(...tasksElements)