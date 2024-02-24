let number = 0

const numberLogInterval = setInterval(function() {
    number++
    if(number > 5) {
        clearInterval(numberLogInterval)
        return
    }
    console.log(`Message No${number}`)  
}, 2000)