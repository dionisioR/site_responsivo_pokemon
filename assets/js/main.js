const pokemonList = document.querySelector("#pokemonList");
const loadMoreButton = document.querySelector("#loadMoreButton");

const maxRecords = 11
let offset = 0;
let limit = 10;

function convertPokemonTypesTiLi(pokemonTypes) {
  return pokemonTypes.map(
    (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`
  );
}

function convertPokemonToLi(pokemon) {
  return `
        <li class="pokemon ${pokemon.type}">
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
              ${pokemon.types
                .map((type) => `<li class="type ${type}">${type}</li>`)
                .join("")}
            </ol>
            <img class=""
              src="${pokemon.photo}"
              alt="${pokemon.name}"
            />
          </div>
        </li>
  `;
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    // const newList = pokemons.map(
    //   (pokemon) =>  convertPokemonToLi(pokemon)
    // )
    // const newHtml = newList.join('')
    // pokemonList.innerHTML = newHtml

    // Posso trocar o código acima por:
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  loadPokemonItens(offset, limit);
  // loadPokemonItens(offset + limit, limit + 10);
});