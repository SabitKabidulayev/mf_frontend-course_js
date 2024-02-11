console.log('----------------------TASK_1--------------------')

nums = [5.4, 5.5, 5.6]

const numRound1 = arr => arr.map(num => Math.round(num)) // rounded to the nearest int (up or down)

console.log(numRound1(nums))

const numRound2 = arr => arr.map(num => Math.ceil(num)) // rounds up 

console.log(numRound2(nums))

const numRound3 = arr => arr.map(num => Math.floor(num)) // rounds down

console.log(numRound3(nums))




console.log('----------------------TASK_2--------------------')

const now = new Date() 

let options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}

console.log(`Сегодня ${now.toLocaleString('ru-RU', options)} ${now.getHours()} часов ${now.getMinutes()} минут`)






// const numbers = new Array()
// const name = new String()
// console.log(numbers)
// console.log(name)


// // // Date and time

// const now = new Date()
// console.log(now)

// let options = {
//     era: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     weekday: 'long',
//     timezone: 'UTC',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric'
// }

// console.log(now.toLocaleString('ru-RU', options))
// console.log(now.toLocaleString('en-US'))
// console.log(now.toLocaleDateString())
// console.log(now.toLocaleTimeString())

// const minutes = now.getMinutes()
// console.log(minutes)