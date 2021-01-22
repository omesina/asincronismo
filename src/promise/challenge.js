let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let URL_API = 'https://rickandmortyapi.com/api/character/';

const fetchData = (url_api)=>{
    return new Promise((resolve, reject)=>{
        xhttp = new XMLHttpRequest();

        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4)
            {
                (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error ' + url_api));                
            }
        });
        
        xhttp.send();    
    });
}

fetchData(URL_API)
.then(data => {
    console.log(data.info.count);
    fetchData(URL_API + data.results[0].id)
    .then(data => {
        console.log(data.name);
        fetchData(data.origin.url)
        .then(data => {
            console.log(data.dimension);
        });
    })
})
.catch(error => console.error(error));
