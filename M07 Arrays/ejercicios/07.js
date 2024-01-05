function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  var arrayMayusculas = array.map(function(elemento) {
    
    if (typeof elemento === 'string') {
      return elemento.toUpperCase();
    }
    
    return elemento;
  });

  
  return arrayMayusculas;
}

module.exports = convertirStringAMayusculas;
