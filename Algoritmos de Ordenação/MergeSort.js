let vetor = [];

for (let i = 0; i < 10; i++) {
  vetor[i] = Math.floor(Math.random() * 10);
}

function mergesort(vetor, inicio = 0, fim = vetor.length) {
  if (inicio + 1 < fim) {
    let meio = Math.floor((fim + inicio) / 2);
    mergesort(vetor, inicio, meio);
    mergesort(vetor, meio, fim);
    merge(vetor, inicio, meio, fim);
  }
}

function merge(vetor, inicio, meio, fim) {
  let esquerda = vetor.slice(inicio, meio);
  let direita = vetor.slice(meio, fim);
  let topoesquerda = 0;
  let topodireita = 0;
  for (let i = inicio; i < fim; i++) {
    if (topoesquerda >= esquerda.length) {
      vetor[i] = direita[topodireita++];
    } else if (topodireita >= direita.length) {
      vetor[i] = esquerda[topoesquerda++];
    } else if (esquerda[topoesquerda] < direita[topodireita]) {
      vetor[i] = esquerda[topoesquerda++];
    } else {
      vetor[i] = direita[topodireita++];
    }
  }
}

mergesort(vetor);
console.log(vetor);
