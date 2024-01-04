function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  if (typeof a !== "number" || typeof b !== "number" || a < 0 || b < 0) {
    return 0;
  }
 
  if (a > b) {
    return "El primer número debe ser menor o igual al segundo número.";
  }
 
  let producto = 1;
  
  for (let i = a; i <= b; i++) {
    producto *= i;
  }
  return producto;
}



module.exports = productoEntreNúmeros;