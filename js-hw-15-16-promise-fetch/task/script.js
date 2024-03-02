fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(json => console.log(json))

