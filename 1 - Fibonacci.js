function pertenceFibonacci(num) {
  if (num === 0 || num === 1) {
    return true;
  }

  let a = 0;
  let b = 1;

  while (b <= num) {
    let c = a + b;
    if (c === num) {
      return true;
    }
    a = b;
    b = c;
  }

  return false;
}

// Exemplo de uso:
const numero = 13;
if (pertenceFibonacci(numero)) {
  console.log(numero + " pertence à sequência de Fibonacci.");
} else {
  console.log(numero + " não pertence à sequência de Fibonacci.");
}
