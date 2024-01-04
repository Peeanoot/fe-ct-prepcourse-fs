function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

 const numString = num.toString();
 return numString.length === 3;
}

module.exports = tieneTresDigitos;
