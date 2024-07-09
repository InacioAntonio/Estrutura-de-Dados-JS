let vetor = [];

for (let i = 0; i < 10; i++) {
  vetor[i] = Math.floor(Math.random() * 10);
}
console.log(vetor);
let min = 99999;
let aux;
for (let i = 0; i < vetor.length; i++) {
  for (let j = i + 1; j < vetor.length; j++) {
    if (vetor[j] < min) {
      min = vetor[j];
    }
    if (min < vetor[i]) {
      aux = vetor[i];
      vetor[i] = min;
      vetor[j] = aux;
    }
  }
  min = 9999;
}
console.log("Ordenado : ");
console.log(vetor);
