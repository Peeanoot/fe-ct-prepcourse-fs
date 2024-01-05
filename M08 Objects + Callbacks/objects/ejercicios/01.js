const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:

  const propiedades = propiedad.split(/\.|\["|"\]/).filter(Boolean);

  let valor = objeto;
  
  for (const prop of propiedades) {
    if (valor && Object.prototype.hasOwnProperty.call(valor, prop)) {
      valor = valor[prop];
    } else {
     
      valor = undefined;
      break;
    }
  }
  
  return valor;
};
module.exports = obtenerValorPropiedad;


