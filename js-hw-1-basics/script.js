//Task01

const userName = prompt('Введите имя');
alert(`Привет, ${userName}!`);

//Task02

console.log('TASK_02');
let userNum = prompt('Введите число');
if (isNaN(userNum)) {
    alert(`${String(userNum)} не является числом`);
    location.reload();
}
userNum = +userNum;

let userPow = prompt('Введите степень');
if (isNaN(userPow)) {
    alert(`${String(userPow)} не является числом`);
    location.reload();
}
userPow = +userPow;

console.log(userNum ** userPow);

//Task04

console.log('TASK_04');

let myVar = 'my text';
if (myVar === 'some text') {
    myVar = 'another text'
} else {
    myVar = 'some text'
};

console.log(myVar);

//Task05

console.log('TASK_05');

let myNum = 10;
if (myNum === 0) {
    myNum = 1
} else if (myNum < 0) {
    myNum = 'less then zero'
} else {
    myNum *= 10
};

console.log(myNum);

// Task06

console.log('TASK_06');

let userNum2 = prompt('Введите число');
if (isNaN(userNum2)) {
    alert(`${userNum2} не является числом`)
    location.reload()
};
userNum2 = +userNum2;

let result = undefined;
if (userNum2 < 5) {
    result = 0
} else {
    result = 1
};
console.log(result);

// Task07

console.log('TASK_07');

let num1 = prompt('Введите первое число');
if (isNaN(num1)) {
    alert(`${num1} не является числом`)
    location.reload()
};
num1 = +num1;

let num2 = prompt('Введите второе число');
if (isNaN(num2)) {
    alert(`${num2} не является числом`)
    location.reload()
};
num2 = +num2;

if (num1 > num2) {
    console.log(`Большее число: ${num1}`)
} else if (num1 < num2) {
    console.log(`Большее число: ${num2}`)
} else {
    console.log('Числа равны')
};

//Task08

console.log('TASK_08');

let userNumToCheck = prompt('Введите делимое число');
if (isNaN(userNumToCheck)) {
    alert(`${userNumToCheck} не является числом`)
    location.reload()
};
userNumToCheck = +userNumToCheck;

let userDivider = prompt('Введите делитель');
if (isNaN(userDivider)) {
    alert(`${usedDivider} не является числом`)
    location.reload()
};
if (userDivider == 0) {
    alert(`Делитель не может быть 0`)
    location.reload()
};
userDivider = +userDivider;

if (userNumToCheck % userDivider === 0) {
    console.log(`${userNumToCheck} кратно ${userDivider}`)
} else {
    console.log(`${userNumToCheck} не кратно ${userDivider}`)
};

// Task09

console.log('TASK_09');

let avgGrade = prompt('Введите средний балл (1-10)');
if (isNaN(avgGrade)) {
    alert(`${avgGrade} не является числом`)
    location.reload()
};
if (avgGrade < 1 || avgGrade > 10) {
    alert('Значение среднего бала должно быть числом от 1 до 10 включительно')
    location.reload()
};
avgGrade = +avgGrade;

if (avgGrade >= 1 && avgGrade <= 4) {
    console.log('Двоечник, иди учись!')
} else if (avgGrade >= 5 && avgGrade <= 8) {
    console.log('Неплохо, но давай еще поднажмем!')
} else {
    console.log('Ого, да ты настоящий отличник!')
}

// Task10

console.log('TASK_10');

let userExamScore = prompt('Введите балл за экзамен');
if (isNaN(userExamScore)) {
    alert(`${userExamScore} не является числом`)
    location.reload()
};
if (userExamScore < 0 || userExamScore > 100) {
    alert(`Балл за экзамен должен быть числом в от 0 до 100 включительно`)
    location.reload()
};
userExamScore = +userExamScore;

let userProjectsDone = prompt('Введите количество выполненных проектов');
if (isNaN(userProjectsDone)) {
    alert(`${userProjectsDone} не является числом`)
    location.reload()
};
if (userProjectsDone < 0) {
    alert(`Количество выполненных проектов не может быть отрицательным`)
    location.reload()
};
userProjectsDone = +userProjectsDone;

let finalGrade = undefined;

if (userExamScore > 90 || userProjectsDone > 10) {
    finalGrade = 100
} else if (userExamScore > 75 && userProjectsDone >= 5) {
    finalGrade = 90
} else if (userExamScore > 50 && userProjectsDone >= 2) {
    finalGrade = 75
} else {
    finalGrade = 0
}

console.log(finalGrade)

// Task11

console.log('TASK_11');

let numDays = prompt('Введите количество дней, на которые нужно арендовать авто')
if (isNaN(numDays)) {
    alert(`${numDays} не является числом`)
    location.reload()
};
if (numDays <= 0) {
    alert(`Количество дней аренды должно быть больше нуля`)
    location.reload()
};
numDays = +numDays;

const costPerDay = 40;
const discount1 = 50;
const discount2 = 20;
let totalCost = undefined;

if (numDays >= 7) {
    totalCost = numDays * costPerDay - discount1
 } else if (numDays >=3 && numDays < 7) {
    totalCost = numDays * costPerDay - discount2
 } else {
    totalCost = numDays * costPerDay
 };

alert(`Общая стоимость аренды: ${totalCost}`)


