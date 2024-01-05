function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  var indiceMayor = 0;
  var valorMayor = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > valorMayor) {
      valorMayor = array[i];
      indiceMayor = i;
    }
  }
  return indiceMayor;
}

module.exports = encontrarIndiceMayor;
