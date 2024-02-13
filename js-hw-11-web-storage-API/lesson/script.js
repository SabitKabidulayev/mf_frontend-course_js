const userName = 'Anna'

const age = 20

localStorage.userName = userName

localStorage.age = age


// if(Number(localStorage.age) > 18) {

// }

// if(localStorage.userName) {

// }

localStorage.setItem('role', true)

console.log(localStorage)

console.log(localStorage.getItem('age'))

const array = [
    {model: 'audi'},
    {model: 'toyota'} 
]

const jsonArray = JSON.stringify(array)

const initArray = JSON.parse(jsonArray)

console.log(initArray)