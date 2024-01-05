function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0) {
    return null;
  }

  if (numeros[0] == (numeros[numeros.length - 1] - (numeros.length - 1)) ){
    return null ;
  }

  let sumaEsperada = numeros[0]; 
  let sumaReal = 0 ; 
  let primerNumero = numeros[0]   ;
  
 for ( let i = 0 ; i < numeros.length ; i ++) {
  sumaEsperada = sumaEsperada +(primerNumero + i + 1) ;
  sumaReal += numeros[i];
  
 }
  let diferencia = sumaEsperada - sumaReal ;
 
    return diferencia;

}

module.exports = encontrarNumeroFaltante;