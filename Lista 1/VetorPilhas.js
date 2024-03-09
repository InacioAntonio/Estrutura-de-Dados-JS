class VetorPilhas {
  constructor(tamanho) {
    this.tamanho = tamanho;
    this.pilhas = [this.tamanho];
    this.ultimoA = 0;
    this.ultimoB = this.ultimoA + 1;
  }
  ÉvaziaA() {
    return this.ultimoA === 0;
  }
  ÉvaziaB() {
    return this.ultimoB === 1;
  }
  empilharA(elemento) {
    if (this.ultimoA < this.ultimoB) {
      this.pilhas[this.ultimoA++] = elemento;
      return;
    }
    return console.log("Pilha A cheia");
  }
  empilharB(elemento) {
    if (this.ultimoB < this.tamanho) {
      this.pilhas[this.ultimoB++] = elemento;
      return;
    }
    return console.log("Pilha B cheia");
  }
  desempilharA() {
    if (!this.ÉvaziaA()) {
      this.ultimoA--;
      return;
    }
    return console.log("Pilha A vazia");
  }
  desempilharB() {
    if (!this.ÉvaziaB()) {
      this.ultimoB--;
      return;
    }
    return console.log("Pilha B vazia");
  }
}

export default VetorPilhas;
