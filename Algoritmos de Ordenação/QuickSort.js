let vetor = [];

for (let i = 0; i < 10; i++) {
  vetor[i] = Math.floor(Math.random() * 10);
}

function quicksort(vetor, esquerda, direita) {
  if (esquerda < direita) {
    let p = particao(vetor, esquerda, direita);
    quicksort(vetor, esquerda, p);
    quicksort(vetor, p + 1, direita);
  }
}

function particao(vetor, esquerda, direita) {
  let meio = esquerda + Math.floor((direita - esquerda) / 2);
  let pivot = vetor[meio];
  let i = esquerda;
  let j = direita;

  while (true) {
    while (vetor[i] < pivot) {
      i++;
    }
    while (vetor[j] > pivot) {
      j--;
    }
    if (i >= j) {
      return j;
    }
    // Trocar elementos
    let aux = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = aux;
    i++;
    j--;
  }
}

quicksort(vetor, 0, vetor.length - 1);

console.log(vetor);
