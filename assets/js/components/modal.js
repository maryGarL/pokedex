'use strict';

const Modal =(station) => {
  const rowModal = $('<div class="row"></div>');
  const modal = $('<div id="modal1" class=" modal modal-fixed-footer "></div>');
  const content = $('<div class="modal-content col m12"></div>');
  const imageModal = $('<div class="col m5"></div>');
  const Img = $('<div class="col m8 offset-m3  poke-content space-between"></div>');
  const infoModal =$('<div class="col m6"></div>');
  const pokeName = $('<div class="col m12 pokeName"></div>');
  const information = $('<div class="col m12 pokeInfo"><p></p></div>');
  const descripcion = $('<div class="col m12 "></div>');
  const x = $('<a href="#!" class="col m1 modal-action modal-close "><img class="poke-icon" src="assets/icon/cross-out.png" alt=""></a>');


  rowModal.append(modal);
  modal.append(content);
  content.append(imageModal);
  imageModal.append(Img);
  content.append(infoModal);
  infoModal.append(pokeName);
  infoModal.append(information);
  infoModal.append(descripcion);
  content.append(x);



  return rowModal;
}
