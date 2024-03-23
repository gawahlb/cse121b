/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Gabriel Wahlberg",
    photo: "images/personalpicture.jpg",
    favoriteFoods: [
        'Pizza',
        'Burgers',
        'Pineapple',
        'Sweet Potato'
    ],
    hobbies: [
        'Fishing',
        'Kayaking',
        'Hiking',
        'Camping'
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push( {
    place: 'San Tan Valley, AZ',
    length: '1 year, 6 months'
});

myProfile.placesLived.push( {
    place: 'Tainan, Taiwan',
    length: '6 months'
});
myProfile.placesLived.push({
    place: 'Mesa, AZ',
    length: '3 years'
});


/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach ((food) => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach ((hobby) => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})


/* Places Lived DataList */

myProfile.placesLived.forEach((location) => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");

    dt.textContent = location.place;
    dd.textContent = location.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});

