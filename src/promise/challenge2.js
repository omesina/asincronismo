const fetchData = require('../utils/fetchData');

let URL_API = 'https://rickandmortyapi.com/api/character/';

fetchData(URL_API)
.then(data => {
    console.log(data.info.count);
    return fetchData(URL_API + data.results[0].id);
})
.then(data => {
    console.log(data.name);
    return fetchData(data.origin.url);
})
.then(data => {
    console.log(data.dimension);
})
.catch(error => console.error(error));
