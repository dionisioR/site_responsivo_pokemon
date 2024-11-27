function convertPokemonToLi(pokemon) {
  return `
        <li class="pokemon">
          <span class="number">#001</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
              <li class="type">grass</li>
              <li class="type">poison</li>
            </ol>
            <img class=""
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt="${pokemon.name}"
            />
          </div>
        </li>
  `;
}

const pokemonList = document.querySelector("#pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {

  // const newList = pokemons.map(
  //   (pokemon) =>  convertPokemonToLi(pokemon)
  // )
  // const newHtml = newList.join('')
  // pokemonList.innerHTML = newHtml

  // Posso trocar o código acima por:
  pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')

});
 