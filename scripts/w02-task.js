/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Gabriel Wahlberg';
let currentYear = '2024';
let profilePicture = 'images/personalpicture.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile image of Gabriel Wahlberg');



/* Step 5 - Array */

let foods = ['pizza', 'burgers', 'pineapple', 'steak'];
foodElement.textContent = foods;

let newFood = 'yams';

foods.push(newFood);

foodElement.innerHTML += `<br>${foods}</br>`;

foods.shift();

foodElement.innerHTML += `<br>${foods}</br>`;

foods.pop();

foodElement.innerHTML += `<br>${foods}</br>`;