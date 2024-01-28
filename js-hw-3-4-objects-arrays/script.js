//---TASK_1---

console.log('-------------------TASK_1-------------------')

const n = 100
let result = (n >=0 && n <=100) ? `${n} is in the range` : `${n} is out the range`
console.log(result)



//---TASK_2---

console.log('-------------------TASK_2-------------------')


const engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
}

for (key in engineers)
console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей.`)



//---TASK_3---

console.log('-------------------TASK_3-------------------')


const numbers = [1, 2, 3, 4, 5]
for (let i = 1; i < numbers.length; i+=2) {
    console.log(numbers[i])
}



//---TASK_4---

console.log('-------------------TASK_4-------------------')


const numbers2 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
for (let i = 0; i < numbers2.length; i++) {
    console.log(`Индексу ${i} соответствует число ${numbers2[i]}`)
}



//---TASK_5---

console.log('-------------------TASK_5-------------------')


const questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

for (let element of questions) {
    element.usersAnswer = null
}

console.log(questions)



//---TASK_6---

console.log('-------------------TASK_6-------------------')


const numbers3 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]


for (let number of numbers3) {
    console.log(number)
}

console.log('---------')

for (let i = 0; i < numbers3.length; i++) {
    console.log(numbers3[i])
}

console.log('---------')

sum = 0
for (let number of numbers3) {
    sum += number
}
console.log(`Sum of all numbers in array is ${sum}`)

console.log('---------')

sumOnlyEven = 0
for (let number of numbers3) {
    if (number%2 === 0) {
        sumOnlyEven += number
    }
}
console.log(`Sum of all even numbers in array is ${sumOnlyEven}`)

console.log('---------')

max = numbers3[0]
for (let number of numbers3) {
    if (max < number) {
        max = number
    }
}
console.log(`Biggest number in array is ${max}`)

console.log('---------')

for (let i=0; i < numbers3.length; i++) {
    if (numbers3[i] === max) {
        console.log(`Nubmer with index ${i} is biggest in array`)
    }
}



//---TASK_7---

console.log('-------------------TASK_7-------------------')


const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
const newArr = []
for (let element of arr) {
    if (element > 0) {
        newArr.push(element)
    }
}
console.log(newArr)



//---TASK_8---

console.log('-------------------TASK_8-------------------')


const nums = [5, 4, 3, 8, 0]
const limit = 5
const newArray = []
for (let num of nums) {
    if (num >=limit) {
        newArray.push(num)
    }
}
console.log(newArray)



//---TASK_9---

console.log('-------------------TASK_9-------------------')

const users = [
    { name: 'Vasya', age: 23 },
    { name: 'Olya', age: 12 },
    { name: 'Anna', age: 22 },
    { name: 'Alex', age: 18 },
    { name: 'Valery', age: 8 }
]

for (let user of users) {
    if (user.age > 15) {
        console.log(user.name)
    }
}



//---TASK_10---

console.log('-------------------TASK_10-------------------')

const vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

const newArray2 = []

for (let vegetable of vegetables) {
    let obj = {}
    obj.word = vegetable
    obj.length = vegetable.length
    newArray2.push(obj)
}

console.log(newArray2)

for (words of newArray2) {
    console.log(`${words.word} - ${words.length}`)
}