const popupBtn = document.querySelector('#popup-btn')
const popup = document.querySelector('#popup')
const popupContent = document.querySelector('#popup-content')
const popupClose = document.querySelector('#popup-close')

popupBtn.addEventListener('click', () => {
    popup.classList.add('opened')
})

popupClose.addEventListener('click', () => {
    popup.classList.remove('opened')
})

window.addEventListener('click', e => {
    if (e.target.id === 'popup') {
        popup.classList.remove('opened')
    }
})