'use strict';

const render = (clase) => {
  clase.empty();
  const wrapper = $('<div class="wrapper"></div>');
      wrapper.append(Search(_ => render(clase)));
      wrapper.append(Modal(_ => render(clase)));
  clase.append(wrapper);
}

const pokeState = {
  pokemon: null,
  selectedPokemon : null
};

$( _ => {

  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

    if (err) { return alert(err.message);}

    pokeState.pokemon = json.pokemon_entries;
  //console.log(json.pokemon_entries);


    const root = $('.root');
    render(root);
  });

});
