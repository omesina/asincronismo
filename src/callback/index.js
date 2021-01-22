function sum(num1, num2)
{
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(5, 4, sum));

function date(callback) {
    console.log(new Date);

    let timeout = 3000;
    setTimeout(function() {
        let date = new Date;
        callback(date);
    }, timeout);
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);