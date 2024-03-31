/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples');

let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");


        h3.textContent = temple.templeName;
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
    
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    
    const response = await fetch ("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        const data = await response.json();
        templeList = data;
    }

    displayTemples(templeList);

}

/* reset Function */

const reset = () => {
    templesElement.innerHTML = " ";
}

/* filterTemples Function */

function filterTemples(temples) {
    
    reset();
    const filter = document.getElementById('filtered').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temp => temp.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temp => !temp.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temp => new Date(temp.dedicated) < new Date (1950, 0, 1)));
            break;
        case 'alphabetical':
            displayTemples(temples.sort((a, b) => (a.templeName > b.templeName) ? 1 : -1));
            break;
        case 'all':
        default:
            displayTemples(temples);
            break;
        
    }

}

/* Event Listener */

document.querySelector('#filtered').addEventListener("change", () => {filterTemples(templeList) });

getTemples();