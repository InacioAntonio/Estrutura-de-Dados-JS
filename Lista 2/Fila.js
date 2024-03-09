class Fila {
  constructor(tamanho) {
    this.capacidade = tamanho;
    this.items = [];
    this.inicio = 0;
    this.final = 0;
  }
  enqueue(dado) {
    if (!this.isFull()) {
      this.items[this.final++] = dado;
      return;
    }
    //throw new Error("queue OverFlow");
  }
  dequeue() {
    if (!this.isEmpty()) {
      this.inicio++;
      return;
    }
    //throw new Error(" QueueunderFlow")
  }
  clear() {
    this.final = this.inicio;
  }
  isEmpty() {
    return this.inicio === this.final;
  }
  Front() {
    if (!this.isEmpty()) {
      return this.items[this.inicio];
    }
    //throw new Error("Empty queue")
  }
  Length() {
    return this.final - this.inicio;
  }
  ToString() {
    resultado = "";
    for (let i = this.inicio; i < this.Length(); i++) {
      resultado += this.items[i] + " ";
    }
    return resultado;
  }
  isFull() {
    return this.capacidade === this.final;
  }
}
export default Fila;
