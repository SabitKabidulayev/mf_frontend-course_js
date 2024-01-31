console.log('------------------TASK_1------------------')

console.log(navigator)
console.log(location)
console.log(`На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.appCodeName} я открыл страничку ${location.href} `)




console.log('------------------TASK_2------------------')

const list = document.querySelectorAll('#list li')

console.log('------------------2.1------------------')

for (item of list) {
    console.log(item.innerText)
}

console.log('------------------2.2------------------')

list.forEach((item,index) => {
    item.innerText = index
    console.log(item.innerText)
})



// ------------------------TASK_3----------------------------

const forRemoveItems = document.querySelectorAll('.forRemove')

for (item of forRemoveItems) {
    item.remove()
}


console.log('------------------TASK_4------------------')












console.log('------------------NOTES------------------')

// // search element by ID
const customItem = document.getElementById('custom-item')
console.log(customItem)

// // search all elements by class, creates HTML-collection (pseudo array)
const selectedItems = document.getElementsByClassName('selected')
console.log(selectedItems)

// // search all elements by tag, creates HTML-collection (pseudo array)
const paragraphs = document.getElementsByTagName('p')
console.log(paragraphs)



const headers = document.querySelectorAll('h2, h1')
console.log(headers)

const firstLi = document.querySelector('ul li:first-child')
console.log(firstLi)

const blockTitle2 = document.querySelector('.block-title2')
console.log(blockTitle2)



customItem.style.fontSize = '50px'
customItem.style.color = 'red'

console.log(customItem.innerText) // text content of element
console.log(customItem.textContent)

customItem.innerText = 'Hello'
customItem.innerText = ''


// // Interactions with iterable objects (pseudo arrays)

for (element of selectedItems) {
    element.style.backgroundColor = 'yellow'
}

headers.forEach(el => el.textContent = 'New Heading')

// blockTitle2.remove()

const link = document.createElement('a')
link.href = 'htpps://google.com'
link.setAttribute('target', '_blank')
link.style.color = 'violet'
link.style.textDecoration = 'none'
link.innerText = 'click me'

document.body.append(link)

console.log(link)

const forAdding = document.querySelector('.forAdding')

const button = document.createElement('button')
button.innerText = 'My Button'

forAdding.append(button)