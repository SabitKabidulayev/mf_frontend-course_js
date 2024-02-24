const time = document.querySelector('#time')

setInterval(timeNow, 1000)


function timeNow () {
    const now = new Date()
    
    const currentHours = now.getHours()
    if (currentHours < 10) {
        currentHours = '0' + currentHours
    } 
    
    const currentMinutes = now.getMinutes()
    if (currentMinutes < 10) {
        currentMinutes = '0' + currentMinutes
    } 

    const currentSeconds = now.getSeconds()
    if (currentSeconds < 10) {
        currentSeconds = '0' + currentSeconds
    } 
     
    time.innerText = `${currentHours}:${currentMinutes}:${currentSeconds}`
}

