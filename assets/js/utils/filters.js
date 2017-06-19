'use strict';

const filterByPokemon = (Objetpokemon,query) => {
  return Objetpokemon.filter((e) =>{
    if(e.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase())!=-1){
      return e;
    }
  })
}
