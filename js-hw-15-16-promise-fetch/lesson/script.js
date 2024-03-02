console.log('Запрос данных')

const request = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        console.log('Подготовка данных')
        const product = {
            title: 'milk',
            price: 2
        }
        
        resolve(product)


    
    }, 2000)
    
})

request.then((product) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
            product.status = 'ordered'
            resolve(product)
            // reject()
        }, 2000)
    })
})
.then((data) => {
    data.newProp = true
    return data
})
.then(data => console.log(data))
.catch(() => {
    console.error('Возникла ошибка!')
})
.finally(() => {
    console.log('Выполнения кода finally')
})


// Fetch API

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))