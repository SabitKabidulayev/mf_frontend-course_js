const user1 = {
    userName: 'gamer',
    role: 'moderator',
    isOnline: true,
}

const user2 = {
    userName: 'Sabit',
    role: 'user',
    isOnline: false,
}

const {userName, role} = user1;

console.log(userName, role)

const names = ['Anna', 'Oleg', 'Alex', 'Olga', 'Katya']

const [name1, name2, name3] = names
console.log(name2)

const isOnline = ({userName, isOnline}) => {
    const status = isOnline ? 'online' : 'offline'
    console.log(`User ${userName} is ${status}`)
}

isOnline(user1)
isOnline(user2)

// ...
// rest

const [a, b, ...c] = names
console.log(a)
console.log(b)
console.log(c)

const num1 = 45
const num2 = 56
const num3 = 9

const logElements = (element, ...arr) => {
    console.log('this is separate number: ' + element)
    arr.forEach(item => console.log(item))
}

logElements(num1, num2, num3)

// ...
// spread

const oldUser = {
    gender: 'male',
    isActive: true,
}

const user3 = {
    ...user2,
    role: 'admin',
    age: 50,
}

console.log(user3)

const newUser = {
    ...user1,
    ...oldUser,
}

console.log(newUser)

const sayHello = (name1, name2) => {
    console.log('Hello, ' + name1)
}

sayHello(...names)

console.log([...document.querySelectorAll('li')].map(li => Number(li.innerText))) 
