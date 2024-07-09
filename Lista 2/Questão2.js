class PilhaTrue {
  constructor(tam = 5) {
    this.items = [];
    this.tam = tam;
    this.ultimo = 0;
  }

  push(elemento) {
    if (!this.isFull()) {
      this.items[this.ultimo++] = elemento;
      return;
    }
    //throw new Error("Stackoverflow");
  }
  pop() {
    if (!this.isEmpty()) {
      this.ultimo--;
      return;
    }
    //throw new Error("Stackunderflow");
  }
  size() {
    return this.ultimo;
  }
  clear() {
    this.ultimo = 0;
  }
  isFull() {
    return this.ultimo === this.tam;
  }
  isEmpty() {
    return this.size() === 0;
  }
  toString() {
    let aux = "";
    for (let i = 0; i < 5; i++) {
      this.items[i] += aux;
    }
  }
  top() {
    if (!this.isEmpty()) {
      return this.items[this.ultimo - 1];
    }
    //throw new Error("Empty stack");
  }
}

class FilaP {
  constructor(tamanho) {
    this.capacidade = tamanho;
    this.Inicio = 0;
    this.Final = 0;
    this.Pilha1 = new PilhaTrue(100000000);
    this.Pilha2 = new PilhaTrue(100000000);
  }
  emqueue(dado) {
    if (!this.isFull()) {
      this.Pilha1.push(dado);
      this.Final++;
      return;
    }
    //throw new Error("Queue overflow")
  }
  isFull() {
    return this.capacidade === this.Final;
  }
  isEmpty() {
    return this.Inicio === this.Final;
  }
  toString() {
    let resultado = "";
    let backup = [];
    let contador = 0;
    while (this.length() > 0) {
      resultado += this.front() + " ";
      backup[contador] = this.front();
      //this.Pilha2.push(this.front());
      this.dequeue();
      //console.log(this.front());
      contador++;
    }
    //console.log(backup);
    for (let i = 0; i < contador; i++) {
      this.Pilha1.push(backup[i]);
    }
    return resultado;
  }
  dequeue() {
    if (!this.isEmpty()) {
      while (this.Pilha1.size() > 1) {
        //console.log(this.Pilha1.top());
        this.Pilha2.push(this.Pilha1.top());
        this.Pilha1.pop();
      }
      this.Pilha1.pop();
      while (!this.Pilha2.isEmpty()) {
        //console.log(this.Pilha2.top());
        this.Pilha1.push(this.Pilha2.top());
        this.Pilha2.pop();
      }
      this.Inicio++;
      return;
    }
    //throw new Error("QueueUnderflow");
  }
  front() {
    if (!this.isEmpty()) {
      let primeiro;

      while (this.Pilha1.size() > 1) {
        //console.log(this.Pilha1.top());
        this.Pilha2.push(this.Pilha1.top());
        this.Pilha1.pop();
      }
      primeiro = this.Pilha1.top();
      return primeiro;
    }
    //throw new Error("Empty queue");
  }
  clear() {
    this.Final = this.Inicio;
    this.Pilha1.clear();
    this.Pilha2.clear();
  }
  length() {
    return this.Final - this.Inicio;
  }
}

let f = new FilaP(5);
f.emqueue(103);
f.emqueue(30);
f.emqueue(20);
f.dequeue();
f.emqueue("A");
console.log(f.toString());
