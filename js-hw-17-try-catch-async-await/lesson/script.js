// const myFunction = () =>  {
//     console.log('Start executing code')
//     throw new Error('Error description')
//     console.log(num)
// }

// try{
//     myFunction()
// } catch (error) {
//     console.error(error.message)
// }

// console.log('Continue executing code')


async function asyncFnSuccess() {
    // always returns Promise
    return 'Success!'
    
}

const asyncFnArrow = async () => {
    // always returns Promise
}

async function asyncFnError() {
    // always returns Promise
    throw new Error('There was an error!') 
    
}

asyncFnSuccess()
    .then(value => console.log(value))
    

asyncFnError()
    .catch(error => console.log(error.message))


const timerPromise = () =>
    new Promise((resolve, reject) => 
        setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
    console.log('Timer starts')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('timer ended', endTime - startTime)
}

asyncFn()


const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos'

const fetchData = async () => {
    try {
        const data = await getData(url)
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

fetchData()

// async/await синтаксическая надстройка над промисами
// await синтаксис возможен только внутри async функции
// async функция всегда возвращает promise
// async функция ожидает результата инструкции await и не выполняет последующие инструкции