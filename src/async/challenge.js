const fetchData = require('../utils/fetchData');

let URL_API = 'https://rickandmortyapi.com/api/character/';

const fetchDataLoad = async () => {
    try {
        const data1 = await fetchData(URL_API);
        const data2 = await fetchData(URL_API + data1.results[0].id);
        const data3 = await fetchData(data2.origin.url);

        console.log(data1.info.count)
        console.log(data2.name)
        console.log(data3.dimension)
        
    } catch (error) {
        console.error(error);
    }
}

fetchDataLoad();