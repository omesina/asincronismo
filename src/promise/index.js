const somethingWillHappen = ()=> {
    return new Promise((resolve, reject) => {        
        if(true)
        {
            resolve('ok');
        }
        else{
            reject('error');
        }
    });
}

const somethingWillHappen2 = ()=> {
    return new Promise((resolve, reject) => {     
        let timeout = 2000;

        if(true)
        {
            setTimeout(() => {
                resolve('true');
            }, timeout);
        }
        else{
            const error = new Error('¡Ups!');
            reject(error);
        }
    });
}

somethingWillHappen()
.then(response => console.log(response))
.catch(error => console.error(error));

somethingWillHappen2()
.then(response => console.log(response))
.catch(error => console.error(error));

Promise.all([somethingWillHappen(), somethingWillHappen()])
.then(response => {
    console.log('Array of results', response);
})
.catch(error => console.error(error));