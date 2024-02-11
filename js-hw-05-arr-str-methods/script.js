console.log("---------------TASK_1----------------")

function sumOfTwoNum (num1, num2) {
    if (num1 === undefined || num2 === undefined) {
        return 'Need two parameters'
    }
    if (typeof num1 !== 'number') {
        return `1st parameter ${num1} is not a number`
    }
    if (typeof num2 !== 'number') {
        return `2nd parameter ${num2} is not a number`
    }
    return num1 + num2
}

console.log(sumOfTwoNum())



console.log("---------------TASK_2----------------")

errNoParam = 'Функция "square" не может быть вызвана без аргумента'

function square(a) {
    if (a === undefined) {
        return console.error(errNoParam)
    }
    console.log(a * a)
}
  
square(10) // 100
  
square()




console.log("---------------TASK_3----------------")

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function guessNumFromOneToTen (num) {
    if (num === undefined) {
        return 'Need parameter'
    }
    if (typeof num !== 'number') {
        return `${num} is not a number`
    }
    if (num < 1 || num > 10 ) {
        return 'Number must be in range from 1 to 10'
    }
    numToGuess = getRandomInteger(1, 10)
    if (num === numToGuess) {
        return "You've won!"
    }
    if (num !== numToGuess) {
        return `Wrong guess, your number - ${num}, correct number - ${numToGuess}`
    }
}

console.log(guessNumFromOneToTen(1))




console.log("---------------TASK_4----------------")

const testArr = [1, 2, 3, 4]
const testArr2 = ['a', 'b', 'c', 'd']

function copyArr (arr) {
    return arr.map(item => item)
}

console.log(copyArr(testArr))
console.log(copyArr(testArr2))




console.log("---------------TASK_5----------------")

const names = ['John', 'Tom', 'Jerry']

function helloArr (arr) {
    return arr.map(item => `Hello, ${item}!`)
}

console.log(names)
console.log(helloArr(names))



console.log("---------------TASK_6----------------")

const users = [
    {
        userName: 'John',
        age: 22,
        email: 'john@mail.com'   
    },
    {
        userName: 'Jane',
        age: 21,
        email: 'jane@mail.com'   
    },
    {
        userName: 'Jessy',
        age: 27,
        email: 'jessy@mail.com'   
    }
]

function onlyNames (arr) {
    return arr.map(item => item.userName)
}

console.log(users)
console.log(onlyNames(users))



console.log("---------------TASK_7----------------")

const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
  }

function sumObjectValues (obj) {
    let values = Object.values(obj)
    let sum = 0
    values.forEach(item => {
        if (typeof item === 'number') {
            sum += item
        }
    });
    return sum
}

console.log(sumObjectValues(objectWithNumbers))




console.log("---------------TASK_8----------------")

const ucFirst = str => str[0].toUpperCase() + str.slice(1)

console.log(ucFirst('hello'))




console.log("---------------TASK_9----------------")

const checkSpam = str => str.toLowerCase().includes('badword') || str.toLowerCase().includes('xxx')

console.log(checkSpam('BaDwoRd something'))
console.log(checkSpam('xXx xxx XXX'))
console.log(checkSpam('clean string'))




console.log("---------------TASK_10----------------")

const revStr = str => str.split('').reverse().join('')

console.log(revStr('hello there'))




console.log("---------------TASK_11----------------")

const stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
    ];

const stationCodeName = arr => {
    for (station of arr) {
        stationCode = station.slice(0, 3)
        stationName = station.split(';')[1]
        console.log(`${stationCode}:${stationName}`)
    }
}

stationCodeName(stations)





console.log("---------------TASK_12----------------")

const strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

const unique = arr => {
    uniqueArr = []
    for (element of arr) {
        if (!uniqueArr.includes(element)) {
            uniqueArr.push(element)
        }
    }
    return uniqueArr
}

console.log(unique(strings))




console.log("---------------TASK_13----------------")

dataJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
dataJulia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]

dataJane2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
dataJulia2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]

const verifyCats = (catsJane, catsJulia) => {
    catsJane.pop()
    catsJane.shift()
    const catsAll = catsJane.concat(catsJulia)
    catsAll.forEach((value, index) => {
        if (value >= 2) {
            console.log(`Кошка № ${index+1} взрослая, ей ${value} лет`)
        } else {
            console.log(`Кошка № ${index+1} ещё котёнок`)
        }
    })
}

verifyCats(dataJane, dataJulia)
console.log('--------------------------------------')
verifyCats(dataJane2, dataJulia2)





console.log("---------------TASK_14----------------")

const numbers = [5, 4, 3, 8, 0];

const filterFor = (arr, a) => arr.filter(item => item >= a) 

console.log(filterFor(numbers, 5))
console.log(filterFor(numbers, 10))
console.log(filterFor(numbers, 3.11))




console.log("---------------TASK_15----------------")

const arrStrings = ['yes', 'hello', 'no', 'easycode', 'what']

const filterByLen = arr => arr.filter(item => item.length > 3)

console.log(filterByLen(arrStrings))




console.log("---------------TASK_16----------------")

arrOfArrays = [ [14, 45], [1], ['a', 'c', 'd'] ]

const sortArr = arr => arr.sort((a, b) => a.length - b.length)

console.log(sortArr(arrOfArrays))





console.log("---------------TASK_17----------------")

dataCatAges = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]

const getAverageHumanAge = catAges => {
    humanAges = catAges.map(age => age <= 2 ? age * 10 : age * 7)
    humanAges18 = humanAges.filter(age => age > 18)
    humanAges18Avg = humanAges18.reduce((acc, age) => acc + age, 0)
    return humanAges18Avg / humanAges18.length
}

// very ugly
const getAverageHumanAgeOneLine = catAges => catAges.map(age => age <= 2 ? age * 10 : age * 7).filter(age => age > 18).reduce((acc, age) => acc + age, 0) / catAges.map(age => age <= 2 ? age * 10 : age * 7).filter(age => age > 18).length

console.log(getAverageHumanAge(dataCatAges))
console.log(getAverageHumanAgeOneLine(dataCatAges))





// const names = ['Anna', 'Oleg', 'Tom']

// const newNames = []

// //forEach

// names.forEach(function(element, index){
//     console.log(`Element ${element} has index ${index}`)
//     newNames.push(element + ' mudak')
// })

// names.forEach(item => newNames.push(item + '!!!') )


// console.log(newNames)


// //map

// const newArray = names.map(function(item) {
//     return item + ' map'
// })

// const namesLen = names.map(item => item.length)

// console.log(newArray)
// console.log(namesLen)


// const array = [1, 5, 3, 10, 44]
// const string = 'Something'

// console.log(array.length)
// console.log(string.length)
// console.log(array[3])
// console.log(string[2])

// array[0] = 42
// console.log(array)

// console.log(array.indexOf(44))
// console.log(string.indexOf('t'))

// console.log(string.toUpperCase())
// console.log(string)

// console.log(string.toLowerCase())
// console.log(string)

// const longString = 'lorem ipsum something something'
// const sliceString = longString.slice(0, 5)

// console.log(sliceString)

// console.log(sliceString.substr(1, 3))

// console.log(array.slice(3, 5))

// console.log(longString.indexOf('some'))

// console.log(longString.includes('Lorem'))
// console.log(longString.includes('lorem'))


// const sampleArray = [1, 2, 3, 4, 5]

// sampleArray.push(6)
// sampleArray.push(7)
// sampleArray.pop()

// console.log(sampleArray)

// sampleArray.unshift(0)
// sampleArray.unshift(-1)
// sampleArray.shift()

// console.log(sampleArray)

// sampleArray.splice(1, 0, 'new', 'new2')

// console.log(sampleArray)

// sampleArray.reverse()

// console.log(sampleArray)

// const sampleArray2 = ['a', 'b', 'c']

// const copySampleArray2 = sampleArray2.concat(3, 4, sampleArray2)

// console.log(copySampleArray2)

// console.log(sampleArray.join(''))

// const someString = 'hello there'
// console.log(someString.split(' '))


// // FILTER

// const numbers = [45, -32, 0, 34.5, 23, -70, 12.4]

// const negativeNumbers = numbers.filter(function(item){
//     return item < 0;
// })

// console.log(negativeNumbers)

// const getIntegers = arr => arr.filter(item => item % 1 === 0)

// console.log(getIntegers(numbers))


// // SORT

// const someNames = ['john', 'alex', 'zoe', 'chris', 'leon']
// const someNums1 = [10, 33, -8, 54.1, 50, -3, 42]
// const someNums2 = [10, 33, -8, 54.1, 50, -3, 42]

// const sortedNames = someNames.sort()

// console.log(sortedNames)

// const sortedNumsAscending = someNums1.sort((a, b) => a - b)
// const sortedNumsDescending = someNums2.sort((a, b) => b - a)

// console.log(sortedNumsAscending)
// console.log(sortedNumsDescending)


// // REDUCE

// const nums = [34, 42, -3, -11, 56, 18]

// const sum  = nums.reduce(function(acc, item) {
//     console.log(acc)
//     return acc + item
// }, 0)

// const sum = nums.reduce((acc, item) => acc +  item, 0)

// console.log(sum)

// const min = nums.reduce((acc, item) => acc < item ? acc : item, nums[0])

// console.log(min)
