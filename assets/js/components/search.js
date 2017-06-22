const listaPokemon = (object,update)=>{
  //console.log(object);
    const listado = $('<section class="listado"></section>');
    const pokemons=$('<div class="pokemons"></div>');
    const pokebola=$('<div class="pokeBola col-md-2"></div>');
    const figure =$('<figure class="pokenvase"></figure>');
    const fondo =$('<div class="fondo text-center"></div>');
    const icon1=$('<a href="#modal1" class="icono pokedetalle"></a>');
    const icon2=$('<img class="icono" src="assets/icon/valentines-heart.png">');
    const icon3=$('<img class="icono" src="assets/icon/data.png">')
    const foto=$('<img class="img-responsive" src="http://serebii.net/art/th/'+object.entry_number+'.png" alt="">');
    const pokemon=$('<p class="text-center mayuscula">'+object.pokemon_species.name+'</p>');

    figure.append(foto);
    listado.append(pokemons);
    fondo.append(icon1);
    fondo.append(icon2);
    fondo.append(icon3);
    pokebola.append(figure);
    pokebola.append(fondo);
    pokemons.append(pokebola);
    pokebola.append(pokemon);

    icon1.on('click',() => {
    $('#modal1').modal();
    const clonarImg = figure.clone();
    const clonarIcon = fondo.clone();
    $(".poke-content").empty();
    $(clonarImg).appendTo(".poke-content");
    $(clonarIcon).appendTo(".poke-content");
    const clonar = pokemon.clone();
    $(".pokeName").empty();
    $(clonar).appendTo(".pokeName");

  $.get(object.pokemon_species.url,(data) => {
    console.log(data);
     let valor = data.flavor_text_entries[3].flavor_text;
     $('.pokeInfo').html(valor);

   })
});

    return listado;
}
const reRender=(lista,filtro,update)=>{
  lista.empty();
  filtro.forEach(pokemones=>{
    console.log(pokemones);
    lista.append(listaPokemon(pokemones,update));
  })};

const Search = (update) => {
  const div= $('<div class="buscar"></div>');
  const input= $('.caja');

 pokeState.pokemon.forEach((pokemones)=>{
   div.append(listaPokemon(pokemones,update));
 });

  input.on('keyup', (e) => {
    var filtro = filterByPokemon(pokeState.pokemon,input.val());
  //  console.log(filtro);
     reRender(div,filtro,update);
  });
return div;

}
