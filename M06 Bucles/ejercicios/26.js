function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  const clean1 = str1.toLowerCase().replace(/\s/g, '').split('').sort().join('');
  const clean2 = str2.toLowerCase().replace(/\s/g, '').split('').sort().join('');

  return clean1 === clean2 ;
}

module.exports = esAnagrama;
