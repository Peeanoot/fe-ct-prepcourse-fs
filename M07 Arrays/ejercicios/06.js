function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var arrayDuplicado = array.map(function(elemento) {
    return elemento * 2;
  });

  return arrayDuplicado;
}

module.exports = duplicarElementos;
