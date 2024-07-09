let vetor = [];

for (let i = 0; i < 10; i++) {
  vetor[i] = Math.floor(Math.random() * 10);
}
console.log(vetor);
// Bubble Sort
//[10,9,8,7]
//let saida = [];
for (let i = 0; i < vetor.length; i++) {
  for (let j = i + 1; j < vetor.length + 1; j++) {
    if (vetor[j] < vetor[i]) {
      aux = vetor[i];
      vetor[i] = vetor[j];
      vetor[j] = aux;
      //console.log(saida);
    }
  }
}
console.log("FEIJAO");
console.log(vetor);
