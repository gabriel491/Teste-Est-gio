// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

// O RESULTADO É 77
let SOMA = 0;
let K = 1;
let index = 12;
while (K < index) {
  K += 1;
  SOMA += K;
  console.log(SOMA);
}
