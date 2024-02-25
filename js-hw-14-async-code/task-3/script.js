const taskHeaderDiv = document.querySelector('#task-header-div')

let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')

xhr.send()

xhr.onload = function() {
    const response = xhr.response
    data = JSON.parse(response)

    const header = document.createElement('h1')
    
    header.innerText = data.title

    taskHeaderDiv.appendChild(header)
}