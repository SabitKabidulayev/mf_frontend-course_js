const list = document.querySelector('#list')

const taskHeaderDiv = document.querySelector('#task-header-div')

let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos')

xhr.send()

xhr.onload = function() {
    const response = xhr.response
    data = JSON.parse(response).slice(0, 20)

    const header = document.createElement('h1')
    
    header.innerText = data.title

    taskHeaderDiv.appendChild(header)
}