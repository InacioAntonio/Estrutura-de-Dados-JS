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

function intercala(Fila1, Fila2) {
  let tamanho1 = Fila1.Length();
  let tamanho2 = Fila2.Length();
  let Inter = new Fila(tamanho1 * tamanho2);
  while (Fila1.Length() > 0 && Fila2.Length() > 0) {
    Inter.enqueue(Fila1.Front());
    Fila1.dequeue();
    Inter.enqueue(Fila2.Front());
    Fila2.dequeue();
  }
  return Inter;
}
let F = new Fila(5);
let F2 = new Fila(5);
let resultado;
F.enqueue(1);
F2.enqueue(3);
F.enqueue(2);
F.enqueue(4);
F2.enqueue(5);
F2.enqueue(8);
resultado = intercala(F, F2);
console.log(resultado.ToString());
