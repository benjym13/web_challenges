function newImg(element) {
  element.setAttribute('src',"img/productos/producto_1Bjpg" );
}
function oldImg(element) {
  element.setAttribute('src',"img/productos/producto_1Ajpg" );
}

const ELEMENT = document.querySelectorAll('.select');
for(let i = 0; i < ELEMENT.length; i++) {
  newImg(ELEMENT[i]);
  oldImg (ELEMENT[i]) ;
}

