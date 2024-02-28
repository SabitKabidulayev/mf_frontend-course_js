const currentBlock = document.querySelector('#current')




let httpRequest = new XMLHttpRequest()
httpRequest.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=Astana&appid=717b78f85cce4ae32ed0d2390267c578&units=metric' )
httpRequest.send()

httpRequest.onload = function () {
    const response = httpRequest.response
    const data = JSON.parse(response)
    
    const city = data.city.name
    const date = data.list[0].dt_txt.split(' ')[0]
    const iconCode = data.list[0].weather[0].icon
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    
    renderMain(city, date, iconURL) 
}

function renderMain(city, date, iconURL) {
    const cityElement = document.createElement('h2')
    // cityElement.classList.add('cityName')
    cityElement.innerText = city
    currentBlock.appendChild(cityElement)

    const dateElement = document.createElement('p')
    dateElement.innerText = date
    currentBlock.appendChild(dateElement)

    const time = timeNow()
    const timeElement = document.createElement('p')
    timeElement.innerText = time
    currentBlock.appendChild(timeElement)

    const iconElement = document.createElement('img')
    iconElement.src = iconURL
    currentBlock.appendChild(iconElement)

}

function renderRow() {

}

function timeNow () {
    let now = new Date()
    
    let currentHours = now.getHours()
    if (currentHours < 10) {
        currentHours = '0' + currentHours
    } 
    
    let currentMinutes = now.getMinutes()
    if (currentMinutes < 10) {
        currentMinutes = '0' + currentMinutes
    } 

    return `${currentHours}:${currentMinutes}`
}