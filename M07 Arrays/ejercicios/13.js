function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

   var sumaNotas = resultadosTest.reduce(function(acumulador, nota) {
    return acumulador + nota;
  }, 0);

  var promedio = sumaNotas / resultadosTest.length;

  return promedio;
}


module.exports = promedioResultadosTest;
