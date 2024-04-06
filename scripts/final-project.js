

const pokemonElement = document.querySelector('#pokemon');

let pokemonList = [];

let detailsList = [];



const displayPokemon = (pokemon) => {
    pokemon.forEach(mon => {
        
        const pokeUrl = mon.url;

        specifyPokemon(pokeUrl);
       
    });
    
}



const getPokemon = async () => {

    const response = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
    if (response.ok) {
        const data = await response.json();
        pokemonList = data.results;
    }

    displayPokemon(pokemonList);

}

const specifyPokemon = async (pokeUrl) => {
    const response = await fetch (pokeUrl);
    if (response.ok) {
        const data = await response.json();
        pokemonData = data;
        detailsList.push(pokemonData);
    }
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");
    const hp = document.createElement("p");
    const atk = document.createElement("p");
    const def = document.createElement("p");
    const spAtk = document.createElement("p");
    const spDef = document.createElement("p");
    const spd = document.createElement("p");

    

    h3.textContent = pokemonData.species.name;
    img.src = pokemonData.sprites.front_default;
    img.alt = pokemonData.species.name;
    hp.textContent = "HP: " + pokemonData.stats[0].base_stat;
    atk.textContent = "Attack: " + pokemonData.stats[1].base_stat;
    def.textContent = "Defense: " + pokemonData.stats[2].base_stat;
    spAtk.textContent = "Special Attack: " + pokemonData.stats[3].base_stat;
    spDef.textContent = "Special Defense: " + pokemonData.stats[4].base_stat;
    spd.textContent = "Speed: " + pokemonData.stats[5].base_stat;
    article.appendChild(h3);
    article.appendChild(img);
    article.appendChild(hp);
    article.appendChild(atk);
    article.appendChild(def);
    article.appendChild(spAtk);
    article.appendChild(spDef);
    article.appendChild(spd);
    pokemonElement.appendChild(article);
}



const reset = () => {
    pokemonElement.innerHTML = " ";
}



function filterPokemon(pokemon) {
    
    reset();
    const filter = document.getElementById('filtered').value;

    switch (filter) {
        case 'hp':
            let hpSort = detailsList.sort((a, b) => (a.stats[0].base_stat < b.stats[0].base_stat) ? 1 : (a.stats[0].base_stat > b.stats[0].base_stat) ? -1 : 0);
            sortPokemon(hpSort);
            break;
        case 'attack':
            let atkSort = detailsList.sort((a, b) => (a.stats[1].base_stat < b.stats[1].base_stat) ? 1 : (a.stats[1].base_stat > b.stats[1].base_stat) ? -1 : 0);
            sortPokemon(atkSort);
            break;
        case 'defense':
            let defSort = detailsList.sort((a, b) => (a.stats[2].base_stat < b.stats[2].base_stat) ? 1 : (a.stats[2].base_stat > b.stats[2].base_stat) ? -1 : 0);
            sortPokemon(defSort);
            break;
        case 'special-attack':
            let spAtkSort = detailsList.sort((a, b) => (a.stats[3].base_stat < b.stats[3].base_stat) ? 1 : (a.stats[3].base_stat > b.stats[3].base_stat) ? -1 : 0);
            sortPokemon(spAtkSort);
            break;
        case 'special-defense':
            let spDefSort = detailsList.sort((a, b) => (a.stats[4].base_stat < b.stats[4].base_stat) ? 1 : (a.stats[4].base_stat > b.stats[4].base_stat) ? -1 : 0);
            sortPokemon(spDefSort);
            break;
        case 'speed':
            let spSort = detailsList.sort((a, b) => (a.stats[5].base_stat < b.stats[5].base_stat) ? 1 : (a.stats[5].base_stat > b.stats[5].base_stat) ? -1 : 0);
            sortPokemon(spSort);
            break;
        default:
            displayPokemon(pokemon);
            break;
        
    }

}

function sortPokemon (detailsList) {
    reset();
    detailsList.forEach(mon => {
        

       
    
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        const hp = document.createElement("p");
        const atk = document.createElement("p");
        const def = document.createElement("p");
        const spAtk = document.createElement("p");
        const spDef = document.createElement("p");
        const spd = document.createElement("p");

        

        h3.textContent = mon.species.name;
        img.src = mon.sprites.front_default;
        img.alt = mon.species.name;
        hp.textContent = "HP: " + mon.stats[0].base_stat;
        atk.textContent = "Attack: " + mon.stats[1].base_stat;
        def.textContent = "Defense: " + mon.stats[2].base_stat;
        spAtk.textContent = "Special Attack: " + mon.stats[3].base_stat;
        spDef.textContent = "Special Defense: " + mon.stats[4].base_stat;
        spd.textContent = "Speed: " + mon.stats[5].base_stat;
        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(hp);
        article.appendChild(atk);
        article.appendChild(def);
        article.appendChild(spAtk);
        article.appendChild(spDef);
        article.appendChild(spd);
        pokemonElement.appendChild(article);
    });
}



document.querySelector('#filtered').addEventListener("change", () => {filterPokemon(pokemonList) });

getPokemon();