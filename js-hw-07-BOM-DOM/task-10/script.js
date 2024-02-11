const list = document.querySelector('ul')
list.classList.add('list')

const listItems = document.querySelectorAll('.list li')
for (i = 0; i < listItems.length; i += 2) {
    listItems[i] .classList.add('item')
}

const links = document.querySelectorAll('a')

for (link of links) {
    link.classList.add('custom-link')
}