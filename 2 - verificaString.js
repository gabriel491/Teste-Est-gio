function contarLetrasA(texto) {
  const textoMinusculo = texto.toLowerCase();

  const ocorrencias = textoMinusculo.match(/a/g);

  if (ocorrencias === null) {
    return 'A letra "a" não foi encontrada na string.';
  } else {
    return `A letra "a" aparece ${ocorrencias.length} vezes na string.`;
  }
}

// Exemplo de uso:
const minhaString = "Olá, mundo! Estou apenas verificando essa frase.";
const resultado = contarLetrasA(minhaString);
console.log(resultado);
