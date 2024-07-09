class Fila {
  constructor(tamanho) {
    this.items = [];
    this.inicio = tamanho;
    this.final = 0;
    this.capacidade = tamanho;
  }
  enqueueinicio(dado) {
    if (this.inicio != 0 && !this.isFull()) {
      this.items[this.inicio--] = dado;
      return;
    }
  }
  enqueuefinal(dado) {
    if (!this.isFull()) {
      this.items[this.final++] = dado;
      return;
    }
  }
  dequeueinicio() {
    if (!this.isEmpty()) {
      this.inicio++;
      return;
    }
  }
  dequeuefinal() {
    if (!this.isEmpty() && this.final > 0) {
      this.final--;
      this.inicio++;
      return;
    }
  }
  toString() {
    resultado = "";
    for (let i = this.inicio; i < this.Length(); i++) {
      resultado += this.items[i] + " ";
    }
  }
  clear() {
    this.inicio = final;
  }
  isEmpty() {
    return this.inicio === this.final;
  }
  Length() {
    return this.final - this.inicio;
  }
  isFull() {
    return this.inicio === this.fim + 1;
  }
}
let teste = new Fila(10);
teste.enqueuefinal(7);
teste.en;
console.log(teste);
