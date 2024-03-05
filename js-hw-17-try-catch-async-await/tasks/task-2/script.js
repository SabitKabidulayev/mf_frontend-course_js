async function getData(url) {
    const result = await fetch(url)
    const json = await result.json()
    return json
}


const searchInput = document.querySelector('#search-input')
const searchButton = document.querySelector('#search-button')

searchButton.addEventListener('click', () => {
    searchVideo()
} )


async function searchVideo() {
    try {
        const searchAPI = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCat_2WJTJcsdgIkjvuNZ8KuaVtqOyNsuk&q=${searchInput.value}&type=video`
        
    } catch (error) {
        console.log(error.message)
    }
}
