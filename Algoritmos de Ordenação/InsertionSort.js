let vetor = [];
let aux;
let aux2;
for (let atual = 0; atual < 10; atual++) {
  vetor[atual] = Math.floor(Math.random() * 10);
  console.log(vetor[atual]);
  aux = vetor[atual];
}
let j;
for (let i = 1; i < vetor.length; i++) {
  aux = vetor[i];
  j = i - 1;
  while (j >= 0 && vetor[j] > aux) {
    vetor[j + 1] = vetor[j];
    j--;
  }
  vetor[j + 1] = aux;
}
console.log(vetor);
