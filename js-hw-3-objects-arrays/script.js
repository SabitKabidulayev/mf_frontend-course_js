//---TASK_1---

const n = 100
let result = (n >=0 && n <=100) ? "n is in the range" : "n is out of range"
console.log(result)



//---TASK_2---

// const engineers = {
//     Den: 1000,
//     Matt: 5000,
//     Steve: 2000
// }

// for (key in engineers)
// console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей.`)



//---TASK_3---

// const numbers = [1, 2, 3, 4, 5]
// for (let i = 1; i < numbers.length; i+=2) {
//     console.log(numbers[i])
// }



//---TASK_4---

// const numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// for (let i = 0; i < numbers.length; i++) {
//     console.log(`Индексу ${i} соответствует число ${numbers[i]}`)
// }



//---TASK_5---

// const questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// for (let element of questions) {
//     element.usersAnswer = null
// }

// console.log(questions)



//---TASK_6---

// const numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]


// for (let number of numbers) {
//     console.log(number)
// }

// console.log('---------')

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// console.log('---------')

// sum = 0
// for (let number of numbers) {
//     sum += number
// }
// console.log(`Sum of all numbers in array is ${sum}`)

// console.log('---------')

// sumOnlyEven = 0
// for (let number of numbers) {
//     if (number%2 === 0) {
//         sumOnlyEven += number
//     }
// }
// console.log(`Sum of all even numbers in array is ${sumOnlyEven}`)

// console.log('---------')

// max = numbers[0]
// for (let number of numbers) {
//     if (max < number) {
//         max = number
//     }
// }
// console.log(`Biggest number in array is ${max}`)

// console.log('---------')

// for (let i=0; i < numbers.length; i++) {
//     if (numbers[i] === max) {
//         console.log(`Nubmer with index ${i} is biggest in array`)
//     }
// }



//---TASK_7---

// const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// const newArr = []
// for (let element of arr) {
//     if (element > 0) {
//         newArr.push(element)
//     }
// }
// console.log(newArr)



//---TASK_8---

// const nums = [5, 4, 3, 8, 0]
// const limit = 5
// const newArray = []
// for (let num of nums) {
//     if (num >=limit) {
//         newArray.push(num)
//     }
// }
// console.log(newArray)



//---TASK_9---

// const users = [
//     { name: 'Vasya', age: 23 },
//     { name: 'Olya', age: 12 },
//     { name: 'Anna', age: 22 },
//     { name: 'Alex', age: 18 },
//     { name: 'Valery', age: 8 }
// ]

// for (let user of users) {
//     if (user.age > 15) {
//         console.log(user.name)
//     }
// }



//---TASK_10---

// const vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

// const newArray = []

// for (let vegetable of vegetables) {
//     let obj = {}
//     obj.word = vegetable
//     obj.length = vegetable.length
//     newArray.push(obj)
// }

// console.log(newArray)

// for (words of newArray) {
//     console.log(`${words.word} - ${words.length}`)
// }