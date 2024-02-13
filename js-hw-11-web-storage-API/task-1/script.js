const body = document.querySelector('body')
const pics = document.querySelectorAll('#pic')

let currentBackgorund = ''

if (localStorage.currentBackgorund) {
    currentBackgorund = localStorage.currentBackgorund
} 

body.style.backgroundImage = currentBackgorund

pics.forEach((pic, i) => {
    pics[i].addEventListener('click', () => {
        for (pic of pics) {
            pic.classList.remove('selected')
        }
        body.style.backgroundImage = `url(${getBg(pics[i])})`
        pics[i].classList.add('selected')
        localStorage.currentBackgorund = `url(${getBg(pics[i])})`
    })
})

function getBg(from) {
    return from.getAttribute('src')
}