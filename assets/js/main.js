function convertPokemonTypesTiLi(pokemonTypes){
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>` )
}
function convertPokemonToLi(pokemon) {
  return `
        <li class="pokemon ${pokemon.type}">
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
              ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
            </ol>
            <img class=""
              src="${pokemon.photo}"
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
 