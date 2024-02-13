const openBtn = document.querySelector('#open-btn')
const closeBtn = document.querySelector('#close-btn')
const sideMenu = document.querySelector('#side-menu')
const main = document.querySelector('#main')

openBtn.addEventListener('click', () => {
    sideMenu.style.width = '250px'
    main.style.marginLeft = '250px'
    openBtn.classList.add('hidden')
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.width = '0'
    main.style.marginLeft = '0'
    openBtn.classList.remove('hidden')
})
