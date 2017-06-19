'use strict';

const Modal =(update) => {
  const row = $('<div class="row"></div>');
  const modal = $('<div id="modal1" class="modal modal-fixed-footer"></div>');
  const content = $('<div class="modal-content col m12"></div>');
  const Img = $('<div class="col m5"></div>');
  const Img = $('<figure class="col m8 offset-m3  poke-content space-between"></figure>');
  const Info =$('<div class="col m6"></div>');
  const pokeName = $('<div class="col m12 pokeName"></div>');
  const information = $('<div class="col m12 pokeInfo"><p></p></div>');
  const description = $('<div class="col m12 "></div>');
  const cerrar = $('<a href="#!" class="col m1 modal-action modal-close "><img class="poke-icon" src="assets/icon/cross-out.png" alt=""></a>');


  row.append(modal);
  modal.append(content);
  content.append(modalImg);
  Img.append(Img);
  content.append(modalInfo);
  Info.append(pokeName);
  Info.append(information);
  Info.append(description);
  content.append(cerrar);



  return row;
}
