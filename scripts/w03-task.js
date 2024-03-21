/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    let value = number1 + number2;
    return value;
}

function addNumbers () {

    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */


const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {

    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (factor1, factor2) => {return factor1*factor2};

const multiplyNumbers = () => {

    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(dividend, divisor) {
    let value = dividend / divisor;
    return value;
}

function divideNumbers () {

    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

//let multiplier = 0;
//
//function subtotalCalculator() {
//
//    let isMember = document.getElementById('#member');
//    let subtotal = Number(document.querySelector('#subtotal').value);
//
//    if(isMember == null) {
//    multiplier = 0.8;
//    }
//    else {
//    multiplier = 1;
//    }
//
//let endTotal = subtotal*multiplier;
//
//let moneyFormat = new Intl.NumberFormat('en-US', {
//    style: 'currency',
//    currency: 'USD',
//});
//
//document.getElementById('total').textContent = moneyFormat.format(endTotal);
//
//}
//
//document.querySelector('getTotal').addEventListener('click',subtotalCalculator());

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let arrayHtml = document.getElementById('array');

arrayHtml.textContent = numbers;

/* Output Odds Only Array */

let oddArray = numbers.filter((oddNumber) => oddNumber % 2 == 1);
document.getElementById('odds').textContent = oddArray;

/* Output Evens Only Array */

let evenArray = numbers.filter((evenNumber) => evenNumber % 2 == 0);
document.getElementById('evens').textContent = evenArray;

/* Output Sum of Org. Array */

let sum = numbers.reduce((sum, number) => sum + number);
document.getElementById('sumOfArray').textContent = sum;

/* Output Multiplied by 2 Array */

let multArray = numbers.map((number) => number*2);
document.getElementById('multiplied').textContent = multArray;

/* Output Sum of Multiplied by 2 Array */

let newSum = multArray.reduce((newSum, number) => newSum + number);
document.getElementById('sumOfMultiplied').textContent = newSum;