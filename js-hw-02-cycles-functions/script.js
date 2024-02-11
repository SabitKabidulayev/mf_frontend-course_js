// TASK 1
console.log("-----------------TASK_1-----------------")

let country = "Sweden";
let access = (country === "Sweden") ? true : false;

console.log(access)

// TASK 2
console.log("-----------------TASK_2-----------------")

let a = 10;
for (i2 = 0; i2 < 10; i2++) {
    a += 1
}
console.log(a)

// TASK 3
console.log("-----------------TASK_3-----------------")

for (i3 = 0; i3 < 10; i3 += 2) {
    userNum = prompt("Введите число")
    if (isNaN(userNum)) {
        alert(`${String(userNum)} не является числом`)
    }
    userNum = +userNum
    userNum === 10 ? console.log("Равно 10") : console.log("Не равно 10")
}

// TASK 4
console.log("-----------------TASK_4-----------------")

let counter = prompt("Введите количество квадратов чисел от 0 до 100, которое вы хотите вывести в консоль")
if (isNaN(counter)) {
    alert(`${String(counter)} не является числом`)
}
if (counter < 0 || counter > 10) {
    alert("Введите число от 0 до 10 включительно")
}

counter = +counter

for (i4 = 0; i4 < counter; i4++) {
    console.log(i4*i4)
}

// TASK 5
console.log("-----------------TASK_5-----------------")

for (i5 = 1; i5 < 101; i5++) {
    if (i5 % 3 === 0 && i5 % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i5 % 3 === 0 && i5 % 5 !== 0) {
        console.log("Fizz")
    } else if (i5 % 3 !== 0 && i5 % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i5)
    }

}

// TASK 6

let i6 = 0
while (i6 < 3) {
    alert(`number ${i6}!`)
    i6++
}

// TASK 7
console.log("-----------------TASK_7-----------------")

function getSquares (min, max) {
    for (i = min; i <= max; i++) {
        console.log(i * i)
    } 
}

getSquares(-2, 4)

// TASK 8

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
    let r = getRandomInteger(0, 255)
    let g = getRandomInteger(0, 255)
    let b = getRandomInteger(0, 255)
    return `rgb(${r},${g},${b})`
}

document.body.style.backgroundColor = getRandomColor()

// TASK 9
console.log("-----------------TASK_9-----------------")

function isInt(num) {
    return num % 1 === 0
}

function intOrDec(n) {
    for (i = 1; i <= n; i += 0.5) {
        if (isInt(i)) {
            console.log(`${i} integer`)
        } else {
            console.log(`${i} decimal`)
        }
    }
}

intOrDec(10)

// TASK 10
console.log("-----------------TASK_10-----------------")

function calcPrice (days) {
    const perDay = 40
    let discount = 0
    if (days >= 7) {
        discount = 70
    } else if (days >= 3) {
        discount = 20
    } 
    return total = days * perDay - discount
}

console.log(calcPrice(5))
console.log(calcPrice(10))