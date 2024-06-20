document.addEventListener('DOMContentLoaded', () => {
    const pokedex = document.getElementById('pokedex');
    const searchBar = document.getElementById('searchBar');
    let allPokemon = [];

    const fetchPokemon = async () => {
        for (let i = 1; i <= 251; i++) { //Fetch the 1st 251 pokemon
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            const res = await fetch(url)
            const pokemon = await res.json();
            allPokemon.push(pokemon);
            displayPokemon(pokemon);
        }

    };

    const displayPokemon = (pokemon) => {
        const pokemonElement = document.createElement('div');
        pokemonElement.classList.add('pokemon-card');
        pokemonElement.innerHTML = `
            <img src ="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <p>#${pokemon.id.toString().padStart(3, '0')}</p>
            `;
        pokedex.appendChild(pokemonElement);
    };

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        const filterdPokemon = allPokemon.filter(pokemon => {
            
            return pokemon.name.toLowerCase().includes(searchString);
        });

        const displayFilteredPokemon = (pokemonList) => {
            pokedex.innerHTML = '';
            pokemonList.forEach(pokemon => displayPokemon(pokemon));
        };

        displayFilteredPokemon(filterdPokemon)

    }); fetchPokemon();
})


