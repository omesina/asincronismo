const doSomethingAsync = () => {
    return new Promise((resolve, reject) =>{
        let timeout = 3000;
        (true)
            ? setTimeout(() => resolve('Do Something Async'), timeout)
            : reject(new Error('Test Error'));
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();    
        console.log(something);
    } catch (error) {
        console.log(error);
    }        
}

console.log('Before');
doSomething();
console.log('After');

console.log('Before, anotherFunction');
anotherFunction();
console.log('After, anotherFunction');

