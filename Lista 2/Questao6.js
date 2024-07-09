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
    let resultado = "";
    for (let i = this.inicio; i < this.fim; i++) {
      resultado += this.items[i] + " ";
    }
    return resultado;
  }
  isFull() {
    return this.capacidade === this.final;
  }
}

function inverte(Fila1) {
  if (Fila1.isEmpty()) {
    return;
  } else {
    let elemento = Fila1.Front();
    Fila1.dequeue();
    inverte(Fila1);
    Fila1.enqueue(elemento);
  }
}
let Fila1 = new Fila(1000000);
let indice = 0;
Fila1.enqueue(1);
Fila1.enqueue(2);
Fila1.enqueue(3);
Fila1.enqueue(4);
//console.log(Fila1.isEmpty());
inverte(Fila1);
console.log(Fila1.Front());
