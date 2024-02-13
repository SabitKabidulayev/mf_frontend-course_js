//DESTRUCTURIZATION

const student = {
    name: 'Alex',
    age: 20,
    email: 'alex@gmail.com',
    work: {
        title: 'myfreedom',
        post: 'mentor',
    },
}

// const studentName = student.name
// const studentAge = student.age
// const studentEmail = student.email

// console.log(studentName)
// console.log(studentAge)
// console.log(studentEmail)

// const {name: firstName, age: studentAge, email: studentEmail} = student // destructurization object

// console.log(firstName)
// console.log(studentAge)
// console.log(studentEmail)

// const emails = ['email_1@mail.com', 'email_2@mail.com', 'email_3@mail.com'] 
// const [first, second, third] = emails // / destructurization array
// console.log(first)
// console.log(second)
// console.log(third)

//SPREAD
// CAN CLONE IF OBJECT IS SIMPLE (NO OTHER OBJECTS INSIDE)
// const studentClone = {...student}
// studentClone.age = 99

// console.log(student)
// console.log(studentClone)

//EXAMPLE WITH FUNCTION

// const job = {
//     companyName: 'Zalupa',
//     post: 'mudak',
//     annualSalary: 'ushat-gavna'
// }

// const job = ['Zalupa', 'mudak', 'ushat-gavna']

// function showJobInfo(companyName, post, salary) {
//     console.log(`you work at ${companyName}`)
//     console.log(`your position is ${post}`)
//     console.log(`your salary is ${salary}`)
// }

// // const {companyName, post, salary} = job

// showJobInfo(...job)


// SPREAD ARRAY

// const shoppingList = [
//     {
//         name: 'hleb',
//         price: 9999
//     },
//     {
//         name: 'maslo',
//         price: 1231
//     },
//     {
//         name: 'chaisahar',
//         price: 10000000
//     }
// ]

// const shoppingListCLone = [...shoppingList]

// shoppingListCLone[0].price = 0
// console.log(shoppingList)
// console.log(shoppingListCLone)


// TASK1

const names = [
    'medeu',
    'sayat',
    'ali',
    'gulzhan',
    'serik'
]

const [firstName, secondName, ...otherNames] = names

console.log(firstName)
console.log(secondName)
otherNames.forEach(name => {
    console.log(name)
})