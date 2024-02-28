const currentBlock = document.querySelector('#current')
const forecastBlock = document.querySelector('#forecast')



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
    const weather = data.list[0].weather[0].main
    const temp = data.list[0].main.temp
    const wind = data.list[0].wind.speed

    renderMain(city, date, iconURL, weather, temp, wind) 



    for (let i = 0; i < 40; i += 8) {
        const dateForecast = data.list[i].dt_txt.split(' ')[0]
        const iconCodeForecast = data.list[i].weather[0].icon
        const iconURLForecast = `https://openweathermap.org/img/wn/${iconCodeForecast}@2x.png`
        const tempForecast = data.list[i].main.temp
        renderRow(dateForecast, iconURLForecast, tempForecast)
    }
}

function renderMain(city, date, iconURL, weather, temp, wind) {
    const cityElement = document.createElement('p')
    cityElement.classList.add('city')
    cityElement.innerText = city
    currentBlock.appendChild(cityElement)

    const dateElement = document.createElement('p')
    dateElement.classList.add('date')
    dateElement.innerText = date
    currentBlock.appendChild(dateElement)

    const time = timeNow()
    const timeElement = document.createElement('p')
    timeElement.classList.add('time')
    timeElement.innerText = time
    currentBlock.appendChild(timeElement)

    const iconElement = document.createElement('img')
    iconElement.classList.add('icon')
    iconElement.src = iconURL
    currentBlock.appendChild(iconElement)

    const weatherElement = document.createElement('p')
    weatherElement.classList.add('weather')
    weatherElement.innerText = weather
    currentBlock.appendChild(weatherElement)

    const tempElement = document.createElement('p')
    tempElement.classList.add('temp')
    tempElement.innerText = temp + ' °C'
    currentBlock.appendChild(tempElement)

    const windElement = document.createElement('p')
    windElement.classList.add('wind')
    windElement.innerText = wind + ' m/s'
    currentBlock.appendChild(windElement)
}

function renderRow(date, iconURL, temp) {
    const forecastDiv = document.createElement('div')
    forecastDiv.classList.add('forecast-div')
    forecastBlock.appendChild(forecastDiv)
    
    const dateElement = document.createElement('p')
    dateElement.innerText = date
    forecastDiv.appendChild(dateElement)

    const iconElement = document.createElement('img')
    iconElement.src = iconURL
    forecastDiv.appendChild(iconElement)

    const tempElement = document.createElement('p')
    tempElement.innerText = temp + ' °C'
    forecastDiv.appendChild(tempElement)
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