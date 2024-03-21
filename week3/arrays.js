const numbers = ['one', 'two', 'three'];

const numbersHtml = numbers.map(function (number) {
    return `<li>${number}</li>`;
});

document.getElementById("myList").innerHTML = numbersHtml.join();


const grades = ['A', 'B', 'A'];

const gpa = grades.map(function (grade) {
    
    switch(grade) {
        case "A":
            return 4;
        break;

        case "B":
            return 3;
        break;

        case "C":
            return 2;
        break;

        case "D":
            return 1;
        break;

        case "F":
            return 0;
        break;
    }
    
})

function convertToPoints(grade) {
    let points = 0;

    if (grade == "A") {
        points = 4;
    }
    else if (grade == "B") {
        points == 3;
    }

    return points;
}
const gpaNew = grades.map(convertToPoints);

const pointsAdded = gpaNew.reduce(function (total, item) {
    return total + item;
})

const finalGpa = pointsAdded / gpaNew.length;


const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const selectFruits = fruits.filter((word) => fruits.length < 6);


const nums = [12, 34, 21, 54];

const luckyNumber = 21;

let index = nums.indexOf(luckyNumber);
