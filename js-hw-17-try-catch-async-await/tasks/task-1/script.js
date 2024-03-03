async function getData(url) {
    const result = await fetch(url)
    const json = await result.json()
    return json
}

const urlUsers = 'https://jsonplaceholder.typicode.com/users'

async function getUsers() {
    try {
        const data = await getData(urlUsers)
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

getUsers()